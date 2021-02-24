let obj  = { test : 'test' };
let lst  = ['one','two','three'];
let hello = 'hello world';

console.log();

// not great
console.log(`obj = ${obj}`);
console.log(`lst = ${lst}`);

console.log();

// good!
console.log('obj = ', obj);
console.log('lst = ', lst);

console.log();

// not great
console.log('obj = ' + obj);
console.log('lst = ' + lst);

console.log();

// good
console.log(obj);
console.log(lst);

console.log();

// good but verbose
console.log(JSON.parse(JSON.stringify(obj)));
console.log(JSON.parse(JSON.stringify(lst)));

console.log();

// good but verbose
console.log("string = %s", hello);
console.log("obj = %O", obj);
// only works in chrome dev tools
console.log("%cstyled text", "color:blue; font-size:50px");


/*
%s → Formats the value as a string
%i or %d → Formats the value as an integer
%f → Formats the value as a floating point value
%o → Formats the value as an expandable DOM element. As seen in the Elements panel
%O → Formats the value as an expandable JavaScript object
%c → Applies CSS style rules to the output string as specified by the second parameter
*/

