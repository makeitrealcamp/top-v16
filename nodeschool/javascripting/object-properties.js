const course = {
  title: "Make it real",
  description: "Academia de desarrolladores",
  date: 333,
  sayHello: function(name, academy, status = false) { 
    // construyendo un objeto para enviar al backend
    console.log(status)
    console.log(`hola mundo ${name} ${academy} ${this.title}`)
  },
}

course.sayHello("Leonel de ", "MIR")

