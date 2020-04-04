
// TODO: fix typing.
export const multiremberCo = <K extends T, T extends any[]>(a: any, lat: T, col: (ls1: K, ls2: K) => any): ReturnType<typeof col> => {
  if (lat.length === 0) {
    return col([], []);
  }
  if (Object.is(a, lat[0])) {
    return multiremberCo(a, lat.slice(1), 
      (ls: K, seen: K) => {
        return col(ls, [lat[0], ...seen]);
      }
    )
  }
  return multiremberCo(a, lat.slice(1), (ls: K, seen: K) => col([lat[0], ...ls], seen));
}