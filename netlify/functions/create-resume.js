const USERESUME_CREATE_URL = "https://useresume.ai/api/v3/resume/create";

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}

function cleanString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function getRuntimeInfo() {
  return {
    deployContext: cleanString(process.env.CONTEXT),
    siteName: cleanString(process.env.SITE_NAME),
    nodeVersion: process.version,
    hasProcessEnvKey: Boolean(cleanString(process.env.USERESUME_API_KEY)),
    hasNetlifyEnvApi: Boolean(globalThis.Netlify?.env?.get),
  };
}

function getEnvValue(key) {
  const processValue = cleanString(process.env[key]);
  if (processValue) return processValue;

  try {
    const netlifyValue = cleanString(globalThis.Netlify?.env?.get?.(key));
    if (netlifyValue) return netlifyValue;
  } catch (error) {
    return "";
  }

  return "";
}

function mapProficiency(score, fallback) {
  if (fallback) return fallback;
  const value = Number(score || 0);
  if (value >= 85) return "Expert";
  if (value >= 65) return "Advanced";
  if (value >= 35) return "Intermediate";
  return "Beginner";
}

function normalizeResumeContent(payload) {
  const profile = payload.profile || {};
  const progress = payload.progress || {};
  const skills = Array.isArray(progress.skills) ? progress.skills : [];

  const content = {
    name: cleanString(profile.name),
    role: cleanString(profile.role),
    email: cleanString(profile.email),
    phone: cleanString(profile.phone),
    address: cleanString(profile.address),
    summary: cleanString(profile.summary),
    employment: [],
    skills: skills
      .map((skill) => ({
        name: cleanString(skill.name),
        proficiency: mapProficiency(skill.proficiency, cleanString(skill.resumeProficiency)),
        display_proficiency: true,
      }))
      .filter((skill) => skill.name),
  };

  Object.keys(content).forEach((key) => {
    if (content[key] === "") delete content[key];
  });

  return content;
}

function validateContent(content) {
  const missing = [];
  if (!content.name) missing.push("name");
  if (!content.email) missing.push("email");
  if (!content.role) missing.push("role");
  if (!content.skills || !content.skills.length) missing.push("skills");
  return missing;
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return json(204, {});
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed. Use POST." });
  }

  const apiKey = getEnvValue("USERESUME_API_KEY");
  if (!apiKey) {
    return json(500, {
      error:
        "USERESUME_API_KEY belum tersedia di runtime Netlify Function. Pastikan variable diset untuk scope Functions dan deploy ulang site.",
      runtime: getRuntimeInfo(),
    });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (error) {
    return json(400, { error: "Request body harus berupa JSON valid." });
  }

  const content = normalizeResumeContent(payload);
  const missing = validateContent(content);
  if (missing.length) {
    return json(400, {
      error: `Data CV belum lengkap: ${missing.join(", ")}.`,
    });
  }

  const resumePayload = {
    content,
    style: {
      template: "default",
      template_color: "blue",
      font: "inter",
      page_padding: 1.54,
      page_format: "a4",
      date_format: "LLL yyyy",
      background_color: "white",
      profile_picture_radius: "rounded-full",
    },
  };

  try {
    const response = await fetch(USERESUME_CREATE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resumePayload),
    });

    const responseText = await response.text();
    let responseBody;
    try {
      responseBody = responseText ? JSON.parse(responseText) : {};
    } catch (error) {
      responseBody = { raw: responseText };
    }

    if (!response.ok) {
      return json(response.status, {
        error: responseBody.error || responseBody.message || "Useresume gagal membuat CV.",
        details: responseBody,
      });
    }

    return json(200, responseBody);
  } catch (error) {
    return json(502, {
      error: "Tidak bisa menghubungi Useresume saat ini.",
      details: error.message,
    });
  }
};
