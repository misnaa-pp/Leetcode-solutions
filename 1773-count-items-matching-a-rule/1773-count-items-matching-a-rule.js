/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {

    let total = 0;

    for (let i = 0; i < items.length; i++) {

        if (ruleKey === "type" && items[i][0] === ruleValue) {
            total++;
        }

        if (ruleKey === "color" && items[i][1] === ruleValue) {
            total++;
        }

        if (ruleKey === "name" && items[i][2] === ruleValue) {
            total++;
        }
    }

    return total;
};

let items = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"]
];

console.log(countMatches(items, "color", "silver"));