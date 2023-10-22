import {
  assert,
  assertFalse,
} from "https://deno.land/std@0.204.0/assert/mod.ts";

import {
  areaNumberIsValid,
  areaWithTitleIsValid,
  categoryNumberIsValid,
} from "./mod.ts";

Deno.test("areaNumberIsValid", () => {
  assert(areaNumberIsValid("00-09"));
  assert(areaNumberIsValid("90-99"));
  assertFalse(areaNumberIsValid("00-08"));
  assertFalse(areaNumberIsValid("00-19"));
  assertFalse(areaNumberIsValid("01-09"));
  assertFalse(areaNumberIsValid("shoes"));
  assertFalse(areaNumberIsValid(" 00-09"));
  assertFalse(areaNumberIsValid("00-09 "));
  assertFalse(areaNumberIsValid("0009"));
  assertFalse(areaNumberIsValid("00.09"));
});

Deno.test("areaWithTitleIsValid", () => {
  assert(areaWithTitleIsValid("00-09 Area zero zero to zero niner"));
  assertFalse(areaWithTitleIsValid("90-99"));
  assertFalse(areaWithTitleIsValid("00-08 title"));
  assertFalse(areaWithTitleIsValid("00-19 title"));
  assertFalse(areaWithTitleIsValid("01-09 title"));
  assertFalse(areaWithTitleIsValid("shoes title"));
  assertFalse(areaWithTitleIsValid(" 00-09 title"));
  assertFalse(areaWithTitleIsValid("0009 title"));
  assertFalse(areaWithTitleIsValid("00.09 title"));
});
