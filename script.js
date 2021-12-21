
function gerRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

const numbers = [];


while (numbers.length < 5) {
    const randomNumber = gerRandom(1, 10);
    if (!numbers.includes(randomNumber)){
        numbers.push(randomNumber)
    }
}

document.write(numbers);
