import {
  Expect,
  ToEqual,
} from "typect"

import {
  CamelCase,
  CamelCaseKeys,
} from "./camel-case"

Expect<CamelCase<"user-name">, ToEqual<"userName">>

Expect<
  CamelCaseKeys<{
    "user-id": number
    "user-name": string
    "email-address": string
    "is-active": boolean
    "created-at": string
    "updated-at": string
    "profile-image": string | null
    "user-roles": string[]
    "account-settings": {
      "notification-enabled": boolean
      "theme-mode": "light" | "dark"
      "language-code": string
    }
    "last-login": string | null
    "total-orders": number
    "order-history": Array<{
      "order-id": string
      "order-date": string
      "total-amount": number
      "payment-status": "pending" | "completed" | "failed"
    }>
  }>,
  ToEqual<{
    userId: number
    userName: string
    emailAddress: string
    isActive: boolean
    createdAt: string
    updatedAt: string
    profileImage: string | null
    userRoles: string[]
    accountSettings: {
      notificationEnabled: boolean
      themeMode: "light" | "dark"
      languageCode: string
    }
    lastLogin: string | null
    totalOrders: number
    orderHistory: Array<{
      orderId: string
      orderDate: string
      totalAmount: number
      paymentStatus: "pending" | "completed" | "failed"
    }>
  }>
>
