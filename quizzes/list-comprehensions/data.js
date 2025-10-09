const listComprehensionsQuizData = [/**

    { * @file Template Quiz Data

        question: "**Pregunta 25: Análisis de mensajes con list comprehension**\n\nSe necesita una función que analice una lista de mensajes de texto. La función debe usar una **list comprehension** para crear una lista de *palabras clave*. Una palabra clave se extrae de un mensaje si este no es considerado \"spam\". Para ello, la comprensión debe utilizar dos funciones auxiliares: `es_mensaje_seguro` para filtrar los mensajes, y `extraer_palabra_clave` para transformar los mensajes válidos.\n\n¿Cuál es la lista de palabras clave que resulta de analizar `lista_mensajes`?\n\n```python\nfrom typing import List\n\n# --- Funciones Auxiliares ---\ndef es_mensaje_seguro(mensaje: str) -> bool:\n    \"\"\"Predicado: devuelve False si el mensaje contiene la palabra 'spam'.\"\"\"\n    return \"spam\" not in mensaje.lower()\n\ndef extraer_palabra_clave(mensaje: str) -> str:\n    \"\"\"Transformación: busca el primer '#' y devuelve la palabra que le sigue.\"\"\"\n    if '#' in mensaje:\n        # Divide el mensaje a partir del '#' y toma la parte de la derecha\n        parte_derecha = mensaje.split('#', 1)[1]\n        # Toma la primera palabra de esa parte\n        return parte_derecha.split(' ', 1)[0]\n    return \"N/A\"\n\n# --- Función Principal ---\ndef analizar_mensajes(mensajes: List[str]) -> List[str]:\n    \"\"\"\n    Usa una list comprehension para filtrar y transformar mensajes.\n    Estructura: [transformacion(m) for m in mensajes if filtro(m)]\n    \"\"\"\n    return [extraer_palabra_clave(m) for m in mensajes if es_mensaje_seguro(m)]\n\n# --- Datos de entrada ---\nlista_mensajes = [\n    \"Me encantó el partido de #futbol de anoche\",\n    \"URGENTE: ha ganado un premio (spam)\",\n    \"Qué buen día para #programar en Python\",\n    \"Comida deliciosa #gourmet\"\n]\n\n# --- Llamada a la función ---\nanalizar_mensajes(lista_mensajes)\n```\n\n¿Cuál será el resultado?", * @description Template for creating new quiz data files

        code: ``, * 

        options: [ * INSTRUCTIONS:

            "['futbol', 'N/A', 'programar', 'gourmet']", * 1. Copy this file to your quiz folder

            "['futbol', 'programar', 'gourmet']", * 2. Rename the variable (e.g., myTopicQuizData)

            "['#futbol', '#programar', '#gourmet']", * 3. Add your questions following the structure below

            "[True, False, True, True]" * 4. Update the index.html to reference your variable name

        ], */

        correct: "['futbol', 'programar', 'gourmet']",

        explanation: `**Respuesta correcta: B) ['futbol', 'programar', 'gourmet']**const templateQuizData = [

    {

La list comprehension \`[extraer_palabra_clave(m) for m in mensajes if es_mensaje_seguro(m)]\` se ejecuta en dos etapas para cada elemento de la lista:        question: "Your question text here? You can use **Markdown** for *formatting*.",

        code: `# Python code goes here

1. **Etapa de Filtrado (la parte \`if\`)**: Primero, se llama a \`es_mensaje_seguro(m)\` para decidir si el mensaje \`m\` debe ser procesado.def example_function(x: int) -> int:

2. **Etapa de Transformación (la parte a la izquierda del \`for\`)**: Si el mensaje pasa el filtro, se llama a \`extraer_palabra_clave(m)\` y su resultado se añade a la nueva lista.    return x * 2`,

        options: ["Option A", "Option B", "Option C", "Option D"],

Veamos el proceso paso a paso:        correct: "Option B",  // Must match exactly one of the options

        explanation: `

**Mensaje 1**: \`"Me encantó el partido de #futbol de anoche"\`Your detailed explanation goes here. You can use:

- \`es_mensaje_seguro()\` devuelve **True** (no contiene "spam")* **Markdown** formatting

- Se llama a \`extraer_palabra_clave()\`, que devuelve \`"futbol"\`* Code snippets: \`variable_name\`

- Se añade a la lista ✅* Lists and [links](https://example.com)



**Mensaje 2**: \`"URGENTE: ha ganado un premio (spam)"\`Explain step by step why the answer is correct.

- \`es_mensaje_seguro()\` devuelve **False** (contiene "spam")`

- El mensaje se descarta por completo ❌    },

    {

**Mensaje 3**: \`"Qué buen día para #programar en Python"\`        question: "Second question example?",

- \`es_mensaje_seguro()\` devuelve **True**        code: `# Another code example

- Se llama a \`extraer_palabra_clave()\`, que devuelve \`"programar"\`from typing import List

- Se añade a la lista ✅

def process_list(items: List[int]) -> List[int]:

**Mensaje 4**: \`"Comida deliciosa #gourmet"\`    return [x * 2 for x in items if x > 0]`,

- \`es_mensaje_seguro()\` devuelve **True**        options: [

- Se llama a \`extraer_palabra_clave()\`, que devuelve \`"gourmet"\`            "[2, 4, 6]",

- Se añade a la lista ✅            "[1, 2, 3]",

            "[]",

La lista final contiene únicamente los resultados de las transformaciones de los mensajes que pasaron el filtro: **['futbol', 'programar', 'gourmet']**.            "Error"

        ],

**Conceptos clave:**        correct: "[2, 4, 6]",

- **List comprehension con filtro**: Combina iteración, transformación y filtrado en una sola línea        explanation: `

- **Estructura**: \`[expresión for item in iterable if condición]\`This function:

- **Eficiencia**: Más concisa y legible que un bucle tradicional`1. Filters positive numbers

    },2. Multiplies each by 2

    {3. Returns the result

        question: "**Pregunta 26: Aplanamiento con list comprehension anidada**\n\nSe tienen datos de varios experimentos, donde cada experimento contiene una lista de mediciones numéricas. Se necesita crear una única lista \"plana\" que contenga todas las mediciones válidas (mayores a cero) de todos los experimentos. Para lograr esto de forma concisa, se utilizará una **list comprehension anidada**, que permite iterar sobre estructuras de datos anidadas.\n\n¿Qué lista plana de mediciones válidas se generará?\n\n```python\nfrom typing import List, Dict, Any\n\n# --- Función Auxiliar (Predicado) ---\ndef es_medicion_valida(valor: float) -> bool:\n    \"\"\"Devuelve True si la medición es positiva.\"\"\"\n    return valor > 0\n\n# --- Función Principal ---\ndef obtener_mediciones_validas(experimentos: List[Dict[str, Any]]) -> List[float]:\n    \"\"\"\n    Usa una list comprehension anidada para aplanar y filtrar los datos.\n    Estructura: [m for exp in experimentos for m in exp['mediciones'] if filtro(m)]\n    \"\"\"\n    return [\n        m \n        for exp in experimentos \n        for m in exp['mediciones'] \n        if es_medicion_valida(m)\n    ]\n\n# --- Datos de entrada ---\ndatos_experimentos = [\n    {'id': 'EXP01', 'mediciones': [10.2, -1.5, 8.8]},\n    {'id': 'EXP02', 'mediciones': [-0.5, 20.1]},\n    {'id': 'EXP03', 'mediciones': [5.0]}\n]\n\n# --- Llamada a la función ---\nobtener_mediciones_validas(datos_experimentos)\n```\n\n¿Cuál será el resultado?",

        code: ``,Given input \`[1, 2, 3]\`, the output is \`[2, 4, 6]\`.

        options: [`

            "[[10.2, 8.8], [20.1], [5.0]]",    }

            "[10.2, -1.5, 8.8, -0.5, 20.1, 5.0]",    // Add more questions here...

            "[10.2, 8.8, 20.1, 5.0]",];

            "['EXP01', 'EXP02', 'EXP03']"
        ],
        correct: "[10.2, 8.8, 20.1, 5.0]",
        explanation: `**Respuesta correcta: C) [10.2, 8.8, 20.1, 5.0]**

Una list comprehension anidada es una forma compacta de escribir bucles \`for\` anidados. La expresión se lee de izquierda a derecha:

- \`for exp in experimentos\`: Este es el bucle exterior
- \`for m in exp['mediciones']\`: Este es el bucle interior, que se ejecuta para cada \`exp\` del bucle exterior
- \`if es_medicion_valida(m)\`: Este filtro se aplica al elemento del bucle más interno (\`m\`)

El proceso de ejecución es:

**Primer \`exp\` (EXP01)**: \`mediciones = [10.2, -1.5, 8.8]\`
- \`m = 10.2\`: \`es_medicion_valida(10.2)\` → **True** → Se añade \`10.2\` ✅
- \`m = -1.5\`: \`es_medicion_valida(-1.5)\` → **False** → Se ignora ❌
- \`m = 8.8\`: \`es_medicion_valida(8.8)\` → **True** → Se añade \`8.8\` ✅

**Segundo \`exp\` (EXP02)**: \`mediciones = [-0.5, 20.1]\`
- \`m = -0.5\`: \`es_medicion_valida(-0.5)\` → **False** → Se ignora ❌
- \`m = 20.1\`: \`es_medicion_valida(20.1)\` → **True** → Se añade \`20.1\` ✅

**Tercer \`exp\` (EXP03)**: \`mediciones = [5.0]\`
- \`m = 5.0\`: \`es_medicion_valida(5.0)\` → **True** → Se añade \`5.0\` ✅

El resultado es una única lista aplanada: **[10.2, 8.8, 20.1, 5.0]**

**Por qué las otras opciones son incorrectas:**
- **A**: Mantiene la estructura anidada en lugar de aplanarla
- **B**: Incluye todos los valores sin filtrar los negativos
- **D**: Lista los IDs de los experimentos, no las mediciones

**Conceptos clave:**
- **List comprehension anidada**: Equivale a bucles \`for\` anidados
- **Aplanamiento (flattening)**: Convierte estructura de 2 niveles en 1 nivel
- **Orden de lectura**: Se lee de izquierda a derecha como bucles anidados`
    },
    {
        question: "**Pregunta 27: Creación de diccionarios con list comprehension**\n\nSe necesita convertir una lista de nombres de alumnos en una lista de diccionarios de perfil. Cada diccionario debe contener el nombre original y un ID de usuario único. La lógica para generar este ID está en una función auxiliar, `generar_id_usuario`. La función principal debe usar una **list comprehension** donde la expresión de transformación crea un diccionario en cada iteración.\n\n¿Cuál es la lista de perfiles resultante que crea la función `crear_perfiles`?\n\n```python\nfrom typing import List, Dict\n\n# --- Función Auxiliar (Transformación) ---\ndef generar_id_usuario(nombre: str) -> str:\n    \"\"\"Crea un ID con las 3 primeras letras del nombre y su longitud.\"\"\"\n    return f\"{nombre[:3].lower()}{len(nombre)}\"\n\n# --- Función Principal ---\ndef crear_perfiles(nombres: List[str]) -> List[Dict[str, str]]:\n    \"\"\"\n    Usa una list comprehension para crear una lista de diccionarios.\n    También filtra los nombres que son demasiado cortos.\n    \"\"\"\n    return [\n        {'nombre': n, 'id_usuario': generar_id_usuario(n)} \n        for n in nombres \n        if len(n) > 2\n    ]\n\n# --- Datos de entrada ---\nlista_alumnos = [\"Ana\", \"Carlos\", \"Lu\", \"Beatriz\"]\n\n# --- Llamada a la función ---\ncrear_perfiles(lista_alumnos)\n```\n\n¿Cuál será el resultado?",
        code: ``,
        options: [
            "{'Ana': 'ana3', 'Carlos': 'car6', 'Beatriz': 'bea7'}",
            "[{'nombre': 'Ana', 'id_usuario': 'ana3'}, {'nombre': 'Carlos', 'id_usuario': 'car6'}, {'nombre': 'Lu', 'id_usuario': 'lu2'}, {'nombre': 'Beatriz', 'id_usuario': 'bea7'}]",
            "['ana3', 'car6', 'bea7']",
            "[{'nombre': 'Ana', 'id_usuario': 'ana3'}, {'nombre': 'Carlos', 'id_usuario': 'car6'}, {'nombre': 'Beatriz', 'id_usuario': 'bea7'}]"
        ],
        correct: "[{'nombre': 'Ana', 'id_usuario': 'ana3'}, {'nombre': 'Carlos', 'id_usuario': 'car6'}, {'nombre': 'Beatriz', 'id_usuario': 'bea7'}]",
        explanation: `**Respuesta correcta: D) [{'nombre': 'Ana', 'id_usuario': 'ana3'}, {'nombre': 'Carlos', 'id_usuario': 'car6'}, {'nombre': 'Beatriz', 'id_usuario': 'bea7'}]**

Este ejemplo muestra que la expresión a la izquierda del \`for\` en una list comprehension puede ser cualquier objeto, incluyendo una estructura compleja como un diccionario.

La comprensión itera sobre \`lista_alumnos\` y aplica un filtro y una transformación:

**Nombre "Ana"**:
- Filtro: \`len("Ana") > 2\` → \`3 > 2\` → **True** ✅
- Transformación: \`generar_id_usuario("Ana")\` → \`"ana" + "3"\` → \`"ana3"\`
- Diccionario creado: \`{'nombre': 'Ana', 'id_usuario': 'ana3'}\`

**Nombre "Carlos"**:
- Filtro: \`len("Carlos") > 2\` → \`6 > 2\` → **True** ✅
- Transformación: \`generar_id_usuario("Carlos")\` → \`"car" + "6"\` → \`"car6"\`
- Diccionario creado: \`{'nombre': 'Carlos', 'id_usuario': 'car6'}\`

**Nombre "Lu"**:
- Filtro: \`len("Lu") > 2\` → \`2 > 2\` → **False** ❌
- Se ignora este elemento completamente

**Nombre "Beatriz"**:
- Filtro: \`len("Beatriz") > 2\` → \`7 > 2\` → **True** ✅
- Transformación: \`generar_id_usuario("Beatriz")\` → \`"bea" + "7"\` → \`"bea7"\`
- Diccionario creado: \`{'nombre': 'Beatriz', 'id_usuario': 'bea7'}\`

La lista final contiene los tres diccionarios creados a partir de los nombres que pasaron la condición de longitud.

**Por qué las otras opciones son incorrectas:**
- **A**: Es un diccionario único, no una lista de diccionarios
- **B**: Incluye a "Lu" que debería ser filtrado (longitud 2 ≤ 2)
- **C**: Es una lista de IDs solamente, no de diccionarios completos

**Conceptos clave:**
- **Diccionarios en comprehensions**: La expresión puede construir estructuras complejas
- **Transformación + Filtrado**: Se puede combinar creación de objetos con condiciones
- **Formato**: \`[{'key': value} for item in items if condition]\``
    }
]
