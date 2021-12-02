let total_sum = 0;
const arguments = process.argv;
for (let index = 2; index < arguments.length; index++) {
    const element = arguments[index];
    total_sum += Number(element);
}
console.log(total_sum)