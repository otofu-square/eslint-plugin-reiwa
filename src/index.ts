import { noHeiseiInLiteral } from "./no-heisei-in-literal";
import { noHeiseiInVariableName } from "./no-heisei-in-variable-name";

const allRules = {
  "no-heisei-in-literal": noHeiseiInLiteral,
  "no-heisei-in-variable-name": noHeiseiInVariableName
};

export default {
  rules: allRules,
  configs: {
    recommended: {
      plugins: ["reiwa"],
      rules: {
        "reiwa/no-heisei-in-literal": "error",
        "reiwa/no-heisei-in-variable-name": "error"
      }
    }
  }
};
