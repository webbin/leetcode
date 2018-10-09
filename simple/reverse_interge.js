

function reverse(x) {
    let value = 0;
    let positive = true;
    let str = x.toString();
    if (str.indexOf('-') === 0) {
        positive = false;
        str = str.substr(1, str.length - 1);
    }
    for (let i = 0; i < str.length; i += 1) {
        value += Number(str.charAt(i)) * Math.pow(10, i)
    }
    // num = parseInt(String(Math.abs(x)).split('').reverse().join(''));
    if (positive) {
        return value > (Math.pow(2, 31) - 1) ? 0 : value;
    } else {
        return value > (Math.pow(2, 31)) ? 0 : 0 - value;
    }
}

function reverseWithNumber(x) {
    let number = x;
    let result = 0;

    while (number > 0) {
        const last = number % 10;
        result = result * 10 + last;
        number = Math.floor(number / 10);
    }
    return result;
}


const number = 1534236469;
console.log(reverse(number));
console.log(reverseWithNumber(number));
// const s = number / 10;
// const i = Math.floor(s);
// console.log(Math.floor((s-i) * 10));
// console.log(Math.pow(2, 31) - 1);
