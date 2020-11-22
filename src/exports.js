// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
/*
// Exporting individual features
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function functionName(){...}
export class ClassName {...}

// Export list
export { name1, name2, …, nameN };

// Renaming exports
export { variable1 as name1, variable2 as name2, …, nameN };

// Exporting destructured assignments with renaming
export const { name1, name2: bar } = o;

// Default exports
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

// Aggregating modules
export * from …; // does not set the default export
export * as name1 from …; // Draft ECMAScript® 2O21
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
*/
/*
// ES5 way of doing things
function hello () {
    console.log('Hello');
}
function world () {
    console.log('World');
}
module.exports.world = world
module.exports.hello = hello
*/

export const hello = () => {
    console.log('Hello');
}

export const world = () => {
    console.log('World');
}

export default {
    hello,
    world
}