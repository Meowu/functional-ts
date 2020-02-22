
export const cons = (x: any, ...rest: any[]) => (m: (a: any, ...b: any[]) => any) => m(x, ...rest);