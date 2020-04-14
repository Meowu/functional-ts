import { sub1 } from './sub1';

export const pick = <T extends any>(index: number, list: T[]): T => {
  if (sub1(index) === 0) {
    return list[0];
  }
  return pick(sub1(index), list.slice(1));
}