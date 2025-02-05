'use client';

let toastFn = null;

export const setToastFunction = (fn) => {
  toastFn = fn;
};

export const showToast = (message, type) => {
  if (toastFn) {
    toastFn(message, type);
  }
};
