#  Bool contiene los valores de true y false
# Los tipos numéricos, es false para el 0 (cero),true para los de mas valores
valor = 0.0
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = 28
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

# valor = {'Nombre': 'Juan','Apellido': 'Perez'}
resultado = bool(valor)
print(
    f'valor de un Diccionario con elementos: {valor}, Resultado: {resultado}')

# Sentencias de control bool
if (1,):
    print('Regresa verdadero')
else:
    print('Regresa falso')

# ciclos
variable = 17
while variable:
    print('Regresa verdadero')
    break
else:
    print('Regresa falso')
