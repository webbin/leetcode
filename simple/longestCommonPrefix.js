


var longestCommonPrefix = function(strs) {
    let prefix = '';

    const { length } = strs;

    let position = 0;
    let toMaxLength = false;
    while (!toMaxLength) {
        let currentPrefix = undefined;

        for (let i = 0; i < length; i += 1) {
            const item = strs[i];
            const char = item[position];

            if (!char) {
                toMaxLength = true;
                break;
            }

            if (i === 0) {
                currentPrefix = char;
            } else if (currentPrefix !== char) {
                break;
            } else if (i === length - 1 && currentPrefix === char) {
                prefix += char;
            }
        }
        position += 1;
    }
    
    console.log(' prefix = ', prefix);
    return prefix;
};


longestCommonPrefix(["flower","fclow","flight"]);
longestCommonPrefix(["dog","dracecar","dcar"])