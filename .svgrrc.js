const path = require("path");

module.exports = {
  typescript: true,
  template: (variables, { tpl }) => {
    return tpl`
      ${variables.imports}
      export const ${variables.componentName} = (${variables.props}) => (
        ${variables.jsx}
      )
    `;
  },
  indexTemplate: (filePaths) => {
    const exportEntries = filePaths.map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath));
      return `export { Svg${basename} } from '@/components/icon/${basename}'`;
    });
    return exportEntries.join("\n");
  },
};
