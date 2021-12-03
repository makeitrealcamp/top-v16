
let respuesta=0;
for (let i = 2; i < process.argv.length; i++) {
    respuesta += Number(process.argv[i])
    
}
console.log(respuesta);