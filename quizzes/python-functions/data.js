/**
 * @file Python Functions Quiz Data
 * @description Comprehensive beginner-friendly quiz on Python functions
 * 
 * Topics covered (in order of increasing difficulty):
 * - Basic function definitions and structure
 * - Function calls and execution
 * - Parameters and arguments
 * - Return values
 * - Default parameters
 * - Variable scope (local vs global)
 * - Multiple parameters
 * - *args and **kwargs
 * - Lambda functions
 * - Nested functions
 * - Functions as first-class objects
 */

const pythonFunctionsQuizData = [
    // LEVEL 1: ABSOLUTE BEGINNER - Basic Function Structure (Questions 1-4)
    {
        question: "**¿Qué palabra clave se usa para definir una función en Python?**\n\nLas funciones son bloques de código reutilizables que realizan una tarea específica.",
        code: `# ¿Cuál es la palabra correcta?
___ mi_funcion():
    print("Hola")`,
        options: [
            "def",
            "function",
            "func",
            "define"
        ],
        correct: "def",
        explanation: `**Respuesta correcta: def**

En Python, la palabra clave \`def\` se usa para **definir** una función.

**Sintaxis básica:**
\`\`\`python
def nombre_funcion():
    # código aquí
    pass
\`\`\`

- \`def\`: Define una función
- \`nombre_funcion\`: El nombre que le das
- \`()\`: Paréntesis para parámetros (pueden estar vacíos)
- \`:\`: Dos puntos marcan el inicio del bloque
- Indentación: El código dentro debe estar indentado

**Nota:** En otros lenguajes se usa \`function\` o \`func\`, pero Python usa \`def\`.`
    },
    {
        question: "**¿Cómo se llama (ejecuta) una función en Python?**\n\nDespués de definir una función, necesitas llamarla para que se ejecute.",
        code: `def saludar():
    print("¡Hola, mundo!")

# ¿Cómo ejecutar la función?`,
        options: [
            "saludar()",
            "call saludar()",
            "execute saludar",
            "run saludar"
        ],
        correct: "saludar()",
        explanation: `**Respuesta correcta: saludar()**

Para ejecutar una función, escribes su nombre seguido de paréntesis.

**Ejemplo:**
\`\`\`python
def saludar():
    print("¡Hola, mundo!")

saludar()  # Esto ejecuta la función
# Salida: ¡Hola, mundo!
\`\`\`

**Importante:**
- Sin los paréntesis \`()\`, solo obtienes una referencia a la función
- Con paréntesis \`()\`, ejecutas la función

**Ejemplo de la diferencia:**
\`\`\`python
print(saludar)    # <function saludar at 0x...>
print(saludar())  # ¡Hola, mundo!
\`\`\``
    },
    {
        question: "**¿Qué imprime este código?**\n\nVeamos cómo funciona una función simple sin parámetros.",
        code: `def mensaje():
    print("Python es genial")

mensaje()`,
        options: [
            "Python es genial",
            "mensaje()",
            "def mensaje():",
            "None"
        ],
        correct: "Python es genial",
        explanation: `**Respuesta correcta: Python es genial**

Este es un ejemplo básico de definición y llamada de función:

1. **Definición** (\`def mensaje():\`):
   - Creamos una función llamada \`mensaje\`
   - No tiene parámetros (paréntesis vacíos)
   - El cuerpo de la función imprime un texto

2. **Llamada** (\`mensaje()\`):
   - Ejecutamos la función
   - El código dentro se ejecuta
   - Se imprime "Python es genial"

**Flujo de ejecución:**
\`\`\`python
def mensaje():           # 1. Se define la función
    print("Python es genial")  # 2. (aún no se ejecuta)

mensaje()                # 3. Se llama la función
# 4. Se ejecuta print() y sale: Python es genial
\`\`\``
    },
    {
        question: "**¿Cuántas veces se imprime 'Hola' en este código?**\n\nLas funciones pueden llamarse múltiples veces.",
        code: `def imprimir_hola():
    print("Hola")

imprimir_hola()
imprimir_hola()
imprimir_hola()`,
        options: [
            "3",
            "1",
            "0",
            "Error"
        ],
        correct: "3",
        explanation: `**Respuesta correcta: 3**

Cada llamada a la función ejecuta todo su código:

\`\`\`python
def imprimir_hola():
    print("Hola")

imprimir_hola()  # Primera llamada → imprime "Hola"
imprimir_hola()  # Segunda llamada → imprime "Hola"
imprimir_hola()  # Tercera llamada → imprime "Hola"
\`\`\`

**Salida completa:**
\`\`\`
Hola
Hola
Hola
\`\`\`

**Concepto clave:** Las funciones son **reutilizables**. Puedes llamarlas tantas veces como necesites, y cada vez se ejecutará todo el código dentro de la función.`
    },

    // LEVEL 2: PARAMETERS AND ARGUMENTS (Questions 5-8)
    {
        question: "**¿Qué imprime este código?**\n\nLas funciones pueden aceptar parámetros para trabajar con diferentes datos.",
        code: `def saludar(nombre):
    print("Hola, " + nombre)

saludar("Ana")`,
        options: [
            "Hola, Ana",
            "Hola, nombre",
            "Ana",
            "Error"
        ],
        correct: "Hola, Ana",
        explanation: `**Respuesta correcta: Hola, Ana**

Los **parámetros** permiten pasar información a una función:

1. **Parámetro** (\`nombre\`):
   - Variable definida en la declaración de la función
   - Actúa como un marcador de posición

2. **Argumento** (\`"Ana"\`):
   - Valor real que pasas cuando llamas la función
   - Reemplaza al parámetro

**Flujo:**
\`\`\`python
def saludar(nombre):        # nombre es el PARÁMETRO
    print("Hola, " + nombre)

saludar("Ana")              # "Ana" es el ARGUMENTO
# nombre = "Ana"
# print("Hola, " + "Ana")
# Salida: Hola, Ana
\`\`\`

**Otro ejemplo:**
\`\`\`python
saludar("Carlos")  # Salida: Hola, Carlos
saludar("María")   # Salida: Hola, María
\`\`\``
    },
    {
        question: "**¿Qué sucede con este código?**\n\nLos parámetros son obligatorios a menos que se especifique lo contrario.",
        code: `def sumar(a, b):
    print(a + b)

sumar(5)`,
        options: [
            "Error: faltan argumentos",
            "5",
            "None",
            "0"
        ],
        correct: "Error: faltan argumentos",
        explanation: `**Respuesta correcta: Error: faltan argumentos**

Este código genera un **TypeError** porque falta un argumento:

\`\`\`python
def sumar(a, b):  # Función espera 2 parámetros
    print(a + b)

sumar(5)  # Solo pasamos 1 argumento
# TypeError: sumar() missing 1 required positional argument: 'b'
\`\`\`

**Regla importante:** 
- El número de argumentos debe coincidir con el número de parámetros
- \`a\` recibe 5
- \`b\` no recibe nada → Error

**Soluciones:**
\`\`\`python
# Opción 1: Pasar ambos argumentos
sumar(5, 3)  # Salida: 8

# Opción 2: Usar un valor por defecto
def sumar(a, b=0):
    print(a + b)
sumar(5)  # Salida: 5
\`\`\``
    },
    {
        question: "**¿Qué imprime este código?**\n\nMultiples parámetros te permiten trabajar con varios valores.",
        code: `def calcular(x, y, z):
    resultado = x + y * z
    print(resultado)

calcular(2, 3, 4)`,
        options: [
            "14",
            "20",
            "24",
            "9"
        ],
        correct: "14",
        explanation: `**Respuesta correcta: 14**

Seguimos el orden de operaciones matemáticas (PEMDAS):

\`\`\`python
def calcular(x, y, z):
    resultado = x + y * z
    print(resultado)

calcular(2, 3, 4)
# x = 2, y = 3, z = 4
# resultado = 2 + 3 * 4
# resultado = 2 + 12    (multiplicación primero)
# resultado = 14
# Salida: 14
\`\`\`

**Orden de asignación:**
- Primer argumento (2) → primer parámetro (x)
- Segundo argumento (3) → segundo parámetro (y)
- Tercer argumento (4) → tercer parámetro (z)

**Nota sobre operadores:**
- La multiplicación (\`*\`) tiene mayor precedencia que la suma (\`+\`)
- Siempre se evalúa \`y * z\` antes de sumar \`x\``
    },
    {
        question: "**¿Qué imprime este código?**\n\nLos parámetros pueden tener valores por defecto.",
        code: `def saludar(nombre="Invitado"):
    print("Bienvenido, " + nombre)

saludar()`,
        options: [
            "Bienvenido, Invitado",
            "Bienvenido, nombre",
            "Error",
            "Bienvenido, "
        ],
        correct: "Bienvenido, Invitado",
        explanation: `**Respuesta correcta: Bienvenido, Invitado**

Los **parámetros con valores por defecto** son opcionales:

\`\`\`python
def saludar(nombre="Invitado"):  # "Invitado" es el valor por defecto
    print("Bienvenido, " + nombre)

saludar()           # No pasamos argumento
# nombre = "Invitado" (usa el valor por defecto)
# Salida: Bienvenido, Invitado

saludar("Carlos")   # Pasamos un argumento
# nombre = "Carlos" (sobrescribe el valor por defecto)
# Salida: Bienvenido, Carlos
\`\`\`

**Ventajas:**
- Funciones más flexibles
- Menos errores si olvidas pasar un argumento
- Valores sensatos cuando no se especifica nada

**Sintaxis:**
\`\`\`python
def funcion(parametro_obligatorio, parametro_opcional="valor_por_defecto"):
    pass
\`\`\``
    },

    // LEVEL 3: RETURN VALUES (Questions 9-12)
    {
        question: "**¿Qué imprime este código?**\n\nLa palabra clave `return` devuelve un valor de la función.",
        code: `def sumar(a, b):
    return a + b

resultado = sumar(3, 5)
print(resultado)`,
        options: [
            "8",
            "3 + 5",
            "None",
            "sumar(3, 5)"
        ],
        correct: "8",
        explanation: `**Respuesta correcta: 8**

\`return\` envía un valor de vuelta al punto donde se llamó la función:

\`\`\`python
def sumar(a, b):
    return a + b      # Devuelve el resultado de a + b

resultado = sumar(3, 5)  # resultado recibe el valor retornado
# La función calcula 3 + 5 = 8
# return 8
# resultado = 8

print(resultado)  # Salida: 8
\`\`\`

**Diferencia clave:**
\`\`\`python
# CON return - devuelve un valor
def sumar(a, b):
    return a + b
x = sumar(3, 5)  # x = 8

# SIN return - solo imprime
def sumar2(a, b):
    print(a + b)
y = sumar2(3, 5)  # Imprime 8, pero y = None
\`\`\`

**return** te permite usar el resultado en otras operaciones.`
    },
    {
        question: "**¿Qué valor tiene `x` después de ejecutar este código?**\n\nSi una función no tiene `return`, devuelve un valor especial.",
        code: `def imprimir_mensaje():
    print("Hola")

x = imprimir_mensaje()`,
        options: [
            "None",
            "Hola",
            "0",
            "False"
        ],
        correct: "None",
        explanation: `**Respuesta correcta: None**

Cuando una función **no tiene \`return\`**, devuelve \`None\` automáticamente:

\`\`\`python
def imprimir_mensaje():
    print("Hola")
    # No hay return, así que implícitamente: return None

x = imprimir_mensaje()
# Se ejecuta print("Hola") → imprime "Hola"
# La función retorna None
# x = None

print(x)  # Salida: None
\`\`\`

**Diferencia importante:**
\`\`\`python
# Función que IMPRIME (sin return)
def funcion1():
    print("Texto")
a = funcion1()
# Imprime: Texto
# a = None

# Función que RETORNA (con return)
def funcion2():
    return "Texto"
b = funcion2()
# No imprime nada
# b = "Texto"
\`\`\`

**Regla:** Imprimir ≠ Retornar`
    },
    {
        question: "**¿Qué imprime este código?**\n\nLas funciones pueden retornar el resultado de cálculos complejos.",
        code: `def multiplicar_y_sumar(a, b, c):
    resultado = (a * b) + c
    return resultado

valor = multiplicar_y_sumar(4, 5, 10)
print(valor)`,
        options: [
            "30",
            "90",
            "50",
            "14"
        ],
        correct: "30",
        explanation: `**Respuesta correcta: 30**

La función calcula un valor y lo retorna:

\`\`\`python
def multiplicar_y_sumar(a, b, c):
    resultado = (a * b) + c
    return resultado

valor = multiplicar_y_sumar(4, 5, 10)
# a = 4, b = 5, c = 10
# resultado = (4 * 5) + 10
# resultado = 20 + 10
# resultado = 30
# return 30
# valor = 30

print(valor)  # Salida: 30
\`\`\`

**Paso a paso:**
1. Se llama la función con argumentos 4, 5, 10
2. Se calcula (4 × 5) = 20
3. Se suma 10: 20 + 10 = 30
4. Se guarda en \`resultado\`
5. Se retorna 30
6. \`valor\` recibe 30
7. Se imprime 30`
    },
    {
        question: "**¿Qué imprime este código?**\n\n`return` puede retornar el resultado directo de una expresión.",
        code: `def es_mayor(a, b):
    return a > b

print(es_mayor(10, 5))`,
        options: [
            "True",
            "False",
            "10",
            "5"
        ],
        correct: "True",
        explanation: `**Respuesta correcta: True**

Las funciones pueden retornar valores booleanos (True/False):

\`\`\`python
def es_mayor(a, b):
    return a > b    # Retorna el resultado de la comparación

print(es_mayor(10, 5))
# a = 10, b = 5
# 10 > 5 → True
# return True
# Salida: True
\`\`\`

**Comparaciones en funciones:**
\`\`\`python
# También puedes escribirlo así (menos elegante):
def es_mayor(a, b):
    if a > b:
        return True
    else:
        return False

# Pero esto es más simple y Pythónico:
def es_mayor(a, b):
    return a > b
\`\`\`

**Uso común:**
\`\`\`python
if es_mayor(edad, 18):
    print("Es mayor de edad")
\`\`\``
    },

    // LEVEL 4: VARIABLE SCOPE (Questions 13-15)
    {
        question: "**¿Qué imprime este código?**\n\nLas variables dentro de una función son **locales** a esa función.",
        code: `def mi_funcion():
    x = 10
    print(x)

mi_funcion()
print(x)`,
        options: [
            "Error en la segunda línea print",
            "10 y 10",
            "10 y None",
            "None y 10"
        ],
        correct: "Error en la segunda línea print",
        explanation: `**Respuesta correcta: Error en la segunda línea print**

Las **variables locales** solo existen dentro de la función:

\`\`\`python
def mi_funcion():
    x = 10        # x es LOCAL a mi_funcion()
    print(x)      # Funciona: x existe aquí

mi_funcion()      # Salida: 10

print(x)          # NameError: name 'x' is not defined
# x no existe fuera de la función
\`\`\`

**Conceptos de alcance (scope):**
- **Variable local**: Definida dentro de una función, solo existe ahí
- **Variable global**: Definida fuera de funciones, accesible en todo el código

**Ejemplo correcto:**
\`\`\`python
x = 10          # x es GLOBAL

def mi_funcion():
    print(x)    # Puede leer x global

mi_funcion()    # Salida: 10
print(x)        # Salida: 10
\`\`\``
    },
    {
        question: "**¿Qué imprime este código?**\n\nLas variables globales pueden leerse desde dentro de funciones.",
        code: `nombre = "Python"

def mostrar_nombre():
    print(nombre)

mostrar_nombre()`,
        options: [
            "Python",
            "nombre",
            "Error",
            "None"
        ],
        correct: "Python",
        explanation: `**Respuesta correcta: Python**

Las funciones **pueden leer** variables globales:

\`\`\`python
nombre = "Python"  # Variable GLOBAL

def mostrar_nombre():
    print(nombre)  # Lee la variable global 'nombre'

mostrar_nombre()   # Salida: Python
\`\`\`

**Reglas de alcance:**
1. **Lectura**: Las funciones pueden leer variables globales
2. **Escritura**: Para modificar una global, se necesita \`global\`

**Ejemplo de lectura vs escritura:**
\`\`\`python
x = 5

def leer():
    print(x)  # ✅ Lectura: funciona

def escribir():
    x = 10    # ❌ Crea una variable LOCAL nueva, no modifica la global

leer()        # Salida: 5
escribir()
print(x)      # Salida: 5 (no cambió)
\`\`\`

**Para modificar una global:**
\`\`\`python
def modificar():
    global x
    x = 10
\`\`\``
    },
    {
        question: "**¿Qué imprime este código?**\n\nCada función tiene su propio espacio de variables locales.",
        code: `def funcion_a():
    x = 5
    return x

def funcion_b():
    x = 10
    return x

print(funcion_a())
print(funcion_b())`,
        options: [
            "5 y 10",
            "10 y 10",
            "5 y 5",
            "Error"
        ],
        correct: "5 y 10",
        explanation: `**Respuesta correcta: 5 y 10**

Cada función tiene su propio **espacio de nombres** (namespace):

\`\`\`python
def funcion_a():
    x = 5        # x LOCAL de funcion_a
    return x

def funcion_b():
    x = 10       # x LOCAL de funcion_b (diferente de la de funcion_a)
    return x

print(funcion_a())  # Salida: 5
print(funcion_b())  # Salida: 10
\`\`\`

**Importante:**
- Aunque ambas variables se llaman \`x\`, son **variables diferentes**
- Cada una existe solo en su propia función
- No hay conflicto entre ellas

**Analogía:**
- Es como tener dos casas diferentes, cada una con su propia cocina
- Ambas cocinas pueden tener una "mesa", pero son mesas diferentes
- Lo que pasa en una cocina no afecta a la otra

**Visualización:**
\`\`\`
funcion_a → { x: 5 }
funcion_b → { x: 10 }
\`\`\``
    },

    // LEVEL 5: ADVANCED PARAMETERS (Questions 16-18)
    {
        question: "**¿Qué imprime este código?**\n\nLos argumentos nombrados (keyword arguments) permiten especificar parámetros por nombre.",
        code: `def presentar(nombre, edad, ciudad):
    print(f"{nombre} tiene {edad} años y vive en {ciudad}")

presentar(edad=25, ciudad="Madrid", nombre="Ana")`,
        options: [
            "Ana tiene 25 años y vive en Madrid",
            "Error: orden incorrecto",
            "25 tiene Ana años y vive en Madrid",
            "None"
        ],
        correct: "Ana tiene 25 años y vive en Madrid",
        explanation: `**Respuesta correcta: Ana tiene 25 años y vive en Madrid**

Los **argumentos nombrados** (keyword arguments) permiten pasar valores en cualquier orden:

\`\`\`python
def presentar(nombre, edad, ciudad):
    print(f"{nombre} tiene {edad} años y vive en {ciudad}")

# Argumentos posicionales (orden importa)
presentar("Ana", 25, "Madrid")

# Argumentos nombrados (orden NO importa)
presentar(edad=25, ciudad="Madrid", nombre="Ana")
# Ambos producen: Ana tiene 25 años y vive en Madrid
\`\`\`

**Ventajas de argumentos nombrados:**
1. **Claridad**: Se ve qué valor es para qué parámetro
2. **Orden flexible**: No importa el orden
3. **Legibilidad**: El código es más fácil de entender

**Puedes mezclar ambos estilos:**
\`\`\`python
presentar("Ana", edad=25, ciudad="Madrid")  # ✅ Válido
presentar(nombre="Ana", 25, "Madrid")       # ❌ Error (posicionales después de nombrados)
\`\`\``
    },
    {
        question: "**¿Qué imprime este código?**\n\n`*args` permite pasar un número variable de argumentos posicionales.",
        code: `def sumar_todos(*numeros):
    total = 0
    for num in numeros:
        total += num
    return total

resultado = sumar_todos(1, 2, 3, 4, 5)
print(resultado)`,
        options: [
            "15",
            "12345",
            "[1, 2, 3, 4, 5]",
            "Error"
        ],
        correct: "15",
        explanation: `**Respuesta correcta: 15**

\`*args\` permite aceptar un **número variable de argumentos**:

\`\`\`python
def sumar_todos(*numeros):  # *numeros recoge todos los argumentos
    total = 0
    for num in numeros:     # numeros es una tupla
        total += num
    return total

resultado = sumar_todos(1, 2, 3, 4, 5)
# numeros = (1, 2, 3, 4, 5)
# total = 0
# total = 0 + 1 = 1
# total = 1 + 2 = 3
# total = 3 + 3 = 6
# total = 6 + 4 = 10
# total = 10 + 5 = 15
# return 15

print(resultado)  # Salida: 15
\`\`\`

**Flexibilidad de *args:**
\`\`\`python
sumar_todos(1)              # 1
sumar_todos(1, 2)           # 3
sumar_todos(1, 2, 3)        # 6
sumar_todos(10, 20, 30, 40) # 100
\`\`\`

**Nota:** El nombre \`args\` es convención, puedes usar cualquier nombre con \`*\``
    },
    {
        question: "**¿Qué imprime este código?**\n\n`**kwargs` permite pasar un número variable de argumentos nombrados.",
        code: `def mostrar_info(**datos):
    for clave, valor in datos.items():
        print(f"{clave}: {valor}")

mostrar_info(nombre="Carlos", edad=30, ciudad="Barcelona")`,
        options: [
            "nombre: Carlos, edad: 30, ciudad: Barcelona (en líneas separadas)",
            "Carlos 30 Barcelona",
            "{'nombre': 'Carlos', 'edad': 30, 'ciudad': 'Barcelona'}",
            "Error"
        ],
        correct: "nombre: Carlos, edad: 30, ciudad: Barcelona (en líneas separadas)",
        explanation: `**Respuesta correcta: nombre: Carlos, edad: 30, ciudad: Barcelona (en líneas separadas)**

\`**kwargs\` permite aceptar **argumentos nombrados variables**:

\`\`\`python
def mostrar_info(**datos):  # **datos recoge argumentos nombrados
    for clave, valor in datos.items():
        print(f"{clave}: {valor}")

mostrar_info(nombre="Carlos", edad=30, ciudad="Barcelona")
# datos = {'nombre': 'Carlos', 'edad': 30, 'ciudad': 'Barcelona'}

# El bucle imprime cada par clave-valor:
# nombre: Carlos
# edad: 30
# ciudad: Barcelona
\`\`\`

**Características de **kwargs:**
- Recoge argumentos en un **diccionario**
- Las claves son los nombres de los argumentos
- Los valores son los valores pasados

**Ejemplo de flexibilidad:**
\`\`\`python
mostrar_info(a=1)                    # a: 1
mostrar_info(x=10, y=20, z=30)       # x: 10, y: 20, z: 30
mostrar_info(nombre="Ana", edad=25)  # nombre: Ana, edad: 25
\`\`\`

**Nota:** El nombre \`kwargs\` es convención (keyword arguments)`
    },

    // LEVEL 6: LAMBDA FUNCTIONS (Questions 19-20)
    {
        question: "**¿Qué imprime este código?**\n\nLas funciones lambda son funciones anónimas de una sola línea.",
        code: `doble = lambda x: x * 2

resultado = doble(5)
print(resultado)`,
        options: [
            "10",
            "5",
            "x * 2",
            "Error"
        ],
        correct: "10",
        explanation: `**Respuesta correcta: 10**

Las **funciones lambda** son funciones pequeñas y anónimas:

\`\`\`python
# Función lambda
doble = lambda x: x * 2

# Equivalente a:
def doble(x):
    return x * 2

resultado = doble(5)
# x = 5
# x * 2 = 5 * 2 = 10
# return 10
# resultado = 10

print(resultado)  # Salida: 10
\`\`\`

**Sintaxis lambda:**
\`\`\`python
lambda parametros: expresion
\`\`\`

- **lambda**: Palabra clave
- **parametros**: Los parámetros de entrada
- **:** Separador
- **expresion**: Lo que se retorna (automáticamente)

**Ejemplos:**
\`\`\`python
suma = lambda a, b: a + b
print(suma(3, 4))  # 7

cuadrado = lambda n: n ** 2
print(cuadrado(5))  # 25

es_par = lambda n: n % 2 == 0
print(es_par(4))  # True
\`\`\`

**Cuándo usar lambda:**
- Funciones muy simples de una línea
- Como argumentos de otras funciones (map, filter, sorted)`
    },
    {
        question: "**¿Qué imprime este código?**\n\nLas funciones lambda se usan comúnmente con funciones de orden superior.",
        code: `numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(lambda x: x ** 2, numeros))
print(cuadrados)`,
        options: [
            "[1, 4, 9, 16, 25]",
            "[2, 4, 6, 8, 10]",
            "[1, 2, 3, 4, 5]",
            "25"
        ],
        correct: "[1, 4, 9, 16, 25]",
        explanation: `**Respuesta correcta: [1, 4, 9, 16, 25]**

\`map()\` aplica una función a cada elemento de una lista:

\`\`\`python
numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(lambda x: x ** 2, numeros))
# map aplica la lambda a cada número:
# 1 ** 2 = 1
# 2 ** 2 = 4
# 3 ** 2 = 9
# 4 ** 2 = 16
# 5 ** 2 = 25
# Resultado: [1, 4, 9, 16, 25]

print(cuadrados)  # [1, 4, 9, 16, 25]
\`\`\`

**Desglosando map():**
1. **map()**: Función que transforma cada elemento
2. **lambda x: x ** 2**: Función que eleva al cuadrado
3. **numeros**: La lista a transformar
4. **list()**: Convierte el resultado a lista

**Sin lambda (equivalente):**
\`\`\`python
def al_cuadrado(x):
    return x ** 2

cuadrados = list(map(al_cuadrado, numeros))
\`\`\`

**Otros usos comunes de lambda:**
\`\`\`python
# Con filter
pares = list(filter(lambda x: x % 2 == 0, numeros))

# Con sorted
nombres = ['ana', 'Carlos', 'beatriz']
ordenados = sorted(nombres, key=lambda x: x.lower())
\`\`\``
    },

    // LEVEL 7: ADVANCED CONCEPTS (Questions 21-22)
    {
        question: "**¿Qué imprime este código?**\n\nLas funciones pueden estar anidadas dentro de otras funciones.",
        code: `def exterior(x):
    def interior(y):
        return x + y
    return interior(5)

resultado = exterior(10)
print(resultado)`,
        options: [
            "15",
            "10",
            "5",
            "Error"
        ],
        correct: "15",
        explanation: `**Respuesta correcta: 15**

Las **funciones anidadas** (nested functions) pueden acceder a variables de la función externa:

\`\`\`python
def exterior(x):           # x = 10
    def interior(y):       # Función anidada
        return x + y       # Accede a x de exterior y recibe y
    return interior(5)     # Llama a interior con y = 5

resultado = exterior(10)
# x = 10
# Se define interior()
# Se llama interior(5)
#   y = 5
#   return 10 + 5 = 15
# return 15
# resultado = 15

print(resultado)  # Salida: 15
\`\`\`

**Conceptos clave:**
- **Closure**: La función interna "recuerda" las variables de la función externa
- **Scope anidado**: \`interior\` puede acceder a \`x\` de \`exterior\`

**Otro ejemplo:**
\`\`\`python
def crear_multiplicador(n):
    def multiplicar(x):
        return x * n
    return multiplicar

doble = crear_multiplicador(2)
triple = crear_multiplicador(3)

print(doble(5))   # 10
print(triple(5))  # 15
\`\`\``
    },
    {
        question: "**¿Qué imprime este código?**\n\nLas funciones son objetos de primera clase: pueden pasarse como argumentos.",
        code: `def aplicar_operacion(func, x, y):
    return func(x, y)

def sumar(a, b):
    return a + b

def multiplicar(a, b):
    return a * b

resultado1 = aplicar_operacion(sumar, 5, 3)
resultado2 = aplicar_operacion(multiplicar, 5, 3)
print(resultado1, resultado2)`,
        options: [
            "8 15",
            "15 8",
            "5 3",
            "Error"
        ],
        correct: "8 15",
        explanation: `**Respuesta correcta: 8 15**

En Python, las funciones son **objetos de primera clase**: pueden pasarse como argumentos:

\`\`\`python
def aplicar_operacion(func, x, y):
    return func(x, y)  # Llama a la función recibida

def sumar(a, b):
    return a + b

def multiplicar(a, b):
    return a * b

resultado1 = aplicar_operacion(sumar, 5, 3)
# func = sumar (la función, no su resultado)
# x = 5, y = 3
# return sumar(5, 3) = 8

resultado2 = aplicar_operacion(multiplicar, 5, 3)
# func = multiplicar
# x = 5, y = 3
# return multiplicar(5, 3) = 15

print(resultado1, resultado2)  # 8 15
\`\`\`

**Conceptos importantes:**
- **Función como objeto**: Pasamos \`sumar\` sin paréntesis (no \`sumar()\`)
- **Callback**: \`func\` es un "callback" que se ejecuta dentro de otra función
- **Flexibilidad**: Podemos pasar diferentes funciones para diferentes comportamientos

**Usos comunes:**
\`\`\`python
# Ordenar con función personalizada
nombres.sort(key=str.lower)

# Event handlers en interfaces
button.on_click(mi_funcion)

# map, filter, reduce
list(map(mi_funcion, datos))
\`\`\``
    }
];
