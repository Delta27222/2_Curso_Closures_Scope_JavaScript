var hello = 'Hello';
var hello = 'Hello +';
let world = 'Hello world';
let world = 'Hello world +';
const helloWorld = 'Hello World!'


const anotherFunction = () =>{ 
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
    globalVar = 'Im Global'
}
helloWorld();
console.log(globalVar)

const anotherFunction = () => {
    var localVar = globalVar = 'Im Global'
}

console.log(globalVar)