const segmentGenerator = (path) => [
  // config
  {
    type: "add",
    path: `${path}/config/constants/index.ts`,
    templateFile: ".plop/templates/segment/config/constants/index.js.hbs",
  },
  // lib
  {
    type: "add",
    path: `${path}/lib/utils/index.ts`,
    templateFile: ".plop/templates/segment/lib/utils/index.js.hbs",
  },
  // model
  {
    type: "add",
    path: `${path}/model/store/index.ts`,
    templateFile: ".plop/templates/segment/model/store/index.js.hbs",
  },
  {
    type: "add",
    path: `${path}/model/api/index.ts`,
    templateFile: ".plop/templates/segment/model/api/index.js.hbs",
  },
  // ui
  {
    type: "add",
    path: `${path}/ui/index.tsx`,
    templateFile: ".plop/templates/segment/ui/index.js.hbs",
  },
];

module.exports = (plop) => {
  plop.setGenerator("screens", {
    description: "Create a screen",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your screen name?",
      },
    ],
    actions: [
      // main page
      {
        type: "add",
        path: "src/screens/{{pascalCase name}}/index.tsx",
        templateFile: ".plop/templates/screen/index.js.hbs",
      },
      ...segmentGenerator("src/screens/{{pascalCase name}}"),
    ],
  });
  plop.setGenerator("entities", {
    description: "Create a entities",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your entities name?",
      },
    ],
    actions: [...segmentGenerator("src/entities/{{pascalCase name}}")],
  });
  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
      {
        type: "input",
        name: "screen",
        message: "What is your screen use?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{name}}/index.tsx",
        templateFile: ".plop/templates/pages/index.js.hbs",
      },
    ],
  });
  plop.setGenerator("features", {
    description: "Create a feature",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your feature name?",
      },
    ],
    actions: [
      // main page
      {
        type: "add",
        path: "src/features/{{pascalCase name}}/index.tsx",
        templateFile: ".plop/templates/feature/index.js.hbs",
      },
      ...segmentGenerator("src/features/{{pascalCase name}}"),
    ],
  });
};
