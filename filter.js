function extractEachKth(nums, index) {
    //  write code here.
// want to filter out numbers at index = 3; every third number
    let filtered = nums.filter(num => num % index != 0);
    return filtered;
}

console.log(extractEachKth([1,2,3,4,5,6,7,8,9,10],3));