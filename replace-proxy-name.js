/*
Usage: node replace-proxy-name.js example example-sean
*/

var fs = require('fs');

var from = process.argv[2]
var to = process.argv[3]

fromPath = '/v1/' + from;
fromApiName = from + '-api';
toPath = '/v1/' + to;
toApiName = to + '-api';

console.log(fromPath + '->' + toPath);
console.log(fromApiName + '->' + toApiName);

var fromPathRegex = new RegExp(fromPath, 'g');
var fromApiNameRegex = new RegExp(fromApiName, 'g');

var replaceInFile = function(file, regex, to) {
	var data = fs.readFileSync(file, 'utf8');
	var result = data.replace(regex, to);
	fs.writeFileSync(file, result, 'utf8');
};

replaceInFile('./apiproxy/proxies/default.xml', fromPathRegex, toPath);
replaceInFile('./tests/integration/step_definitions/init-tests.js', from, to, fromPathRegex);
replaceInFile('./pom.xml', fromApiNameRegex, toApiName);
