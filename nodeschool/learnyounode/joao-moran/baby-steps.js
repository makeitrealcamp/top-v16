const num = process.argv.reduce((prev, current, index) => {
    if (index < 2) return 0;
    return prev + parseInt(current);
}, 0);
console.log(num)
