
//const { argv } = require('process');
const {crearArchivo} = require ('./Helpers/Multiplicar');
const argv = require ('./config/yargs');
require ('colors');

console.clear();
//const base = 6;


//const [ , , arg3 ='base=5'] = process.argv;
//const[ , base =5] = arg3.split('=');

crearArchivo (argv.b, argv.l, argv.h)
.then (nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch(err => console.log(err));