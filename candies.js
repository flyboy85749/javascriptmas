/********************* DAY 1 Javascriptmas *************************/
/* n children have m pieces of candy. How many pieces of candy will be eaten by each child? 
n = children
m = candies
If you have 10 candies and 3 children, each child will eat 3 pieces, for a total of 9 pieces.
*/

function candies(children, candy){
let candiesPerChild = Math.floor(candy / children);
let totalEaten = candiesPerChild * children;
console.log(`There were ${candy} pieces of candy, and ${children} children. Each child ate ${candiesPerChild} pieces, for a total of ${totalEaten} pieces of candy.`);
}

candies(5, 25);