import { Rule } from "eslint";

export const noHeiseiInVariableName: Rule.RuleModule = {
  meta: {
    docs: {
      description: "",
      category: "Possible Errors",
      recommended: true,
      url: ""
    },
    schema: []
  },

  create: context => ({
    VariableDeclarator: node => {
      if (node.type !== "VariableDeclarator") return;
      if (node.id.type !== "Identifier") return;
      if (node.id.name.match(/平成|heisei/i)) {
        context.report({
          node,
          message:
            "Do not use 'heisei' or '平成' in variable name, use 'reiwa' or '令和'"
        });
      }
    }
  })
};
