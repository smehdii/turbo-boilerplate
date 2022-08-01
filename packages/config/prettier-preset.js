module.exports = {
  // bracketSpacing: true,
  // bracketSameLine: true,
  // jsxSingleQuote: false,
  // importOrder: [
  //   "^@(kaizer|ee)/(.*)$",
  //   "^@lib/(.*)$",
  //   "^@components/(.*)$",
  //   "^@(server|trpc)/(.*)$",
  //   "^~/(.*)$",
  //   "^[./]",
  // ],
  // importOrderSeparation: true,
  // plugins: [require("./merged-prettier-plugin")],
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "all", //es5
  bracketSpacing: false,
  semi: false,
  useTabs: false,
  jsxBracketSameLine: false,
  parser: "typescript",
  arrowParens: "avoid", //always
};
