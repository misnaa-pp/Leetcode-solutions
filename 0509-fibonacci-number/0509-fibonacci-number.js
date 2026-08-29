var fib = function(n) {

    let Fn = 0;
    let a = 0;
    let b = 1;
    for(let i=0; i<n; i++){
        Fn = a+b;
        a = b;
        b = Fn
    }
    return a;
};

console.log(fib(2));