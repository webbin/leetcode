

const isPalindrome = function(x) {
    if (x < 0) return false;

    const str = x.toString().split('').reverse().join('');
    console.log(str);
    const reverse = Number(str);
    return x === reverse;
};

function isPail(x) {
    let temp = x,
        y = 0;
    while (x !== 0) {
        y = y * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return temp === y;
}

const num = 123456654321;

console.log(isPalindrome(num));

