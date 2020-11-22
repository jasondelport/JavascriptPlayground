// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
/*
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");
*/
// ES5, scans node_modules by default
// const greetings = require("exports");

// ES6, only scans node_modules if using babel, this may change in future
import { config, configurations } from "./config.js";
import * as greetings from "./exports.js";

console.log(configurations['sandbox'].username);
console.log(config.username);

console.log(greetings.hello);
console.log(greetings.world());