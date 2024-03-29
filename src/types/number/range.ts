
/**
 * 주어진 숫자 `N`에 대응하는 0부터 `N-1`까지의 숫자들로 구성된 유니온 타입을 생성
 * 
 * @template N - 유니온 타입을 생성할 숫자 범위의 상한값. 반드시 0 이상의 숫자 타입이어야 합니다.
 * @template A - 재귀 과정에서 사용되는 누적 배열. 사용시 설정할 필요가 없습니다.
 * 
 * @example
 * // `NumberToUnion<3>`의 결과는 `0 | 1 | 2` 유형
 * type Code = NumberToUnion<3>;
 *
 */
export type NumberToUnion<N extends number, A extends number[] = []> =
  N extends A["length"] ? A[number] : NumberToUnion<N, [...A, A["length"]]>;


/**
 * 주어진 숫자 `S`부터 `E`까지의 숫자들로 구성된 유니온 타입을 생성
 * 
 * @template S - 유니온 타입을 생성할 숫자 범위의 시작값. 반드시 0 이상의 숫자 타입이어야 합니다.
 * @template E - 유니온 타입을 생성할 숫자 범위의 마지막값. 반드시 0 이상의 숫자 타입이어야 합니다.
 * 
 * @example
 * // `NumberRange<0, 5>`의 결과는 `0 | 1 | 2 | 3 | 4 | 5`
 */
export type NumberRange<S extends number, E extends number> =
  Exclude<NumberToUnion<E>, NumberToUnion<S>> | E;
