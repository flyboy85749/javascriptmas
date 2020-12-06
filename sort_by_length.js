// Day 6 of javascriptmas
function sortByLength(strs) {
    //  write code here.
    let sorted = strs.sort((a, b) => a.length - b.length);
    return sorted;
}