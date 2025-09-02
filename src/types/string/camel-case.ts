/**
 * kebab-case 문자열을 camelCase로 변환하는 타입
 * 
 * @template T - 변환할 kebab-case 문자열. 반드시 문자열 타입이어야 합니다.
 * 
 * @example
 * type Result1 = CamelCase<"user-name">
 * // 결과: "userName"
 */
export type CamelCase<T extends string> = T extends `${infer F}-${infer R}`
  ? `${F}${CamelCase<Capitalize<R>>}`
  : T

/**
 * 객체의 kebab-case Key를 camelCase로 변환하는 타입
 * 
 * @template T - 변환할 객체. 반드시 객체 타입이어야 합니다.
 * 
 * @example
 * type ApiResponse = CamelCaseKeys<{
 *   "user-info": {
 *     "first-name": string
 *     "last-name": string
 *   }
 *   "order-history": Array<{
 *     "order-id": string
 *     "created-at": string
 *   }>
 * }>
 * // 결과: {
 * //   userInfo: {
 * //     firstName: string
 * //     lastName: string
 * //   }
 * //   orderHistory: Array<{
 * //     orderId: string
 * //     createdAt: string
 * //   }>
 * // }
 */
export type CamelCaseKeys<T> = T extends Record<PropertyKey, any>
  ? T extends Date | RegExp | ((...args: any[]) => any)
    ? T
    : T extends Array<infer U>
      ? Array<CamelCaseKeys<U>>
      : {
          [K in keyof T as K extends string ? CamelCase<K> : K]: CamelCaseKeys<T[K]>
        }
  : T
