function fib(n) {
    if ((n == 0) || (n == 1)) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

function timed(f){
    return (n) => {
        const s0 = Date.now();
        let result  = f(n);
        const s1 = Date.now();
        return result + `\nTook ${s1 - s0}ms`;
    }
}

const timedFib = timed(fib);
console.log(timedFib(40));