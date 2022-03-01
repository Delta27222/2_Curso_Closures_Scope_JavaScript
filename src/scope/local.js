const helloWorld = () => {
    const hello = 'Hello World!'
    console.log(hello)
}
helloWorld();

var scope = 'Im Global';
const functionScope = () => {
    var scope = 'Im just a local'
    const func = () => {
        return scope;
    }
    console.log(func()+'<----Este es el console log')
}
functionScope();