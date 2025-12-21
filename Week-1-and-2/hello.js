const nums = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

let min = nums[0];
for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] < min) min = nums[i];
}
console.log(nums, min);


const nums2 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
let max = nums2[0];
for (let i = 1; i < nums2.length; i += 1) {
    if (nums2[i] > max) max = nums2[i];
}
console.log(nums2, max);

const nums3 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
let sum = 0;
for (let i = 0; i < nums3.length; i += 1) {
    sum += nums3[i];
}
console.log(nums3, sum);

const nums4 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
let product = 1;
for (let i = 0; i < nums4.length; i += 1) {
    product *= nums4[i];
}
console.log(nums4, product);

const nums5 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

const min1 = Math.min(...nums5);
const max1 = Math.max(...nums5);
console.log(nums5, min1, max1);

const nums6 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
const sum1 = nums6.reduce((acc, val) => acc + val, 0);
console.log(nums6, sum1);