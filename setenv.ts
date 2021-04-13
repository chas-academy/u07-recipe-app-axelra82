// This file will get env variables and set them to Angulars environment file
// Make sure you have your environments setup before running any build commands
// See README for instructions on setting up local environment

// Imports
require('dotenv').config();
const { writeFile } = require('fs');
const { argv } = require('yargs');

// Arguments passed with yargs
const environment = argv.environment;

// Define environment
const isProduction = environment === 'prod';
const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;

// Set environment vaiables for loop
// If there were more variables this would make it more scalable
const envArr = [
   'REAPP_MEALDB_API_KEY',
];

// Loop environment variables array
const envVars = () => {
   let returnStr = '';
   envArr.forEach(envVar => {
      returnStr += `${envVar}: '${process.env[envVar]}',\n`
   });
   return returnStr;
}

// Setup Angular environment file data
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   ${envVars()}
};
`;

// Write data to respective environment file
writeFile(targetPath, environmentFileContent, function (err:any) {
   if (err) {
      console.log(`Error occured while getting environmnet: ${err}`);
   }
   console.log(`Environment successfully copied.`);
});