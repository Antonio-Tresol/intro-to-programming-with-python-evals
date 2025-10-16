/**
 * @file Python Lists Quiz Data
 * @description Comprehensive quiz covering Python lists from basics to advanced topics
 * 
 * Topics covered:
 * - List creation and indexing (Questions 1-5)
 * - List methods and operations (Questions 6-10)
 * - List slicing (Questions 11-15)
 * - List comprehensions (Questions 16-18)
 * - Nested lists (Questions 19-20)
 * - Advanced operations (Questions 21-24)
 */

const pythonListsQuizData = [
    // EASY LEVEL - Basic List Creation and Indexing (Questions 1-5)
    {
        question: "**Creación básica de lista**\n\n¿Cuál es la forma correcta de crear una lista vacía en Python?",
        code: `from typing import List

# ¿Cuál de estas opciones crea una lista vacía?`,
        options: [
            "mi_lista: List = []",
            "mi_lista: List = {}",
            "mi_lista: List = ()",
            "mi_lista: List = None"
        ],
        correct: "mi_lista: List = []",
        explanation: `**Respuesta correcta: mi_lista: List = []**

En Python, hay dos formas principales de crear una lista vacía:
1. **Usando corchetes**: \`mi_lista = []\` ← Más común y pythonic
2. **Usando el constructor**: \`mi_lista = list()\`

Los otros símbolos representan:
- \`{}\` crea un diccionario vacío
- \`()\` crea una tupla vacía
- \`None\` no es una colección, es un valor especial que representa "nada"

**Type Hints**: \`List\` (del módulo \`typing\`) indica que la variable contendrá una lista.
`
    },
    {
        question: "**Acceso a elementos por índice**\n\n¿Qué valor devuelve la siguiente expresión?",
        code: `from typing import List

numeros: List[int] = [10, 20, 30, 40, 50]
resultado = numeros[2]`,
        options: [
            "10",
            "20",
            "30",
            "40"
        ],
        correct: "30",
        explanation: `**Respuesta correcta: 30**

En Python, los índices de las listas empiezan en **0**:
- \`numeros[0]\` → 10 (primer elemento)
- \`numeros[1]\` → 20 (segundo elemento)
- \`numeros[2]\` → 30 (tercer elemento) ✓
- \`numeros[3]\` → 40 (cuarto elemento)
- \`numeros[4]\` → 50 (quinto elemento)

**Regla importante**: Para obtener el elemento en la posición N, usamos el índice N-1.
`
    },
    {
        question: "**Índices negativos**\n\n¿Qué elemento retorna \`frutas[-1]\`?",
        code: `from typing import List

frutas: List[str] = ["manzana", "banana", "naranja", "uva"]
ultimo = frutas[-1]`,
        options: [
            "\"manzana\"",
            "\"banana\"",
            "\"naranja\"",
            "\"uva\""
        ],
        correct: "\"uva\"",
        explanation: `**Respuesta correcta: "uva"**

Los **índices negativos** en Python cuentan desde el final de la lista:
- \`frutas[-1]\` → "uva" (último elemento) ✓
- \`frutas[-2]\` → "naranja" (penúltimo elemento)
- \`frutas[-3]\` → "banana"
- \`frutas[-4]\` → "manzana" (primer elemento)

**Ventaja**: No necesitas saber la longitud de la lista para acceder al último elemento.

Comparación:
- \`frutas[len(frutas) - 1]\` → Forma larga
- \`frutas[-1]\` → Forma pythonic ✓
`
    },
    {
        question: "**Longitud de una lista**\n\n¿Cuál es el resultado de la siguiente expresión?",
        code: `from typing import List

colores: List[str] = ["rojo", "verde", "azul"]
cantidad = len(colores)`,
        options: [
            "2",
            "3",
            "4",
            "Error"
        ],
        correct: "3",
        explanation: `**Respuesta correcta: 3**

La función \`len()\` retorna el **número de elementos** en una lista:
- La lista tiene 3 elementos: "rojo", "verde", "azul"
- \`len(colores)\` → 3

**Casos comunes**:
- \`len([])\` → 0 (lista vacía)
- \`len([1])\` → 1 (un elemento)
- \`len([1, 2, 3, 4, 5])\` → 5 (cinco elementos)

**Uso típico**: Verificar si una lista está vacía con \`if len(lista) == 0:\` o simplemente \`if not lista:\`
`
    },
    {
        question: "**Modificar elementos**\n\n¿Qué contiene la lista después de ejecutar este código?",
        code: `from typing import List

numeros: List[int] = [1, 2, 3, 4, 5]
numeros[1] = 10
numeros[3] = 20`,
        options: [
            "[1, 10, 3, 20, 5]",
            "[10, 2, 3, 20, 5]",
            "[1, 2, 10, 4, 20]",
            "[10, 20, 3, 4, 5]"
        ],
        correct: "[1, 10, 3, 20, 5]",
        explanation: `**Respuesta correcta: [1, 10, 3, 20, 5]**

Las listas en Python son **mutables**, lo que significa que podemos cambiar sus elementos:

**Estado inicial**: \`[1, 2, 3, 4, 5]\`
1. \`numeros[1] = 10\` → \`[1, 10, 3, 4, 5]\` (cambia el índice 1)
2. \`numeros[3] = 20\` → \`[1, 10, 3, 20, 5]\` (cambia el índice 3)

**Recordatorio de índices**:
- Índice 0 → 1
- Índice 1 → 2 (cambiado a 10)
- Índice 2 → 3
- Índice 3 → 4 (cambiado a 20)
- Índice 4 → 5
`
    },

    // INTERMEDIATE LEVEL - List Methods (Questions 6-10)
    {
        question: "**Método append()**\n\n¿Qué contiene la lista después de ejecutar este código?",
        code: `from typing import List

animales: List[str] = ["perro", "gato"]
animales.append("pájaro")
animales.append("pez")`,
        options: [
            "[\"perro\", \"gato\", \"pájaro\", \"pez\"]",
            "[\"pájaro\", \"pez\", \"perro\", \"gato\"]",
            "[\"perro\", \"gato\"]",
            "Error"
        ],
        correct: "[\"perro\", \"gato\", \"pájaro\", \"pez\"]",
        explanation: `**Respuesta correcta: ["perro", "gato", "pájaro", "pez"]**

El método \`append()\` añade un elemento **al final** de la lista:

**Proceso paso a paso**:
1. Estado inicial: \`["perro", "gato"]\`
2. \`append("pájaro")\` → \`["perro", "gato", "pájaro"]\`
3. \`append("pez")\` → \`["perro", "gato", "pájaro", "pez"]\` ✓

**Características de append()**:
- Añade **un solo elemento** al final
- Modifica la lista original (no retorna una nueva lista)
- Es muy eficiente (O(1) en complejidad)
- Retorna \`None\`, no la lista modificada

**Ejemplo común**:
\`\`\`python
numeros: List[int] = []
for i in range(5):
    numeros.append(i)  # [0, 1, 2, 3, 4]
\`\`\`
`
    },
    {
        question: "**Método extend() vs append()**\n\n¿Cuál es la diferencia entre estos dos códigos?",
        code: `from typing import List

# Código A
lista_a: List[int] = [1, 2]
lista_a.append([3, 4])

# Código B
lista_b: List[int] = [1, 2]
lista_b.extend([3, 4])`,
        options: [
            "Ambas producen [1, 2, 3, 4]",
            "A produce [1, 2, [3, 4]] y B produce [1, 2, 3, 4]",
            "A produce [1, 2, 3, 4] y B produce [1, 2, [3, 4]]",
            "Ambas producen [1, 2, [3, 4]]"
        ],
        correct: "A produce [1, 2, [3, 4]] y B produce [1, 2, 3, 4]",
        explanation: `**Respuesta correcta: A produce [1, 2, [3, 4]] y B produce [1, 2, 3, 4]**

**Diferencia clave**:
- \`append(item)\`: Añade el elemento **como un solo item** (incluso si es una lista)
- \`extend(iterable)\`: Añade **cada elemento** del iterable

**Código A con append()**:
\`\`\`python
lista_a = [1, 2]
lista_a.append([3, 4])
# Resultado: [1, 2, [3, 4]]  ← Lista anidada
\`\`\`

**Código B con extend()**:
\`\`\`python
lista_b = [1, 2]
lista_b.extend([3, 4])
# Resultado: [1, 2, 3, 4]  ← Lista plana
\`\`\`

**Equivalencia**:
\`lista.extend([3, 4])\` es igual a \`lista += [3, 4]\`

**Cuándo usar cada uno**:
- \`append()\`: Para añadir un elemento individual
- \`extend()\`: Para combinar dos listas
`
    },
    {
        question: "**Método insert()**\n\n¿Qué contiene la lista después de ejecutar este código?",
        code: `from typing import List

numeros: List[int] = [1, 2, 4, 5]
numeros.insert(2, 3)`,
        options: [
            "[1, 2, 3, 4, 5]",
            "[3, 1, 2, 4, 5]",
            "[1, 2, 4, 5, 3]",
            "[1, 3, 2, 4, 5]"
        ],
        correct: "[1, 2, 3, 4, 5]",
        explanation: `**Respuesta correcta: [1, 2, 3, 4, 5]**

El método \`insert(indice, elemento)\` inserta un elemento en una **posición específica**:

**Sintaxis**: \`lista.insert(posición, valor)\`

**Proceso**:
1. Estado inicial: \`[1, 2, 4, 5]\`
2. \`insert(2, 3)\` → Inserta 3 en el índice 2
3. Los elementos desde el índice 2 se desplazan a la derecha
4. Resultado: \`[1, 2, 3, 4, 5]\` ✓

**Visualización**:
\`\`\`
Antes:  [1, 2, 4, 5]
         0  1  2  3  ← índices
               ↑
         insert(2, 3)
               
Después: [1, 2, 3, 4, 5]
         0  1  2  3  4
\`\`\`

**Notas importantes**:
- Si el índice es mayor que la longitud, añade al final
- Si el índice es negativo, cuenta desde el final
`
    },
    {
        question: "**Método remove()**\n\n¿Qué contiene la lista después de ejecutar este código?",
        code: `from typing import List

frutas: List[str] = ["manzana", "banana", "manzana", "uva"]
frutas.remove("manzana")`,
        options: [
            "[\"banana\", \"uva\"]",
            "[\"manzana\", \"banana\", \"uva\"]",
            "[\"banana\", \"manzana\", \"uva\"]",
            "[\"manzana\", \"banana\", \"manzana\", \"uva\"]"
        ],
        correct: "[\"banana\", \"manzana\", \"uva\"]",
        explanation: `**Respuesta correcta: ["banana", "manzana", "uva"]**

El método \`remove(valor)\` elimina **la primera aparición** del valor especificado:

**Proceso**:
1. Estado inicial: \`["manzana", "banana", "manzana", "uva"]\`
2. \`remove("manzana")\` → Busca "manzana"
3. Encuentra la primera en índice 0 y la elimina
4. Resultado: \`["banana", "manzana", "uva"]\` ✓

**Características importantes**:
- Elimina **solo la primera** aparición
- Si el valor no existe, lanza un \`ValueError\`
- Modifica la lista original
- No retorna ningún valor (\`None\`)

**Para eliminar todas las apariciones**:
\`\`\`python
frutas = [f for f in frutas if f != "manzana"]
# O con un loop:
while "manzana" in frutas:
    frutas.remove("manzana")
\`\`\`

**Alternativas**:
- \`pop(indice)\`: Elimina por índice y retorna el valor
- \`del lista[indice]\`: Elimina por índice sin retornar
`
    },
    {
        question: "**Método pop()**\n\n¿Qué valor retorna y cómo queda la lista?",
        code: `from typing import List

numeros: List[int] = [10, 20, 30, 40]
valor = numeros.pop(1)`,
        options: [
            "valor = 20, lista = [10, 30, 40]",
            "valor = 10, lista = [20, 30, 40]",
            "valor = 30, lista = [10, 20, 40]",
            "valor = 40, lista = [10, 20, 30]"
        ],
        correct: "valor = 20, lista = [10, 30, 40]",
        explanation: `**Respuesta correcta: valor = 20, lista = [10, 30, 40]**

El método \`pop(indice)\` hace dos cosas:
1. **Elimina** el elemento en la posición especificada
2. **Retorna** ese elemento

**Proceso**:
1. Estado inicial: \`[10, 20, 30, 40]\`
2. \`pop(1)\` → Elimina elemento en índice 1 (que es 20)
3. Retorna: 20
4. Lista resultante: \`[10, 30, 40]\` ✓

**Variantes de pop()**:
\`\`\`python
# Sin argumentos: elimina el último elemento
lista = [1, 2, 3]
ultimo = lista.pop()  # 3, lista = [1, 2]

# Con índice: elimina elemento en esa posición
lista = [1, 2, 3]
medio = lista.pop(1)  # 2, lista = [1, 3]

# Con índice negativo
lista = [1, 2, 3]
primero = lista.pop(-3)  # 1, lista = [2, 3]
\`\`\`

**Uso común**: Implementar una pila (stack)
\`\`\`python
pila: List[int] = []
pila.append(1)  # Push
valor = pila.pop()  # Pop
\`\`\`
`
    },

    // INTERMEDIATE-ADVANCED - List Slicing (Questions 11-15)
    {
        question: "**Slicing básico**\n\n¿Qué resultado produce esta expresión de slicing?",
        code: `from typing import List

letras: List[str] = ["a", "b", "c", "d", "e", "f"]
resultado = letras[1:4]`,
        options: [
            "[\"b\", \"c\", \"d\"]",
            "[\"a\", \"b\", \"c\", \"d\"]",
            "[\"b\", \"c\", \"d\", \"e\"]",
            "[\"a\", \"b\", \"c\"]"
        ],
        correct: "[\"b\", \"c\", \"d\"]",
        explanation: `**Respuesta correcta: ["b", "c", "d"]**

El **slicing** con \`lista[inicio:fin]\` extrae una sublista:
- **Incluye** el índice de inicio
- **Excluye** el índice de fin

**Proceso**:
\`\`\`python
letras = ["a", "b", "c", "d", "e", "f"]
#         0    1    2    3    4    5  ← índices
#              ↑         ↑
#           inicio      fin
letras[1:4]  # ["b", "c", "d"]
\`\`\`

**Regla nemotécnica**: \`[inicio:fin]\` = desde \`inicio\` hasta \`fin - 1\`

**Ejemplos adicionales**:
\`\`\`python
letras[0:3]   # ["a", "b", "c"]
letras[2:5]   # ["c", "d", "e"]
letras[0:6]   # ["a", "b", "c", "d", "e", "f"] (toda la lista)
\`\`\`

**Slicing con omisiones**:
\`\`\`python
letras[:3]    # ["a", "b", "c"] (desde el inicio)
letras[3:]    # ["d", "e", "f"] (hasta el final)
letras[:]     # Copia completa de la lista
\`\`\`
`
    },
    {
        question: "**Slicing con step**\n\n¿Qué resultado produce esta expresión?",
        code: `from typing import List

numeros: List[int] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
resultado = numeros[1:8:2]`,
        options: [
            "[1, 3, 5, 7]",
            "[1, 2, 3, 4, 5, 6, 7, 8]",
            "[0, 2, 4, 6, 8]",
            "[1, 3, 5, 7, 9]"
        ],
        correct: "[1, 3, 5, 7]",
        explanation: `**Respuesta correcta: [1, 3, 5, 7]**

El slicing completo es \`lista[inicio:fin:step]\`:
- **inicio**: índice de comienzo (incluido)
- **fin**: índice de fin (excluido)
- **step**: paso o salto entre elementos

**Proceso con \`numeros[1:8:2]\`**:
\`\`\`python
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
#          0  1  2  3  4  5  6  7  8  9  ← índices
#             ↑              ↑
#          inicio           fin
# step = 2 (toma cada 2 elementos)

Elementos considerados (índices 1 a 7):
[1, 2, 3, 4, 5, 6, 7]

Con step=2 (toma posiciones 0, 2, 4, 6 de la sublista):
[1, 3, 5, 7]  ✓
\`\`\`

**Ejemplos adicionales de step**:
\`\`\`python
numeros[::2]      # [0, 2, 4, 6, 8] (pares)
numeros[1::2]     # [1, 3, 5, 7, 9] (impares)
numeros[::3]      # [0, 3, 6, 9] (cada 3)
numeros[::-1]     # [9, 8, 7, ..., 0] (reverso)
\`\`\`
`
    },
    {
        question: "**Reverso de lista con slicing**\n\n¿Cómo podemos obtener una lista en orden inverso usando slicing?",
        code: `from typing import List

palabras: List[str] = ["uno", "dos", "tres", "cuatro"]
# ¿Qué slicing produce ["cuatro", "tres", "dos", "uno"]?`,
        options: [
            "palabras[::-1]",
            "palabras[-1:]",
            "palabras[::1]",
            "palabras[1::-1]"
        ],
        correct: "palabras[::-1]",
        explanation: `**Respuesta correcta: palabras[::-1]**

El slicing con **step negativo** recorre la lista en reverso:

**\`lista[::-1]\` significa**:
- **inicio**: omitido (por defecto, el final)
- **fin**: omitido (por defecto, el principio)  
- **step**: -1 (retrocede de 1 en 1)

**Proceso**:
\`\`\`python
palabras = ["uno", "dos", "tres", "cuatro"]
palabras[::-1]  # ["cuatro", "tres", "dos", "uno"]  ✓
\`\`\`

**Otras formas de revertir**:
\`\`\`python
# Método 1: Slicing (crea nueva lista)
reverso = palabras[::-1]

# Método 2: reversed() (crea iterador)
reverso = list(reversed(palabras))

# Método 3: reverse() (modifica in-place)
palabras.reverse()  # Modifica la lista original
\`\`\`

**Ventaja del slicing**: Crea una **copia** sin modificar la original.

**Otros usos de step negativo**:
\`\`\`python
lista[5:2:-1]   # Desde índice 5 a 2, retrocediendo
lista[::-2]     # Toda la lista, cada 2 elementos en reverso
\`\`\`
`
    },
    {
        question: "**Slicing con índices negativos**\n\n¿Qué resultado produce esta expresión?",
        code: `from typing import List

datos: List[int] = [10, 20, 30, 40, 50, 60, 70, 80]
resultado = datos[-5:-2]`,
        options: [
            "[40, 50, 60]",
            "[30, 40, 50]",
            "[50, 60, 70]",
            "[60, 70, 80]"
        ],
        correct: "[40, 50, 60]",
        explanation: `**Respuesta correcta: [40, 50, 60]**

Los **índices negativos** en slicing funcionan igual que en acceso normal:

**Mapeo de índices negativos**:
\`\`\`python
datos = [10, 20, 30, 40, 50, 60, 70, 80]
#        0   1   2   3   4   5   6   7   ← índices positivos
#       -8  -7  -6  -5  -4  -3  -2  -1   ← índices negativos
\`\`\`

**Proceso con \`datos[-5:-2]\`**:
- \`-5\` corresponde al índice 3 → valor 40
- \`-2\` corresponde al índice 6 → valor 70 (excluido)
- Resultado: elementos desde índice 3 hasta 5 (inclusive)
- \`[40, 50, 60]\` ✓

**Verificación paso a paso**:
\`\`\`python
datos[-5]  # 40 (inicio, incluido)
datos[-4]  # 50 (incluido)
datos[-3]  # 60 (incluido)
datos[-2]  # 70 (fin, excluido)
\`\`\`

**Casos de uso comunes**:
\`\`\`python
datos[-3:]    # Últimos 3 elementos: [60, 70, 80]
datos[:-3]    # Todos menos los últimos 3: [10, 20, 30, 40, 50]
datos[-5:-1]  # Desde 5to desde el final al penúltimo
\`\`\`
`
    },
    {
        question: "**Modificar sublistas con slicing**\n\n¿Qué contiene la lista después de ejecutar este código?",
        code: `from typing import List

numeros: List[int] = [1, 2, 3, 4, 5]
numeros[1:4] = [20, 30]`,
        options: [
            "[1, 20, 30, 5]",
            "[1, 20, 30, 4, 5]",
            "[20, 30, 3, 4, 5]",
            "[1, 2, 20, 30, 5]"
        ],
        correct: "[1, 20, 30, 5]",
        explanation: `**Respuesta correcta: [1, 20, 30, 5]**

El slicing puede usarse para **reemplazar** una sección de la lista:

**Proceso**:
1. Estado inicial: \`[1, 2, 3, 4, 5]\`
2. \`numeros[1:4]\` selecciona \`[2, 3, 4]\` (índices 1, 2, 3)
3. Se reemplaza con \`[20, 30]\`
4. Resultado: \`[1, 20, 30, 5]\` ✓

**Importante**: El tamaño de la sección reemplazada **puede cambiar**:
\`\`\`python
# Reemplazar 3 elementos con 2
[1, 2, 3, 4, 5]  →  [1, 20, 30, 5]  ✓
\`\`\`

**Más ejemplos de asignación con slicing**:
\`\`\`python
# Insertar elementos
lista = [1, 5]
lista[1:1] = [2, 3, 4]  # [1, 2, 3, 4, 5]

# Eliminar elementos
lista = [1, 2, 3, 4, 5]
lista[1:4] = []  # [1, 5]

# Reemplazar toda la lista
lista = [1, 2, 3]
lista[:] = [10, 20]  # [10, 20]
\`\`\`

**vs. asignación directa**:
\`\`\`python
lista[:] = [10, 20]  # Modifica la lista existente
lista = [10, 20]     # Crea una nueva lista
\`\`\`
`
    },

    // ADVANCED - List Comprehensions (Questions 16-18)
    {
        question: "**List comprehension básica**\n\n¿Qué resultado produce esta list comprehension?",
        code: `from typing import List

# Crear lista de cuadrados del 1 al 5
cuadrados: List[int] = [x ** 2 for x in range(1, 6)]`,
        options: [
            "[1, 4, 9, 16, 25]",
            "[2, 4, 6, 8, 10]",
            "[1, 2, 3, 4, 5]",
            "[0, 1, 4, 9, 16]"
        ],
        correct: "[1, 4, 9, 16, 25]",
        explanation: `**Respuesta correcta: [1, 4, 9, 16, 25]**

Una **list comprehension** es una forma concisa de crear listas:

**Sintaxis**: \`[expresion for variable in iterable]\`

**Proceso con \`[x ** 2 for x in range(1, 6)]\`**:
\`\`\`python
range(1, 6)  # Genera 1, 2, 3, 4, 5
x = 1  →  1 ** 2 = 1
x = 2  →  2 ** 2 = 4
x = 3  →  3 ** 2 = 9
x = 4  →  4 ** 2 = 16
x = 5  →  5 ** 2 = 25

Resultado: [1, 4, 9, 16, 25]  ✓
\`\`\`

**Equivalente con loop tradicional**:
\`\`\`python
cuadrados: List[int] = []
for x in range(1, 6):
    cuadrados.append(x ** 2)
\`\`\`

**Ventajas de list comprehensions**:
- Más conciso y legible
- Generalmente más rápido
- Pythonic (estilo recomendado en Python)

**Más ejemplos**:
\`\`\`python
[x * 2 for x in [1, 2, 3]]        # [2, 4, 6]
[len(s) for s in ["a", "bb"]]     # [1, 2]
[x.upper() for x in ["hi", "bye"]] # ["HI", "BYE"]
\`\`\`
`
    },
    {
        question: "**List comprehension con filtro**\n\n¿Qué resultado produce esta list comprehension con condición?",
        code: `from typing import List

numeros: List[int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
pares: List[int] = [x for x in numeros if x % 2 == 0]`,
        options: [
            "[2, 4, 6, 8, 10]",
            "[1, 3, 5, 7, 9]",
            "[0, 2, 4, 6, 8, 10]",
            "[2, 4, 6, 8]"
        ],
        correct: "[2, 4, 6, 8, 10]",
        explanation: `**Respuesta correcta: [2, 4, 6, 8, 10]**

List comprehensions pueden incluir una **condición de filtro**:

**Sintaxis**: \`[expresion for variable in iterable if condicion]\`

**Proceso con filtro**:
\`\`\`python
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Para cada x:
x = 1  →  1 % 2 == 0 → False (se descarta)
x = 2  →  2 % 2 == 0 → True  → incluir 2
x = 3  →  3 % 2 == 0 → False (se descarta)
x = 4  →  4 % 2 == 0 → True  → incluir 4
...
x = 10 → 10 % 2 == 0 → True  → incluir 10

Resultado: [2, 4, 6, 8, 10]  ✓
\`\`\`

**Equivalente con loop**:
\`\`\`python
pares: List[int] = []
for x in numeros:
    if x % 2 == 0:
        pares.append(x)
\`\`\`

**Más ejemplos con filtro**:
\`\`\`python
# Números positivos
[x for x in [-2, -1, 0, 1, 2] if x > 0]  # [1, 2]

# Palabras largas
palabras = ["hola", "mundo", "python"]
[p for p in palabras if len(p) > 4]  # ["mundo", "python"]

# Múltiplos de 3
[x for x in range(20) if x % 3 == 0]  # [0, 3, 6, 9, 12, 15, 18]
\`\`\`
`
    },
    {
        question: "**List comprehension con transformación y filtro**\n\n¿Qué resultado produce esta list comprehension?",
        code: `from typing import List

palabras: List[str] = ["Python", "es", "genial", "y", "poderoso"]
resultado: List[str] = [p.upper() for p in palabras if len(p) > 2]`,
        options: [
            "[\"PYTHON\", \"GENIAL\", \"PODEROSO\"]",
            "[\"PYTHON\", \"ES\", \"GENIAL\", \"Y\", \"PODEROSO\"]",
            "[\"Python\", \"genial\", \"poderoso\"]",
            "[\"ES\", \"Y\"]"
        ],
        correct: "[\"PYTHON\", \"GENIAL\", \"PODEROSO\"]",
        explanation: `**Respuesta correcta: ["PYTHON", "GENIAL", "PODEROSO"]**

Esta comprehension combina **filtrado** y **transformación**:

**Sintaxis**: \`[transformacion(x) for x in iterable if condicion(x)]\`

**Proceso paso a paso**:
\`\`\`python
palabras = ["Python", "es", "genial", "y", "poderoso"]

Para cada palabra p:
p = "Python"   → len(p) = 6 > 2 → True  → "PYTHON"   ✓
p = "es"       → len(p) = 2 > 2 → False (descartado)
p = "genial"   → len(p) = 6 > 2 → True  → "GENIAL"   ✓
p = "y"        → len(p) = 1 > 2 → False (descartado)
p = "poderoso" → len(p) = 8 > 2 → True  → "PODEROSO" ✓

Resultado: ["PYTHON", "GENIAL", "PODEROSO"]  ✓
\`\`\`

**Orden de operaciones**:
1. **Itera**: \`for p in palabras\`
2. **Filtra**: \`if len(p) > 2\`
3. **Transforma**: \`p.upper()\`
4. **Agrega** a la lista resultado

**Equivalente con loop**:
\`\`\`python
resultado: List[str] = []
for p in palabras:
    if len(p) > 2:
        resultado.append(p.upper())
\`\`\`

**Más ejemplos**:
\`\`\`python
# Cuadrados de números impares
[x**2 for x in range(10) if x % 2 == 1]  # [1, 9, 25, 49, 81]

# Primeras letras de palabras largas
[s[0] for s in ["Hi", "Hello", "Hey"] if len(s) > 2]  # ['H', 'H']
\`\`\`
`
    },

    // ADVANCED - Nested Lists (Questions 19-20)
    {
        question: "**Listas anidadas - Acceso**\n\n¿Qué valor retorna esta expresión?",
        code: `from typing import List

matriz: List[List[int]] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
valor = matriz[1][2]`,
        options: [
            "6",
            "5",
            "8",
            "3"
        ],
        correct: "6",
        explanation: `**Respuesta correcta: 6**

Las **listas anidadas** se acceden con índices múltiples:

**Sintaxis**: \`lista[fila][columna]\`

**Visualización de la matriz**:
\`\`\`python
matriz = [
    [1, 2, 3],  # fila 0
    [4, 5, 6],  # fila 1  ← matriz[1]
    [7, 8, 9]   # fila 2
]
#    0  1  2   ← columnas
\`\`\`

**Proceso de \`matriz[1][2]\`**:
1. \`matriz[1]\` → \`[4, 5, 6]\` (segunda fila)
2. \`[4, 5, 6][2]\` → \`6\` (tercer elemento) ✓

**Otros accesos**:
\`\`\`python
matriz[0][0]  # 1 (esquina superior izquierda)
matriz[2][2]  # 9 (esquina inferior derecha)
matriz[1][1]  # 5 (centro)
matriz[0][2]  # 3
matriz[2][0]  # 7
\`\`\`

**Tipo con Type Hints**:
\`\`\`python
# Matriz de enteros
matriz: List[List[int]] = [[1, 2], [3, 4]]

# Matriz de strings
palabras: List[List[str]] = [["a", "b"], ["c", "d"]]

# Lista de listas de diferentes tipos (no recomendado)
mixto: List[List] = [[1, "a"], [2, "b"]]
\`\`\`

**Iteración sobre matriz**:
\`\`\`python
for fila in matriz:
    for elemento in fila:
        print(elemento, end=" ")
# Output: 1 2 3 4 5 6 7 8 9
\`\`\`
`
    },
    {
        question: "**Listas anidadas - Comprehension**\n\n¿Qué resultado produce esta nested list comprehension?",
        code: `from typing import List

matriz: List[List[int]] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
plana: List[int] = [elemento for fila in matriz for elemento in fila]`,
        options: [
            "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
            "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
            "[1, 4, 7, 2, 5, 8, 3, 6, 9]",
            "[9, 8, 7, 6, 5, 4, 3, 2, 1]"
        ],
        correct: "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
        explanation: `**Respuesta correcta: [1, 2, 3, 4, 5, 6, 7, 8, 9]**

Esta **nested list comprehension** "aplana" una matriz en una lista simple:

**Sintaxis**: \`[item for sublista in lista for item in sublista]\`

**Proceso paso a paso**:
\`\`\`python
matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Equivalente a:
for fila in matriz:          # Primera iteración
    for elemento in fila:     # Segunda iteración
        # agregar elemento
        
fila = [1, 2, 3]:
    elemento = 1 → agregar 1
    elemento = 2 → agregar 2
    elemento = 3 → agregar 3
    
fila = [4, 5, 6]:
    elemento = 4 → agregar 4
    elemento = 5 → agregar 5
    elemento = 6 → agregar 6
    
fila = [7, 8, 9]:
    elemento = 7 → agregar 7
    elemento = 8 → agregar 8
    elemento = 9 → agregar 9

Resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9]  ✓
\`\`\`

**Orden de los loops**: Se lee de **izquierda a derecha**, igual que los loops anidados.

**Equivalente con loops**:
\`\`\`python
plana: List[int] = []
for fila in matriz:
    for elemento in fila:
        plana.append(elemento)
\`\`\`

**Más ejemplos de aplanamiento**:
\`\`\`python
# Con filtro
matriz = [[1, 2], [3, 4], [5, 6]]
[x for fila in matriz for x in fila if x % 2 == 0]  # [2, 4, 6]

# Con transformación
[[x*2 for x in fila] for fila in matriz]  # [[2, 4], [6, 8], [10, 12]]
\`\`\`
`
    },

    // ADVANCED - Complex Operations (Questions 21-24)
    {
        question: "**Método sort() vs función sorted()**\n\n¿Cuál es la diferencia entre estos dos enfoques?",
        code: `from typing import List

# Enfoque A
lista_a: List[int] = [3, 1, 4, 1, 5]
lista_a.sort()

# Enfoque B
lista_b: List[int] = [3, 1, 4, 1, 5]
resultado = sorted(lista_b)`,
        options: [
            "A modifica lista_a y retorna None; B crea nueva lista ordenada",
            "Ambos modifican la lista original",
            "Ambos crean una nueva lista",
            "A crea nueva lista; B modifica la original"
        ],
        correct: "A modifica lista_a y retorna None; B crea nueva lista ordenada",
        explanation: `**Respuesta correcta: A modifica lista_a y retorna None; B crea nueva lista ordenada**

**Diferencias clave**:

**Método \`sort()\`** (modifica in-place):
\`\`\`python
lista_a = [3, 1, 4, 1, 5]
resultado = lista_a.sort()  # retorna None
# lista_a ahora es [1, 1, 3, 4, 5]
# resultado es None
\`\`\`

**Función \`sorted()\`** (crea nueva lista):
\`\`\`python
lista_b = [3, 1, 4, 1, 5]
resultado = sorted(lista_b)  # retorna nueva lista
# lista_b sigue siendo [3, 1, 4, 1, 5]
# resultado es [1, 1, 3, 4, 5]
\`\`\`

**Comparación**:

| Característica | \`sort()\` | \`sorted()\` |
|---------------|-----------|-------------|
| Tipo | Método de lista | Función built-in |
| Modifica original | ✅ Sí | ❌ No |
| Retorna valor | ❌ None | ✅ Nueva lista |
| Funciona en | Solo listas | Cualquier iterable |

**Cuándo usar cada uno**:
\`\`\`python
# Usar sort() cuando:
# - Quieres modificar la lista original
# - No necesitas la versión sin ordenar
numeros.sort()

# Usar sorted() cuando:
# - Necesitas mantener el original
# - Trabajas con otros iterables (tuplas, sets)
ordenados = sorted(numeros)
ordenados_tuple = sorted((3, 1, 2))  # Retorna lista
\`\`\`

**Ambos aceptan parámetros**:
\`\`\`python
# Orden descendente
lista.sort(reverse=True)
resultado = sorted(lista, reverse=True)

# Clave personalizada
palabras.sort(key=len)  # Por longitud
resultado = sorted(palabras, key=str.lower)  # Ignorar mayúsculas
\`\`\`
`
    },
    {
        question: "**Listas y operador +**\n\n¿Qué resultado produce la concatenación de listas?",
        code: `from typing import List

lista1: List[int] = [1, 2, 3]
lista2: List[int] = [4, 5]
lista3: List[int] = lista1 + lista2
lista1.append(6)`,
        options: [
            "lista3 = [1, 2, 3, 4, 5], lista1 = [1, 2, 3, 6]",
            "lista3 = [1, 2, 3, 4, 5, 6], lista1 = [1, 2, 3, 6]",
            "lista3 = [1, 2, 3, 6, 4, 5], lista1 = [1, 2, 3, 6]",
            "Error: no se pueden concatenar listas"
        ],
        correct: "lista3 = [1, 2, 3, 4, 5], lista1 = [1, 2, 3, 6]",
        explanation: `**Respuesta correcta: lista3 = [1, 2, 3, 4, 5], lista1 = [1, 2, 3, 6]**

El **operador +** crea una **nueva lista** sin modificar las originales:

**Proceso paso a paso**:
\`\`\`python
# 1. Estado inicial
lista1 = [1, 2, 3]
lista2 = [4, 5]

# 2. Concatenación (crea NUEVA lista)
lista3 = lista1 + lista2  # [1, 2, 3, 4, 5]
# lista1 y lista2 NO cambian

# 3. Modificar lista1
lista1.append(6)  # lista1 = [1, 2, 3, 6]
# lista3 NO se ve afectada porque es una copia

Resultado final:
lista1 = [1, 2, 3, 6]
lista2 = [4, 5]
lista3 = [1, 2, 3, 4, 5]  ✓
\`\`\`

**Operadores con listas**:

**Operador + (concatenación)**:
\`\`\`python
[1, 2] + [3, 4]  # [1, 2, 3, 4] (nueva lista)
\`\`\`

**Operador += (extend in-place)**:
\`\`\`python
lista = [1, 2]
lista += [3, 4]  # lista = [1, 2, 3, 4] (modifica)
# Equivalente a: lista.extend([3, 4])
\`\`\`

**Operador * (repetición)**:
\`\`\`python
[1, 2] * 3  # [1, 2, 1, 2, 1, 2]
[0] * 5     # [0, 0, 0, 0, 0]
\`\`\`

**Comparación con extend()**:
\`\`\`python
# + crea nueva lista
nueva = lista1 + lista2  # lista1 no cambia

# extend() modifica original
lista1.extend(lista2)  # lista1 cambia
\`\`\`

**Cuidado con listas anidadas**:
\`\`\`python
# ¡PROBLEMA!
matriz = [[0]] * 3  # [[0], [0], [0]]
matriz[0].append(1)  # [[0, 1], [0, 1], [0, 1]]
# ¡Las 3 sublistas son la MISMA!

# CORRECTO
matriz = [[0] for _ in range(3)]
matriz[0].append(1)  # [[0, 1], [0], [0]]
\`\`\`
`
    },
    {
        question: "**List comprehension con condicional ternario**\n\n¿Qué resultado produce esta comprehension?",
        code: `from typing import List

numeros: List[int] = [1, 2, 3, 4, 5, 6]
resultado: List[str] = ["par" if x % 2 == 0 else "impar" for x in numeros]`,
        options: [
            "[\"impar\", \"par\", \"impar\", \"par\", \"impar\", \"par\"]",
            "[\"par\", \"impar\"]",
            "[\"par\", \"par\", \"par\"]",
            "Error de sintaxis"
        ],
        correct: "[\"impar\", \"par\", \"impar\", \"par\", \"impar\", \"par\"]",
        explanation: `**Respuesta correcta: ["impar", "par", "impar", "par", "impar", "par"]**

Esta comprehension usa una **expresión condicional** (operador ternario):

**Sintaxis**: \`[valor_si_true if condicion else valor_si_false for x in lista]\`

**Diferencia importante**:
\`\`\`python
# Filtro (if al final): incluye o excluye elementos
[x for x in lista if condicion]

# Condicional (if-else en expresión): transforma elementos
[valor_if if condicion else valor_else for x in lista]
\`\`\`

**Proceso paso a paso**:
\`\`\`python
numeros = [1, 2, 3, 4, 5, 6]

x = 1 → 1 % 2 == 0 → False → "impar"
x = 2 → 2 % 2 == 0 → True  → "par"
x = 3 → 3 % 2 == 0 → False → "impar"
x = 4 → 4 % 2 == 0 → True  → "par"
x = 5 → 5 % 2 == 0 → False → "impar"
x = 6 → 6 % 2 == 0 → True  → "par"

Resultado: ["impar", "par", "impar", "par", "impar", "par"]  ✓
\`\`\`

**Más ejemplos**:
\`\`\`python
# Clasificar números
[x if x > 0 else 0 for x in [-2, -1, 0, 1, 2]]
# [0, 0, 0, 1, 2]

# Convertir a mayúsculas/minúsculas
palabras = ["HOLA", "mundo", "PYTHON"]
[p.lower() if p.isupper() else p.upper() for p in palabras]
# ["hola", "MUNDO", "python"]

# Reemplazar valores
[x if x != 0 else "cero" for x in [1, 0, 2, 0]]
# [1, "cero", 2, "cero"]
\`\`\`

**Equivalente con loop**:
\`\`\`python
resultado: List[str] = []
for x in numeros:
    if x % 2 == 0:
        resultado.append("par")
    else:
        resultado.append("impar")
\`\`\`
`
    },
    {
        question: "**Operador in con listas**\n\n¿Cuál es el resultado de estas operaciones de membresía?",
        code: `from typing import List

frutas: List[str] = ["manzana", "banana", "naranja"]
resultado1 = "banana" in frutas
resultado2 = "uva" in frutas
resultado3 = "man" in frutas`,
        options: [
            "resultado1 = True, resultado2 = False, resultado3 = False",
            "resultado1 = True, resultado2 = False, resultado3 = True",
            "resultado1 = True, resultado2 = True, resultado3 = False",
            "resultado1 = False, resultado2 = False, resultado3 = True"
        ],
        correct: "resultado1 = True, resultado2 = False, resultado3 = False",
        explanation: `**Respuesta correcta: resultado1 = True, resultado2 = False, resultado3 = False**

El operador \`in\` verifica si un elemento **completo** existe en la lista:

**Proceso**:
\`\`\`python
frutas = ["manzana", "banana", "naranja"]

# 1. ¿"banana" está en la lista?
"banana" in frutas  # True ✓
# Busca el elemento exacto "banana"

# 2. ¿"uva" está en la lista?
"uva" in frutas  # False ✓
# "uva" no existe como elemento

# 3. ¿"man" está en la lista?
"man" in frutas  # False ✓
# Busca el elemento "man", NO una subcadena
# "man" NO es un elemento de la lista
\`\`\`

**Importante**: \`in\` busca **elementos completos**, no subcadenas:
\`\`\`python
# Para listas de strings: busca strings completos
"banana" in ["manzana", "banana"]  # True
"ban" in ["manzana", "banana"]     # False

# Para buscar subcadenas, necesitas iterar:
any("man" in fruta for fruta in frutas)  # True
# Verifica si "man" está en algún elemento
\`\`\`

**Operador not in**:
\`\`\`python
"uva" not in frutas     # True
"banana" not in frutas  # False
\`\`\`

**Casos de uso comunes**:
\`\`\`python
# Validación
if "admin" in usuarios:
    print("Usuario admin existe")

# Evitar duplicados
if elemento not in lista:
    lista.append(elemento)

# Filtrado
numeros_validos = [x for x in numeros if x not in excluidos]
\`\`\`

**Complejidad**: O(n) - recorre la lista linealmente
Para búsquedas frecuentes, considera usar un \`set\` (O(1)).
`
    }
];
