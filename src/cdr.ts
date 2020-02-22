import { cons } from './cons';

export const cdr = (fn: ReturnType<typeof cons>) => fn((a: any, ...b: any) => b);