
function alternateDigitSum(n) {
    const digits = String(n);

    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        const digit = Number(digits[i]);

        if (i % 2 === 0) {
            sum += digit;
        } else {
            sum -= digit;
        }
    }

    return sum;
}

console.log(alternateDigitSum(521));