

# help(str.split)                                                                                

# Creamos una cadena de texto que contiene nombres de cursos separados por espacios.                                                                                              
cursos = 'Java JavaScript Node Python Diseño'                                                      
          
# Usamos el método split() sin argumentos para dividir la cadena en una lista de palabras.                                                                                          
lista_cursos = cursos.split()                                                                          
                                                                                                      
print(f'lista de cursos: {lista_cursos}')
print(type(lista_cursos))                                                                       

# Creamos otra cadena de texto que contiene nombres de cursos separados por comas.
cursos_separador_coma = 'Java,Python,Node,JavaScript,Spring'
# Usamos el método split() sin argumentos en esta cadena.
lista_cursos = cursos_separador_coma.split(',', 2)

print(f'lista de cursos: {lista_cursos}')  
print(len(lista_cursos))