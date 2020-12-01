var env = process.env;
console.log(process.version); // node version
console.log(process.cwd()); // current working directory
var port = process.env.npm_package_config_port || 9090;
console.log(port);
console.log('arguments: ' + process.argv.slice(2)); // remove first two
Object.keys(env).forEach(function(key) {
  console.log(key + ' -> ' + env[key]);
});