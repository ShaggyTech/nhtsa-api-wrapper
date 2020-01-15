# @shaggytools/template-typescript-npm

A boilerplate/starter template to get you started:

- **coding** in [Typescript](https://www.typescriptlang.org/),

- **unit testing** with [Jest](https://jestjs.io/),

- generating **documentation** with [JSDoc](https://github.com/jsdoc/jsdoc),

- building a **universal package** with [Rollup](https://rollupjs.org/guide/en/),

- and **publishing** your package to [NPM](https://www.npmjs.com/) / [Yarn](https://www.yarnpkg.com/) for use anywhere (CommonJs, UMD, AMD, IIFE, ESModule, CDN, browser script, etc.)

> INFO: This template was developed and tested on `Node v12.14.0`, `NPM v6.11.3`, and `Yarn v1.21.1`

---

## Table of Contents

- **[Purpose](#purpose)**

- **[Setup](#setup)**

  - **[Prerequisites](#prerequisites)**

  - [1. Clone this template and install dev dependencies](#1-clone-this-template-and-install-dev-dependencies)
  - [2. Setup your remote git repository](#2-setup-your-remote-git-repository)
  - [3. Edit the root package.json file](#3-edit-the-root-package-dot-json-file)
  - [4. Edit this root README file](#4-edit-this-root-readme-file)
  - [5. Add NPM and Yarn credentials](#5-add-npm-and-yarn-credentials)

- **[Configuration Files](#configuration-files)**

- **[Development Scripts](#development-scripts)**

  <details>
    <summary>Expand to see all development scripts available in ./package.json.</summary>

  - [build](#yarn-build)
  - [build-docs](#yarn-build-docs)
  - [build-dev](#yarn-build-dev)
  - [build-dev-dist](#yarn-build-dev-dist)
  - [build-dev-docs](#yarn-build-dev-docs)
  - [build-dev-ts](#yarn-build-dev-ts)
  - [clean-dev](#yarn-clean-dev)
  - [clean-dist](#yarn-clean-dist)
  - [clean-docs](#yarn-clean-docs)
  - [clean-dev-dist](#yarn-clean-dev-dist)
  - [clean-dev-docs](#yarn-clean-dev-docs)
  - [clean-dev-packageJson](#yarn-clean-dev-packagejson)
  - [clean-dev-tests](#yarn-clean-dev-tests)
  - [cleanup](#yarn-cleanup)
  - [cleanup-everything](#yarn-cleanup-everything)
  - [copy-packageJsonToDev](#yarn-copy-packagejsontodev)
  - [release](#yarn-release)
  - [test](#yarn-test)
  - [watch](#yarn-watch)
  - [watch-docs](#yarn-watch-docs)
  - [watch-tsc](#yarn-watch-tsc)
  - [watch-test](#yarn-watch-test)
  - [watch-rollup](#yarn-watch-rollup)

</details>

- **[Project Structure](#project-structure)**

  - [Structure Overview](#structure-overview)

  - [Directories](#directories)
    - [bin](#bin)
    - [dev](#dev)
    - [dist](#dist)
    - [docs](#docs)
    - [docsSrc](#docssrc)
    - [src](#src)
    - [tests](#tests)

- **[Documenting Your Code](#documenting-your-code)**

  - [Documentation During Development](#documentation-during-development)

  - [Production Documentation](#production-documentation)

- **[Testing Your Code](#testing-your-code)**

  - [Testing scripts included in this template](#testing-scripts-included-in-this-template)

- **[Build Your Package](#build-your-package)**

  - [Development Build](#development-build)
  - [Production Build](#production-build)

- **[Publish Your Package](#publish-your-package)**

  - [Prepare for release](#prepare-for-release)
  - [Release a new package version](#release-a-new-package-version)

---

---

## Purpose

I wrote this starter template because I wanted an easy way to quickly publish NPM packages that could then be used in both node and the browser.  What you've stumbled upon is the result of a two week rabbit hole of learning and evolving this package into how you find it in it's current form. I tried to document here extensively so that it's easier to use and also because my markdown skills needed some improvement and practice.  I hope that it helps you.  Anyone is welcome to contribute, submit bug fixes or improvements, etc.

-- [@ShaggyTech](https://www.github.com/ShaggyTech)

---
---

## Setup

### Prerequisites

- [ ] Install [Node](https://nodejs.org/en/)

- [ ] Install [Yarn](https://yarnpkg.com/lang/en/) - an alternative to NPM and used in this template's scripts.

- [ ] Optional - Install [NVM](https://github.com/nvm-sh/nvm) - to switch between different node versions.

- [ ] It is recommended to use the [Visual Studio Code](https://code.visualstudio.com/) editor to develop your package.

- [ ] It is also recommended to install the [Live Server - Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to be able to test live versions of your modules locally in the browser before publishing to NPM and Yarn.

---

### 1 Clone this template and install dev dependencies

```node
// Clone this repository:
git clone https://github.com/ShaggyTech/template-typescript-npm.git

// Change into the template directory
cd template-typescript-npm

//Install all of the development dependencies listed in the package.json with:
yarn install

```

### 2 Setup your remote git repository

Follow this [Tutorial](https://help.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line) to get your remote repository setup and ready for the next steps.

### 3 Edit the root package dot json file

1. Change the `"name"` field to what you want your NPM / Yarn package name to be.

   - This package uses an NPM organization as the first part of the name (@shaggytools/) but not all packages do.

2. Change the `"libraryName"` to the global variable name you want to use when importing and using the package in a browser script. Ex: `myModuleName.function()`.

   - The `rollup.config.ts` file uses this field to determine the library name output in the various bundles.
   - You might also want to change the various .html and .ts files in the `/tests/` folder to use this new name in the script imports. These html files are simply there to show you how the various modules can be imported and used in the browser.

3. Customize the following fields to your desired values:
   - `"version"`: start at 1.0.0 or 0.0.1, etc.
   - `"description"`: short description of your package
   - `"repository.url"`: your git remote repository
   - `"author"`: your name, email, etc.
   - `"bugs.url"`: where users can report bugs and issues
   - `"homepage"`: can be documentation homepage (gh-pages) or GitHub link, etc.
   - `"keywords"`: an array of keywords to help find your package in searches

### 4 Edit this root README file

The root template `README.md` file, that you are currently reading this from, will serve as the `index.html` of the [documentation](https://www.shaggytech.com/template-typescript-npm/index.html), as well as the [npmjs.com](https://www.npmjs.com/package/@shaggytools/template-typescript-npm), [yarnpkg.com](https://yarnpkg.com/en/package/@shaggytools/template-typescript-npm), and [source code](https://github.com/shaggytech/template-typescript-npm) homepages. Therefore, you must complete the following steps:

**1)**
Bookmark the [live documentation](https://www.shaggytech.com/template-typescript-npm/index.html) version of this README for future reference as you are about to heavily edit or delete the contents of this file and may need it in the future. You can also rename or move the file if you prefer to save a local copy.

**2)**

- _EITHER_ Heavily edit and modify this README file to suit your package needs.
- _OR_ Delete the contents of this file and start over with your package info.
- _OR_ Rename this file to something else so you can still reference it later, and create a new root `./README.md` file with your desired package info.

**3. Optional**
You can change the homepage of the documentation by changing `module.exports.opts.readme` in the JSDoc config file: `./jsdoc.js`

### 5 Add NPM and Yarn credentials

1. Ensure you've setup your `package.json` as described above.

2. Follow the steps listed [HERE](https://yarnpkg.com/lang/en/docs/publishing-a-package/) to get setup for publishing your package.

---

---

## Configuration Files

Some files at the root project level are configuration files for various packages used in this template. I encourage you to open these up and at least skim through them. Play around and see how the process and build is affected when changing or adding config options.

| Package    | Config File       | Description                                                                                            | Prod | Dev |
| ---------- | ----------------- | ------------------------------------------------------------------------------------------------------ | :--: | :-: |
| Rollup     | rollup.config.ts  | Uses process.env.ROLLUP_WATCH = 'true' or 'false' to switch output location and other options          |  X   |  x  |
| Typescript | tsconfig.json     | Used for production builds                                                                             |  x   |     |
| Typescript | tsconfig.dev.json | Used for development builds                                                                            |      |  x  |
| JSDoc      | jsdoc.js          | Uses process.env.JSDOC_ENV = 'development' or 'production' to switch output location and other options |  x   |  x  |
| Jest       | jest.config.js    | Testing during development                                                                             |      |  x  |
| Babel      | .babelrc          | Used to transpile code in production and development                                                   |  x   |  x  |
| ESLint     | .eslintrc.js      | Used by our code editor to enforce code standards and styling                                          |      |  x  |
| Prettier   | .prettierrc       | Used by our code editor (VS Code) for styling our code                                                 |      |  x  |

---

---

## Development scripts

There are more scripts in the `./package.json` file than are listed here but these are the frequently used ones. Add your own or modify the existing ones if needed.

All of these commands are to be run in the terminal from the root project directory, and can be found in the `./package.json` file. You can also substitute `npm add` for `yarn` in the commands if you prefer to use NPM.

---

### `yarn build`

Builds the _production_ Rollup build and outputs to the `./dist` folder.

- Removes the contents of the `./dist` folder before each run

- This script is run automatically before every `yarn release`

---

### `yarn build-docs`

This will build the **production** documentation via JSDoc.

See [Production Documentation](#-production-documentation)

- Cleans all files from the `./docs` folder before each run.

- Outputs JSDoc build files to `./docs/`.

- See the `./jsdoc.js` config file to adjust the documentation options, output, plugins, templates, etc.

---

### `yarn build-dev`

Concurrently runs all of the **development** `yarn-dev-*` scripts.

---

### `yarn build-dev-dist`

Builds the _development_ Rollup outputs to the `./dev/dist` folder.

- Removes the contents of the `./dev/dist` folder before each run

- This script will run automatically before each run of `yarn release`

---

### `yarn build-dev-docs`

Builds the **development** version of the documentation via JSDoc

See [Documentation during Development](#-documentation-during-development)

- Cleans all files from the `./dev/docs` folder before each run.

- Outputs JSDoc build files to `./dev/docs/`

- See `./jsdoc.js` config file to adjust the documentation options, output, plugins, template, etc.

---

### `yarn build-dev-ts`

An alternative to [`yarn watch-tsc`](#yarn-watchtsc)

This script will run the Typescript compiler `tsc -p tsconfig.dev.json --module commonjs` and will output files to `./dist/lib`. Change the `outDir` option in `./tsconfig.dev.json` if you want it going to another folder.

Also, you can run the `tsc` command with no `-p` (configuration path) flag if you would like to use the default path to the _production_ `./tsconfig.json` Typescript config file. This will instead output Typescript build files to `./dist/lib/`. Remember that everything inside the `./dist` folder will be included as part of your NPM package. It's typically not necessary to include this `lib` folder in your final package so we only use `tsc` for debug purposes in _development_.

---

### `yarn clean`

Delete everything from the `./dev/` and `./dist/` folders.

---

### `yarn clean-dev`

Delete everything from the `./dev/` folder.

---

### `yarn clean-dist`

Delete everything from the `./dist/` folder.

---

### `yarn clean-docs`

Delete everything from the `./docs` folder

---

### `yarn clean-dev-dist`

This script will delete everything inside the `./dev/dist` folder.

---

### `yarn clean-dev-docs`

Delete everything from the `./dev/docs` folder.

---

### `yarn clean-dev-packageJson`

Delete the package.json copy from `./dev/package.json`.

---

### `yarn clean-dev-tests`

This script will clean all files from the `./dev/coverage` folder and clear the Jest testing cache.

---

### `yarn cleanup`

Deletes the copied `./dev/package.json`.

Completely removes the `./dist` and `./dist` folders.

---

### `yarn cleanup-everything`

Runs `yarn cleanup` and completely removes the `./node_modules/` folder and all contents of that folder.

---

### `yarn copy-packageJsonToDev`

First deletes `./dev/package.json` to start with a fresh file.

Then copies the root `package.json` into the `./dev` folder. Directly importing your package from the `./dev` folder will use the `main`, `module`, or `browser` keys from the `./dev/package.json` to better simulate a production package on NPM.

---

### `yarn release`

- will do the following, in listed order, to publish your package:
  - clean the `/dist/` folder
  - run `yarn build` script
  - run `yarn publish` script
  - ask for a new version number
  - publish the contents of the `./dist/` folder to both NPM and Yarn, using the value of `package.json.name` and the new version number
  - run `git push --tags` to update your repository with a commit tagged with the newest version

---

### `yarn test`

Runs `jest` command. This will run all tests in your project a single time.

---

### `yarn test-clearCache`

Runs `./node_modules/.bin/jest --clearCache"` command. This will clear the Jest cache. Useful if you've made changes that aren't being reflected in the most recent tests, or possible random testing bugs.

---

### `yarn watch`

This script will run the `watchAll.js` script located in the root `bin` directory and allow you to more easily watch all portions of the development process, reloading with file changes each time.

- Outputs development files to relevant sub-directories of the `./dev/` directory.
- will simultaneously run TSC, Rollup, JSDoc, and Jest in watch modes, watching for changes in the `./src`, `./docs`, `./docsSrc` and `/tests` folders, with all outputs going to the `./dev` folder.
- Under the hood this command runs the `watchAll.js` file found in the `/bin` folder. Feel free to modify that file if you want to adjust/add/remove any of the commands that are run concurrently.

> NOTE:
> This command is resource intensive and may be slow on older PCs. You may be better off either removing a few of the commands from the `bin/watchAll.js` script which this script implements, or running the individual watch scripts (`watch-docs` `watch-test` `watch-rollup` `watch-tsc`) themselves, in separate windows as needed.
>
> NOTE:
> You won't be able to use Jest keyboard commands in this main watch mode, use `watch-test` if you need finer control in Jest watch mode.

---

### `yarn watch-docs`

Continuously rebuilds the documentation using JSDoc and Nodemon, and outputs files to `./dev/docs/`.

Watches the `./src` and `./docSrc` folders and rebuilds on changes.

Related configuration file: `./jsdoc.js`

---

### `yarn watch-tsc`

Continuously type checks your Typescript source code with `tsc --watch`.

Compiles the Typescript code and outputs the files to `./dev/lib/`.

Watches the `./src` folder and rebuilds on changes.

Related configuration file: `./tsconfig.dev.json`

---

### `yarn watch-test`

Continuously tests your code with `jest --watch --onlyChanged`.

Watches the`./src` and `./tests` folders for changes.

Outputs code coverage report files to `./dev/coverage`

Because it uses the `--onlyChanged` flag in the jest command, only tests with changes or added tests since the most recent commit will be ran.

Related configuration files: `jest.config.js` and `jest.setup.js`.

### `yarn watch-rollup`

Continuously compiles the development version of the Rollup build.

Outputs files to `./dev/dist/`. Watch mode is based on changes you make to the `./src` folder.

Relevant configuration file: `rollup.config.ts`

---

---

## Project Structure

`!` - denotes a folder + sub-folders ignored by git (see `.gitignore` file) and not included when committing and pushing to a remote repository. You can safely delete or clear these folders before _committing and pushing to a remote repository_.

`*` - denotes a folder + sub-folders ignored when publishing to NPM/Yarn with `yarn release`. You can safely delete or clear these folders before _publishing your package_.

### Structure Overview

```none
## Folder Structure Overview ##

  bin/

  <!*>
  dev/
    coverage/
      - code coverage output files from Jest

    dist/
      - development rollup build, mirrors root /dist folder structure

    docs/
      - production documentation build with JSDoc, considered part of source code.

    package.json
      - copy of the root package.json file,
      - simulates a final package so you can import directly from the ./dev folder

  <!>
  dist/
    - browser/
      - IIFE
      - minified
      - single file

    - cjs/
      - CommonJs/Node)
      - code-split
      - module

    - module/
      - ESM Module
      - ES2015+
      - code-split
      - module

    - types/
      - Typescript `.d.ts` type definition files
      - auto populated from your ./src code

    - bundle.min.js
      - UMD (universal bundle)
      - browser and node
      - minified
      - single file

    - bundle.min.js.gz
      - UMD
      - Universal Bundle, browser and node
      - minified
      - gzipped

  docs/

  docsSrc/
    - static/
    - tutorials/

  src/
    - __tests__/ (test files ending with .test.ts)
    - index.ts (main entry)
    - ... more source code

  tests/
    - browser/
      - simulated browser imports in .html files
    - node/
      - simulated CommonJs imports in .ts files

  README.md
    - home page of the documentation page and npmjs.com package

  package.json
    - scripts and package settings

  + various package configuration files []()

```

---

## Directories

### `bin`

A directory containing node helper scripts used in `package.json` scripts.

---

### `dev`

A directory which contains all of the output when running any of the development scripts in `package.json`

- Directory will not be created until the first time you run a development script that outputs here.

- Not included in the source code repository nor in the published package code

- Clear all folder contents via `yarn cleanDev`

---

### `dist`

A directory which contains all of the output from `yarn build` script in `package.json`.

This is also the directory that will be uploaded to NPM/Yarn when you publish your package with `yarn publish`.

- Directory will not be created until the first time you run the `build` script.

- Not included in the source code repository.

- Clear folder contents via `yarn clean-dist`

---

### `docs`

A directory containing the output from `yarn build-docs`

GitHub can automatically update your documentation site every time you push changes to this folder to your remote repository. Set this folder as the gh-pages source in your repository settings:

[See this GitHub help article for more information](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

- Clear folder contents via `yarn docs-clean`

---

### `docsSrc`

A directory containing static assets, tutorials, and anything else you would like to include when building the documentation files.

---

### `src`

A directory containing all source code typescript files as well as Jest unit tests located in `__tests__` sub directories and with each test file's name ending in `.test.ts` or `.spec.ts`.

---

### `tests`

A directory containing tests that check various ways of importing the module. Add more or modify the existing ones to fit your needs.

---

---

## Documenting Your Code

**See [HERE](https://www.shaggytech.com/template-typescript-npm/index.html) for an example of the live documentation for this template package.**

This template utilizes the NPM module [JSDoc](https://github.com/jsdoc/jsdoc) in order to document your code.

It is recommended to read through the JSDoc [documentation](https://devdocs.io/jsdoc/) if you're not familiar with how to document your code.

> NOTE: Best practice is to always make changes with the _development_ version of the documentation first before building the _production_ version.
>
> Although the builds will be exact copies if ran at the same time at any point in development, it was thought to be a better practice if we separate _development_ and _production_ versions of the documentation builds. The `./docs/` folder is part of the source code and is even used by `gh-pages` for the live website version of your documentation. You only want to rebuild docs in that folder once, after making changes and before committing and pushing your new `./docs` build to your GitHub repository.

### Documentation During Development

Using VS Code and the Live-Server plugin to see documentation output live during the development stage

- Uses `process.env.JSDOC_ENV = 'development'` to denote this is a development build.
- Edit `./jsdoc.js` to adjust the options, output, plugins, templates, etc.

Using [Visual Studio Code](https://code.visualstudio.com/) and the associated [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) plugin you can utilize the following scripts to setup live documentation changes.

- Install Visual Studio Code and it's LiveServer plugin if you have not already done so.

- Use `yarn watch-docs` to only watch JSDoc

- Use `yarn watch` to watch JSDoc along with all other development watch- scripts at the same time.

This will output documentation build files to the `./dev/docs/` directory.

If you then _right click_ on the `./dev/docs/index.html` file and select `Open With Live Server`, this will open a new browser window.

Any changes you make to files located in the `./src/` and `./docsSrc/` directories will trigger the docs to get rebuilt and the changes reflected live in the browser window that was opened with Live Server.

You can also use other plugins or ways of live reloading your changes in the browser if you prefer something else.

Once you are satisfied with your changes, continue to the next section below to see how you can use GitHub Pages (gh-pages) to automatically create a [live version](https://www.shaggytech.com/template-typescript-npm/index.html) of your documentation.

### Production Documentation

- Uses `process.env.JSDOC_ENV = 'production'` to denote this is a production build.

- Edit `./jsdoc.js` to adjust the options, output, plugins, templates, etc.

> **IMPORTANT!** - If you haven't moved, modified, or renamed this ./readme.md file and it is located in your project root directory, this means YOU HAVE NOT COMPLETED the [Setup](#setup) part of this template. You should do so now before proceeding with the following steps.

**Setup gh-pages to serve your live documentation from remote repository:**

GitHub can use the `docs` folder in your remote GitHub repository to serve a live version of the JSDoc build files in that folder, via `gh-pages`.

This means you can update the _"production"_ documentation by simply building new documentation files in the local `./docs` folder and pushing the changes to your remote repository, Shortly thereafter, the live 'production' documentation website should be updated with your changes within several minutes. Follow these steps to make it happen:

1. Make sure you have followed all steps in the [SETUP](#setup) section at the top of this file. It's important that your `./package.json` and `./README.md` files have been modified for your specific package/project.

2. [Set the `docs` folder as the gh-pages source in your repository settings.](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

3. Make changes to your documentation, in either the `./README.md` file, or the `./src` or `./docsSrc` folders.

4. Run `yarn build-docs` to generate new documentation in the `./docs` folder.

5. Run `git commit -m "commit message here"`

6. Run `git push` to update the remote repository, and new changes to documentation will be live within several minutes.

> It is recommended to commit any changes to the `./docs` folder in a commit separate from any other source code changes, usually after building and committing production builds. The reason for this is that your commits will end up cluttered with numerous file changes within the `./docs` folder whenever building new docs with `build-docs`. This is more of a preference but tends to keep your commits nice and tidy.

---

---

## Testing Your Code

This template utilizes the NPM module [Jest](https://jestjs.io/) in order to test the code you write.

You are strongly encouraged to read through the Jest [Documentation](https://jestjs.io/docs/en/getting-started) if you're not familiar with how to test your code.

The configuration file that jest uses is `./jest.config.js`. Open it up and take a look at the configuration settings before reading on.

By default, Jest looks for files ending in either `.test.ts`, `.spec.ts`, or `.js|.jsx` equivalents of the former two. These files must be located in `__tests__` sub directories anywhere within the root `src/` directory.

Code coverage collection will only include the `./src/` folder by default.

Typescript files (`.test.ts`) are processed by NPM package `ts-jest`.

The Typescript configuration used for ts-jest is: `./tsconfig.dev.json`.

### Testing scripts included in this template

`yarn watch-test`

Runs Jest in watch mode with the --onlyChanged option flag, this will limit tests to only files that have changed since the most recent git commit.

`yarn test`

Runs all tests once.

`yarn watch`

Runs Jest in watch mode with the --onlyChanged option flag, concurrently with other watch scripts. Note that you won't be able to enter any commands to control jest, use `yarn watch-test` if you want the ability to enter Jest commands during watch mode.

---

---

## Build Your Package

This template utilizes the NPM module [Rollup](https://rollupjs.org/guide/en/) and various associated plugins in order to package your module into multiple formats (the 'universal' part of this template).

I encourage you to read through the Rollup [Documentation](https://) if you're not familiar with how to bundle your code.

The build outputs to `./dist/` and is controlled via the `rollup.config.ts` config file.

By default this template is setup to output the following formats: `Default:UMD(Universal` - `CJS(CommonJS/Node)` `ESM(ES Module)` `IIFE(Browser)`. This and other options can be changed in the rollup config file.

A `types` folder is also output into `./dist/`, which will contain all of the Typescript type definition files (.d.ts) for your package. Change the output location in the `tsconfig.json` and/or `tsconfig.dev.json` Typescript config files.

### Development build

`yarn build-dev` or `yarn watch` or `yarn watch-rollup`

Will build the package with Rollup and output everything to `./dev/dist/`. A copy of the `./package.json` file will also be placed in the root of `./dev/` folder.

### Production build

`yarn build`

Will build the package with Rollup and output everything to `./dist/`. The contents of that folder are what gets uploaded to NPM and Yarn when you publish your package.

---

---

## Publish Your Package

### Prepare for release

> IMPORTANT:
> **Make sure you have followed all of the steps in the Setup section of this document before proceeding!**

Follow the steps listed [HERE](https://yarnpkg.com/lang/en/docs/publishing-a-package/) to get setup and ready to publish your package. You will need to be logged in to NPM with your credentials to be able to publish a package.

- Make sure you've setup your root `package.json` file

- Make sure you've setup your root `README.md` file

### Release a new package version

It is advised that you commit and push all of your source code to your remote repository before running the `release` script. If done correctly, the last 2 commits in your remote repo, after publishing, should be `<vX.X.X>` and then `<new source code commit>`.

This is a final step and the version number you choose is permanent, once published it cannot be changed. If you mess up or need to change something after publishing, you will have to bump the version (x.x.+1) by running `yarn release` again.

We recommend using the [yarn pack](https://yarnpkg.com/lang/en/docs/cli/pack/) or [yarn link](https://yarnpkg.com/lang/en/docs/cli/link/) commands to test local development before publishing.

You can also use the files found in the root `tests/` folder to test your Rollup output is correctly imported in various different scenarios before publishing.

**`yarn pack`** creates gzipped NPM package file

- creates a gzipped file identical to what will be uploaded to NPM as the final package contents. Use this to ensure you're uploading what you think you are to NPM, upon release.

**`yarn release`** to **publish** your package.

- This script will run `yarn build` before attempting to publish your package.
- You will be prompted to enter a new version number before publishing is completed. Once entered, the package.json "version" field will be changed to reflect the new version, saved, and git committed.
- After successfully publishing the package, `git push --tags` is run to push a commit to remote source with the new version as the commit name.

---

---
