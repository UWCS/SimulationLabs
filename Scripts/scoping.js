/*
    IGNORE THIS FILE; I was just experimenting with scoping lol, and may refer to this document while programming
    
    Guide: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
    var variables can be redeclared 
*/

var a = 5;
var a = 6;

/*
    var variables are function scoped - if it's defined in a function, then it can be used in the function (even if it was defined many blocks deep)
    Also hoisted, with undefined 
*/

function doSomething(){
    var a = 8;
    console.log("Inside function: " + a); // 8
}

doSomething();

console.log("After function: " + a); // 6 - note that this is *different* because vars are function scoped; the variable 'a' in the function is different from the global 'a'

function changeA(){
    a = 13; 
    console.log("Inside changing function: " + a); // 13
}
changeA();

console.log("Outside changing function: " + a); // 13 - expected since function changed the global var 'a'

/*
    Okay so obviously this has issues because "var" allows you to redeclare a global variable 
    "let" is a variable that is block-scoped and ALSO not able to be redeclared 

    you CAN "redeclare" a let variable in another scope though -> they're treated as different variables, so there's no actual redeclaration

    Hoisted with REFERENCE ERROR
*/