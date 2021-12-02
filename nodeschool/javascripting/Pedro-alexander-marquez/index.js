//const faker = require("faker");
//console.log(faker.address.zipCode());

const student = {
    firstName: "Henry",
    lastName: "Tene",
    age: 20,
    contact: function() {
        console.log("Enviando correo...");
    },
};

const { firstName: namea, lastName } = student;
console.log(namea);

const newObj = {...student, date: "12/12/2021" };
console.log(newObj);

//closed, aplay,
//gost, hosting, programacion asincronica.