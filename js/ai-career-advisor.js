let currentStep = 1;

function updateProgress(step) {
  const progressBar = document.getElementById('progress-bar');
  const step1Text = document.getElementById('step-text-1');
  const step2Text = document.getElementById('step-text-2');
  const step3Text = document.getElementById('step-text-3');

  if (step === 1) {
    progressBar.style.width = '33.33%';
    step1Text.className = 'text-brand-500';
    step2Text.className = 'text-slate-400';
    step3Text.className = 'text-slate-400';
  } else if (step === 2) {
    progressBar.style.width = '66.66%';
    step1Text.className = 'text-slate-400';
    step2Text.className = 'text-brand-500';
    step3Text.className = 'text-slate-400';
  } else if (step === 3) {
    progressBar.style.width = '100%';
    step1Text.className = 'text-slate-400';
    step2Text.className = 'text-slate-400';
    step3Text.className = 'text-brand-500';
  }
}

function showStep(step) {
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const step3 = document.getElementById('step-3');

  [step1, step2, step3].forEach((el, index) => {
    const s = index + 1;
    if (s === step) {
      el.classList.remove('translate-x-12', '-translate-x-12', 'opacity-0', 'pointer-events-none');
      el.classList.add('translate-x-0', 'opacity-100');
    } else if (s < step) {
      el.classList.remove('translate-x-0', 'translate-x-12', 'opacity-100');
      el.classList.add('-translate-x-12', 'opacity-0', 'pointer-events-none');
    } else {
      el.classList.remove('translate-x-0', '-translate-x-12', 'opacity-100');
      el.classList.add('translate-x-12', 'opacity-0', 'pointer-events-none');
    }
  });

  updateProgress(step);
}

function nextStep(step) {
  if (step === 2) {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checked.length === 0) {
      alert('Pilih setidaknya satu bidang minat terlebih dahulu!');
      return;
    }
  }
  currentStep = step;
  showStep(currentStep);
}

function prevStep(step) {
  currentStep = step;
  showStep(currentStep);
}

function generateResult() {
  const loading = document.getElementById('loading-state');
  loading.classList.remove('opacity-0', 'pointer-events-none');
  loading.classList.add('opacity-100');

  const interests = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(el => el.value);
  const titleEl = document.getElementById('result-title');
  const descEl = document.getElementById('result-desc');
  const iconEl = document.getElementById('result-icon');

  setTimeout(() => {
    if (interests.includes('Desain') && interests.includes('Coding')) {
      iconEl.className = 'fa-solid fa-code-branch';
      titleEl.textContent = 'Frontend / UI Engineer';
      descEl.textContent = 'Kamu punya kombinasi hebat antara logika dan visual. Peran ini memungkinkanmu menulis kode untuk menciptakan antarmuka interaktif yang memukau.';
    } else if (interests.includes('Desain') && interests.includes('Bisnis')) {
      iconEl.className = 'fa-solid fa-compass-drafting';
      titleEl.textContent = 'Product Designer (UX)';
      descEl.textContent = 'Empati visualmu digabung dengan pemahaman bisnis akan sangat kuat jika kamu mendesain alur produk yang disukai pengguna dan menguntungkan perusahaan.';
    } else if (interests.includes('Data')) {
      iconEl.className = 'fa-solid fa-database';
      titleEl.textContent = 'Data Analyst';
      descEl.textContent = 'Ketertarikanmu pada analisis sangat pas. Kamu bisa menjadi orang yang memberikan insight berharga dari lautan data untuk keputusan bisnis.';
    } else if (interests.includes('Desain')) {
      iconEl.className = 'fa-solid fa-wand-magic-sparkles';
      titleEl.textContent = 'UI/UX Designer';
      descEl.textContent = 'Fokusmu pada visual dan pengalaman pengguna membuatmu sangat cocok menjadi perancang antarmuka utama untuk aplikasi atau website masa depan.';
    } else if (interests.includes('Bisnis')) {
      iconEl.className = 'fa-solid fa-list-check';
      titleEl.textContent = 'Product Manager';
      descEl.textContent = 'Kamu punya visi yang luas. Sebagai PM, kamu akan memimpin tim desainer dan developer untuk menciptakan produk digital yang sukses di pasaran.';
    } else if (interests.includes('Coding')) {
      iconEl.className = 'fa-solid fa-server';
      titleEl.textContent = 'Backend Developer';
      descEl.textContent = 'Logika kuatmu akan bersinar di balik layar. Kamu akan membangun arsitektur sistem, database, dan API yang memastikan semuanya berjalan mulus.';
    } else {
      iconEl.className = 'fa-solid fa-bullhorn';
      titleEl.textContent = 'Digital Marketer';
      descEl.textContent = 'Kamu fleksibel dan adaptif. Dunia digital marketing butuh kombinasi kreativitas dan kemampuan analisis yang pas dengan gaya eksplorasimu.';
    }

    loading.classList.remove('opacity-100');
    loading.classList.add('opacity-0', 'pointer-events-none');
    nextStep(3);
  }, 2000);
}

function resetForm() {
  document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
  document.querySelector('input[value="Pemula"]').checked = true;
  currentStep = 1;
  showStep(currentStep);
}
