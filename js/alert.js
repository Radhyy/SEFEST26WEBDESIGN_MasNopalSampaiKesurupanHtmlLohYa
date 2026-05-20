const swalIcons = {
  warning: `<svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path>
  </svg>`,
  error: `<svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
  </svg>`,
  success: `<svg class="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75 9 17.25 19.5 6.75"></path>
  </svg>`,
  info: `<svg class="h-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25h1.5v6h-1.5v-6zM12 7.5h.008v.008H12V7.5z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
  </svg>`,
  question: `<svg class="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.178-.43.326-.67.442-.745.361-1.451 1.02-1.451 1.848v.479M12 17.25h.008v.008H12v-.008z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
  </svg>`,
};

const swalBaseClasses = {
  popup:
    "!relative !transform !overflow-hidden !rounded-lg !bg-white !text-left !shadow-xl !transition-all sm:!my-8 sm:!w-full sm:!max-w-lg !p-0 !grid-cols-none",
  title:
    "!p-0 !pt-3 !text-center sm:!text-left !text-xl !font-semibold !leading-6 !text-gray-900 !ml-0 !pl-4 !pr-4 sm:!pr-6 sm:!pl-0 sm:!pt-6 sm:!ml-4 !col-start-1 sm:!col-start-2 !col-end-3",
  htmlContainer:
    "!mt-0 !pt-0 sm:!mt-0 !m-0 !text-center sm:!text-left !text-base !text-gray-500 !pl-4 sm:!pl-0 !pr-4 !pb-4 sm:!pr-6 sm:!pb-4 sm:!ml-4 !col-start-1 sm:!col-start-2 !col-end-3",
  actions:
    "!bg-gray-50 !px-4 !py-3 sm:!flex sm:!flex-row-reverse sm:!px-6 !w-full !justify-start !mt-0 !col-start-1 !col-end-3",
  cancelButton:
    "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
};

const swalThemes = {
  warning: {
    icon: "!m-0 !mx-auto !flex !h-12 !w-12 !flex-shrink-0 !items-center !justify-center !rounded-full !border-0 !bg-red-100 sm:!h-10 sm:!w-10 !mt-5 sm:!mt-6 sm:!ml-6 !col-start-1 !col-end-3 sm:!col-end-2",
    confirmButton:
      "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
  },
  error: {
    icon: "!m-0 !mx-auto !flex !h-12 !w-12 !flex-shrink-0 !items-center !justify-center !rounded-full !border-0 !bg-red-100 sm:!h-10 sm:!w-10 !mt-5 sm:!mt-6 sm:!ml-6 !col-start-1 !col-end-3 sm:!col-end-2",
    confirmButton:
      "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
  },
  success: {
    icon: "!m-0 !mx-auto !flex !h-12 !w-12 !flex-shrink-0 !items-center !justify-center !rounded-full !border-0 !bg-emerald-100 sm:!h-10 sm:!w-10 !mt-5 sm:!mt-6 sm:!ml-6 !col-start-1 !col-end-3 sm:!col-end-2",
    confirmButton:
      "inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 sm:ml-3 sm:w-auto",
  },
  info: {
    icon: "!m-0 !mx-auto !flex !h-12 !w-12 !flex-shrink-0 !items-center !justify-center !rounded-full !border-0 !bg-sky-100 sm:!h-10 sm:!w-10 !mt-5 sm:!mt-6 sm:!ml-6 !col-start-1 !col-end-3 sm:!col-end-2",
    confirmButton:
      "inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 sm:ml-3 sm:w-auto",
  },
  question: {
    icon: "!m-0 !mx-auto !flex !h-12 !w-12 !flex-shrink-0 !items-center !justify-center !rounded-full !border-0 !bg-brand-100 sm:!h-10 sm:!w-10 !mt-5 sm:!mt-6 sm:!ml-6 !col-start-1 !col-end-3 sm:!col-end-2",
    confirmButton:
      "inline-flex w-full justify-center rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 sm:ml-3 sm:w-auto",
  },
};

const defaultSwalOptions = {
  showCancelButton: true,
  buttonsStyling: false,
  icon: "warning",
};

function mergeCustomClass(...classes) {
  return classes.reduce((merged, current) => {
    if (!current) return merged;
    return { ...merged, ...current };
  }, {});
}

function mergeOptions(baseOptions, nextOptions) {
  const base = baseOptions || {};
  const next = nextOptions || {};
  return {
    ...base,
    ...next,
    customClass: mergeCustomClass(base.customClass, next.customClass),
  };
}

function normalizeFireOptions(args) {
  if (!args.length) return {};
  if (typeof args[0] === "object" && args[0] !== null) return args[0];
  return {
    title: args[0],
    html: args[1],
    icon: args[2],
  };
}

function getThemedOptions(defaults, fireOptions) {
  const merged = mergeOptions(defaults, fireOptions);
  const icon = merged.icon || "warning";
  const theme = swalThemes[icon] || swalThemes.warning;
  const isToast = merged.toast === true;
  const hasCustomIconHtml = Object.prototype.hasOwnProperty.call(merged, "iconHtml");

  const themedOptions = {
    ...merged,
    icon,
    customClass: isToast
      ? merged.customClass
      : mergeCustomClass(swalBaseClasses, theme, merged.customClass),
  };

  if (isToast) {
    themedOptions.showCancelButton = false;
  } else if (!hasCustomIconHtml) {
    themedOptions.iconHtml = swalIcons[icon] || swalIcons.warning;
  }

  return themedOptions;
}

if (window.Swal) {
  const baseSwal = window.Swal;

  function createWorkSimSwal(defaults = defaultSwalOptions) {
    const themedSwal = Object.create(baseSwal);
    Object.assign(themedSwal, baseSwal);

    themedSwal.fire = (...args) => {
      const fireOptions = normalizeFireOptions(args);
      return baseSwal.fire(getThemedOptions(defaults, fireOptions));
    };

    themedSwal.mixin = (mixinOptions = {}) => {
      return createWorkSimSwal(mergeOptions(defaults, mixinOptions));
    };

    return themedSwal;
  }

  window.Swal = createWorkSimSwal();
}
