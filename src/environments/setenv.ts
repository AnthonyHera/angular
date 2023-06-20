/**
 *
 */
require('dotenv').config();

/**
 *
 */
const { writeFile } = require('fs');

/**
 *
 */
const { argv } = require('yargs');

/**
 *
 */
const environmentFileContent = `
export const environment = {
  production: ${ argv.environment === 'prod' },

  API_HOST: '${ argv.environment }'
};`;

switch (argv.environment) {
  case 'prod':
    writeFile('./src/environments/environment.prod.ts', environmentFileContent,
      (error) => {
        console.log(error ? 'An error occurred while importing environment variables' : 'The environment variables were successfully imported');
      });
    break;
  case 'test':
    writeFile('./src/environments/environment.test.ts', environmentFileContent,
      (error) => {
        console.log(error ? 'An error occurred while importing environment variables' : 'The environment variables were successfully imported');
      });
    break;
  default:
    writeFile('./src/environments/environment.dev.ts', environmentFileContent,
      (error) => {
        console.log(error ? 'An error occurred while importing environment variables' : 'The environment variables were successfully imported');
      });
    break;
}
