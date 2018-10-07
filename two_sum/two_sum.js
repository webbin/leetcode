


function twoSumInList(nums, target) {
    const map = new Map();

    // nums.forEach((item, index) => {
    //     map.set(item,index);
    // });

    for (let index = 0; index < nums.length; index += 1) {
        map.set(nums[index], index);
        const left = target - nums[index];
        if (map.has(left) && map.get(left) !== index) {
            return [index, map.get(target - nums[index])];
        }
    }

    return [0, 0];
    // nums.forEach((item, index) => {
    //     if (hasFound) return;
    //     for (let i = 1; i < nums.length - index; i += 1) {
    //         if (item + nums[index + i] === target) {
    //             left = item;
    //             right = nums[index + i];
    //             hasFound = true;
    //             break;
    //         }
    //     }
    // });

    // for (let index = 0; index < nums.length; index += 1) {
    //     if (hasFound) break;
    //     const item = nums[index];
    //     for (let i = 1; i < length - index; i += 1) {
    //         if (item + nums[index + i] === target) {
    //             left = item;
    //             right = nums[index + i];
    //             hasFound = true;
    //             break;
    //         }
    //     }
    // }
}

const l = [3,2,4,0,8,44,9,7];
const t = 16;

console.log(twoSumInList(l, t));
