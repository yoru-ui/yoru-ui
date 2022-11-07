export const runIfFN = (fn: any, ...args: any) => (typeof fn === 'function' ? fn(...args) : fn);
