const args = process.argv;
function sumVals(arr) {
  count = 0;
  for (let i = 2; i < arr.length; i++) {
    count = count + Number(arr[i]);
  }
  return count;
}

console.log(sumVals(args));
