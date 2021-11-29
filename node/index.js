// const fs = require('fs')
// const readline = require('readline')

// //Leer

// // fs.writeFile('test.txt', 'utf-8', function(err, data) {
// //   console.log('data', data, err)

// // })
// const read = readline.createInterface({
//   input: fs.createWriteStream('test.txt')
// })

// read.on('line', function(data) {
//   //conexion base de datos para guarda
//   console.log('data', data)
// })




// // Prototipo

// console.log('this', global)

// const School =  function(name) {
//   this.name = name


// }


// School.prototype.bienvenida = function() {
//   return `Bienvenido estudiante!! ${this.name}`
// }

// const primero = new School("Leonel")
// console.log(primero.bienvenida())

// const segundo = new School("Juana")
// console.log(segundo.bienvenida())


// Object.prototype.llamar = function() {
//   return "Llamar objeto"
// }

// const obj = { }
// const obj2 = { ...obj, llamar() {
//   console.log("Llamar Object")
// }}

// console.log(obj2.llamar())


//call
//apply

// const saludar = function() {
//   console.log('SALUDAR', this.name)
// }

// saludar.call({ name: 'Leonel'}, 'Oliveros', 25)
// saludar.apply({ name: 'maria'}, ["perez", 9])

// const res = saludar.bind({name: 'juan'})
// res()
// z = 'Leonel'
// console.log(z)

// "use strict"

// const y = 'Leonel'
// console.log(y)

// Asincronismo

//callbacks

// function func1(cb) {
//   console.log('funcion 1')
//   cb()
// }

// function func2(cb1) {
//   console.log('funcion 2')
//   cb1()
// }

// function func3() {
//   console.log('funcion 3')
// }

// func1(func2(func3))

// const promesaFunction = new Promise(function(resolve, reject) {
//   //consulta a db
  
//   resolve(1)
// })

// promesaFunction
// .then(data => data + 1)
// .then(function(res) { console.log(res) })
f

const promesaFunction = async function(file) {
  try {
    await sendFile(saveFile) 
  } catch(error) {
    rollback(url, saveFile)
    throw error

  } finally {
    console.log('Finally')
  }
  
}

promesaFunction()
