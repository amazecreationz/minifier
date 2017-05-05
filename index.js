const constants = require('./constants').values;
const profile = require('./constants').profiles[constants.currentProfile];
const fs = require('fs');
const compressor = require('node-minify');
const watch = require('node-watch');

var watchDir = profile.watchDir;
var jsListFile = profile.jsListFile;
var basePath = profile.basePath;
var jsComponentsSource = constants.componentsDir + 'js/';
var cssComponentsSource = constants.componentsDir + 'css/';
var jsDest = profile.destDir + 'js/';
var cssDest = profile.destDir + 'css/';
var jsComponentsFile = jsDest + profile.jsComponentsFile;
var cssComponentsFile = cssDest + profile.cssComponentsFile;
var jsOutputFile = jsDest + profile.jsOutputFile;
var cssOutputFile = cssDest + profile.cssOutputFile;
var jsSourceFiles = [];

if(!fs.existsSync(jsDest)){
    fs.mkdirSync(jsDest);
}
/*
if(!fs.existsSync(cssDest)){
    fs.mkdirSync(cssDest);
}*/

var copyFile = function(file, source, dest) {
    var sourceFile = source + '/' + file;
    var destFile = dest + '/' + file;
    fs.createReadStream(sourceFile).pipe(fs.createWriteStream(destFile));
    console.log('Copied - ' + file);
}

var compressJS = function(input, output) {
    compressor.minify({
        compressor: 'no-compress',
        input: input,
        output: output,
        callback: function (err, min) {
            console.log("Compressed to - " +output);
        }
    });
}

var fileStream =  fs.createReadStream(jsListFile);
var lineReader = require('readline').createInterface({
    input: fileStream
});

lineReader.on('line', function (line) {
    jsSourceFiles.push(basePath + line);
});

fileStream.on('end', function(){
    compressJS(jsSourceFiles, jsOutputFile);
    watch(watchDir, { recursive: true }, function(evt, name) {
        console.log(name + " changed!")
        compressJS(jsSourceFiles, jsOutputFile);
    });
})