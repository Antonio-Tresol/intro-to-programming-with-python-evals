/**
 * @file Data Structures Quiz Data
 * @description Question data for "From Zero to Data Structures" quiz
 */

const dataStructuresQuizData = {
    randomize: false,  // Educational progression: basic to complex
    questions: [
        {
            question: "¿Cuál será el valor de retorno al llamarla con `funcion_uno(5, 3)`?",
            code: `from typing import Union

def funcion_uno(a: int, b: int) -> bool:
    x: int = a + b * 2
    y: bool = (x % 5) > 2
    z: bool = not y and (a > b)
    return z`,
            options: ["False", "True", "11", "Error de sintaxis"],
            correct: "True",
            explanation: `
* **Paso 1: Calcular \`x\`**: Por [precedencia de operadores](https://www.w3schools.com/python/python_operators.asp), \`3 * 2\` se evalúa primero (6). Luego \`5 + 6 = 11\`. Así que \`x\` es \`11\`.
* **Paso 2: Calcular \`y\`**: La expresión es \`(11 % 5) > 2\`. El módulo \`11 % 5\` es \`1\`. La comparación \`1 > 2\` es **False**. Así que \`y\` es \`False\`.
* **Paso 3: Calcular \`z\`**: La expresión es \`not y and (a > b)\`. Esto se convierte en \`not False and (5 > 3)\`, que es \`True and True\`. El resultado final es **True**.
`
        },
        {
            question: "¿Cuál es la salida de la siguiente función si se invoca con `funcion_dos([1, 2, 3, 4, 5])`?",
            code: `from typing import List

def funcion_dos(numeros: List[int]) -> List[int]:
    resultado: List[int] = []
    for n in numeros:
        if n % 2 == 0:
            resultado.append(n * 2)
        else:
            continue
    return resultado`,
        options: ["[2, 4]", "[2, 4, 6, 8, 10]", "[4, 8]", "[1, 3, 5]"],
        correct: "[4, 8]",
        explanation: "El ciclo itera sobre la lista. La condición `n % 2 == 0` solo es verdadera para los números pares (2 y 4). Para estos, se agrega su doble a la lista `resultado`. Así, se añade `2*2=4` y `4*2=8`. Los números impares se omiten con `continue`."
    },
    {
        question: "¿Qué retornará la llamada `funcion_tres(['b', 'c', 'd', 'e'])`?",
        code: `from typing import List

def funcion_tres(data: List[str]) -> List[str]:
    data[0] = 'a'
    data.pop()
    return data`,
        options: ["['b', 'c', 'd']", "['a', 'c', 'd', 'e']", "['b', 'c', 'd', 'e']", "['a', 'c', 'd']"],
        correct: "['a', 'c', 'd']",
        explanation: "Las listas son mutables. Primero, `data[0] = 'a'` cambia el primer elemento. La lista se convierte en `['a', 'c', 'd', 'e']`. Luego, `.pop()` elimina el último elemento, resultando en `['a', 'c', 'd']`."
    },
    {
        question: "¿Cuál es el resultado de ejecutar `funcion_cuatro` con el diccionario proporcionado?",
        code: `from typing import Dict, Any

def funcion_cuatro(diccionario: Dict[str, Any]) -> int:
    contador: int = 0
    for clave, valor in diccionario.items():
        if isinstance(valor, int) and valor > 10:
            contador += len(clave)
    return contador

# Llamada: funcion_cuatro({'id': 1, 'nombre': 'ana', 'puntos': 25, 'nivel': 'tres'})`,
        options: ["1", "25", "6", "11"],
        correct: "6",
        explanation: "La función itera sobre el diccionario. La condición solo se cumple para `'puntos': 25` (es un entero mayor que 10). En ese caso, se suma la longitud de la clave `len('puntos')`, que es 6, al contador."
    },
    {
        question: "¿Cuál será la salida al invocarla con `procesar_lista([1, 2, 3, 4, 5, 6])`?",
        code: `from typing import List

def procesar_lista(numeros: List[int]) -> List[int]:
    cuadrados_pares = [n**2 for n in numeros if n % 2 == 0]
    cuadrados_pares.sort(reverse=True)
    return cuadrados_pares`,
        options: ["[4, 16, 36]", "[36, 16, 4]", "[1, 4, 9, 16, 25, 36]", "[36, 4]"],
        correct: "[36, 16, 4]",
        explanation: "La comprensión de lista filtra los números pares `[2, 4, 6]` y luego los eleva al cuadrado, creando `[4, 16, 36]`. Finalmente, `.sort(reverse=True)` ordena esta lista en orden descendente."
    },
    {
        question: "¿Qué cadena retornará la función con el diccionario `{'usuario': 'alex', 'estado': 'activo'}`?",
        code: `from typing import Dict, Any

def manipular_diccionario(info: Dict[str, Any]) -> str:
    info['estado'] = 'inactivo'
    info['visitas'] = 1
    if info.get('visitas', 0) > 0:
        info['usuario'] = info['usuario'].capitalize()
    return f"{info['usuario']} está {info['estado']}"`,
        options: [`"alex está inactivo"`, `"Alex está activo"`, `"Alex está inactivo"`, `"alex está activo"`],
        correct: `"Alex está inactivo"`,
        explanation: "El diccionario es mutable. Se actualiza `estado` a `'inactivo'` y se añade `visitas`. La condición del `if` es verdadera, por lo que `'usuario'` se capitaliza a `'Alex'`. La cadena final se forma con estos valores actualizados."
    },
    {
        question: "Considerando la siguiente función *recursiva*, ¿cuál es el resultado de la llamada `recursividad_factorial(4)`?",
        code: `def recursividad_factorial(n: int) -> int:
    if n == 0:
        return 1
    else:
        return n * recursividad_factorial(n - 1)`,
        options: ["24", "10", "4", "Error por recursión infinita"],
        correct: "24",
        explanation: "Esta es una función recursiva para calcular el factorial. Se resuelve como `4 * 3 * 2 * 1 * 1`, lo que da como resultado `24`. El caso base `n == 0` detiene la recursión."
    },
    {
        question: "¿Qué valor retornará la función si se invoca con las listas `[1, 2, 3, 4]` y `[3, 4, 5, 6]`?",
        code: `from typing import List, Set

def operaciones_conjuntos(lista1: List[int], lista2: List[int]) -> int:
    conjunto1: Set[int] = set(lista1)
    conjunto2: Set[int] = set(lista2)
    interseccion: Set[int] = conjunto1.intersection(conjunto2)
    return sum(interseccion)`,
        options: ["10", "28", "7", "Un conjunto {3, 4}"],
        correct: "7",
        explanation: "Las listas se convierten en conjuntos. El método `.intersection()` encuentra los elementos comunes, que son `{3, 4}`. La función `sum()` calcula la suma de estos elementos: `3 + 4 = 7`."
    },
    {
        question: "¿Cuál es el valor de retorno al llamarla con `procesar_cadenas(['Python', 'Framework', 'Agil'])`?",
        code: `from typing import List, Dict

def procesar_cadenas(cadenas: List[str]) -> Dict[str, int]:
    resultado: Dict[str, int] = {}
    vocales: str = "aeiou"
    for cadena in cadenas:
        contador_vocales: int = 0
        for caracter in cadena.lower():
            if caracter in vocales:
                contador_vocales += 1
        if contador_vocales > 2:
            resultado[cadena] = len(cadena)
    return resultado`,
        options: ["{'Python': 6, 'Framework': 9, 'Agil': 4}", "{'Framework': 3}", "{'Framework': 9}", "{'Python': 1, 'Framework': 3, 'Agil': 2}"],
        correct: "{'Framework': 9}",
        explanation: "La función cuenta las vocales en cada cadena (ignorando mayúsculas/minúsculas). Solo si una cadena tiene más de 2 vocales, se añade al diccionario de resultado con su longitud como valor. 'Framework' tiene 3 vocales ('a', 'e', 'o'), cumpliendo la condición."
    },
    {
        question: "¿Cuál será la salida de la función `agrupar_datos` si se invoca con la lista `[('A', 2), ('B', 3), ('A', 4)]`?",
        code: `from typing import List, Tuple, Dict

def agrupar_datos(datos: List[Tuple[str, int]]) -> Dict[str, List[int]]:
    agrupado: Dict[str, List[int]] = {}
    for clave, valor in datos:
        if clave not in agrupado:
            agrupado[clave] = []
        agrupado[clave].append(valor * valor)
    return agrupado`,
        options: ["{'A': [2, 4], 'B': [3]}", "{'A': [4, 16], 'B': [9]}", "{'A': [4], 'B': [9]}", "{'A': [16], 'B': [9]}"],
        correct: "{'A': [4, 16], 'B': [9]}",
        explanation: "La función agrupa los valores de las tuplas por su clave. Para cada valor, lo eleva al cuadrado antes de añadirlo a la lista correspondiente en el diccionario. Para 'A', añade 2*2=4 y luego 4*4=16. Para 'B', añade 3*3=9."
    },
    {
        question: "Considera la siguiente función y el código que la invoca. ¿Cuál es el valor final de la variable `z`?",
        code: `from typing import Tuple

def calcular_operaciones(x: int, y: int = 2) -> Tuple[int, int, bool]:
    suma: int = x + y
    producto: int = x * y
    es_mayor: bool = (suma > producto)
    return suma, producto, es_mayor

# Código de invocación
resultado: Tuple[int, int, bool] = calcular_operaciones(3)
z: int = resultado[0] - resultado[1]`,
        options: ["5", "6", "-1", "False"],
        correct: "-1",
        explanation: "La función se llama con `x=3`. El parámetro `y` toma su valor por defecto, `2`. La función retorna la tupla `(5, 6, False)`. La variable `z` se calcula como la resta del primer elemento (`5`) y el segundo (`6`) de la tupla, resultando en `-1`."
    },
    {
        question: "¿Qué cadena de texto retornará la función `analizar_numero` al ser llamada con el argumento `9`?",
        code: `def analizar_numero(num: int) -> str:
    if num % 3 == 0 and num % 5 == 0:
        return "Divisible por 3 y 5"
    elif num % 3 == 0 or num % 2 == 0:
        if num > 10:
            return "Opción A"
        else:
            return "Opción B"
    else:
        return "Opción C"`,
        options: ["Divisible por 3 y 5", "Opción A", "Opción B", "Opción C"],
        correct: "Opción B",
        explanation: "Se evalúa `num = 9`. El primer `if` es falso. El `elif` es verdadero porque `9 % 3 == 0`. Dentro de este bloque, la condición anidada `9 > 10` es falsa, por lo que se ejecuta el `else` anidado, que retorna 'Opción B'."
    },
    {
        question: "Dada la función para procesar lecturas de sensores, ¿cuál será el valor de retorno al llamarla como se indica?",
        code: `from typing import List, Dict, Any

def validar_y_promediar_lecturas(
    lecturas: List[Dict[str, Any]], 
    id_objetivo: str, 
    valor_min: float) -> float:
    valores_validos: List[float] = []
    for lectura in lecturas:
        if (lectura.get('sensor_id') == id_objetivo and
            lectura.get('status') == 'ok' and
            isinstance(lectura.get('value'), (int, float)) and
            lectura.get('value', 0) >= valor_min):
            valores_validos.append(lectura['value'])

    if not valores_validos:
        return 0.0
    return sum(valores_validos) / len(valores_validos)

# Datos de entrada
datos_sensores = [
    {'sensor_id': 'temp-01', 'value': 22.5, 'status': 'ok'},
    {'sensor_id': 'temp-01', 'value': -5.0, 'status': 'ok'}, # Valor por debajo del umbral
    {'sensor_id': 'pres-01', 'value': 1012.5, 'status': 'ok'}, # ID incorrecto
    {'sensor_id': 'temp-01', 'value': 23.1, 'status': 'error'}, # Status incorrecto
    {'sensor_id': 'temp-01', 'value': 23.1, 'status': 'ok'}
]

# Llamada: validar_y_promediar_lecturas(datos_sensores, 'temp-01', 0.0)`,
        options: ["13.53", "22.8", "45.6", "263.525"],
        correct: "22.8",
        explanation: `
La función debe encontrar el promedio de las lecturas del sensor 'temp-01' con estado 'ok' y un valor no menor a 0.0. Analicemos cada lectura:
* \`{'sensor_id': 'temp-01', 'value': 22.5, 'status': 'ok'}\`: **Cumple** todas las condiciones. Se añade \`22.5\` a la lista.
* \`{'sensor_id': 'temp-01', 'value': -5.0, 'status': 'ok'}\`: **No cumple** la condición del valor mínimo (\`-5.0 < 0.0\`). Se ignora.
* \`{'sensor_id': 'pres-01', 'value': 1012.5, 'status': 'ok'}\`: **No cumple** la condición del ID del sensor. Se ignora.
* \`{'sensor_id': 'temp-01', 'value': 23.1, 'status': 'error'}\`: **No cumple** la condición del estado (\`'error' != 'ok'\`). Se ignora.
* \`{'sensor_id': 'temp-01', 'value': 23.1, 'status': 'ok'}\`: **Cumple** todas las condiciones. Se añade \`23.1\` a la lista.

La lista de valores válidos es \`[22.5, 23.1]\`. El cálculo final es el promedio: \`(22.5 + 23.1) / 2 = 22.8\`.
`
    },
    {
        question: "Esta función consolida un lote de lecturas. ¿Qué diccionario retornará?",
        code: `from typing import List, Dict, Any

def consolidar_datos_sensores(lecturas: List[Dict[str, Any]]) -> Dict[str, Dict[str, float]]:
    resumen: Dict[str, Dict[str, float]] = {}
    for lectura in lecturas:
        sensor_id = lectura.get('id')
        valor = lectura.get('value')
        
        if not sensor_id or not isinstance(valor, (int, float)):
            continue

        if sensor_id not in resumen:
            resumen[sensor_id] = {'conteo': 0, 'total': 0.0, 'maximo': -float('inf')}
        
        resumen[sensor_id]['conteo'] += 1
        resumen[sensor_id]['total'] += valor
        resumen[sensor_id]['maximo'] = max(resumen[sensor_id]['maximo'], valor)
    return resumen

# Datos de entrada
lecturas_lote = [
    {'id': 'hum-01', 'value': 65.5},
    {'id': 'temp-02', 'value': 15.2},
    {'id': 'hum-01', 'value': 66.0},
    {'id': 'temp-02', 'value': 'N/A'}, # Valor no numérico
    {'id': 'temp-02', 'value': 16.1},
]

# Llamada: consolidar_datos_sensores(lecturas_lote)`,
        options: [
            "{'hum-01': {'conteo': 2, ...}, 'temp-02': {'conteo': 2, ...}}", 
            "[{'id': 'hum-01', 'conteo': 2}, ...]", 
            "{'Error': 'Valor no numérico'}", 
            `{
    'hum-01': {'conteo': 2, 'total': 131.5, 'maximo': 66.0},
    'temp-02': {'conteo': 2, 'total': 31.3, 'maximo': 16.1}
}`
        ],
        correct: `{
    'hum-01': {'conteo': 2, 'total': 131.5, 'maximo': 66.0},
    'temp-02': {'conteo': 2, 'total': 31.3, 'maximo': 16.1}
}`,
        explanation: `
La función itera sobre la lista y construye un diccionario de resúmenes.
* **Lectura 1 \`{'id': 'hum-01', ...}\`**: Se inicializa el resumen para 'hum-01': \`{'conteo': 1, 'total': 65.5, 'maximo': 65.5}\`.
* **Lectura 2 \`{'id': 'temp-02', ...}\`**: Se inicializa el resumen para 'temp-02': \`{'conteo': 1, 'total': 15.2, 'maximo': 15.2}\`.
* **Lectura 3 \`{'id': 'hum-01', ...}\`**: Se actualiza 'hum-01': \`conteo\` a 2, \`total\` a 131.5, y \`maximo\` a \`max(65.5, 66.0)\` que es \`66.0\`.
* **Lectura 4 \`{'id': 'temp-02', value: 'N/A'}\`**: El valor 'N/A' no es numérico, por lo que **se ignora**.
* **Lectura 5 \`{'id': 'temp-02', ...}\`**: Se actualiza 'temp-02': \`conteo\` a 2, \`total\` a \`15.2 + 16.1 = 31.3\`, y \`maximo\` a \`max(15.2, 16.1)\` que es \`16.1\`.

El resumen final contiene las estadísticas consolidadas para ambos sensores, coincidiendo con la opción correcta.
`
    },
    {
        question: "Analiza el código y los datos de entrada. ¿Cuál es el estado final del `inventario_jugador` después de la llamada a la función?",
        code: `from typing import List, Dict, Any

def actualizar_inventario(
    inventario: Dict[str, Dict[str, Any]], 
    items_nuevos: List[str], 
    catalogo_items: Dict[str, Dict[str, Any]]) -> Dict[str, Dict[str, Any]]:
    
    for item_id in items_nuevos:
        if item_id in inventario:
            if inventario[item_id].get('stackable', False):
                inventario[item_id]['cantidad'] += 1
        else:
            if item_id in catalogo_items:
                inventario[item_id] = catalogo_items[item_id].copy()
    return inventario

# Datos iniciales
inventario_jugador = {
    'pocion_mana': {'cantidad': 3, 'stackable': True},
    'espada_unica': {'cantidad': 1, 'stackable': False}
}
catalogo_juego = {
    'pocion_mana': {'cantidad': 1, 'stackable': True},
    'flecha_acero': {'cantidad': 1, 'stackable': True},
    'espada_unica': {'cantidad': 1, 'stackable': False}
}
nuevos_hallazgos = ['pocion_mana', 'flecha_acero', 'espada_unica', 'flecha_acero']

# Llamada
actualizar_inventario(inventario_jugador, nuevos_hallazgos, catalogo_juego)`,
        options: [
            `{
    'pocion_mana': {'cantidad': 4, 'stackable': True},
    'espada_unica': {'cantidad': 1, 'stackable': False},
    'flecha_acero': {'cantidad': 2, 'stackable': True}
}`,
            `{
    'pocion_mana': {'cantidad': 4, 'stackable': True},
    'espada_unica': {'cantidad': 2, 'stackable': False},
    'flecha_acero': {'cantidad': 2, 'stackable': True}
}`,
            `{
    'pocion_mana': {'cantidad': 4, 'stackable': True},
    'espada_unica': {'cantidad': 1, 'stackable': False},
    'flecha_acero': {'cantidad': 1, 'stackable': True}
}`,
            `{
    'pocion_mana': {'cantidad': 3, 'stackable': True},
    'espada_unica': {'cantidad': 1, 'stackable': False},
    'flecha_acero': {'cantidad': 2, 'stackable': True}
}`
        ],
        correct: `{
    'pocion_mana': {'cantidad': 4, 'stackable': True},
    'espada_unica': {'cantidad': 1, 'stackable': False},
    'flecha_acero': {'cantidad': 2, 'stackable': True}
}`,
        explanation: `
La función itera sobre la lista \`nuevos_hallazgos\`:
1.  **'pocion_mana'**: Ya existe y es apilable (\`stackable: True\`). Su cantidad aumenta de 3 a **4**.
2.  **'flecha_acero'**: No existe. Se añade una copia desde el catálogo. El inventario ahora tiene \`'flecha_acero': {'cantidad': 1, 'stackable': True}\`.
3.  **'espada_unica'**: Existe, pero **no** es apilable (\`stackable: False\`). No se hace nada.
4.  **'flecha_acero'**: Ahora ya existe y es apilable. Su cantidad aumenta de 1 a **2**.

El estado final del inventario combina estas modificaciones.
`
    },
    {
        question: "Dado el personaje, la habilidad y una tirada de crítico de **15**, ¿cuál es el daño final (redondeado a entero) que calcula la función?",
        code: `from typing import Dict

def calcular_danio_final(
    personaje: Dict[str, float], 
    habilidad: Dict[str, float], 
    tirada_critico: float) -> int:
    
    danio_base_total = habilidad['base_damage'] + (personaje['fuerza'] * habilidad['escala_fuerza'])
    danio_final = danio_base_total
    
    if tirada_critico <= personaje['crit_chance']:
        danio_final = danio_base_total * personaje['crit_damage']
        
    return int(danio_final)

# Datos
guerrero = {
    'fuerza': 50.0,
    'crit_chance': 20.0,
    'crit_damage': 1.5
}
ataque_pesado = {
    'base_damage': 30.0,
    'escala_fuerza': 1.2
}

# Llamada
calcular_danio_final(guerrero, ataque_pesado, 15.0)`,
        options: ["135", "90", "142", "60"],
        correct: "135",
        explanation: `
El cálculo se realiza en dos fases:
1.  **Cálculo del daño sin crítico**:
    * Bono por fuerza: \`50.0 * 1.2 = 60.0\`.
    * Daño total base: \`30.0 + 60.0 = 90.0\`.
2.  **Verificación de golpe crítico**:
    * La condición es \`tirada_critico <= personaje['crit_chance']\`, que es \`15.0 <= 20.0\`. Esto es **verdadero**.
    * El ataque es un golpe crítico.
3.  **Cálculo del daño final**:
    * Se multiplica el daño base por el modificador de crítico: \`90.0 * 1.5 = 135.0\`.

La función retorna la parte entera, que es **135**.
`
        }
    ]
}
