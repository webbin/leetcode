/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let hasItem = true;
    let prefix = '';
    let i = 0;
    let target;
    while (hasItem) {
        if (!strs[0]) return prefix;
        target = strs[0].charAt(i);
        if (!target) return prefix;
        for (let k = 1; k < strs.length; k += 1) {
            if (!strs[k]) return prefix;
            const item = strs[k].charAt(i);
            if (!item) return prefix;
            if (item !== target) return prefix;
        }
        i += 1;
        prefix += target;
    }
};

const strList = ['', 'abcdef', 'tabcfcksf', 'sabck'];


console.log(longestCommonPrefix(strList));
