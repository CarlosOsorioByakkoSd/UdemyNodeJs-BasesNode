/**
 * Mejorar el programa para que reciba desde consola varios parametros
 * utilizando la dependencia yargs
 */

/* se Comenta las lineas siguientes ya que no se necesitan poque se optimizo
en el archivo yargs.js de la carpeta de config
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

Con la siguiente linea extraemos solo el argv del archivo de configuracion que se
esta exportando
*/

const argv = require('./config/yargs').argv

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        //.then(tabla => console.log(object);)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo} `))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}



//console.log(argv);
//console.log(argv2);