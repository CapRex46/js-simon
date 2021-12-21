
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

const numbers = [];


while (numbers.length < 2) {
    const randomNumber = getRandom(1, 10);
    if (!numbers.includes(randomNumber)){
        numbers.push(randomNumber)
    }
}

setTimeout(writenum,2000);


function writenum(){
  document.getElementById("demo"),innerHTML = document.write(numbers);
}


setTimeout(choosenum,5000);

function choosenum(){
    const user = parseInt(prompt("inserire i numeri usciti in precedenza"))
    if (user == numbers) {
        console.log("hai vinto")
    } else {
        console.log("hai perso")
    }
}


