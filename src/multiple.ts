import { sub1, add } from '.';

export const multiple = (a: number, b: number) => b === 0 ? 0 : add(a, multiple(a, sub1(b)));