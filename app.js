/**
 * Requerir paquetes.
 * Vamos a grabar en un archivo de texto mi tabla de multiplicar.
 * Vamos a la web de nodejs.org, ingresamos a docs, y escogemos la version
 * que tenemos intalado. Alli buscamod File System.
 * Al inicio se acostumbra a poner todos los required:
 * const fs = require('fs');
 */
/**
 * Tipos de require
 * 1. require de un proyecto propio de node, esa libreria ya existe en node
 * y simplemente la definimos y no hay que hacer nada mas.
 * 2. Existe otra como express que no es una libreria que viene propia en 
 * node, no existe en la documentación de node, es un paquete que se intala.
 * Estos son paquetes que no son nativos de node, pero son expanciones o 
 * codigos que otras personas hicieron por nosotros.
 * 3. Tenemos los archivos o require que nosotros creamos para el proyecto
 * y se identifican con un ./PATH de donde se encuentra el archivo
 */
//1
//const fs = require('fs');
//2
//const fs = require('express');
//3
//const fs = require('./ubicacion');


const { crearArchivo } = require('./multiplicar/multiplicar')
    //let base = 'abc';

/**
 * En el objeto process que esta disponible en toda la aplicación existe
 * algo muy importante llamado argv o argumentos
 */

//console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]

//console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo} `))
    .catch(e => console.log(e));