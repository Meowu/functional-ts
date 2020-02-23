import { sub1 } from '.';

// 暂时不考虑负数，a - b 相当于 a 减去 1 的次数为 b 减去 1 一直减到 0 的次数。
export const sub = (a: number, b: number) => b === 0 ? a : sub1(sub(a, sub1(b)));