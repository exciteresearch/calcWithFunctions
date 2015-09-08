var stack = [];

function zero(arg) {
  if(typeof arg === 'function')
    return arg();
  else 
    stack.push(0);
}
function one(arg) {
  if(typeof arg === 'function')
    return arg();
  else 
    stack.push(1);
}
function two(arg) {
  if(typeof arg === 'function')
    return arg();
  else 
    stack.push(2);
}
function three(arg) {
  if(typeof arg === 'function')
    return arg();
  else 
    stack.push(3);
}
function four(arg) {
  if(typeof arg === 'function')
    return arg();
  else 
    stack.push(4);
}
function five(arg) {
  console.log("5, ",arguments[0]);
  if(typeof arg === 'function')
    return arg();
  else 
    stack.push(5);
}
function six(arg) {
  if(typeof arg === 'function')
    return arg();
  else
    stack.push(6);
}
function seven(arg) {
  console.log("7, ",arguments[0]);
  if(typeof arg === 'function')
    return arg();
  else 
    stack.push(7);
}
function eight(arg) {
  if(typeof arg === 'function')
    return arg();
  else 
    stack.push(8);
}
function nine(arg) {
  if(typeof arg === 'function')
    return arg();
  else 
    stack.push(9);
}

function plus(arg) {
  if(typeof arg === 'function')
    return arg();
  else 
    console.log("plus err")
}
function minus(arg) {
  if(typeof arg === 'function')
    return arg();
  else 
    console.log("minus err")
}
function times(arg) {  
  console.log("*, ",arguments[0]);
  if(typeof arg === 'function')
    return arg();
  else 
    console.log("times err")
}
function dividedBy(arg) {
  if(typeof arg === 'function')
    return arg();
  else 
    console.log("dividedBy err")
}

console.log(stack)
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
console.log(stack);
