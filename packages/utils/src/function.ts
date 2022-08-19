export const runIfFN = (fn: any) => (typeof fn === 'function' ? fn(fn) : fn);
