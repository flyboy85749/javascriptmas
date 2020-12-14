function arrayMaximalAdjacentDifference(nums) {
    //  write code here.
    min = nums[0];
    max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        
        min = Math.min(min, (nums[i] + 1));
        max = Math.max(max, nums[i]);
        

    }
    return Math.abs(max - min);
}

console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));