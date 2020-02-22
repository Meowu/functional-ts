import { cons } from './cons';

export const car = (fn: ReturnType<typeof cons>) => fn((a: any, ..._) => a);