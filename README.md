# Recipe Book API Client
An auto-generated API Client.

Manually trigger the build:
```shell
$ cd ./src
npx @openapitools/openapi-generator-cli generate -i https://raw.githubusercontent.com/steven-mercatante/recipe-book-api/main/openapi-schema.yaml -g typescript-axios
```

Publish the latest build:
```shell
# Bump the version number in package.json
# Commit all changes & push to origin
$ npm publish
```