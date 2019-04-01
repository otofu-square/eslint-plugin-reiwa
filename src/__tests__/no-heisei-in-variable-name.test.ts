import { noHeiseiInVariableName } from "../no-heisei-in-variable-name";
import { RuleTester } from "eslint";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser"
});

const message =
  "Do not use 'heisei' or '平成' in variable name, use 'reiwa' or '令和'";

ruleTester.run("no-heisei", noHeiseiInVariableName, {
  valid: [],
  invalid: [
    {
      code: "const theBeginningOfHeisei = 1989",
      errors: [{ message }]
    },
    {
      code: "let heisei;",
      errors: [{ message }]
    },
    {
      code: "var 平成;",
      errors: [{ message }]
    }
  ]
});
