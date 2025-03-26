const prompt = require('prompt-sync')();

const personas = [
    ['Juan', 'Perez', '25256699', ['3704112233', '3704321456', '3704122321'], ['Sara', 'Ana', 'Pedro']],
];

let ejecutar = true;

do {
    const op = prompt(`### MENU ###
1. Agregar persona
2. Mostrar todos los datos
3. Filtrar por DNI
4. Salir
Seleccione la acción que desee realizar: `);

    switch (op) {

        case '1':
            console.log('<---Ingrese los datos de la persona--->');
            const nombre = prompt('Nombre: ');
            const apellido = prompt('Apellido: ');
            const dni = prompt('DNI: ');

            const telefonos = [];

            while (true) {
                const telefono = prompt('Teléfono: ');
                telefonos.push(telefono);
                if (prompt('Desea ingresar otro teléfono? (s/n): ') === 'n') {
                    break;
                };
            };

            const hijos = [];

            let añadirHijo = prompt('Desea añadir un hijo/a? (s/n): ');

            while (añadirHijo === 's') {
                const nombreHijo = prompt('Nombre del hijo/a: ');
                hijos.push(nombreHijo);
                añadirHijo = prompt('Desea añadir otro hijo/a? (s/n): ');
            };

            personas.push([nombre, apellido, dni, telefonos, hijos]);
            console.log('Persona agregada correctamente!');
            break;

        case '2':
            console.log('<---Personas en la lista--->');
            personas.forEach(persona => {
                console.log(`Nombre: ${persona[0]}`);
                console.log(`Apellido: ${persona[1]}`);
                console.log(`DNI: ${persona[2]}`);
                console.log('Teléfonos:');
                persona[3].forEach(telefono => console.log(`    - ${telefono}`));
                console.log('Hijos:');
                persona[4].forEach(hijo => console.log(`    - ${hijo}`));
                console.log('------------------');
            });
            break;

        case '3':
            const busqueda = prompt('Ingrese el DNI de la persona que desea buscar: ');

            const personaEncontrada = personas.find(persona => persona[2] === busqueda);
            if (personaEncontrada) {
                console.log(`Los datos de ${personaEncontrada[0]} ${personaEncontrada[1]} son:`);
                console.log(`DNI: ${personaEncontrada[2]}`);
                console.log('Teléfonos:');
                personaEncontrada[3].forEach(telefono => console.log(`    - ${telefono}`));
                console.log('Hijos:');
                personaEncontrada[4].forEach(hijo => console.log(`    - ${hijo}`));
                console.log('------------------');
            } else {
                console.log('Persona no encontrada');
            }
            break;

        case '4':
            console.log('Saliendo...');
            ejecutar = false;
            break;

        default:
            console.log('Opción no válida');

    };

} while (ejecutar);