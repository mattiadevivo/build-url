# How to contribute

It's really simple, just create a PR containing the code you want to add (and proper test) and I'll review ASAP to merge it into master (I'll take care of increasing project version by updating `package.json` in the PR).

Code must be written in TypeScript with **strong typing**, no `any` usage is allowed.

## Linting and Formatting code

This project uses both `ESLint` and `Prettier`, please install official VScode plugins for both the linter and prettier in order to enforce code style.

## Code Structure

Code is places inside `src` folder, `index.ts` is used to export functions and types.

Tests are inside `test` folder, you can execute them by running `npm run test` command.

## Test the package before release

Run `npm pack` to see generate the tarball and check if all and **only** the file you want to be included are present inside release.

Run `npm link` in the root directory of the project, this will add a *symlink* in the global folder `{prefix}/lib/node_modules/<package>` that links to the package where the `npm link` command was executed.
Then run `npm link <package-name>` inside a new directory, it will create a symbolic link from globally-installed `package-name` to `node_modules/` of the current folder.
