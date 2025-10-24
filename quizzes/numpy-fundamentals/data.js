/**
 * @file NumPy Fundamentals Quiz Data
 * @description Comprehensive quiz covering NumPy from zero to hero
 * 
 * Topics covered:
 * - Array creation and initialization (Questions 1-5)
 * - Array shape, size, and data types (Questions 6-8)
 * - Array indexing and slicing (Questions 9-11)
 * - Basic arithmetic and mathematical operations (Questions 12-14)
 * - Array manipulation (reshape, transpose, concatenate) (Questions 15-17)
 * - Aggregation functions (sum, mean, max, min, std) (Questions 18-20)
 * - Broadcasting and element-wise operations (Questions 21-23)
 * - Common patterns and best practices (Questions 24-25)
 */

const numpyFundamentalsQuizData = {
    randomize: false,  // Educational progression: zero to hero
    questions: [
        // EASY LEVEL - Array Creation (Questions 1-5)
        {
            question: "**Creación básica de arrays**\n\n¿Cuál es la forma correcta de crear un array NumPy a partir de una lista?",
            code: `import numpy as np
from typing import Any

# ¿Cuál de estas opciones crea un array NumPy correctamente?
lista = [1, 2, 3, 4, 5]`,
        options: [
            "arr = np.array([1, 2, 3, 4, 5])",
            "arr = numpy.create([1, 2, 3, 4, 5])",
            "arr = np.list([1, 2, 3, 4, 5])",
            "arr = np.make_array([1, 2, 3, 4, 5])"
        ],
        correct: "arr = np.array([1, 2, 3, 4, 5])",
        explanation: `**Respuesta correcta: arr = np.array([1, 2, 3, 4, 5])**

La función **\`np.array()\`** es la forma estándar de crear un array NumPy a partir de una lista o cualquier secuencia.

**Formas comunes de crear arrays**:
- \`np.array([1, 2, 3])\` - desde una lista
- \`np.zeros(5)\` - array de ceros
- \`np.ones(3)\` - array de unos
- \`np.arange(10)\` - array con rango de valores

**Importante**: NumPy arrays son más eficientes que las listas de Python para operaciones matemáticas y científicas.
`
    },
    {
        question: "**Arrays de ceros y unos**\n\n¿Qué resultado produce el siguiente código?",
        code: `import numpy as np

arr = np.zeros(4)
print(arr)`,
        options: [
            "[0. 0. 0. 0.]",
            "[0 0 0 0]",
            "[[0, 0, 0, 0]]",
            "[0, 0, 0, 0]"
        ],
        correct: "[0. 0. 0. 0.]",
        explanation: `**Respuesta correcta: [0. 0. 0. 0.]**

**\`np.zeros(n)\`** crea un array de \`n\` elementos con valor 0.0 (float por defecto).

**Observa**:
- Los valores tienen punto decimal (0.) porque NumPy usa **float64** por defecto
- Para enteros usa: \`np.zeros(4, dtype=int)\` → \`[0 0 0 0]\`

**Funciones similares**:
- \`np.ones(4)\` → \`[1. 1. 1. 1.]\`
- \`np.full(4, 7)\` → \`[7 7 7 7]\`
- \`np.empty(4)\` → valores no inicializados (aleatorios)
`
    },
    {
        question: "**Función arange**\n\n¿Qué array genera \`np.arange(2, 10, 2)\`?",
        code: `import numpy as np

arr = np.arange(2, 10, 2)
print(arr)`,
        options: [
            "[2 4 6 8]",
            "[2 3 4 5 6 7 8 9]",
            "[2 4 6 8 10]",
            "[0 2 4 6 8]"
        ],
        correct: "[2 4 6 8]",
        explanation: `**Respuesta correcta: [2 4 6 8]**

**\`np.arange(start, stop, step)\`** funciona similar a \`range()\` de Python:
- **start**: valor inicial (inclusivo) = 2
- **stop**: valor final (exclusivo) = 10
- **step**: incremento = 2

**Resultado**: 2, 4, 6, 8 (no incluye 10)

**Ejemplos útiles**:
- \`np.arange(5)\` → \`[0 1 2 3 4]\`
- \`np.arange(1, 6)\` → \`[1 2 3 4 5]\`
- \`np.arange(0, 1, 0.1)\` → \`[0.  0.1 0.2 ... 0.9]\` (acepta floats)
`
    },
    {
        question: "**Función linspace**\n\n¿Cuál es la diferencia principal entre \`np.arange()\` y \`np.linspace()\`?",
        code: `import numpy as np

# Opción A
arr_a = np.arange(0, 10, 2)

# Opción B  
arr_b = np.linspace(0, 10, 5)`,
        options: [
            "arange usa paso, linspace usa número de elementos",
            "arange es más rápido que linspace",
            "linspace solo funciona con floats",
            "No hay diferencia, son equivalentes"
        ],
        correct: "arange usa paso, linspace usa número de elementos",
        explanation: `**Respuesta correcta: arange usa paso, linspace usa número de elementos**

**Diferencias clave**:

**\`np.arange(start, stop, step)\`**:
- Especificas el **paso** entre valores
- \`np.arange(0, 10, 2)\` → \`[0 2 4 6 8]\`
- Stop es **exclusivo**

**\`np.linspace(start, stop, num)\`**:
- Especificas cuántos **elementos** quieres
- \`np.linspace(0, 10, 5)\` → \`[0.  2.5  5.  7.5  10.]\`
- Stop es **inclusivo** por defecto

**Usa linspace cuando**:
- Necesitas exactamente N puntos equidistantes
- Trabajas con gráficos y visualizaciones
- El stop debe incluirse
`
    },
    {
        question: "**Arrays multidimensionales**\n\n¿Cómo se crea un array 2D (matriz) con NumPy?",
        code: `import numpy as np
from typing import Any

# ¿Cuál opción crea una matriz 2x3?`,
        options: [
            "np.array([[1, 2, 3], [4, 5, 6]])",
            "np.matrix(2, 3)",
            "np.array([1, 2, 3], [4, 5, 6])",
            "np.create_2d([[1, 2, 3], [4, 5, 6]])"
        ],
        correct: "np.array([[1, 2, 3], [4, 5, 6]])",
        explanation: `**Respuesta correcta: np.array([[1, 2, 3], [4, 5, 6]])**

Para crear arrays multidimensionales, usa **listas anidadas**:

\`\`\`python
# Matriz 2x3 (2 filas, 3 columnas)
matriz = np.array([[1, 2, 3], 
                   [4, 5, 6]])
\`\`\`

**Otras formas de crear matrices**:
- \`np.zeros((2, 3))\` - matriz de ceros 2x3
- \`np.ones((3, 4))\` - matriz de unos 3x4
- \`np.eye(3)\` - matriz identidad 3x3
- \`np.random.rand(2, 3)\` - valores aleatorios 2x3

**Nota**: \`np.matrix\` está deprecado, usa \`np.array\` siempre.
`
    },

    // MEDIUM LEVEL - Shape, Size, Data Types (Questions 6-8)
    {
        question: "**Atributo shape**\n\n¿Qué devuelve el atributo \`.shape\` de un array?",
        code: `import numpy as np

arr = np.array([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]])

resultado = arr.shape`,
        options: [
            "(3, 4)",
            "(4, 3)",
            "12",
            "[3, 4]"
        ],
        correct: "(3, 4)",
        explanation: `**Respuesta correcta: (3, 4)**

**\`.shape\`** devuelve una tupla con las dimensiones del array:
- Primera dimensión: número de **filas** = 3
- Segunda dimensión: número de **columnas** = 4

**Ejemplos**:
\`\`\`python
arr_1d = np.array([1, 2, 3])
arr_1d.shape  # (3,)

arr_2d = np.array([[1, 2], [3, 4]])
arr_2d.shape  # (2, 2)

arr_3d = np.zeros((2, 3, 4))
arr_3d.shape  # (2, 3, 4)
\`\`\`

**Otros atributos útiles**:
- \`.size\` - total de elementos (3 × 4 = 12)
- \`.ndim\` - número de dimensiones (2)
- \`.dtype\` - tipo de datos
`
    },
    {
        question: "**Tipo de datos (dtype)**\n\n¿Qué tipo de datos tiene este array por defecto?",
        code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr.dtype)`,
        options: [
            "int64 (en sistemas de 64 bits)",
            "float64",
            "int32",
            "object"
        ],
        correct: "int64 (en sistemas de 64 bits)",
        explanation: `**Respuesta correcta: int64 (en sistemas de 64 bits)**

NumPy **infiere automáticamente** el tipo de datos:
- Lista de enteros → \`int64\` o \`int32\` (según el sistema)
- Lista con floats → \`float64\`
- Lista mixta → tipo más general

**Especificar dtype explícitamente**:
\`\`\`python
arr_float = np.array([1, 2, 3], dtype=float)  # float64
arr_int32 = np.array([1, 2, 3], dtype=np.int32)
arr_bool = np.array([1, 0, 1], dtype=bool)
\`\`\`

**Tipos comunes**:
- \`int8, int16, int32, int64\`
- \`float16, float32, float64\`
- \`bool\`, \`complex64\`, \`complex128\`

**Conversión**: \`arr.astype(np.float32)\`
`
    },
    {
        question: "**Tamaño de arrays**\n\n¿Cuál es el resultado de las siguientes operaciones?",
        code: `import numpy as np

arr = np.array([[1, 2, 3],
                [4, 5, 6]])

a = arr.size
b = arr.ndim
c = len(arr)`,
        options: [
            "a=6, b=2, c=2",
            "a=2, b=2, c=6",
            "a=6, b=3, c=2",
            "a=2, b=6, c=2"
        ],
        correct: "a=6, b=2, c=2",
        explanation: `**Respuesta correcta: a=6, b=2, c=2**

Entendiendo los atributos del array:

**\`.size\`** = total de elementos = 2 × 3 = **6**

**\`.ndim\`** = número de dimensiones = **2** (es una matriz)

**\`len()\`** = longitud de la primera dimensión = **2** (filas)

**Recuerda**:
\`\`\`python
arr.shape  # (2, 3) - tupla con dimensiones
arr.size   # 6 - total elementos
arr.ndim   # 2 - número de dimensiones
len(arr)   # 2 - primera dimensión
\`\`\`

**Nota**: Para arrays 1D, \`len(arr)\` y \`arr.size\` son iguales.
`
    },

    // MEDIUM LEVEL - Indexing and Slicing (Questions 9-11)
    {
        question: "**Indexación básica**\n\n¿Qué valor devuelve esta expresión?",
        code: `import numpy as np

arr = np.array([[10, 20, 30],
                [40, 50, 60],
                [70, 80, 90]])

valor = arr[1, 2]`,
        options: [
            "60",
            "50",
            "30",
            "80"
        ],
        correct: "60",
        explanation: `**Respuesta correcta: 60**

En NumPy, la indexación usa **\`[fila, columna]\`**:
- \`arr[1, 2]\` accede a fila 1 (segunda fila), columna 2 (tercera columna)

**Visualización**:
\`\`\`
     col 0  col 1  col 2
fila 0: 10    20    30
fila 1: 40    50    60  ← fila 1
        ↑     ↑     ↑
                    └─ columna 2 = 60
\`\`\`

**Formas equivalentes**:
- \`arr[1, 2]\` ← preferido
- \`arr[1][2]\` ← funciona pero menos eficiente

**Indexación negativa**:
- \`arr[-1, -1]\` → 90 (última fila, última columna)
`
    },
    {
        question: "**Slicing de arrays**\n\n¿Qué resultado produce este slice?",
        code: `import numpy as np

arr = np.array([10, 20, 30, 40, 50, 60, 70, 80, 90])
resultado = arr[2:7:2]`,
        options: [
            "[30 50 70]",
            "[20 40 60]",
            "[30 40 50 60 70]",
            "[30 50 70 90]"
        ],
        correct: "[30 50 70]",
        explanation: `**Respuesta correcta: [30 50 70]**

**Slicing con paso**: \`arr[start:stop:step]\`
- **start=2**: comienza en índice 2 (valor 30)
- **stop=7**: hasta índice 7 (exclusivo)
- **step=2**: cada 2 elementos

**Proceso**:
- Índice 2 → 30 ✓
- Índice 4 → 50 ✓
- Índice 6 → 70 ✓
- Índice 8 → fuera de rango [2:7]

**Slicing útiles**:
\`\`\`python
arr[::2]    # elementos pares: [10 30 50 70 90]
arr[1::2]   # elementos impares: [20 40 60 80]
arr[::-1]   # invertir: [90 80 70 ... 10]
arr[:-3]    # todos menos últimos 3
\`\`\`
`
    },
    {
        question: "**Slicing multidimensional**\n\n¿Qué selecciona \`arr[:2, 1:]\`?",
        code: `import numpy as np

arr = np.array([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]])

resultado = arr[:2, 1:]`,
        options: [
            "[[2 3 4]\n [6 7 8]]",
            "[[1 2]\n [5 6]]",
            "[[2 3]\n [6 7]\n [10 11]]",
            "[[6 7 8]\n [10 11 12]]"
        ],
        correct: "[[2 3 4]\n [6 7 8]]",
        explanation: `**Respuesta correcta: [[2 3 4]\n [6 7 8]]**

**Slicing 2D**: \`arr[filas, columnas]\`
- \`[:2]\` → primeras 2 filas (0 y 1)
- \`[1:]\` → desde columna 1 hasta el final

**Proceso paso a paso**:
1. Selecciona filas 0 y 1:
   \`\`\`
   [1, 2, 3, 4]
   [5, 6, 7, 8]
   \`\`\`

2. De esas filas, columnas desde 1:
   \`\`\`
   [2, 3, 4]
   [6, 7, 8]
   \`\`\`

**Ejemplos útiles**:
\`\`\`python
arr[0, :]    # primera fila completa
arr[:, 0]    # primera columna completa
arr[1:3, 1:3]  # sub-matriz central
\`\`\`
`
    },

    // MEDIUM-HARD - Arithmetic Operations (Questions 12-14)
    {
        question: "**Operaciones aritméticas básicas**\n\n¿Qué resultado produce esta operación?",
        code: `import numpy as np

arr = np.array([10, 20, 30, 40])
resultado = arr * 2 + 5`,
        options: [
            "[25 45 65 85]",
            "[15 25 35 45]",
            "[30 50 70 90]",
            "[20 40 60 80]"
        ],
        correct: "[25 45 65 85]",
        explanation: `**Respuesta correcta: [25 45 65 85]**

Las operaciones en NumPy son **element-wise** (elemento por elemento):

**Paso a paso**:
1. \`arr * 2\` → \`[10*2, 20*2, 30*2, 40*2]\` = \`[20, 40, 60, 80]\`
2. \`+ 5\` → \`[20+5, 40+5, 60+5, 80+5]\` = \`[25, 45, 65, 85]\`

**Ventaja sobre listas de Python**:
\`\`\`python
# Con listas (NO funciona así)
lista = [10, 20, 30]
# lista * 2 → [10, 20, 30, 10, 20, 30] (duplica)

# Con NumPy (element-wise)
arr = np.array([10, 20, 30])
arr * 2  # [20 40 60] (multiplica cada elemento)
\`\`\`

**Todas las operaciones funcionan**: +, -, *, /, //, %, **
`
    },
    {
        question: "**Operaciones entre arrays**\n\n¿Cuál es el resultado de multiplicar dos arrays?",
        code: `import numpy as np

a = np.array([1, 2, 3, 4])
b = np.array([2, 2, 2, 2])
resultado = a * b`,
        options: [
            "[2 4 6 8]",
            "[2 2 2 2]",
            "16",
            "Error: incompatible shapes"
        ],
        correct: "[2 4 6 8]",
        explanation: `**Respuesta correcta: [2 4 6 8]**

La multiplicación \`*\` en NumPy es **element-wise** (elemento por elemento), NO producto matricial:

\`\`\`python
a * b = [1*2, 2*2, 3*2, 4*2] = [2, 4, 6, 8]
\`\`\`

**Diferencias importantes**:
\`\`\`python
# Multiplicación element-wise
a * b  # [2 4 6 8]

# Producto punto (dot product)
np.dot(a, b)  # 1*2 + 2*2 + 3*2 + 4*2 = 20

# Producto matricial (@)
a @ b  # 20 (equivalente a dot para 1D)
\`\`\`

**Para matrices 2D**:
- \`A * B\` → multiplicación elemento por elemento
- \`A @ B\` o \`np.matmul(A, B)\` → producto matricial
`
    },
    {
        question: "**Funciones matemáticas**\n\n¿Qué hace la función \`np.sqrt()\`?",
        code: `import numpy as np

arr = np.array([1, 4, 9, 16, 25])
resultado = np.sqrt(arr)`,
        options: [
            "[1. 2. 3. 4. 5.]",
            "[1 2 3 4 5]",
            "[0.5 2.0 4.5 8.0 12.5]",
            "Error: sqrt requiere floats"
        ],
        correct: "[1. 2. 3. 4. 5.]",
        explanation: `**Respuesta correcta: [1. 2. 3. 4. 5.]**

**\`np.sqrt()\`** calcula la raíz cuadrada de cada elemento:
- √1 = 1.0
- √4 = 2.0  
- √9 = 3.0
- √16 = 4.0
- √25 = 5.0

**Funciones matemáticas comunes**:
\`\`\`python
np.sqrt(arr)     # raíz cuadrada
np.exp(arr)      # e^x
np.log(arr)      # logaritmo natural
np.log10(arr)    # logaritmo base 10
np.sin(arr)      # seno
np.cos(arr)      # coseno
np.abs(arr)      # valor absoluto
np.power(arr, 2) # elevar a potencia
\`\`\`

**Nota**: Devuelve floats (punto decimal) incluso para enteros.
`
    },

    // MEDIUM-HARD - Array Manipulation (Questions 15-17)
    {
        question: "**Reshape de arrays**\n\n¿Qué hace \`.reshape()\`?",
        code: `import numpy as np

arr = np.arange(12)
resultado = arr.reshape(3, 4)`,
        options: [
            "Cambia la forma del array a 3 filas y 4 columnas",
            "Crea un nuevo array de 3x4 con ceros",
            "Reduce el array a 3 elementos",
            "Transpone el array"
        ],
        correct: "Cambia la forma del array a 3 filas y 4 columnas",
        explanation: `**Respuesta correcta: Cambia la forma del array a 3 filas y 4 columnas**

**\`.reshape()\`** reorganiza los elementos sin cambiar los datos:

\`\`\`python
arr = np.arange(12)  # [0 1 2 3 4 5 6 7 8 9 10 11]

arr.reshape(3, 4)
# [[ 0  1  2  3]
#  [ 4  5  6  7]
#  [ 8  9 10 11]]
\`\`\`

**Regla importante**: El total de elementos debe coincidir:
- Original: 12 elementos
- Nuevo: 3 × 4 = 12 ✓

**Uso de -1 (automático)**:
\`\`\`python
arr.reshape(3, -1)   # NumPy calcula 4
arr.reshape(-1, 6)   # NumPy calcula 2
arr.reshape(-1)      # Aplana a 1D
\`\`\`

**Alternativas**:
- \`arr.flatten()\` - aplana a 1D (copia)
- \`arr.ravel()\` - aplana a 1D (vista)
`
    },
    {
        question: "**Transposición de arrays**\n\n¿Qué resultado produce \`.T\`?",
        code: `import numpy as np

matriz = np.array([[1, 2, 3],
                   [4, 5, 6]])

resultado = matriz.T`,
        options: [
            "[[1 4]\n [2 5]\n [3 6]]",
            "[[1 2 3]\n [4 5 6]]",
            "[[3 2 1]\n [6 5 4]]",
            "[[6 5 4]\n [3 2 1]]"
        ],
        correct: "[[1 4]\n [2 5]\n [3 6]]",
        explanation: `**Respuesta correcta: [[1 4]\n [2 5]\n [3 6]]**

**\`.T\`** (transpose) intercambia filas por columnas:

**Original (2×3)**:
\`\`\`
[1, 2, 3]
[4, 5, 6]
\`\`\`

**Transpuesta (3×2)**:
\`\`\`
[1, 4]
[2, 5]
[3, 6]
\`\`\`

**Regla**: 
- Original: shape (2, 3)
- Transpuesta: shape (3, 2)

**Formas equivalentes**:
\`\`\`python
matriz.T
matriz.transpose()
np.transpose(matriz)
\`\`\`

**Uso común**: Álgebra lineal, cambiar orientación de datos
`
    },
    {
        question: "**Concatenación de arrays**\n\n¿Qué hace \`np.concatenate()\` con axis=0?",
        code: `import numpy as np

a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])

resultado = np.concatenate((a, b), axis=0)`,
        options: [
            "[[1 2]\n [3 4]\n [5 6]\n [7 8]]",
            "[[1 2 5 6]\n [3 4 7 8]]",
            "[[1 2 3 4]\n [5 6 7 8]]",
            "Error: shapes incompatibles"
        ],
        correct: "[[1 2]\n [3 4]\n [5 6]\n [7 8]]",
        explanation: `**Respuesta correcta: [[1 2]\n [3 4]\n [5 6]\n [7 8]]**

**\`np.concatenate()\`** une arrays a lo largo de un eje:

**axis=0** (vertical): apila arrays uno debajo del otro
\`\`\`python
[[1, 2]    [[1, 2]
 [3, 4]]    [3, 4]
+           [5, 6]
[[5, 6]     [7, 8]]
 [7, 8]]
\`\`\`

**axis=1** (horizontal): apila arrays lado a lado
\`\`\`python
np.concatenate((a, b), axis=1)
# [[1 2 5 6]
#  [3 4 7 8]]
\`\`\`

**Funciones relacionadas**:
\`\`\`python
np.vstack((a, b))  # vertical (axis=0)
np.hstack((a, b))  # horizontal (axis=1)
np.stack((a, b))   # nueva dimensión
\`\`\`
`
    },

    // HARD - Aggregation Functions (Questions 18-20)
    {
        question: "**Función sum con axis**\n\n¿Qué devuelve \`arr.sum(axis=0)\`?",
        code: `import numpy as np

arr = np.array([[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]])

resultado = arr.sum(axis=0)`,
        options: [
            "[12 15 18]",
            "[ 6 15 24]",
            "45",
            "[[12 15 18]]"
        ],
        correct: "[12 15 18]",
        explanation: `**Respuesta correcta: [12 15 18]**

**\`axis=0\`** suma a lo largo de las **filas** (colapsa filas, mantiene columnas):

**Visualización**:
\`\`\`
columna:  0   1   2
        [1,  2,  3]
        [4,  5,  6]
      + [7,  8,  9]
        ──────────
        [12, 15, 18]
\`\`\`

**Comparación de axis**:
\`\`\`python
arr.sum(axis=0)  # [12 15 18] - suma por columnas
arr.sum(axis=1)  # [ 6 15 24] - suma por filas
arr.sum()        # 45 - suma total
\`\`\`

**Regla mnemotécnica**:
- **axis=0**: opera a lo largo de filas → resultado por columna
- **axis=1**: opera a lo largo de columnas → resultado por fila

**Otras funciones**: \`mean, max, min, std, var\` también usan axis
`
    },
    {
        question: "**Funciones de agregación**\n\n¿Qué calcula \`np.mean()\`?",
        code: `import numpy as np

arr = np.array([10, 20, 30, 40, 50])
resultado = np.mean(arr)`,
        options: [
            "30.0",
            "150",
            "50",
            "25.0"
        ],
        correct: "30.0",
        explanation: `**Respuesta correcta: 30.0**

**\`np.mean()\`** calcula el **promedio** (media aritmética):

\`\`\`python
mean = (10 + 20 + 30 + 40 + 50) / 5
     = 150 / 5
     = 30.0
\`\`\`

**Funciones de agregación comunes**:
\`\`\`python
arr = np.array([10, 20, 30, 40, 50])

np.mean(arr)   # 30.0 - promedio
np.median(arr) # 30.0 - mediana
np.std(arr)    # 14.14... - desviación estándar
np.var(arr)    # 200.0 - varianza
np.min(arr)    # 10 - mínimo
np.max(arr)    # 50 - máximo
np.sum(arr)    # 150 - suma total
np.prod(arr)   # 12000000 - producto
\`\`\`

**Con axis**: Puedes calcular por filas/columnas
`
    },
    {
        question: "**Desviación estándar**\n\n¿Para qué se usa \`np.std()\`?",
        code: `import numpy as np

notas = np.array([85, 90, 78, 92, 88])
desviacion = np.std(notas)`,
        options: [
            "Mide la dispersión de los datos respecto a la media",
            "Calcula el valor máximo del array",
            "Cuenta elementos únicos",
            "Ordena el array de menor a mayor"
        ],
        correct: "Mide la dispersión de los datos respecto a la media",
        explanation: `**Respuesta correcta: Mide la dispersión de los datos respecto a la media**

**\`np.std()\`** (standard deviation) mide qué tan dispersos están los datos:

**Interpretación**:
- **std bajo**: datos cercanos a la media (consistentes)
- **std alto**: datos muy dispersos (variables)

**Ejemplo**:
\`\`\`python
notas_consistentes = [88, 89, 90, 91, 92]
np.std(notas_consistentes)  # ~1.41 (bajo)

notas_dispersas = [40, 60, 80, 95, 100]
np.std(notas_dispersas)  # ~21.9 (alto)
\`\`\`

**Relación con varianza**:
\`\`\`python
varianza = np.var(arr)
desviacion = np.std(arr)
# std = √varianza
\`\`\`

**Uso común**: Estadística, control de calidad, análisis de datos
`
    },

    // HARD - Broadcasting (Questions 21-23)
    {
        question: "**Broadcasting básico**\n\n¿Qué permite hacer el broadcasting en NumPy?",
        code: `import numpy as np

matriz = np.array([[1, 2, 3],
                   [4, 5, 6]])

# Suma un escalar a toda la matriz
resultado = matriz + 10`,
        options: [
            "Operar arrays de diferentes formas siguiendo reglas específicas",
            "Transmitir datos por red",
            "Convertir arrays a listas",
            "Solo funciona con arrays del mismo tamaño"
        ],
        correct: "Operar arrays de diferentes formas siguiendo reglas específicas",
        explanation: `**Respuesta correcta: Operar arrays de diferentes formas siguiendo reglas específicas**

**Broadcasting** permite que NumPy opere arrays de formas diferentes automáticamente:

**Ejemplo simple**:
\`\`\`python
matriz + 10
# [[1+10, 2+10, 3+10],
#  [4+10, 5+10, 6+10]]
# = [[11, 12, 13],
#    [14, 15, 16]]
\`\`\`

**Reglas de broadcasting**:
1. Si dimensiones difieren, se añaden 1s a la izquierda
2. Las dimensiones deben ser iguales o una debe ser 1
3. Se "estira" la dimensión de tamaño 1

**Ejemplos válidos**:
\`\`\`python
(3, 4) + (4,)     # OK
(3, 4) + (3, 1)   # OK
(3, 4) + (1, 4)   # OK
\`\`\`

**Ventaja**: Código más limpio y eficiente sin bucles explícitos
`
    },
    {
        question: "**Broadcasting con vectores**\n\n¿Qué resultado produce esta operación?",
        code: `import numpy as np

matriz = np.array([[1, 2, 3],
                   [4, 5, 6]])

vector = np.array([10, 20, 30])

resultado = matriz + vector`,
        options: [
            "[[11 22 33]\n [14 25 36]]",
            "[[11 12 13]\n [24 25 26]]",
            "Error: shapes incompatibles",
            "[[11 21 31]\n [14 24 34]]"
        ],
        correct: "[[11 22 33]\n [14 25 36]]",
        explanation: `**Respuesta correcta: [[11 22 33]\n [14 25 36]]**

Broadcasting **extiende** el vector a cada fila de la matriz:

**Proceso**:
\`\`\`python
matriz (2, 3):     vector (3,):     resultado:
[1, 2, 3]       + [10, 20, 30]  = [11, 22, 33]
[4, 5, 6]       + [10, 20, 30]  = [14, 25, 36]
                  ↑ broadcast
\`\`\`

**Paso a paso**:
- Fila 0: [1+10, 2+20, 3+30] = [11, 22, 33]
- Fila 1: [4+10, 5+20, 6+30] = [14, 25, 36]

**Compatible porque**:
- matriz: shape (2, 3)
- vector: shape (3,) → broadcast a (1, 3) → (2, 3)

**Uso común**: Normalizar datos, aplicar transformaciones
`
    },
    {
        question: "**Broadcasting avanzado**\n\n¿Qué operación es válida con broadcasting?",
        code: `import numpy as np

a = np.array([[1], [2], [3]])  # shape (3, 1)
b = np.array([10, 20, 30])      # shape (3,)`,
        options: [
            "a + b es válido, produce shape (3, 3)",
            "a + b produce error de dimensiones",
            "a + b solo suma el primer elemento",
            "a + b requiere transpose"
        ],
        correct: "a + b es válido, produce shape (3, 3)",
        explanation: `**Respuesta correcta: a + b es válido, produce shape (3, 3)**

**Broadcasting 2D**:
\`\`\`python
a (3, 1):    b (3,):        resultado (3, 3):
[[1]]     + [10, 20, 30] = [[11, 21, 31],
 [2]]                        [12, 22, 32],
 [3]]                        [13, 23, 33]]
\`\`\`

**Proceso de broadcasting**:
1. \`a\` shape: (3, 1)
2. \`b\` shape: (3,) → (1, 3)
3. Compatibles: (3, 1) + (1, 3) → (3, 3)

**Expansión**:
- \`a\` se repite horizontalmente
- \`b\` se repite verticalmente

**Visualización**:
\`\`\`python
# a se expande →
[[1, 1, 1],     [[10, 20, 30],     [[11, 21, 31],
 [2, 2, 2],  +   [10, 20, 30],  =   [12, 22, 32],
 [3, 3, 3]]      [10, 20, 30]]      [13, 23, 33]]
        # b se expande ↓
\`\`\`
`
    },

    // ADVANCED - Best Practices (Questions 24-25)
    {
        question: "**Vectorización**\n\n¿Por qué es mejor usar operaciones vectorizadas que bucles?",
        code: `import numpy as np

# Enfoque A: Con bucle
arr = np.arange(1000000)
resultado_a = []
for x in arr:
    resultado_a.append(x * 2)

# Enfoque B: Vectorizado
resultado_b = arr * 2`,
        options: [
            "Es mucho más rápido y usa menos memoria",
            "El bucle es más legible",
            "No hay diferencia en rendimiento",
            "Los bucles son más seguros"
        ],
        correct: "Es mucho más rápido y usa menos memoria",
        explanation: `**Respuesta correcta: Es mucho más rápido y usa menos memoria**

**Vectorización** es fundamental en NumPy:

**Ventajas**:
1. **Velocidad**: 10-100x más rápido
   - Operaciones en C optimizado
   - Sin overhead de Python

2. **Memoria**: Más eficiente
   - Sin listas intermedias
   - Operaciones in-place posibles

3. **Código**: Más limpio y legible
   - Menos líneas
   - Intención clara

**Comparación de rendimiento**:
\`\`\`python
# Bucle Python: ~100ms
for x in arr:
    result.append(x * 2)

# Vectorizado NumPy: ~1ms
arr * 2
\`\`\`

**Regla de oro**: Evita bucles, piensa en operaciones sobre arrays completos
`
    },
    {
        question: "**Copias vs. Vistas**\n\n¿Qué diferencia hay entre \`.copy()\` y \`.view()\`?",
        code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])

# Opción A
a = arr.copy()
a[0] = 99

# Opción B
b = arr.view()
b[0] = 77`,
        options: [
            "copy() crea copia independiente, view() comparte datos",
            "Son exactamente iguales",
            "view() es más lento que copy()",
            "copy() no funciona con arrays grandes"
        ],
        correct: "copy() crea copia independiente, view() comparte datos",
        explanation: `**Respuesta correcta: copy() crea copia independiente, view() comparte datos**

**Diferencias cruciales**:

**\`.copy()\`** - Copia profunda:
\`\`\`python
a = arr.copy()
a[0] = 99
# arr NO cambia → [1, 2, 3, 4, 5]
# a cambia → [99, 2, 3, 4, 5]
\`\`\`

**\`.view()\`** - Vista (mismos datos):
\`\`\`python
b = arr.view()
b[0] = 77
# arr SÍ cambia → [77, 2, 3, 4, 5]
# b también → [77, 2, 3, 4, 5]
\`\`\`

**Cuándo usar cada uno**:
- **copy()**: Cuando necesitas modificar sin afectar el original
- **view()**: Para ahorrar memoria con arrays grandes (cuidado con modificaciones)

**Nota**: Slicing básico crea vistas, no copias:
\`\`\`python
sub = arr[1:3]  # vista, no copia
\`\`\`
`
        }
    ]
}
