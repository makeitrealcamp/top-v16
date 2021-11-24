const pets = ['cat','dog','rat']
pets.forEach((item,i) => {
    pets[i] = pets[i]+'s'
})
console.log(pets)
