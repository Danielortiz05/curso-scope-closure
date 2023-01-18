function myBox() {
    let myMoney = 0;
    function saveCoins(coins){
        myMoney += coins;
        console.log(`My Money: $${myMoney}`)
    }
    return saveCoins;
}

const myMoneyBox = myBox();

myMoneyBox(16);
myMoneyBox(8);