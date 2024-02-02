// 904. Fruit Into Baskets
// Medium
// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

var totalFruit = function(fruits) {
    const distinctElemsLimit = 2;
    let windowStart = 0; const distinctElemsMap = {}; let len = 0; let totalFruits = 0;
    let maxFruitsCollected = 0;
    for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        if(!(fruits[windowEnd] in distinctElemsMap)) {
            distinctElemsMap[fruits[windowEnd]] = 1;
            totalFruits++;
            len++;
        } else {
            distinctElemsMap[fruits[windowEnd]]++;
            totalFruits++;
        }
        while(len > distinctElemsLimit) {
            distinctElemsMap[fruits[windowStart]]--;
            totalFruits--;
            if(distinctElemsMap[fruits[windowStart]] === 0) {
                delete distinctElemsMap[fruits[windowStart]];
                len--;
            }
            windowStart++;
        }
        maxFruitsCollected = Math.max(maxFruitsCollected, totalFruits);
    }
    return maxFruitsCollected;
};
