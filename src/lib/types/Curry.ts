type Curry1<A, R> = (a: A) => R;

interface Curry2<A, B, R> {
  (a: A): Curry1<B, R>;

  (a: A, b: B): R;
}

interface Curry3<A, B, C, R> {
  (a: A): Curry2<B, C, R>;

  (a: A, b: B): Curry1<C, R>;

  (a: A, b: B, c: C): R;
}

interface Curry4<A, B, C, D, R> {
  (a: A): Curry3<B, C, D, R>;

  (a: A, b: B): Curry2<C, D, R>;

  (a: A, b: B, c: C): Curry1<D, R>;

  (a: A, b: B, c: C, d: D): R;
}

export type VariadicCurry<T, R> =
  T extends [any, any, any, any] ? Curry4<T[0], T[1], T[2], T[3], R> :
    T extends [any, any, any] ? Curry3<T[0], T[1], T[2], R> :
      T extends [any, any] ? Curry2<T[0], T[1], R> :
        T extends [any] ? Curry1<T[0], R> :
          unknown

