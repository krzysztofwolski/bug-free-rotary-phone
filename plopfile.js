const fs = require('fs')
const isEmpty = require('lodash/isEmpty')
const path = require('path')

const { exec } = require('child_process')

// paths
const PROJECT_ROOT = path.join(__dirname)
const applicationComponentsPath = path.join(PROJECT_ROOT, 'src', 'components')
const componentPath = (filePath) =>
  path.join(applicationComponentsPath, filePath)

const readDirSync = (dirPath) => {
  let paths = fs.readdirSync(dirPath)

  return paths
    .filter((path) => path !== 'index.ts')
    .map((path) => path.replace(/\.[^\.]+$/, ''))
}

const required = (value) => {
  if (isEmpty(value)) {
    return 'This field is required.'
  }

  return true
}

const templatePath = (filePath) =>
  path.join(PROJECT_ROOT, '.plop/templates', filePath)

const componentChoices = () => readDirSync(applicationComponentsPath)

module.exports = function (plop) {
  plop.setActionType('prettier', function (answers, config, plop) {
    exec('yarn lint')
    return 'Code formatted'
  })

  plop.setGenerator('component', {
    description: 'Create new component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Name of new component:',
      },
      {
        type: 'list',
        name: 'componentGroup',
        message: 'Select component group:',
        choices: () => {
          return componentChoices()
        },
        validate: required,
      },
      {
        type: 'confirm',
        name: 'componentHasStyles',
        message: 'Does component have its own styles?',
        validate: required,
      },
    ],
    actions: [
      {
        type: 'add',
        path: componentPath(
          `{{componentGroup}}/{{ pascalCase componentName}}/index.ts`
        ),
        templateFile: templatePath('reactComponentIndex.ts.hbs'),
      },
      {
        type: 'add',
        path: componentPath(
          '{{componentGroup}}/{{ pascalCase componentName}}/{{ pascalCase componentName}}.tsx'
        ),
        templateFile: templatePath('reactComponent.tsx.hbs'),
      },
      {
        type: 'add',
        skip: (data) => {
          if (!data.componentHasStyles) {
            return 'No style file added'
          }
        },
        path: componentPath(
          '{{componentGroup}}/{{ pascalCase componentName}}/{{ pascalCase componentName}}.styles.ts'
        ),
        templateFile: templatePath('reactComponentStyles.ts.hbs'),
      },
      {
        type: 'add',
        path: componentPath(
          '{{componentGroup}}/{{ pascalCase componentName}}/{{ pascalCase componentName}}.stories.tsx'
        ),
        templateFile: templatePath('reactComponentStory.tsx.hbs'),
      },
      {
        type: 'append',
        path: componentPath('{{componentGroup}}/index.ts'),
        separator: '',
        templateFile: templatePath('exportAll.ts.hbs'),
      },
      {
        type: 'prettier',
      },
    ],
  })
}
