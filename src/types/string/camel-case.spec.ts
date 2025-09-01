import {
  Expect,
  ToEqual,
} from "typect"

import { CamelCase } from "./camel-case"

Expect<CamelCase<"user-name">, ToEqual<"userName">>
