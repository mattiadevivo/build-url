# ESLint

Generate configuration with `npx eslint --init` or `npm init @elsint/config`

## Ignore files in npm package

There is no `.npmignore` because instead of blacklist files to be inserted inside npm package, a whitelist of those files has been introduced inside `package.json` `files` key.

## Licensing Repository

[GitHub docs - licensing repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)

## TsConfig

File generated from Typescript compiler are ES6 modules.

## Test the package before release

Run `npm pack` to see generate the tarball and check if all and **only** the file you want to be included are present inside release.

Run `npm link` in the root directory of the project, this will add a *symlink* in the global folder `{prefix}/lib/node_modules/<package>` that links to the package where the `npm link` command was executed.
Then run `npm link <package-name>` inside a new directory, it will create a symbolic link from globally-installed `package-name` to `node_modules/` of the current folder.

