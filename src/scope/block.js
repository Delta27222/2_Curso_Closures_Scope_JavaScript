const fruits = () => {
    if (true) {
        var  fruits1 = 'Apple';   //Puede usarse dentro y fuera del bloque
        let  fruits2 = 'Banana';  //->Solo pueden usarse dentro del bloque
        const  fruits3 = 'Mango'; //->Solo pueden usarse dentro del bloque
    }
    console.log(fruits1);
    console.log(fruits2); 
    console.log(fruits3);
}

fruits();

var x= 1; 
{
    var x = 2;
    console.log(x);
}
console.log(x)



const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log (i);
        }, 1000)
    }
};
anotherFunction()