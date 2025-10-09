const listComprehensionsQuizData = [
    {
        question: "**Análisis de mensajes con list comprehension**\n\nSe necesita una función que analice una lista de mensajes de texto. La función debe usar una **list comprehension** para crear una lista de *palabras clave*. Una palabra clave se extrae de un mensaje si este no es considerado \"spam\". Para ello, la comprensión debe utilizar dos funciones auxiliares: `es_mensaje_seguro` para filtrar los mensajes, y `extraer_palabra_clave` para transformar los mensajes válidos.\n\n¿Cuál es la lista de palabras clave que resulta de analizar `lista_mensajes`?\n\n¿Cuál será el resultado?",
        code: `from typing import List

# --- Funciones Auxiliares ---
def es_mensaje_seguro(mensaje: str) -> bool:
    \"\"\"Predicado: devuelve False si el mensaje contiene la palabra 'spam'.\"\"\"
    return \"spam\" not in mensaje.lower()

def extraer_palabra_clave(mensaje: str) -> str:
    \"\"\"Transformación: busca el primer '#' y devuelve la palabra que le sigue.\"\"\"
    if '#' in mensaje:
        # Divide el mensaje a partir del '#' y toma la parte de la derecha
        parte_derecha = mensaje.split('#', 1)[1]
        # Toma la primera palabra de esa parte
        return parte_derecha.split(' ', 1)[0]
    return \"N/A\"

# --- Función Principal ---
def analizar_mensajes(mensajes: List[str]) -> List[str]:
    \"\"\"
    Usa una list comprehension para filtrar y transformar mensajes.
    Estructura: [transformacion(m) for m in mensajes if filtro(m)]
    \"\"\"
    return [extraer_palabra_clave(m) for m in mensajes if es_mensaje_seguro(m)]

# --- Datos de entrada ---
lista_mensajes = [
    \"Me encantó el partido de #futbol de anoche\",
    \"URGENTE: ha ganado un premio (spam)\",
    \"Qué buen día para #programar en Python\",
    \"Comida deliciosa #gourmet\"
]

# --- Llamada a la función ---
analizar_mensajes(lista_mensajes)`,
        options: [
            "['futbol', 'N/A', 'programar', 'gourmet']",
            "['futbol', 'programar', 'gourmet']",
            "['#futbol', '#programar', '#gourmet']",
            "[True, False, True, True]"
        ],
        correct: "['futbol', 'programar', 'gourmet']",
        explanation: `**Respuesta correcta: B) ['futbol', 'programar', 'gourmet']**

La list comprehension \`[extraer_palabra_clave(m) for m in mensajes if es_mensaje_seguro(m)]\` se ejecuta en dos etapas para cada elemento de la lista:

1. **Etapa de Filtrado (la parte \`if\`)**: Primero, se llama a \`es_mensaje_seguro(m)\` para decidir si el mensaje \`m\` debe ser procesado.
2. **Etapa de Transformación (la parte a la izquierda del \`for\`)**: Si el mensaje pasa el filtro, se llama a \`extraer_palabra_clave(m)\` y su resultado se añade a la nueva lista.

Veamos el proceso paso a paso:

**Mensaje 1**: \`"Me encantó el partido de #futbol de anoche"\`
- \`es_mensaje_seguro()\` devuelve **True** (no contiene "spam")
- Se llama a \`extraer_palabra_clave()\`, que devuelve \`"futbol"\`
- Se añade a la lista ✅

**Mensaje 2**: \`"URGENTE: ha ganado un premio (spam)"\`
- \`es_mensaje_seguro()\` devuelve **False** (contiene "spam")
- El mensaje se **descarta** → no se llama a \`extraer_palabra_clave()\` ❌

**Mensaje 3**: \`"Qué buen día para #programar en Python"\`
- \`es_mensaje_seguro()\` devuelve **True**
- Se llama a \`extraer_palabra_clave()\`, que devuelve \`"programar"\`
- Se añade a la lista ✅

**Mensaje 4**: \`"Comida deliciosa #gourmet"\`
- \`es_mensaje_seguro()\` devuelve **True**
- Se llama a \`extraer_palabra_clave()\`, que devuelve \`"gourmet"\`
- Se añade a la lista ✅

**Conceptos clave:**
- **List comprehensions con filtrado**: La parte \`if\` al final filtra qué elementos se procesan
- **Funciones auxiliares**: Se pueden usar funciones complejas tanto en la transformación como en el filtrado
- **Orden de ejecución**: Filtrado primero, transformación después (solo para elementos que pasen el filtro)`
    },
    {
        question: "**Aplanamiento con list comprehension anidada**\n\nSe tienen datos de varios experimentos, donde cada experimento contiene una lista de mediciones numéricas. Se necesita crear una única lista \"plana\" que contenga todas las mediciones válidas (mayores a cero) de todos los experimentos. Para lograr esto de forma concisa, se utilizará una **list comprehension anidada**, que permite iterar sobre estructuras de datos anidadas.\n\n¿Qué lista plana de mediciones válidas se generará?\n\n¿Cuál será el resultado?",
        code: `from typing import List, Dict, Any

# --- Función Auxiliar (Predicado) ---
def es_medicion_valida(valor: float) -> bool:
    \"\"\"Devuelve True si la medición es positiva.\"\"\"
    return valor > 0

# --- Función Principal ---
def obtener_mediciones_validas(experimentos: List[Dict[str, Any]]) -> List[float]:
    \"\"\"
    Usa una list comprehension anidada para aplanar y filtrar los datos.
    Estructura: [m for exp in experimentos for m in exp['mediciones'] if filtro(m)]
    \"\"\"
    return [
        m 
        for exp in experimentos 
        for m in exp['mediciones'] 
        if es_medicion_valida(m)
    ]

# --- Datos de entrada ---
datos_experimentos = [
    {'id': 'EXP01', 'mediciones': [10.2, -1.5, 8.8]},
    {'id': 'EXP02', 'mediciones': [-0.5, 20.1]},
    {'id': 'EXP03', 'mediciones': [5.0]}
]

# --- Llamada a la función ---
obtener_mediciones_validas(datos_experimentos)`,
        options: [
            "[[10.2, 8.8], [20.1], [5.0]]",
            "[10.2, -1.5, 8.8, -0.5, 20.1, 5.0]",
            "[10.2, 8.8, 20.1, 5.0]",
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
        question: "**Creación de diccionarios con list comprehension**\n\nSe necesita convertir una lista de nombres de alumnos en una lista de diccionarios de perfil. Cada diccionario debe contener el nombre original y un ID de usuario único. La lógica para generar este ID está en una función auxiliar, `generar_id_usuario`. La función principal debe usar una **list comprehension** donde la expresión de transformación crea un diccionario en cada iteración.\n\n¿Cuál es la lista de perfiles resultante que crea la función `crear_perfiles`?\n\n¿Cuál será el resultado?",
        code: `from typing import List, Dict

# --- Función Auxiliar (Transformación) ---
def generar_id_usuario(nombre: str) -> str:
    \"\"\"Crea un ID con las 3 primeras letras del nombre y su longitud.\"\"\"
    return f\"{nombre[:3].lower()}{len(nombre)}\"

# --- Función Principal ---
def crear_perfiles(nombres: List[str]) -> List[Dict[str, str]]:
    \"\"\"
    Usa una list comprehension para crear una lista de diccionarios.
    También filtra los nombres que son demasiado cortos.
    \"\"\"
    return [
        {'nombre': n, 'id_usuario': generar_id_usuario(n)} 
        for n in nombres 
        if len(n) > 2
    ]

# --- Datos de entrada ---
lista_alumnos = [\"Ana\", \"Carlos\", \"Lu\", \"Beatriz\"]

# --- Llamada a la función ---
crear_perfiles(lista_alumnos)`,
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
    },
    {
        question: "**Formateo condicional con operador ternario**\n\nNecesitas procesar una lista de transacciones financieras. El objetivo es crear una nueva lista de cadenas formateadas, donde cada cadena describa la transacción como \"Ingreso\" (para números positivos) o \"Gasto\" (para números negativos).\n\nEste es un caso de uso perfecto para una **list comprehension con operador ternario (`if/else`)**. La comprensión decidirá cuál de dos funciones auxiliares llamar para cada transacción, basándose en si su valor es positivo o negativo.\n\n¿Cuál es la lista resultante de la función `categorizar_transacciones`?\n\n¿Cuál será el resultado?",
        code: `from typing import List

# --- Funciones Auxiliares ---
def formatear_ingreso(monto: float) -> str:
    \"\"\"Formats a positive transaction amount.\"\"\"
    return f\"Ingreso: +{monto:.2f} USD\"

def formatear_gasto(monto: float) -> str:
    \"\"\"Formats a negative transaction amount.\"\"\"
    return f\"Gasto: {monto:.2f} USD\"

# --- Función Principal ---
def categorizar_transacciones(transacciones: List[float]) -> List[str]:
    \"\"\"
    Uses a list comprehension with a ternary operator to format each transaction.
    Structure: [func_si_true(t) if condition else func_si_false(t) for t in list]
    \"\"\"
    return [formatear_ingreso(t) if t >= 0 else formatear_gasto(t) for t in transacciones]

# --- Datos de entrada ---
movimientos = [150.75, -45.20, -19.99, 300.0]

# --- Llamada a la función ---
categorizar_transacciones(movimientos)`,
        options: [
            "['Ingreso: +150.75 USD', 'Ingreso: +300.00 USD']",
            "['Gasto: -45.20 USD', 'Gasto: -19.99 USD']",
            "['Ingreso: +150.75 USD', 'Gasto: -45.20 USD', 'Gasto: -19.99 USD', 'Ingreso: +300.00 USD']",
            "['+150.75', '-45.20', '-19.99', '+300.00']"
        ],
        correct: "['Ingreso: +150.75 USD', 'Gasto: -45.20 USD', 'Gasto: -19.99 USD', 'Ingreso: +300.00 USD']",
        explanation: `**Respuesta correcta: C) ['Ingreso: +150.75 USD', 'Gasto: -45.20 USD', 'Gasto: -19.99 USD', 'Ingreso: +300.00 USD']**

Este problema demuestra **transformación condicional**. A diferencia de un simple \`if\` al final de una comprensión (que *filtra* elementos), el operador ternario \`if/else\` se coloca en la parte de transformación (al inicio) para decidir *cómo* transformar cada elemento.

La lógica \`formatear_ingreso(t) if t >= 0 else formatear_gasto(t)\` se evalúa para cada número en la lista \`movimientos\`:

**Para 150.75**:
- La condición \`150.75 >= 0\` es **True**
- La comprensión llama a \`formatear_ingreso(150.75)\`
- Retorna \`"Ingreso: +150.75 USD"\`

**Para -45.20**:
- La condición \`-45.20 >= 0\` es **False**
- La comprensión ejecuta la parte \`else\`, llamando a \`formatear_gasto(-45.20)\`
- Retorna \`"Gasto: -45.20 USD"\`

**Para -19.99**:
- La condición \`-19.99 >= 0\` es **False**
- Llama a \`formatear_gasto(-19.99)\`
- Retorna \`"Gasto: -19.99 USD"\`

**Para 300.0**:
- La condición \`300.0 >= 0\` es **True**
- Llama a \`formatear_ingreso(300.0)\`
- Retorna \`"Ingreso: +300.00 USD"\`

La lista final contiene la cadena formateada para cada elemento de la lista original.

**Conceptos clave:**
- **Operador ternario en comprehensions**: \`expr_if_true if condition else expr_if_false\`
- **Transformación condicional**: Decide cómo transformar, no si transformar
- **Diferencia con filtrado**: \`if\` al final filtra, \`if/else\` al inicio transforma`
    },
    {
        question: "**Resumen académico con múltiples funciones auxiliares**\n\nTienes la tarea de crear un resumen final para una lista de registros académicos de estudiantes. El objetivo es usar una sola **list comprehension** para transformar una lista de diccionarios complejos en una lista de tuplas simples de resumen.\n\nCada tupla de salida debe contener el nombre del estudiante, su promedio de calificaciones calculado, y su estado final ('Aprobado' o 'Reprobado'). La lógica para calcular el promedio y determinar el estado es compleja, por lo que está encapsulada en funciones auxiliares.\n\n¿Cuál es la lista de resumen final generada por la función `generar_resumen_final`?\n\n¿Cuál será el resultado?",
        code: `from typing import List, Dict, Any, Tuple

# --- Funciones Auxiliares ---
def calcular_promedio(calificaciones: List[int]) -> float:
    \"\"\"Calculates the average of a list of grades.\"\"\"
    return sum(calificaciones) / len(calificaciones) if calificaciones else 0.0

def determinar_estado(promedio: float, asistencia: float) -> str:
    \"\"\"Determines student status based on average and attendance.\"\"\"
    if promedio >= 70 and asistencia >= 0.8:
        return \"Aprobado\"
    return \"Reprobado\"

# --- Función Principal ---
def generar_resumen_final(estudiantes: List[Dict]) -> List[Tuple[str, float, str]]:
    \"\"\"
    Uses a list comprehension to create a summary tuple for each student,
    calling multiple helper functions in the process.
    \"\"\"
    return [
        (
            e['nombre'],
            round(calcular_promedio(e['calificaciones']), 2),
            determinar_estado(calcular_promedio(e['calificaciones']), e['asistencia'])
        )
        for e in estudiantes
    ]

# --- Datos de entrada ---
registros_academicos = [
    {'nombre': 'Ana', 'calificaciones': [80, 90, 95], 'asistencia': 0.9},
    {'nombre': 'Luis', 'calificaciones': [60, 65, 70], 'asistencia': 0.85},
    {'nombre': 'Marta', 'calificaciones': [90, 100], 'asistencia': 0.75}
]

# --- Llamada a la función ---
generar_resumen_final(registros_academicos)`,
        options: [
            "[('Ana', 88.33, 'Aprobado'), ('Luis', 65.0, 'Aprobado'), ('Marta', 95.0, 'Aprobado')]",
            "[('Ana', 88.33, 'Aprobado'), ('Luis', 65.0, 'Reprobado'), ('Marta', 95.0, 'Aprobado')]",
            "[('Ana', 88.33, 'Aprobado'), ('Luis', 65.0, 'Reprobado'), ('Marta', 95.0, 'Reprobado')]",
            "['Aprobado', 'Reprobado', 'Reprobado']"
        ],
        correct: "[('Ana', 88.33, 'Aprobado'), ('Luis', 65.0, 'Reprobado'), ('Marta', 95.0, 'Reprobado')]",
        explanation: `**Respuesta correcta: C) [('Ana', 88.33, 'Aprobado'), ('Luis', 65.0, 'Reprobado'), ('Marta', 95.0, 'Reprobado')]**

La list comprehension itera a través de cada diccionario de estudiante (\`e\`) y construye una tupla llamando a las funciones auxiliares.

**Para 'Ana'**:
- \`calcular_promedio([80, 90, 95])\` retorna \`88.33...\`
- \`determinar_estado(88.33, 0.9)\` verifica:
  - \`88.33 >= 70\`? **True** ✅
  - \`0.9 >= 0.8\`? **True** ✅
  - Ambas condiciones se cumplen → retorna \`"Aprobado"\`
- Tupla resultante: \`('Ana', 88.33, 'Aprobado')\`

**Para 'Luis'**:
- \`calcular_promedio([60, 65, 70])\` retorna \`65.0\`
- \`determinar_estado(65.0, 0.85)\` verifica:
  - \`65.0 >= 70\`? **False** ❌
  - La condición falla inmediatamente → retorna \`"Reprobado"\`
- Tupla resultante: \`('Luis', 65.0, 'Reprobado')\`

**Para 'Marta'**:
- \`calcular_promedio([90, 100])\` retorna \`95.0\`
- \`determinar_estado(95.0, 0.75)\` verifica:
  - \`95.0 >= 70\`? **True** ✅
  - \`0.75 >= 0.8\`? **False** ❌
  - La segunda condición falla → retorna \`"Reprobado"\`
- Tupla resultante: \`('Marta', 95.0, 'Reprobado')\`

La lista final contiene estas tres tuplas generadas.

**Punto importante**: Marta tiene un excelente promedio (95.0), pero su asistencia (75%) está por debajo del mínimo requerido (80%), por lo que queda reprobada. Ambas condiciones deben cumplirse con el operador \`and\`.

**Conceptos clave:**
- **Tuplas en comprehensions**: Se pueden crear estructuras complejas
- **Múltiples llamadas a funciones**: Combinar varias funciones auxiliares en una expresión
- **Lógica AND**: Todas las condiciones deben ser verdaderas`
    },
    {
        question: "**Dict comprehension con filtrado y transformación**\n\nPara este problema, usarás una **dict comprehension** en lugar de list comprehension. El objetivo es crear un índice de autores a partir de una lista de registros de libros. El diccionario resultante debe mapear el ISBN de cada libro al nombre de su autor, pero con el nombre formateado correctamente (por ejemplo, \"Apellido, Nombre\" se convierte en \"Nombre Apellido\").\n\nLa comprensión llamará a una función auxiliar para formatear el nombre del autor y también filtrará cualquier libro que no tenga ISBN.\n\n¿Cuál es el diccionario de índice de autores creado por la función `crear_indice_autores`?\n\n¿Cuál será el resultado?",
        code: `from typing import List, Dict

# --- Función Auxiliar ---
def formatear_nombre_autor(autor: str) -> str:
    \"\"\"Converts 'Last, First' format to 'First Last'.\"\"\"
    if ', ' in autor:
        apellido, nombre = autor.split(', ', 1)
        return f\"{nombre} {apellido}\"
    return autor

# --- Función Principal ---
def crear_indice_autores(libros: List[Dict]) -> Dict[str, str]:
    \"\"\"
    Uses a dictionary comprehension to create an ISBN -> Author index.
    Structure: {key(b): value(b) for b in libros if condition(b)}
    \"\"\"
    return {
        libro['isbn']: formatear_nombre_autor(libro['autor']) 
        for libro in libros 
        if libro.get('isbn')
    }

# --- Datos de entrada ---
biblioteca = [
    {'titulo': 'Cien años de soledad', 'autor': 'García Márquez, Gabriel', 'isbn': '978-0307350434'},
    {'titulo': 'El túnel', 'autor': 'Sábato, Ernesto', 'isbn': '978-8432217639'},
    {'titulo': 'Poesías', 'autor': 'Anónimo'} # No tiene ISBN
]

# --- Llamada a la función ---
crear_indice_autores(biblioteca)`,
        options: [
            "[{'978-0307350434': 'Gabriel García Márquez'}, {'978-8432217639': 'Ernesto Sábato'}]",
            "{'978-0307350434': 'García Márquez, Gabriel', '978-8432217639': 'Sábato, Ernesto'}",
            "{'978-0307350434': 'Gabriel García Márquez', '978-8432217639': 'Ernesto Sábato'}",
            "{None: 'Anónimo', '978-0307350434': 'Gabriel García Márquez', '978-8432217639': 'Ernesto Sábato'}"
        ],
        correct: "{'978-0307350434': 'Gabriel García Márquez', '978-8432217639': 'Ernesto Sábato'}",
        explanation: `**Respuesta correcta: C) {'978-0307350434': 'Gabriel García Márquez', '978-8432217639': 'Ernesto Sábato'}**

Una dict comprehension usa llaves \`{}\` y un par \`key: value\` en su expresión. La lógica es muy similar a una list comprehension.

**Para el primer libro**:
- \`if libro.get('isbn')\` verifica si la clave 'isbn' existe y tiene un valor
- Existe (\`'978-0307350434'\`) → el filtro pasa ✅
- **Clave** para el nuevo diccionario: \`libro['isbn']\`
- **Valor**: resultado de \`formatear_nombre_autor('García Márquez, Gabriel')\`
  - Detecta \`', '\` en el string
  - Divide: \`apellido = 'García Márquez'\`, \`nombre = 'Gabriel'\`
  - Retorna \`"Gabriel García Márquez"\`
- Se añade el par: \`'978-0307350434': 'Gabriel García Márquez'\`

**Para el segundo libro**:
- \`if libro.get('isbn')\` pasa ✅
- **Clave**: \`libro['isbn']\`
- **Valor**: \`formatear_nombre_autor('Sábato, Ernesto')\`
  - Divide: \`apellido = 'Sábato'\`, \`nombre = 'Ernesto'\`
  - Retorna \`"Ernesto Sábato"\`
- Se añade el par: \`'978-8432217639': 'Ernesto Sábato'\`

**Para el tercer libro**:
- \`if libro.get('isbn')\` retorna \`None\` (la clave no existe)
- En contexto booleano, \`None\` es \`False\`
- El filtro falla → este libro se omite completamente ❌

El resultado final es un diccionario con solo los dos libros que tenían ISBN, con los nombres de autores formateados correctamente.

**Por qué las otras opciones son incorrectas:**
- **A**: Es una lista de diccionarios, no un diccionario único
- **B**: Los nombres no están formateados (mantiene formato "Apellido, Nombre")
- **D**: Incluiría \`None\` como clave, lo cual no sucede porque el filtro lo excluye

**Conceptos clave:**
- **Dict comprehension**: \`{key_expr: value_expr for item in items if condition}\`
- **Filtrado con .get()**: Retorna \`None\` si la clave no existe, útil para filtrar
- **Transformación de valores**: Aplicar funciones para formatear datos`
    }
]