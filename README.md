# Minifier - Under Development
A NodeJS application to minimize JavaScript and CSS files.

### Requirements
1. [npm](https://www.npmjs.com)
2. [node](https://nodejs.org/en/)

### Parameters
All the parameters are given in the constants.js file.

1. currentProfile - sets the current profile environment you want to execute.
2. componentsDir - sets the directory to the component js files which are just to be minified once.
3. profiles - sets all the parameters needed for profile.
    - basePath - sets the base path of active project directory.
    - watchDir - sets the watch directory for JS files.
    - destDIr - sets the destination directory for the files.
    - jsListFile - points to the file which contains the relative path(with respect to basePath) to all the js that need to be minified.
    - cssListFile - points to the file which contains the relative path(with respect to basePath) to all the css that need to be minified.
    - jsOutputFile - sets the name of the output minified JS file.
    - cssOutputFile - sets the name of ouput minified CSS file.


### How to run?
Open the terminal in the root folder.
Run the command - 
```
npm run dev
```
