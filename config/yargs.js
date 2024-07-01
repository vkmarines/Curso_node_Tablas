//const { options } = require('yargs');
const colors = require ('colors');
const argv = require('yargs')
.option('b', {
    alias:'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
} )

.option('l', {
    alias:'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra el resultado de la tabla de multiplicar'
})

.option('h', {
    alias:'hasta',
    type: 'number',
    default: 10,
    describe: 'Muestra hasta que numero se debe hacer la multiplicacion'
})

.check ((argv, options) =>{

    if (isNaN(argv.b)){

        throw 'La base debe ser un numero'
    }
    return true;
})
.argv;

module.exports = argv;
