/**
 * @file Python Dictionaries Quiz Data
 * @description Comprehensive quiz covering Python dictionaries from basics to advanced topics
 */

const pythonDictionariesQuizData = [
    {
        question: "**Creación básica de diccionario**\n\n¿Cuál es la forma correcta de crear un diccionario vacío en Python?",
        code: `from typing import Dict

# ¿Cuál de estas opciones crea un diccionario vacío?`,
        options: [
            "mi_dict: Dict = {}",
            "mi_dict: Dict = []",
            "mi_dict: Dict = ()",
            "mi_dict: Dict = set()"
        ],
        correct: "mi_dict: Dict = {}",
        explanation: `**Respuesta correcta: mi_dict: Dict = {}**

En Python, hay dos formas principales de crear un diccionario vacío:
1. **Usando llaves**: \`mi_dict = {}\` ← Más común y pythonic
2. **Usando el constructor**: \`mi_dict = dict()\`

Los otros símbolos representan:
- \`[]\` crea una lista vacía
- \`()\` crea una tupla vacía
- \`set()\` crea un conjunto vacío

**Type Hints**: \`Dict\` (del módulo \`typing\`) indica que la variable contendrá un diccionario.

**Nota importante**: \`{}\` crea un diccionario vacío, no un conjunto. Para un conjunto vacío, debes usar \`set()\`.
`
    },
    {
        question: "**Acceso a valores por clave**\n\n¿Qué valor devuelve la siguiente expresión?",
        code: `from typing import Dict

estudiante: Dict[str, any] = {
    "nombre": "Ana",
    "edad": 20,
    "nota": 95
}
resultado = estudiante["edad"]`,
        options: [
            "\"Ana\"",
            "20",
            "95",
            "Error"
        ],
        correct: "20",
        explanation: `**Respuesta correcta: 20**

En los diccionarios, se accede a los valores usando **claves entre corchetes**:

**Sintaxis**: \`diccionario[clave]\`

**Proceso**:
\`\`\`python
estudiante["nombre"]  # "Ana"
estudiante["edad"]    # 20 ✓
estudiante["nota"]    # 95
\`\`\`

**Características**:
- Las claves son **únicas** en un diccionario
- Las claves pueden ser strings, números, tuplas (tipos inmutables)
- Si la clave no existe, Python lanza un \`KeyError\`

**Alternativa segura con get()**:
\`\`\`python
estudiante.get("edad")  # 20
estudiante.get("apellido")  # None
estudiante.get("apellido", "Desconocido")  # "Desconocido"
\`\`\`
`
    },
    {
        question: "**Crear diccionario con pares clave-valor**\n\n¿Qué diccionario se crea con este código?",
        code: `from typing import Dict

colores: Dict[str, str] = {
    "rojo": "#FF0000",
    "verde": "#00FF00",
    "azul": "#0000FF"
}`,
        options: [
            "Diccionario con 3 pares clave-valor",
            "Lista con 3 elementos",
            "Set con 3 elementos",
            "Error de sintaxis"
        ],
        correct: "Diccionario con 3 pares clave-valor",
        explanation: `**Respuesta correcta: Diccionario con 3 pares clave-valor**

Un diccionario se crea con la sintaxis \`{clave: valor}\`:

**Estructura**:
\`\`\`python
colores = {
    "rojo": "#FF0000",    # clave: "rojo", valor: "#FF0000"
    "verde": "#00FF00",   # clave: "verde", valor: "#00FF00"
    "azul": "#0000FF"     # clave: "azul", valor: "#0000FF"
}
\`\`\`

**Acceso**:
\`\`\`python
colores["rojo"]   # "#FF0000"
colores["verde"]  # "#00FF00"
colores["azul"]   # "#0000FF"
\`\`\`

**Type Hints**:
- \`Dict[str, str]\` indica diccionario con claves string y valores string
- \`Dict[str, int]\` sería claves string y valores int
- \`Dict[int, List[str]]\` sería claves int y valores lista de strings
`
    },
    {
        question: "**Modificar valores en diccionario**\n\n¿Qué contiene el diccionario después de ejecutar este código?",
        code: `from typing import Dict

precios: Dict[str, float] = {
    "manzana": 1.50,
    "banana": 0.80,
    "naranja": 1.20
}
precios["banana"] = 0.90
precios["uva"] = 2.00`,
        options: [
            "{\"manzana\": 1.50, \"banana\": 0.90, \"naranja\": 1.20, \"uva\": 2.00}",
            "{\"manzana\": 1.50, \"banana\": 0.80, \"naranja\": 1.20}",
            "{\"banana\": 0.90, \"uva\": 2.00}",
            "Error: no se puede modificar"
        ],
        correct: "{\"manzana\": 1.50, \"banana\": 0.90, \"naranja\": 1.20, \"uva\": 2.00}",
        explanation: `**Respuesta correcta: {"manzana": 1.50, "banana": 0.90, "naranja": 1.20, "uva": 2.00}**

Los diccionarios son **mutables**, podemos modificar y agregar pares clave-valor:

**Proceso**:
1. Estado inicial: \`{"manzana": 1.50, "banana": 0.80, "naranja": 1.20}\`
2. \`precios["banana"] = 0.90\` → Modifica valor existente
3. \`precios["uva"] = 2.00\` → Agrega nueva clave-valor

**Resultado**: \`{"manzana": 1.50, "banana": 0.90, "naranja": 1.20, "uva": 2.00}\` ✓

**Reglas**:
- Si la clave **existe**: modifica el valor
- Si la clave **no existe**: crea nuevo par clave-valor
`
    },
    {
        question: "**Método get() vs acceso directo**\n\n¿Cuál es la diferencia entre estos dos códigos?",
        code: `from typing import Dict, Optional

persona: Dict[str, str] = {"nombre": "Juan", "edad": "30"}

# Código A
valor_a = persona["ciudad"]  # ¿Qué pasa?

# Código B  
valor_b = persona.get("ciudad")  # ¿Qué pasa?`,
        options: [
            "A lanza KeyError, B retorna None",
            "Ambos retornan None",
            "Ambos lanzan KeyError",
            "A retorna None, B lanza KeyError"
        ],
        correct: "A lanza KeyError, B retorna None",
        explanation: `**Respuesta correcta: A lanza KeyError, B retorna None**

**Acceso directo con []**:
\`\`\`python
persona["ciudad"]  # KeyError: 'ciudad'
# Lanza excepción si la clave no existe
\`\`\`

**Método get()**:
\`\`\`python
persona.get("ciudad")  # None
# Retorna None si la clave no existe (seguro)

persona.get("ciudad", "Desconocida")  # "Desconocida"
# Puedes especificar un valor por defecto
\`\`\`

**Cuándo usar cada uno**:
- **[]**: Cuando sabes que la clave existe
- **get()**: Cuando la clave puede no existir

**Ejemplo práctico**:
\`\`\`python
# Con get() - seguro
ciudad = persona.get("ciudad", "No especificada")
print(ciudad)  # "No especificada"

# Con [] - requiere try-except
try:
    ciudad = persona["ciudad"]
except KeyError:
    ciudad = "No especificada"
\`\`\`
`
    },
    {
        question: "**Método keys(), values(), items()**\n\n¿Qué retorna cada uno de estos métodos?",
        code: `from typing import Dict

datos: Dict[str, int] = {"a": 1, "b": 2, "c": 3}

claves = list(datos.keys())
valores = list(datos.values())
pares = list(datos.items())`,
        options: [
            "claves=[\"a\",\"b\",\"c\"], valores=[1,2,3], pares=[(\"a\",1),(\"b\",2),(\"c\",3)]",
            "claves=[1,2,3], valores=[\"a\",\"b\",\"c\"], pares=[(1,\"a\"),(2,\"b\"),(3,\"c\")]",
            "Todos retornan el diccionario completo",
            "Error: métodos no existen"
        ],
        correct: "claves=[\"a\",\"b\",\"c\"], valores=[1,2,3], pares=[(\"a\",1),(\"b\",2),(\"c\",3)]",
        explanation: `**Respuesta correcta: claves=["a","b","c"], valores=[1,2,3], pares=[("a",1),("b",2),("c",3)]**

Los diccionarios tienen tres métodos para acceder a sus componentes:

**keys()** - Retorna todas las claves:
\`\`\`python
datos.keys()  # dict_keys(['a', 'b', 'c'])
list(datos.keys())  # ['a', 'b', 'c'] ✓
\`\`\`

**values()** - Retorna todos los valores:
\`\`\`python
datos.values()  # dict_values([1, 2, 3])
list(datos.values())  # [1, 2, 3] ✓
\`\`\`

**items()** - Retorna pares (clave, valor):
\`\`\`python
datos.items()  # dict_items([('a', 1), ('b', 2), ('c', 3)])
list(datos.items())  # [('a', 1), ('b', 2), ('c', 3)] ✓
\`\`\`

**Uso en loops**:
\`\`\`python
# Iterar sobre claves
for clave in datos.keys():
    print(clave)

# Iterar sobre valores
for valor in datos.values():
    print(valor)

# Iterar sobre pares (más común)
for clave, valor in datos.items():
    print(f"{clave}: {valor}")
\`\`\`
`
    },
    {
        question: "**Método update()**\n\n¿Qué contiene el diccionario después de ejecutar este código?",
        code: `from typing import Dict

config: Dict[str, any] = {"tema": "oscuro", "idioma": "es"}
nuevos: Dict[str, any] = {"idioma": "en", "fuente": 14}
config.update(nuevos)`,
        options: [
            "{\"tema\": \"oscuro\", \"idioma\": \"en\", \"fuente\": 14}",
            "{\"tema\": \"oscuro\", \"idioma\": \"es\"}",
            "{\"idioma\": \"en\", \"fuente\": 14}",
            "Error: claves duplicadas"
        ],
        correct: "{\"tema\": \"oscuro\", \"idioma\": \"en\", \"fuente\": 14}",
        explanation: `**Respuesta correcta: {"tema": "oscuro", "idioma": "en", "fuente": 14}**

El método **update()** combina dos diccionarios:

**Proceso**:
1. Estado inicial: \`{"tema": "oscuro", "idioma": "es"}\`
2. Ejecuta \`update({"idioma": "en", "fuente": 14})\`
3. Para cada par en \`nuevos\`:
   - "idioma": "en" → **Actualiza** (clave existe)
   - "fuente": 14 → **Agrega** (clave nueva)

**Resultado**: \`{"tema": "oscuro", "idioma": "en", "fuente": 14}\` ✓

**Características de update()**:
- **Modifica** el diccionario original (in-place)
- Si la clave existe: **actualiza** el valor
- Si la clave no existe: **agrega** el par clave-valor
- No retorna nada (None)

**Formas alternativas**:
\`\`\`python
# Con update()
config.update(nuevos)

# Con operador |= (Python 3.9+)
config |= nuevos

# Con ** operator
config = {**config, **nuevos}
\`\`\`
`
    },
    {
        question: "**Método pop()**\n\n¿Qué valor retorna y cómo queda el diccionario?",
        code: `from typing import Dict

inventario: Dict[str, int] = {
    "manzanas": 10,
    "bananas": 15,
    "naranjas": 8
}
valor = inventario.pop("bananas")`,
        options: [
            "valor = 15, dict = {\"manzanas\": 10, \"naranjas\": 8}",
            "valor = None, dict sin cambios",
            "valor = \"bananas\", dict = {\"manzanas\": 10, \"naranjas\": 8}",
            "Error: clave no encontrada"
        ],
        correct: "valor = 15, dict = {\"manzanas\": 10, \"naranjas\": 8}",
        explanation: `**Respuesta correcta: valor = 15, dict = {"manzanas": 10, "naranjas": 8}**

El método **pop(clave)** hace dos cosas:
1. **Elimina** el par clave-valor
2. **Retorna** el valor asociado

**Proceso**:
\`\`\`python
inventario = {"manzanas": 10, "bananas": 15, "naranjas": 8}
valor = inventario.pop("bananas")
# valor = 15 ✓
# inventario = {"manzanas": 10, "naranjas": 8} ✓
\`\`\`

**Con valor por defecto**:
\`\`\`python
# Si la clave existe
valor = inventario.pop("manzanas", 0)  # 10

# Si la clave NO existe
valor = inventario.pop("uvas", 0)  # 0 (no lanza error)

# Sin valor por defecto (lanza KeyError si no existe)
valor = inventario.pop("uvas")  # KeyError
\`\`\`

**Comparación con del**:
\`\`\`python
# pop() - retorna el valor
valor = dict.pop("clave")  # Obtiene el valor

# del - solo elimina, no retorna
del dict["clave"]  # No retorna nada
\`\`\`
`
    },
    {
        question: "**Operador in con diccionarios**\n\n¿Qué verifica el operador \`in\` en un diccionario?",
        code: `from typing import Dict

producto: Dict[str, any] = {
    "nombre": "Laptop",
    "precio": 999.99,
    "stock": 5
}

resultado1 = "precio" in producto
resultado2 = 999.99 in producto
resultado3 = "marca" in producto`,
        options: [
            "resultado1 = True, resultado2 = False, resultado3 = False",
            "resultado1 = True, resultado2 = True, resultado3 = False",
            "resultado1 = False, resultado2 = True, resultado3 = False",
            "Todos True"
        ],
        correct: "resultado1 = True, resultado2 = False, resultado3 = False",
        explanation: `**Respuesta correcta: resultado1 = True, resultado2 = False, resultado3 = False**

El operador \`in\` verifica si una **clave** existe en el diccionario:

**Proceso**:
\`\`\`python
"precio" in producto  # True ✓
# "precio" es una CLAVE que existe

999.99 in producto  # False ✓
# 999.99 es un VALOR, no una clave
# in solo verifica claves, no valores

"marca" in producto  # False ✓
# "marca" no es una clave que exista
\`\`\`

**Para verificar valores**:
\`\`\`python
# Verificar si un valor existe
999.99 in producto.values()  # True

# Verificar par clave-valor
("precio", 999.99) in producto.items()  # True
\`\`\`

**Uso común**:
\`\`\`python
# Antes de acceder
if "descuento" in producto:
    print(producto["descuento"])
else:
    print("Sin descuento")

# O usar get()
descuento = producto.get("descuento", 0)
\`\`\`
`
    },
    {
        question: "**Método setdefault()**\n\n¿Qué hace este método y cómo queda el diccionario?",
        code: `from typing import Dict

contador: Dict[str, int] = {"a": 1, "b": 2}

valor1 = contador.setdefault("a", 0)
valor2 = contador.setdefault("c", 0)`,
        options: [
            "valor1 = 1, valor2 = 0, dict = {\"a\": 1, \"b\": 2, \"c\": 0}",
            "valor1 = 0, valor2 = 0, dict = {\"a\": 0, \"b\": 2, \"c\": 0}",
            "valor1 = 1, valor2 = 0, dict = {\"a\": 1, \"b\": 2}",
            "Error: setdefault no existe"
        ],
        correct: "valor1 = 1, valor2 = 0, dict = {\"a\": 1, \"b\": 2, \"c\": 0}",
        explanation: `**Respuesta correcta: valor1 = 1, valor2 = 0, dict = {"a": 1, "b": 2, "c": 0}**

El método **setdefault(clave, valor_default)** funciona así:
- Si la clave **existe**: retorna el valor actual (no modifica)
- Si la clave **no existe**: crea el par con valor_default y lo retorna

**Proceso detallado**:
\`\`\`python
# 1. setdefault("a", 0)
# "a" existe con valor 1
# Retorna 1 (no modifica)
valor1 = 1 ✓

# 2. setdefault("c", 0)
# "c" no existe
# Crea "c": 0 y retorna 0
valor2 = 0 ✓

# Diccionario final
{"a": 1, "b": 2, "c": 0} ✓
\`\`\`

**Comparación con get()**:
\`\`\`python
# get() - NO modifica el diccionario
valor = dict.get("clave", default)  # Solo retorna

# setdefault() - SÍ modifica si no existe
valor = dict.setdefault("clave", default)  # Retorna Y agrega
\`\`\`

**Uso común**:
\`\`\`python
# Contar apariciones
texto = "aabbcc"
conteo: Dict[str, int] = {}
for letra in texto:
    conteo.setdefault(letra, 0)
    conteo[letra] += 1
# Resultado: {'a': 2, 'b': 2, 'c': 2}
\`\`\`
`
    },
    {
        question: "**Longitud de diccionario con len()**\n\n¿Qué retorna \`len()\` en un diccionario?",
        code: `from typing import Dict

datos: Dict[str, any] = {
    "nombre": "Python",
    "version": 3.9,
    "opensource": True
}

cantidad = len(datos)`,
        options: [
            "3",
            "6",
            "9",
            "Error"
        ],
        correct: "3",
        explanation: `**Respuesta correcta: 3**

La función \`len()\` retorna el **número de pares clave-valor** en el diccionario:

\`\`\`python
datos = {
    "nombre": "Python",      # Par 1
    "version": 3.9,          # Par 2
    "opensource": True       # Par 3
}

len(datos)  # 3 ✓
\`\`\`

**Casos comunes**:
\`\`\`python
len({})  # 0 (diccionario vacío)
len({"a": 1})  # 1
len({"a": 1, "b": 2, "c": 3})  # 3
\`\`\`

**Verificar si está vacío**:
\`\`\`python
# Forma 1
if len(datos) == 0:
    print("Vacío")

# Forma 2 (más pythonic)
if not datos:
    print("Vacío")
\`\`\`
`
    },
    {
        question: "**Eliminar todos los elementos con clear()**\n\n¿Qué hace el método clear()?",
        code: `from typing import Dict

cache: Dict[str, int] = {"user1": 100, "user2": 200}
cache.clear()`,
        options: [
            "Elimina todos los pares, cache = {}",
            "Retorna nuevo diccionario vacío",
            "Solo elimina los valores",
            "Error: clear no existe"
        ],
        correct: "Elimina todos los pares, cache = {}",
        explanation: `**Respuesta correcta: Elimina todos los pares, cache = {}**

El método **clear()** elimina **todos** los pares clave-valor del diccionario:

**Proceso**:
\`\`\`python
cache = {"user1": 100, "user2": 200}
cache.clear()
# cache = {} ✓ (vacío pero mismo objeto)
\`\`\`

**Características**:
- Modifica el diccionario original (in-place)
- No retorna nada (None)
- El diccionario sigue existiendo, solo está vacío

**Comparación con asignación**:
\`\`\`python
# clear() - mantiene misma referencia
dict1 = {"a": 1}
dict2 = dict1
dict1.clear()
# dict1 = {}
# dict2 = {} (¡también vacío!)

# Asignación - crea nueva referencia
dict1 = {"a": 1}
dict2 = dict1
dict1 = {}
# dict1 = {}
# dict2 = {"a": 1} (mantiene valores)
\`\`\`

**Uso típico**:
\`\`\`python
# Limpiar cache/temporal
cache.clear()

# Reset de configuración
configuracion.clear()
configuracion.update(default_config)
\`\`\`
`
    },
    {
        question: "**Copiar diccionarios con copy()**\n\n¿Cuál es la diferencia entre estos códigos?",
        code: `from typing import Dict

original: Dict[str, int] = {"a": 1, "b": 2}

# Código A
copia_a = original
copia_a["c"] = 3

# Código B
copia_b = original.copy()
copia_b["d"] = 4`,
        options: [
            "A modifica original, B no modifica original",
            "Ambos modifican original",
            "Ambos NO modifican original",
            "B modifica original, A no"
        ],
        correct: "A modifica original, B no modifica original",
        explanation: `**Respuesta correcta: A modifica original, B no modifica original**

**Código A - Asignación (referencia)**:
\`\`\`python
original = {"a": 1, "b": 2}
copia_a = original  # ¡Misma referencia!
copia_a["c"] = 3

# original = {"a": 1, "b": 2, "c": 3} ✗
# copia_a = {"a": 1, "b": 2, "c": 3} ✗
# ¡Ambos son el MISMO diccionario!
\`\`\`

**Código B - copy() (copia superficial)**:
\`\`\`python
original = {"a": 1, "b": 2}
copia_b = original.copy()  # Nueva copia
copia_b["d"] = 4

# original = {"a": 1, "b": 2} ✓ (no cambia)
# copia_b = {"a": 1, "b": 2, "d": 4} ✓
\`\`\`

**Formas de copiar**:
\`\`\`python
# Método copy()
copia = original.copy()

# Constructor dict()
copia = dict(original)

# Dict comprehension
copia = {k: v for k, v in original.items()}

# Desempaquetado (Python 3.5+)
copia = {**original}
\`\`\`

**Cuidado con objetos mutables**:
\`\`\`python
original = {"lista": [1, 2, 3]}
copia = original.copy()  # Copia superficial
copia["lista"].append(4)
# original["lista"] = [1, 2, 3, 4] ¡También cambia!

# Para copia profunda:
import copy
copia_profunda = copy.deepcopy(original)
\`\`\`
`
    },
    {
        question: "**Unión de diccionarios con | (Python 3.9+)**\n\n¿Qué resultado produce el operador | ?",
        code: `from typing import Dict

dict1: Dict[str, int] = {"a": 1, "b": 2}
dict2: Dict[str, int] = {"b": 3, "c": 4}
resultado = dict1 | dict2`,
        options: [
            "{\"a\": 1, \"b\": 3, \"c\": 4}",
            "{\"a\": 1, \"b\": 2, \"c\": 4}",
            "{\"b\": 3, \"c\": 4}",
            "Error: operador no válido"
        ],
        correct: "{\"a\": 1, \"b\": 3, \"c\": 4}",
        explanation: `**Respuesta correcta: {"a": 1, "b": 3, "c": 4}**

El operador **|** (Python 3.9+) crea un **nuevo diccionario** fusionando dos diccionarios:

**Proceso**:
\`\`\`python
dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}
resultado = dict1 | dict2

# Paso 1: Toma todos de dict1
{"a": 1, "b": 2}

# Paso 2: Agrega/sobrescribe con dict2
# "b": 3 (sobrescribe "b": 2)
# "c": 4 (nueva clave)

# Resultado final
{"a": 1, "b": 3, "c": 4} ✓
\`\`\`

**Regla importante**: El diccionario de la **derecha** tiene prioridad en conflictos.

**Operadores relacionados**:
\`\`\`python
# | - Crea nuevo diccionario
nuevo = dict1 | dict2  # dict1 y dict2 sin cambios

# |= - Actualiza in-place
dict1 |= dict2  # Equivalente a dict1.update(dict2)
\`\`\`

**Forma alternativa (todas las versiones)**:
\`\`\`python
# Desempaquetado
resultado = {**dict1, **dict2}

# update() (modifica dict1)
dict1.update(dict2)
\`\`\`
`
    },
    {
        question: "**Dictionary comprehension básica**\n\n¿Qué diccionario produce esta comprehension?",
        code: `from typing import Dict

numeros = [1, 2, 3, 4]
cuadrados: Dict[int, int] = {x: x**2 for x in numeros}`,
        options: [
            "{1: 1, 2: 4, 3: 9, 4: 16}",
            "{1: 2, 2: 4, 3: 6, 4: 8}",
            "[1, 4, 9, 16]",
            "Error de sintaxis"
        ],
        correct: "{1: 1, 2: 4, 3: 9, 4: 16}",
        explanation: `**Respuesta correcta: {1: 1, 2: 4, 3: 9, 4: 16}**

Una **dictionary comprehension** crea diccionarios de forma concisa:

**Sintaxis**: \`{clave: valor for item in iterable}\`

**Proceso**:
\`\`\`python
numeros = [1, 2, 3, 4]

x = 1  →  1: 1**2  →  1: 1
x = 2  →  2: 2**2  →  2: 4
x = 3  →  3: 3**2  →  3: 9
x = 4  →  4: 4**2  →  4: 16

Resultado: {1: 1, 2: 4, 3: 9, 4: 16} ✓
\`\`\`

**Equivalente con loop**:
\`\`\`python
cuadrados: Dict[int, int] = {}
for x in numeros:
    cuadrados[x] = x**2
\`\`\`

**Más ejemplos**:
\`\`\`python
# Invertir clave-valor
original = {"a": 1, "b": 2}
invertido = {v: k for k, v in original.items()}
# {1: "a", 2: "b"}

# De lista a diccionario con índices
palabras = ["hola", "mundo"]
indices = {palabra: i for i, palabra in enumerate(palabras)}
# {"hola": 0, "mundo": 1}

# Convertir a mayúsculas
original = {"nombre": "juan", "ciudad": "lima"}
mayus = {k: v.upper() for k, v in original.items()}
# {"nombre": "JUAN", "ciudad": "LIMA"}
\`\`\`
`
    },
    {
        question: "**Dictionary comprehension con filtro**\n\n¿Qué resultado produce esta comprehension?",
        code: `from typing import Dict

datos: Dict[str, int] = {
    "a": 5,
    "b": 12,
    "c": 8,
    "d": 15
}
filtrado: Dict[str, int] = {k: v for k, v in datos.items() if v > 10}`,
        options: [
            "{\"b\": 12, \"d\": 15}",
            "{\"a\": 5, \"c\": 8}",
            "{\"b\": 12, \"c\": 8, \"d\": 15}",
            "{12, 15}"
        ],
        correct: "{\"b\": 12, \"d\": 15}",
        explanation: `**Respuesta correcta: {"b": 12, "d": 15}**

Dictionary comprehensions pueden incluir una **condición de filtro**:

**Sintaxis**: \`{k: v for k, v in dict.items() if condicion}\`

**Proceso**:
\`\`\`python
datos = {"a": 5, "b": 12, "c": 8, "d": 15}

Para cada par (k, v):
"a": 5  → 5 > 10 → False (descartado)
"b": 12 → 12 > 10 → True  → incluir "b": 12 ✓
"c": 8  → 8 > 10 → False (descartado)
"d": 15 → 15 > 10 → True  → incluir "d": 15 ✓

Resultado: {"b": 12, "d": 15} ✓
\`\`\`

**Equivalente con loop**:
\`\`\`python
filtrado: Dict[str, int] = {}
for k, v in datos.items():
    if v > 10:
        filtrado[k] = v
\`\`\`

**Más ejemplos**:
\`\`\`python
# Filtrar por clave
datos = {"admin": 1, "user": 2, "guest": 3}
solo_user = {k: v for k, v in datos.items() if "user" in k}
# {"user": 2}

# Filtrar valores pares
numeros = {"a": 1, "b": 2, "c": 3, "d": 4}
pares = {k: v for k, v in numeros.items() if v % 2 == 0}
# {"b": 2, "d": 4}

# Filtrar strings largos
datos = {"corto": "hi", "largo": "hello world"}
largos = {k: v for k, v in datos.items() if len(v) > 5}
# {"largo": "hello world"}
\`\`\`
`
    },
    {
        question: "**Dictionary comprehension con transformación**\n\n¿Qué resultado produce esta comprehension?",
        code: `from typing import Dict

nombres = ["ana", "bob", "carlos"]
longitudes: Dict[str, int] = {nombre.upper(): len(nombre) for nombre in nombres}`,
        options: [
            "{\"ANA\": 3, \"BOB\": 3, \"CARLOS\": 6}",
            "{\"ana\": 3, \"bob\": 3, \"carlos\": 6}",
            "{3: \"ANA\", 3: \"BOB\", 6: \"CARLOS\"}",
            "Error: claves duplicadas"
        ],
        correct: "{\"ANA\": 3, \"BOB\": 3, \"CARLOS\": 6}",
        explanation: `**Respuesta correcta: {"ANA": 3, "BOB": 3, "CARLOS": 6}**

Esta comprehension aplica **transformaciones** a claves y valores:

**Proceso**:
\`\`\`python
nombres = ["ana", "bob", "carlos"]

nombre = "ana"    → "ANA": len("ana")    → "ANA": 3 ✓
nombre = "bob"    → "BOB": len("bob")    → "BOB": 3 ✓
nombre = "carlos" → "CARLOS": len("carlos") → "CARLOS": 6 ✓

Resultado: {"ANA": 3, "BOB": 3, "CARLOS": 6} ✓
\`\`\`

**Transformaciones comunes**:
\`\`\`python
# Convertir claves y valores
precios = {"manzana": 1.5, "banana": 0.8}
precios_dobles = {k.upper(): v*2 for k, v in precios.items()}
# {"MANZANA": 3.0, "BANANA": 1.6}

# Aplicar función
nombres = ["juan", "maria"]
dict_lengths = {n: len(n) for n in nombres}
# {"juan": 4, "maria": 5}

# Combinación de transformaciones
datos = {"a": "hola", "b": "mundo"}
trans = {k.upper(): v.title() for k, v in datos.items()}
# {"A": "Hola", "B": "Mundo"}
\`\`\`
`
    },
    {
        question: "**Diccionarios anidados - Acceso**\n\n¿Qué valor retorna esta expresión?",
        code: `from typing import Dict, Any

empresa: Dict[str, Any] = {
    "nombre": "TechCorp",
    "empleados": {
        "gerente": "Ana",
        "dev": "Bob"
    },
    "ingresos": 1000000
}
valor = empresa["empleados"]["dev"]`,
        options: [
            "\"Bob\"",
            "\"Ana\"",
            "{\"gerente\": \"Ana\", \"dev\": \"Bob\"}",
            "Error"
        ],
        correct: "\"Bob\"",
        explanation: `**Respuesta correcta: "Bob"**

Los **diccionarios anidados** se acceden con múltiples corchetes:

**Proceso de \`empresa["empleados"]["dev"]\`**:
\`\`\`python
# Paso 1: empresa["empleados"]
{
    "gerente": "Ana",
    "dev": "Bob"
}

# Paso 2: ["dev"]
"Bob" ✓
\`\`\`

**Visualización de la estructura**:
\`\`\`python
empresa = {
    "nombre": "TechCorp",
    "empleados": {           # Diccionario anidado
        "gerente": "Ana",
        "dev": "Bob"
    },
    "ingresos": 1000000
}
\`\`\`

**Accesos seguros**:
\`\`\`python
# Con get() anidado
dev = empresa.get("empleados", {}).get("dev", "No asignado")

# Verificar existencia
if "empleados" in empresa:
    if "dev" in empresa["empleados"]:
        print(empresa["empleados"]["dev"])
\`\`\`

**Modificar valores anidados**:
\`\`\`python
# Cambiar valor
empresa["empleados"]["dev"] = "Carlos"

# Agregar nuevo empleado
empresa["empleados"]["qa"] = "Diana"

# Agregar nueva categoría
empresa["oficinas"] = {"principal": "Lima"}
\`\`\`
`
    },
    {
        question: "**Diccionarios anidados - Iteración**\n\n¿Qué imprime este código?",
        code: `from typing import Dict

notas: Dict[str, Dict[str, int]] = {
    "Ana": {"mate": 90, "fisica": 85},
    "Bob": {"mate": 80, "fisica": 90}
}

for estudiante, materias in notas.items():
    for materia, nota in materias.items():
        if nota >= 90:
            print(f"{estudiante}-{materia}")`,
        options: [
            "Ana-mate\\nBob-fisica",
            "Ana\\nBob",
            "mate\\nfisica",
            "90\\n90"
        ],
        correct: "Ana-mate\\nBob-fisica",
        explanation: `**Respuesta correcta: Ana-mate\\nBob-fisica**

Este código itera sobre un **diccionario anidado** con dos niveles:

**Proceso detallado**:
\`\`\`python
# Iteración 1: Ana
estudiante = "Ana"
materias = {"mate": 90, "fisica": 85}
  
  # Iteración 1.1: mate
  materia = "mate", nota = 90
  90 >= 90 → True → print("Ana-mate") ✓
  
  # Iteración 1.2: fisica
  materia = "fisica", nota = 85
  85 >= 90 → False (no imprime)

# Iteración 2: Bob
estudiante = "Bob"
materias = {"mate": 80, "fisica": 90}
  
  # Iteración 2.1: mate
  materia = "mate", nota = 80
  80 >= 90 → False (no imprime)
  
  # Iteración 2.2: fisica
  materia = "fisica", nota = 90
  90 >= 90 → True → print("Bob-fisica") ✓

Salida:
Ana-mate
Bob-fisica ✓
\`\`\`

**Patrones comunes con diccionarios anidados**:
\`\`\`python
# Obtener todos los valores
for estudiante, materias in notas.items():
    promedio = sum(materias.values()) / len(materias)
    print(f"{estudiante}: {promedio}")

# Buscar valor específico
for estudiante, materias in notas.items():
    if materias.get("mate", 0) > 85:
        print(f"{estudiante} es bueno en mate")

# Aplanar estructura
todos_pares = [
    (est, mat, nota)
    for est, materias in notas.items()
    for mat, nota in materias.items()
]
\`\`\`
`
    },
    {
        question: "**Método fromkeys()**\n\n¿Qué diccionario crea este código?",
        code: `from typing import Dict, List

claves: List[str] = ["a", "b", "c"]
resultado: Dict[str, int] = dict.fromkeys(claves, 0)`,
        options: [
            "{\"a\": 0, \"b\": 0, \"c\": 0}",
            "{0: \"a\", 0: \"b\", 0: \"c\"}",
            "[\"a\", \"b\", \"c\"]",
            "Error: fromkeys no existe"
        ],
        correct: "{\"a\": 0, \"b\": 0, \"c\": 0}",
        explanation: `**Respuesta correcta: {"a": 0, "b": 0, "c": 0}**

El método **fromkeys()** crea un diccionario con claves dadas y un valor por defecto:

**Sintaxis**: \`dict.fromkeys(iterable, valor_default)\`

**Proceso**:
\`\`\`python
claves = ["a", "b", "c"]
dict.fromkeys(claves, 0)

# Crea un diccionario donde:
# - Cada elemento de 'claves' se convierte en una clave
# - Todas las claves tienen el mismo valor: 0

Resultado: {"a": 0, "b": 0, "c": 0} ✓
\`\`\`

**Sin valor default**:
\`\`\`python
dict.fromkeys(["x", "y", "z"])
# {"x": None, "y": None, "z": None}
# Por defecto usa None
\`\`\`

**Casos de uso**:
\`\`\`python
# Inicializar contadores
letras = ["a", "b", "c"]
contador = dict.fromkeys(letras, 0)
# {"a": 0, "b": 0, "c": 0}

# Crear conjunto de flags
opciones = ["debug", "verbose", "quiet"]
flags = dict.fromkeys(opciones, False)
# {"debug": False, "verbose": False, "quiet": False}

# Inicializar con listas (¡CUIDADO!)
keys = ["a", "b"]
wrong = dict.fromkeys(keys, [])  # ¡Todas comparten la MISMA lista!
correct = {k: [] for k in keys}  # Cada una tiene su propia lista
\`\`\`

**Importante**: Si el valor default es mutable (lista, dict), todas las claves compartirán la misma referencia.
`
    },
    {
        question: "**Iterar sobre diccionario**\n\n¿Cuál es el resultado de este loop?",
        code: `from typing import Dict

datos: Dict[str, int] = {"x": 10, "y": 20, "z": 30}
resultado: int = 0

for clave in datos:
    resultado += datos[clave]`,
        options: [
            "60",
            "0",
            "Error: no se puede iterar sobre dict",
            "xyz"
        ],
        correct: "60",
        explanation: `**Respuesta correcta: 60**

Cuando iteras sobre un diccionario **sin métodos**, iteras sobre sus **claves**:

**Proceso**:
\`\`\`python
datos = {"x": 10, "y": 20, "z": 30}
resultado = 0

# Itera sobre claves: "x", "y", "z"
for clave in datos:
    # Accede al valor usando la clave
    resultado += datos[clave]

clave = "x" → resultado += 10 → resultado = 10
clave = "y" → resultado += 20 → resultado = 30
clave = "z" → resultado += 30 → resultado = 60 ✓
\`\`\`

**Formas de iterar**:
\`\`\`python
# 1. Sobre claves (default)
for clave in datos:
    print(clave, datos[clave])

# 2. Sobre claves explícito
for clave in datos.keys():
    print(clave)

# 3. Sobre valores
for valor in datos.values():
    print(valor)

# 4. Sobre pares clave-valor (más común)
for clave, valor in datos.items():
    print(f"{clave}: {valor}")
\`\`\`

**Ventaja de items()**:
\`\`\`python
# Más limpio y eficiente
for clave, valor in datos.items():
    resultado += valor  # No necesitas datos[clave]
\`\`\`
`
    },
    {
        question: "**Método del operador | en Python 3.9+**\n\n¿Qué diferencia hay entre | y |= con diccionarios?",
        code: `from typing import Dict

# Ejemplo A
dict1: Dict[str, int] = {"a": 1, "b": 2}
dict2: Dict[str, int] = {"b": 3, "c": 4}
dict3 = dict1 | dict2

# Ejemplo B
dict4: Dict[str, int] = {"a": 1, "b": 2}
dict5: Dict[str, int] = {"b": 3, "c": 4}
dict4 |= dict5`,
        options: [
            "| crea nuevo dict, |= modifica dict4",
            "Ambos crean nuevos diccionarios",
            "Ambos modifican el diccionario original",
            "| modifica, |= crea nuevo"
        ],
        correct: "| crea nuevo dict, |= modifica dict4",
        explanation: `**Respuesta correcta: | crea nuevo dict, |= modifica dict4**

**Operador | (unión, crea nuevo)**:
\`\`\`python
dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}
dict3 = dict1 | dict2

# dict3 = {"a": 1, "b": 3, "c": 4} (nuevo dict)
# dict1 = {"a": 1, "b": 2} (sin cambios)
# dict2 = {"b": 3, "c": 4} (sin cambios)
\`\`\`

**Operador |= (actualización in-place)**:
\`\`\`python
dict4 = {"a": 1, "b": 2}
dict5 = {"b": 3, "c": 4}
dict4 |= dict5

# dict4 = {"a": 1, "b": 3, "c": 4} (modificado)
# dict5 = {"b": 3, "c": 4} (sin cambios)
# Equivalente a: dict4.update(dict5)
\`\`\`

**Comparación con update()**:
\`\`\`python
# |= es equivalente a update()
dict1 |= dict2  # Modifica dict1
dict1.update(dict2)  # Mismo efecto

# | no tiene equivalente directo con métodos
dict3 = dict1 | dict2
# Similar a (pero más eficiente que):
dict3 = {**dict1, **dict2}
\`\`\`

**Cuándo usar cada uno**:
- **|**: Cuando necesitas mantener los originales intactos
- **|=**: Cuando quieres actualizar el diccionario existente

**Disponibilidad**: Ambos operadores están disponibles desde Python 3.9+
`
    },
    {
        question: "**Iterar con items() - método recomendado**\n\n¿Qué imprime este código?",
        code: `from typing import Dict

precios: Dict[str, float] = {
    "manzana": 1.5,
    "banana": 0.8,
    "naranja": 1.2
}

for producto, precio in precios.items():
    print(f"{producto}: \${precio}")`,
        options: [
            "manzana: $1.5\\nbanana: $0.8\\nnaranja: $1.2",
            "1.5\\n0.8\\n1.2",
            "manzana\\nbanana\\nnaranja",
            "Error"
        ],
        correct: "manzana: $1.5\\nbanana: $0.8\\nnaranja: $1.2",
        explanation: `**Respuesta correcta: manzana: $1.5\\nbanana: $0.8\\nnaranja: $1.2**

El método **items()** es la forma más pythonic de iterar sobre diccionarios:

**Sintaxis**: \`for clave, valor in diccionario.items()\`

**Proceso**:
\`\`\`python
precios = {"manzana": 1.5, "banana": 0.8, "naranja": 1.2}

for producto, precio in precios.items():
    print(f"{producto}: \${precio}")

# Iteración 1: producto="manzana", precio=1.5
manzana: $1.5

# Iteración 2: producto="banana", precio=0.8
banana: $0.8

# Iteración 3: producto="naranja", precio=1.2
naranja: $1.2 ✓
\`\`\`

**Ventajas de items()**:
- Acceso directo a clave Y valor
- Código más limpio y legible
- No necesitas usar \`diccionario[clave]\`

**Comparación de métodos**:
\`\`\`python
# Método 1: items() - RECOMENDADO ✓
for producto, precio in precios.items():
    print(f"{producto}: {precio}")

# Método 2: Solo claves (menos eficiente)
for producto in precios:
    precio = precios[producto]
    print(f"{producto}: {precio}")

# Método 3: keys() explícito
for producto in precios.keys():
    precio = precios[producto]
    print(f"{producto}: {precio}")
\`\`\`

**Casos de uso comunes**:
\`\`\`python
# Filtrar por valor
caros = {p: pr for p, pr in precios.items() if pr > 1.0}
# {"manzana": 1.5, "naranja": 1.2}

# Crear diccionario invertido
invertido = {precio: producto for producto, precio in precios.items()}

# Modificar valores
for producto, precio in precios.items():
    precios[producto] = precio * 1.1  # Aumentar 10%
\`\`\`
`
    },
    {
        question: "**Iterar solo sobre claves con keys()**\n\n¿Cuál es la diferencia entre iterar con y sin keys()?",
        code: `from typing import Dict

usuarios: Dict[str, int] = {"ana": 25, "bob": 30, "carlos": 28}

# Forma A
for nombre in usuarios:
    print(nombre)

# Forma B
for nombre in usuarios.keys():
    print(nombre)`,
        options: [
            "Ambas formas producen el mismo resultado",
            "A itera valores, B itera claves",
            "A produce error, B funciona correctamente",
            "A es más rápida que B"
        ],
        correct: "Ambas formas producen el mismo resultado",
        explanation: `**Respuesta correcta: Ambas formas producen el mismo resultado**

Ambas formas iteran sobre las **claves** del diccionario:

**Demostración**:
\`\`\`python
usuarios = {"ana": 25, "bob": 30, "carlos": 28}

# Forma A - Implícita (más común)
for nombre in usuarios:
    print(nombre)
# ana
# bob
# carlos

# Forma B - Explícita
for nombre in usuarios.keys():
    print(nombre)
# ana
# bob
# carlos

# ¡Ambas producen lo mismo! ✓
\`\`\`

**¿Cuándo usar cada una?**

**Iterar directamente** (sin keys()):
\`\`\`python
# Más conciso y pythonic
for clave in diccionario:
    print(clave)
\`\`\`

**Usar keys() explícitamente**:
\`\`\`python
# 1. Cuando necesitas las claves como lista
claves_lista = list(usuarios.keys())

# 2. Para operaciones de conjuntos
dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}
comunes = dict1.keys() & dict2.keys()  # {"b"}

# 3. Para claridad en código complejo
for usuario in usuarios.keys():  # Más explícito
    if usuario in otros_usuarios.keys():
        print(f"{usuario} está en ambos")
\`\`\`

**Otros métodos de iteración**:
\`\`\`python
# Solo valores
for edad in usuarios.values():
    print(edad)  # 25, 30, 28

# Claves y valores
for nombre, edad in usuarios.items():
    print(f"{nombre}: {edad}")
\`\`\`

**Nota**: En Python 3, \`keys()\` retorna una vista (\`dict_keys\`), no una lista.
`
    },
    {
        question: "**Iterar solo sobre valores con values()**\n\n¿Qué resultado produce este código?",
        code: `from typing import Dict, List

notas: Dict[str, int] = {
    "matematicas": 85,
    "fisica": 90,
    "quimica": 78
}

total: int = 0
for nota in notas.values():
    total += nota

promedio = total / len(notas)`,
        options: [
            "promedio = 84.33...",
            "promedio = 253",
            "promedio = 85",
            "Error"
        ],
        correct: "promedio = 84.33...",
        explanation: `**Respuesta correcta: promedio = 84.33...**

El método **values()** itera solo sobre los valores del diccionario:

**Proceso**:
\`\`\`python
notas = {"matematicas": 85, "fisica": 90, "quimica": 78}

total = 0
for nota in notas.values():
    total += nota

# Iteración 1: nota = 85
total = 0 + 85 = 85

# Iteración 2: nota = 90
total = 85 + 90 = 175

# Iteración 3: nota = 78
total = 175 + 78 = 253

promedio = 253 / 3 = 84.333... ✓
\`\`\`

**Forma más concisa**:
\`\`\`python
# Usando sum()
promedio = sum(notas.values()) / len(notas)  # 84.333...
\`\`\`

**Casos de uso de values()**:
\`\`\`python
# Encontrar máximo/mínimo
nota_maxima = max(notas.values())  # 90
nota_minima = min(notas.values())  # 78

# Contar valores específicos
precios = {"a": 10, "b": 20, "c": 10, "d": 30}
count_10 = list(precios.values()).count(10)  # 2

# Verificar si existe un valor
if 90 in notas.values():
    print("Hay una nota de 90")  # ✓

# Convertir a lista
todas_notas = list(notas.values())  # [85, 90, 78]
\`\`\`

**Con comprensiones**:
\`\`\`python
# Filtrar valores
altas = [n for n in notas.values() if n >= 85]  # [85, 90]

# Transformar valores
ajustadas = [n + 5 for n in notas.values()]  # [90, 95, 83]

# Estadísticas
aprobadas = sum(1 for n in notas.values() if n >= 60)
\`\`\`

**Comparación**:
\`\`\`python
# values() - Solo valores
for v in dict.values():
    print(v)

# items() - Claves y valores
for k, v in dict.items():
    print(k, v)

# keys() - Solo claves
for k in dict.keys():
    print(k)
\`\`\`
`
    },
    {
        question: "**Diccionarios anidados - Estructura de datos compleja**\n\n¿Qué valor retorna esta expresión?",
        code: `from typing import Dict, Any

empresa: Dict[str, Any] = {
    "nombre": "TechCorp",
    "empleados": {
        "ingenieria": {
            "senior": ["Ana", "Bob"],
            "junior": ["Carlos"]
        },
        "ventas": {
            "senior": ["Diana"],
            "junior": ["Eva", "Frank"]
        }
    }
}

resultado = empresa["empleados"]["ingenieria"]["senior"][1]`,
        options: [
            "\"Bob\"",
            "\"Ana\"",
            "[\"Ana\", \"Bob\"]",
            "Error"
        ],
        correct: "\"Bob\"",
        explanation: `**Respuesta correcta: "Bob"**

Los **diccionarios anidados** pueden tener múltiples niveles de profundidad:

**Proceso de acceso**:
\`\`\`python
# Nivel 1: empresa["empleados"]
{
    "ingenieria": {...},
    "ventas": {...}
}

# Nivel 2: ["ingenieria"]
{
    "senior": ["Ana", "Bob"],
    "junior": ["Carlos"]
}

# Nivel 3: ["senior"]
["Ana", "Bob"]

# Nivel 4: [1]
"Bob" ✓
\`\`\`

**Acceso seguro con get()**:
\`\`\`python
# Acceso directo (puede lanzar KeyError)
bob = empresa["empleados"]["ingenieria"]["senior"][1]

# Acceso seguro
ingenieria = empresa.get("empleados", {}).get("ingenieria", {})
seniors = ingenieria.get("senior", [])
bob = seniors[1] if len(seniors) > 1 else None
\`\`\`

**Iterar sobre estructura anidada**:
\`\`\`python
# Iterar todos los empleados
for depto, niveles in empresa["empleados"].items():
    print(f"Departamento: {depto}")
    for nivel, personas in niveles.items():
        print(f"  {nivel}: {personas}")

# Salida:
# Departamento: ingenieria
#   senior: ['Ana', 'Bob']
#   junior: ['Carlos']
# Departamento: ventas
#   senior: ['Diana']
#   junior: ['Eva', 'Frank']
\`\`\`

**Modificar valores anidados**:
\`\`\`python
# Agregar empleado
empresa["empleados"]["ingenieria"]["senior"].append("Grace")

# Cambiar estructura
empresa["empleados"]["marketing"] = {
    "senior": ["Henry"],
    "junior": []
}

# Eliminar nivel
del empresa["empleados"]["ventas"]["junior"]
\`\`\`

**Casos de uso reales**:
\`\`\`python
# Configuración de aplicación
config = {
    "database": {
        "host": "localhost",
        "credentials": {
            "user": "admin",
            "password": "secret"
        }
    },
    "api": {
        "version": "v1",
        "endpoints": {
            "users": "/api/v1/users",
            "products": "/api/v1/products"
        }
    }
}

# Acceder a configuración
db_user = config["database"]["credentials"]["user"]
\`\`\`
`
    },
    {
        question: "**Lista de diccionarios - Patrón común**\n\n¿Qué imprime este código?",
        code: `from typing import List, Dict

estudiantes: List[Dict[str, Any]] = [
    {"nombre": "Ana", "edad": 20, "nota": 85},
    {"nombre": "Bob", "edad": 22, "nota": 92},
    {"nombre": "Carlos", "edad": 21, "nota": 78}
]

for estudiante in estudiantes:
    if estudiante["nota"] >= 80:
        print(estudiante["nombre"])`,
        options: [
            "Ana\\nBob",
            "Ana\\nBob\\nCarlos",
            "85\\n92",
            "Error"
        ],
        correct: "Ana\\nBob",
        explanation: `**Respuesta correcta: Ana\\nBob**

Las **listas de diccionarios** son un patrón muy común para representar colecciones de objetos:

**Proceso**:
\`\`\`python
estudiantes = [
    {"nombre": "Ana", "edad": 20, "nota": 85},
    {"nombre": "Bob", "edad": 22, "nota": 92},
    {"nombre": "Carlos", "edad": 21, "nota": 78}
]

for estudiante in estudiantes:
    if estudiante["nota"] >= 80:
        print(estudiante["nombre"])

# Iteración 1: estudiante = {"nombre": "Ana", ...}
85 >= 80 → True → print("Ana") ✓

# Iteración 2: estudiante = {"nombre": "Bob", ...}
92 >= 80 → True → print("Bob") ✓

# Iteración 3: estudiante = {"nombre": "Carlos", ...}
78 >= 80 → False (no imprime)

Salida:
Ana
Bob ✓
\`\`\`

**Operaciones comunes**:
\`\`\`python
# Encontrar por nombre
def buscar_estudiante(nombre: str) -> Dict:
    for est in estudiantes:
        if est["nombre"] == nombre:
            return est
    return None

# Calcular promedio
promedio = sum(e["nota"] for e in estudiantes) / len(estudiantes)
# 85 (85+92+78)/3

# Filtrar con list comprehension
aprobados = [e for e in estudiantes if e["nota"] >= 60]

# Ordenar por nota
por_nota = sorted(estudiantes, key=lambda e: e["nota"], reverse=True)
# [Bob(92), Ana(85), Carlos(78)]
\`\`\`

**Crear desde datos**:
\`\`\`python
# De listas separadas
nombres = ["Ana", "Bob"]
edades = [20, 22]
estudiantes = [
    {"nombre": n, "edad": e}
    for n, e in zip(nombres, edades)
]

# De input de usuario
estudiantes = []
for i in range(3):
    estudiantes.append({
        "nombre": input("Nombre: "),
        "nota": int(input("Nota: "))
    })
\`\`\`

**Convertir a otros formatos**:
\`\`\`python
# A lista de valores
nombres = [e["nombre"] for e in estudiantes]
# ["Ana", "Bob", "Carlos"]

# A diccionario con clave personalizada
por_nombre = {e["nombre"]: e for e in estudiantes}
# {"Ana": {...}, "Bob": {...}, "Carlos": {...}}

# A JSON
import json
json_str = json.dumps(estudiantes)
\`\`\`

**Caso de uso real**: APIs REST, bases de datos, configuraciones
`
    },
    {
        question: "**Iterar diccionarios anidados con items()**\n\n¿Qué imprime este código?",
        code: `from typing import Dict

inventario: Dict[str, Dict[str, int]] = {
    "frutas": {"manzanas": 10, "bananas": 15},
    "verduras": {"zanahorias": 8, "lechugas": 5}
}

for categoria, productos in inventario.items():
    print(f"{categoria}:")
    for producto, cantidad in productos.items():
        print(f"  {producto}: {cantidad}")`,
        options: [
            "frutas:\\n  manzanas: 10\\n  bananas: 15\\nverduras:\\n  zanahorias: 8\\n  lechugas: 5",
            "manzanas: 10\\nbananas: 15\\nzanahorias: 8\\nlechugas: 5",
            "frutas\\nverduras",
            "Error"
        ],
        correct: "frutas:\\n  manzanas: 10\\n  bananas: 15\\nverduras:\\n  zanahorias: 8\\n  lechugas: 5",
        explanation: `**Respuesta correcta: frutas: manzanas: 10, bananas: 15, verduras: zanahorias: 8, lechugas: 5**

Para iterar **diccionarios anidados**, usamos **loops anidados** con \`items()\`:

**Proceso detallado**:
\`\`\`python
inventario = {
    "frutas": {"manzanas": 10, "bananas": 15},
    "verduras": {"zanahorias": 8, "lechugas": 5}
}

# Loop externo: categorías
for categoria, productos in inventario.items():
    print(f"{categoria}:")
    
    # Loop interno: productos de cada categoría
    for producto, cantidad in productos.items():
        print(f"  {producto}: {cantidad}")

# Iteración 1: categoria="frutas"
frutas:
  # productos = {"manzanas": 10, "bananas": 15}
  # Iteración 1.1: producto="manzanas", cantidad=10
  manzanas: 10
  # Iteración 1.2: producto="bananas", cantidad=15
  bananas: 15

# Iteración 2: categoria="verduras"
verduras:
  # productos = {"zanahorias": 8, "lechugas": 5}
  # Iteración 2.1: producto="zanahorias", cantidad=8
  zanahorias: 8
  # Iteración 2.2: producto="lechugas", cantidad=5
  lechugas: 5 ✓
\`\`\`

**Casos de uso**:
\`\`\`python
# Calcular totales por categoría
for categoria, productos in inventario.items():
    total = sum(productos.values())
    print(f"{categoria}: {total} unidades")
# frutas: 25 unidades
# verduras: 13 unidades

# Buscar producto específico
def buscar_producto(nombre: str) -> tuple:
    for cat, prods in inventario.items():
        if nombre in prods:
            return (cat, prods[nombre])
    return None

buscar_producto("manzanas")  # ("frutas", 10)

# Actualizar cantidades
for categoria, productos in inventario.items():
    for producto in productos:
        productos[producto] += 5  # Agregar 5 a cada producto
\`\`\`

**Crear estructura desde datos**:
\`\`\`python
# Agrupar lista por categoría
items = [
    ("frutas", "manzanas", 10),
    ("frutas", "bananas", 15),
    ("verduras", "zanahorias", 8)
]

inventario = {}
for cat, prod, cant in items:
    if cat not in inventario:
        inventario[cat] = {}
    inventario[cat][prod] = cant
\`\`\`

**Con comprehension anidada**:
\`\`\`python
# Filtrar productos con stock bajo
bajo_stock = {
    cat: {p: c for p, c in prods.items() if c < 10}
    for cat, prods in inventario.items()
}
# {"verduras": {"zanahorias": 8, "lechugas": 5}}
\`\`\`
`
    }
];
