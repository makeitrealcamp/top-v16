const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filtered=numbers.filter(function(number){
    return number % 2 === 0
})

let imp=numbers.filter(function(num){
    return num%2!==0
})


const numbers2=[2,4,6,8,10, 12,14,18]
let filtro=numbers2.filter(function(n){
    return n>=8
})
console.log(filtro)
console.log(" ")
console.log(filtered)
console.log(imp)