import { add1, sub1 } from '.';

// a + b 相当于执行 n 次 a+1，n 为 b 每次减 1 一直减到 0 的次数。
export const add = (a: number, b: number) => b === 0 ? a : add1(add(a, sub1(b)));