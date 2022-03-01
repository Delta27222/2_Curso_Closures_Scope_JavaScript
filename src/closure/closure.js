const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log('MonyBox->$'+saveCoins);
}
moneyBox(100);
moneyBox(200);
moneyBox(300);

const moneyBox = () => {
    var saveCoins = 0;    //--->Esta sera la variable que recordara los valores que antertior mente se guardaron en la funcion
    const countCoins = (coins) => {
        saveCoins += coins;   //Aca estamos guardando el valor que queremos que sea sumado cuando se vuleva a llamar a la funcion
        console.log('MonyBox->$'+saveCoins);
    }
    return(countCoins);
}
let myMoneyBox = moneyBox();
myMoneyBox(4)
myMoneyBox(6)
myMoneyBox(10)


const moneyBox = () => {
    
    const countCoins = (coins) => {
       console.log(coins)
    }
    return countCoins;
}
let myMoneyBox = moneyBox();
myMoneyBox(4)
myMoneyBox(6)
myMoneyBox(10)