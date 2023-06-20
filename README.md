# APP Province Sud

## Install NodeJS

Requirement : The first step to build or run this project is to install [NodeJS](https://nodejs.org/en/download/).

## Install Angular CLI

Install the [Angular CLI](https://github.com/angular/angular-cli) globally.
To install the CLI using `npm`, open a terminal/console window and run the following command :

```sh
      npm install -g @angular/cli
``` 

## Install Angular and project dependencies

To install the Angular and project dependencies using `npm`, run the following command at the root of the project :

```sh
      npm install
``` 

## Environment files

Requirement : In the [root](./) folder, create a file <b>.env</b> to specify environment variables for
the docker container as well as for the import [script](./src/environments/setenv.ts) of the environment variables

```sh
      # API configuration variables
      API_HOST=http://localhost:8080/api/services
```

## Run the development server

For a development configuration server run :

```sh
      npm run start:dev
```

For a production configuration server run :

```sh
      npm run start:prod
```

Navigate to `http://localhost:7070/`. The app will automatically reload if you change any of the source files.

## Run the unit tests

To execute the unit tests via [Karma](https://karma-runner.github.io), run :

```sh
      npm run test
``` 

## Build a static Angular app

For the development configuration run :

```sh
      npm run build:dev
```

For the production configuration run :

```sh
      npm run build:prod
```

## Code scaffolding

When you use the Angular CLI's `generate` command, the root folder for creating elements is `src/app`.

To generate a new component, run
```sh
      ng generate component /src/app/components/component-name
```

To generate a new directive, run
```sh
      ng generate directive /src/app/shared/directives/directive-name
```

To generate a new pipe, run
```sh
      ng generate pipe /path/pipe-name
```

To generate a new service, run
```sh
      ng generate service /src/app/shared/services/service-name
```

To generate a new class, run
```sh
      ng generate class /path/class-name --type={{choose type}}`

For example :

      ng generate class /src/app/shared/entities/user-detailled --type=entity`
```

To generate a new guard, run
```sh 
      ng generate guard /src/app/shared/guard/guard-name
```

To generate a new interface, run
```sh 
      ng generate interface /src/app/shared/interfaces/interface-name
```

To generate a new enum, run
```sh
      ng generate enum /src/app/shared/enums/enum-name
```

To generate a new module, run
```sh
      ng generate module /src/app/shared/modules/module-name 
```

## Code comment format

To comment the code in Angular, we use the official [JSDoc Support](https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript) in Java Script.
JSDoc use a tag system that you can find at these addresses :

- [usejsdoc.org](http://usejsdoc.org/)
- [JSDoc Support](https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript)

For example :

```sh 
      /**
       * @description Construct RequestService
       * @param _http A reference to the internal angular HTTP Service
       */
      constructor(private _http: HttpClient) {
          ...
      }
```
```sh 
      /**
       * @description A get method to retrieve the connection path of the WebsocketService
       * @return Requested WebSocket's connection path
       */
      get connection(): string {
          ...
      }
```
```sh 
      /**
       * @description This method is used to build the path of the request
       * @param path The part to append
       * @return this
       * @example
       * Request<T>.path('/user').path(somevariable).path('/fullinfo') // -> /user/me/fullinfo
       */
      path(path: string): ApiRequestInterface<T>;
```

All of your code must be commented (interface, constant, service, component, directive, etc...).
If the code is not commented correctly, the merge request and your task will not be validated.
