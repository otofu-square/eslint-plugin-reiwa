import { noHeiseiInLiteral } from "../no-heisei-in-literal";
import { RuleTester } from "eslint";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser"
});

const message = "Do not use heisei or 平成 in string literal, use new era.";

ruleTester.run("no-heisei", noHeiseiInLiteral, {
  valid: [],
  invalid: [
    {
      code: "'heisei'",
      errors: [{ message }]
    },
    {
      code: "'平成'",
      errors: [{ message }]
    },
    {
      code:
        "'The end of Heisei is expected to be during the GW of 2019 this year.'",
      errors: [{ message }]
    },
    {
      code: "'平成の終わりは今年2019年のＧＷ中になる見込みです。'",
      errors: [{ message }]
    }
  ]
});
