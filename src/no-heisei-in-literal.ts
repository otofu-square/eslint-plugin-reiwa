import { Rule } from "eslint";

export const noHeiseiInLiteral: Rule.RuleModule = {
  meta: {
    docs: {
      category: "Lint",
      recommended: true
    },
    schema: []
  },

  create: context => ({
    Literal: node => {
      if (node.type !== "Literal" || typeof node.value !== "string") return;
      if (node.value.match(/平成|heisei/i)) {
        context.report({
          node,
          message:
            "Do not use 'heisei' or '平成' in string literal, use 'reiwa' or '令和'"
        });
      }
    }
  })
};
