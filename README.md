# 🤙 bug-free-rotary-phone

Does the name makes any sense? Maybe. Github name suggestion was too good to be skipped.

**Warning**: it's not intended to be used on production. Unless you know what you're doing.

## ⁉️ Why?

Another exercise in setting up projects. Currently I'm in love with Atomic Design so here we are.

## 🔥 Goodies (aka Buzzword hell)

**Big guns**:
- Typescript
- React
- NextJS
- ApolloClient
- Graphql Codegen
- ChakraUI
- Storybook

**Cool linting**:
- eslint
- prettier via eslint plugin
- spellcheck via eslint plugin

**Code generation**:
- SSG: generate component props at build time
- Hooks/ssrProps/interfaces: Codegen takes care of creating all boilerplate for Apollo
- Plop templates for fast component creation and code consistency

**Data**:
- public Saleor demo (open source headless e-commerce platform)

## ⚙️ Getting Started

1. Install deps:
    ```bash
    yarn
    ```

1. Run dev server
    ```bash
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

1. Want to build project to check out SSG?
    ```bash
    yarn build
    yarn start
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


1. Any changes in schema or queries? Run:
    ```bash
    yarn codegen
    ```


1. New component? Just follow the wizard:
    ```bash
    yarn plop
    ```


1. Don't forget to check Storybook ui preview:
    ```bash
    yarn storybook
    ```
    
    Open [http://localhost:6006/](http://localhost:6006/) with your browser to see the result.

## 🙇 Credits
Based on Apollo/NextJS/TS template `nextjs-graphql-typescript` by @ivanms1 
