personas = [
    ['Juan', 'Perez', '25256699', ['3704112233', '3704321456', '3704122321'], ['Sara', 'Ana', 'Pedro']],
]

ejecutar = True

while ejecutar:
    op = input('''### MENU ###
1. Agregar persona
2. Mostrar todos los datos
3. Filtrar por DNI
4. Salir
Seleccione la acción que desee realizar: ''')

    def switch(op):
        match op:
            case '1':
                print('<---Ingrese los datos de la persona--->')
                nombre = input('Nombre: ')
                apellido = input('Apellido: ')
                dni = input('DNI: ')

                telefonos = []

                while True:
                    telefono = input('Teléfono: ')
                    telefonos.append(telefono)
                    if input('Desea ingresar otro teléfono? (s/n): ') == 'n':
                        break

                hijos = []

                añadir_hijo = input('Desea añadir un hijo/a? (s/n): ')

                while añadir_hijo == 's':
                    nombre_hijo = input('Nombre del hijo/a: ')
                    hijos.append(nombre_hijo)
                    añadir_hijo = input('Desea añadir otro hijo/a? (s/n): ')
                
                personas.append([nombre, apellido, dni, telefonos, hijos])
                print('Persona agregada correctamente!')

            case '2':
                print('<---Personas en la lista--->')

                for persona in personas:
                    print(f'Nombre: {persona[0]}')
                    print(f'Apellido: {persona[1]}')
                    print(f'DNI: {persona[2]}')
                    print('Teléfonos:')
                    for telefono in persona[3]:
                        print(f'    - {telefono}')
                    print('Hijos:')
                    for hijo in persona[4]:
                        print(f'    - {hijo}')
                    print('------------------')
            case '3':
                busqueda = input('Ingrese el DNI de la persona que desea buscar: ')

                for persona in personas:
                    if persona[2] == busqueda:
                        print(f'Los datos de {persona[0]} {persona[1]} son:')
                        print(f'DNI: {persona[2]}')
                        print('Teléfonos:')
                        for telefono in persona[3]:
                            print(f'    - {telefono}')
                        print('Hijos:')
                        for hijo in persona[4]:
                            print(f'    - {hijo}')
                        print('------------------')
                        break
                else:
                    print('Persona no encontrada')

            case '4':
                print('Saliendo...')
                global ejecutar
                ejecutar = False
            case _:
                print('Opción no válida')

    switch(op)