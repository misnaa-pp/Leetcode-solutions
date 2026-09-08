var theMaximumAchievableX = function(num, t) {
    let x = num;

    for (let i = 0; i < t; i++) {
        x += 2;
    }

    return x;
};

console.log(theMaximumAchievableX(4, 1));