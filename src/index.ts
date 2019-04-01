import { noHeiseiInLiteral } from "./no-heisei-in-literal";

const allRules = {
  "no-heisei-in-literal": noHeiseiInLiteral
};

export default {
  rules: allRules,
  configs: {
    recommended: {
      plugins: ["new-gengo"],
      rules: {
        "new-gengo/no-heisei-in-literal": "error"
      }
    }
  }
};
