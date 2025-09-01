/**
 * kebab-case 문자열을 camelCase로 변환하는 타입
 * 
 * @template T - 변환할 kebab-case 문자열. 반드시 문자열 타입이어야 합니다.
 * 
 * @example
 * // `CamelCase<"user-name">`의 결과는 `"userName"` 타입
 * type Result1 = CamelCase<"user-name"> // "userName"
 */
export type CamelCase<T extends string> = T extends `${infer F}-${infer R}`
  ? `${F}${CamelCase<Capitalize<R>>}`
  : T
