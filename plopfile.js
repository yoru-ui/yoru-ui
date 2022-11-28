const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const camelCase = str => {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

module.exports = function (plop) {
  plop.setHelper('capitalize', text => {
    return capitalize(camelCase(text));
  });

  plop.setGenerator('component', {
    description: 'generate a package new component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name please: ',
      },
      {
        type: 'input',
        name: 'author',
        message: 'Enter author name please: ',
      },
    ],
    actions: [
      {
        type: 'addMany',
        path: 'packages/{{componentName}}',
        destination: `./packages/{{dashCase componentName}}`,
        templateFiles: 'plop-templates/**',
      },
    ],
  });
};
