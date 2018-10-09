/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    const list = [];
    for (let i =0; i<s.length;i += 1) {
        const ch = s.charAt(i);
        switch (ch) {
            case '{':
            case '[':
            case '(':
                list.push(ch);
                break;
            case '}':
                if (list[list.length - 1] !== '{') {
                    return false;
                } else {
                    list.pop();
                }
                break;
            case ')':
                if (list[list.length - 1] !== '(') {
                    return false;
                } else {
                    list.pop();
                }
                break;
            case ']':
                if (list[list.length - 1] !== '[') {
                    return false;
                } else {
                    list.pop();
                }
                break;
            default:
                break;
        }
    }
    return list.length === 0;
};

const str = '[{}([{}()])]';
const str1 = '[{]}';
const str2 = '[{';

console.log(isValid(str));
console.log(isValid(str1));
console.log(isValid(str2));
