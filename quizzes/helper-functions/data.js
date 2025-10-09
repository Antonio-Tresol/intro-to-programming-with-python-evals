const helperFunctionsQuizData = [
    {
        question: "**Pregunta 17: Procesamiento por lotes con función auxiliar**\n\nEstás desarrollando un sistema de registro de usuarios y necesitas validar múltiples registros de forma eficiente. Has escrito una función auxiliar `es_usuario_valido` que valida un único usuario, y ahora necesitas usarla en una función `procesar_lote_usuarios` que clasifique múltiples usuarios.\n\nLa función auxiliar es:\n```python\ndef es_usuario_valido(usuario: Dict[str, Any]) -> bool:\n    \"\"\"Función auxiliar que valida un único diccionario de usuario.\"\"\"\n    email = usuario.get('email')\n    edad = usuario.get('edad')\n    \n    # Regla 1: El email debe existir y contener un '@'\n    if not email or '@' not in email:\n        return False\n    \n    # Regla 2: La edad debe existir, ser un entero y ser >= 18\n    if not isinstance(edad, int) or edad < 18:\n        return False\n        \n    return True\n```\n\nTu tarea es completar la función principal `procesar_lote_usuarios` que usa la función auxiliar:\n```python\ndef procesar_lote_usuarios(usuarios: List[Dict[str, Any]]) -> Dict[str, List[str]]:\n    \"\"\"Función principal que clasifica a los usuarios usando la función auxiliar.\"\"\"\n    reporte = {'validos': [], 'invalidos': []}\n    \n    for u in usuarios:\n        if es_usuario_valido(u):\n            reporte['validos'].append(u['id'])\n        else:\n            reporte['invalidos'].append(u['id'])\n            \n    return reporte\n```\n\nSi ejecutamos:\n```python\nnuevos_registros = [\n    {'id': 'u101', 'email': 'user.one@example.com', 'edad': 25},\n    {'id': 'u102', 'email': 'usertwo.com', 'edad': 30},           # Email inválido\n    {'id': 'u103', 'email': 'user.three@example.com', 'edad': 17}, # Edad inválida\n    {'id': 'u104', 'email': 'user.four@example.com'},            # Falta la edad\n    {'id': 'u105', 'email': 'user.five@example.com', 'edad': 18}\n]\n\nresultado = procesar_lote_usuarios(nuevos_registros)\n```\n\n¿Cuál será el valor de `resultado`?",
        code: ``,
        options: [
            "{'validos': ['u101', 'u103', 'u105'], 'invalidos': ['u102', 'u104']}",
            "{'validos': ['u101', 'u105'], 'invalidos': ['u102', 'u103', 'u104']}",
            "{'validos': ['u101', 'u102', 'u105'], 'invalidos': ['u103', 'u104']}",
            "{'validos': ['u101'], 'invalidos': ['u102', 'u103', 'u104', 'u105']}"
        ],
        correct: "{'validos': ['u101', 'u105'], 'invalidos': ['u102', 'u103', 'u104']}",
        explanation: `**Respuesta correcta: B**

Analicemos cada usuario usando la función auxiliar \`es_usuario_valido\`:

**u101**: \`{'id': 'u101', 'email': 'user.one@example.com', 'edad': 25}\`
- Email tiene '@' ✅
- Edad es int y >= 18 ✅
- **Válido**

**u102**: \`{'id': 'u102', 'email': 'usertwo.com', 'edad': 30}\`
- Email NO tiene '@' ❌
- **Inválido**

**u103**: \`{'id': 'u103', 'email': 'user.three@example.com', 'edad': 17}\`
- Email tiene '@' ✅
- Edad es 17 < 18 ❌
- **Inválido**

**u104**: \`{'id': 'u104', 'email': 'user.four@example.com'}\`
- Email tiene '@' ✅
- Edad es None (no existe), no es int ❌
- **Inválido**

**u105**: \`{'id': 'u105', 'email': 'user.five@example.com', 'edad': 18}\`
- Email tiene '@' ✅
- Edad es int y >= 18 (exactamente 18) ✅
- **Válido**

Este ejemplo demuestra el **patrón de función auxiliar** donde:
1. La función auxiliar (\`es_usuario_valido\`) encapsula la lógica de validación compleja
2. La función principal (\`procesar_lote_usuarios\`) itera y clasifica usando la auxiliar
3. El código es más legible y mantenible que tener toda la lógica en un solo lugar

**Concepto clave**: Las funciones auxiliares mejoran la modularidad y la reutilización del código.`
    },
    {
        question: "**Pregunta 18: Transformaciones geométricas con funciones auxiliares**\n\nEstás desarrollando un programa de gráficos por computadora y necesitas aplicar transformaciones a figuras geométricas representadas como listas de puntos. Has creado dos funciones auxiliares:\n\n```python\ndef escalar_puntos(puntos: List[Tuple[float, float]], factor: float) -> List[Tuple[float, float]]:\n    \"\"\"Multiplica las coordenadas de cada punto por un factor.\"\"\"\n    return [(x * factor, y * factor) for x, y in puntos]\n\ndef trasladar_puntos(puntos: List[Tuple[float, float]], vector: Tuple[float, float]) -> List[Tuple[float, float]]:\n    \"\"\"Suma un vector de traslación a cada punto.\"\"\"\n    vx, vy = vector\n    return [(x + vx, y + vy) for x, y in puntos]\n```\n\nAhora necesitas crear una función principal que aplique ambas transformaciones en secuencia:\n\n```python\ndef aplicar_transformaciones_figura(\n    puntos_iniciales: List[Tuple[float, float]], \n    factor_escala: float, \n    vector_traslacion: Tuple[float, float]\n) -> List[Tuple[float, float]]:\n    \"\"\"Aplica una secuencia de transformaciones: primero escala, luego traslada.\"\"\"\n    puntos_escalados = escalar_puntos(puntos_iniciales, factor_escala)\n    puntos_finales = trasladar_puntos(puntos_escalados, vector_traslacion)\n    return puntos_finales\n```\n\nSi ejecutamos:\n```python\ntriangulo_original = [(0, 0), (2, 0), (1, 2)]\nfactor = 2.0\nvector = (5, -3)\n\nresultado = aplicar_transformaciones_figura(triangulo_original, factor, vector)\n```\n\n¿Cuál será el valor de `resultado`?",
        code: ``,
        options: [
            "[(5, -3), (9, -3), (7, 1)]",
            "[(5, -3), (7, -3), (6, 1)]",
            "[(10, -6), (14, -6), (12, -2)]",
            "[(0, 0), (4, 0), (2, 4)]"
        ],
        correct: "[(5, -3), (9, -3), (7, 1)]",
        explanation: `**Respuesta correcta: A**

Sigamos las transformaciones paso a paso:

**Paso 1: Escalar** (multiplicar cada coordenada por 2.0)
- \`(0, 0) → (0×2.0, 0×2.0) → (0, 0)\`
- \`(2, 0) → (2×2.0, 0×2.0) → (4, 0)\`
- \`(1, 2) → (1×2.0, 2×2.0) → (2, 4)\`

Resultado después de escalar: \`[(0, 0), (4, 0), (2, 4)]\`

**Paso 2: Trasladar** (sumar vector (5, -3) a cada punto)
- \`(0, 0) → (0+5, 0-3) → (5, -3)\`
- \`(4, 0) → (4+5, 0-3) → (9, -3)\`
- \`(2, 4) → (2+5, 4-3) → (7, 1)\`

**Resultado final: [(5, -3), (9, -3), (7, 1)]**

**Análisis de las otras opciones:**
- **B**: Incorrecto, no aplicó correctamente el escalado
- **C**: Resultado si se aplican las transformaciones en **orden inverso** (trasladar primero, luego escalar)
- **D**: Solo el escalado, sin la traslación

**Conceptos clave:**
1. **Composición de funciones**: Combinar funciones auxiliares para operaciones complejas
2. **Orden de operaciones**: El orden importa en transformaciones geométricas
3. **Modularidad**: Cada función auxiliar tiene una responsabilidad única y clara

Este patrón es común en gráficos por computadora, procesamiento de imágenes y álgebra lineal.`
    },
    {
        question: "**Pregunta 21: Patrón Strategy con función de orden superior**\n\nUna función genérica, `procesar_datos_numericos`, ha sido diseñada para agregar los valores de una lista. Para ser flexible, en lugar de tener una operación fija (como la suma), acepta una función `operacion` como argumento. Esta función `operacion` define la \"estrategia\" específica que se usará para combinar los números. Este es un ejemplo del **patrón de diseño Strategy**, donde el algoritmo principal se delega a un componente intercambiable.\n\nDadas las funciones `sumar_elementos` y `multiplicar_elementos`, ¿cuál es el resultado de invocar `procesar_datos_numericos` con la estrategia de multiplicación?\n\n```python\nfrom typing import List, Callable\n\n# --- Estrategias de operación ---\ndef sumar_elementos(a: float, b: float) -> float:\n    \"\"\"Estrategia para sumar dos números.\"\"\"\n    return a + b\n\ndef multiplicar_elementos(a: float, b: float) -> float:\n    \"\"\"Estrategia para multiplicar dos números.\"\"\"\n    return a * b\n\n# --- Función de orden superior que acepta una estrategia ---\ndef procesar_datos_numericos(\n    datos: List[float], \n    operacion: Callable[[float, float], float], \n    valor_inicial: float\n) -> float:\n    \"\"\"\n    Procesa una lista de datos usando una función de operación que se pasa\n    como argumento.\n    \"\"\"\n    acumulador = valor_inicial\n    for numero in datos:\n        acumulador = operacion(acumulador, numero)\n    return acumulador\n\n# --- Datos de entrada y llamada ---\nlista_numeros = [1, 2, 3, 4]\n# Se pasa la *función* multiplicar_elementos como argumento.\nresultado_final = procesar_datos_numericos(lista_numeros, multiplicar_elementos, 1)\n```\n\n¿Cuál será el valor de `resultado_final`?",
        code: ``,
        options: [
            "10",
            "24",
            "1",
            "0"
        ],
        correct: "24",
        explanation: `**Respuesta correcta: B) 24**

Este ejemplo demuestra una **función de orden superior**, que es simplemente una función que puede tomar otra función como argumento. El beneficio es la flexibilidad: la lógica de \`procesar_datos_numericos\` (iterar y acumular) es siempre la misma, pero su comportamiento cambia drásticamente dependiendo de la función \`operacion\` que le pasemos.

La llamada a la función es \`procesar_datos_numericos(lista_numeros, multiplicar_elementos, 1)\`. Esto significa que dentro del bucle, la variable \`operacion\` será una referencia a la función \`multiplicar_elementos\`.

El proceso de ejecución es el siguiente:

1. La variable \`acumulador\` se inicializa con \`valor_inicial\`, que es \`1\`.
2. **Iteración 1**: \`numero\` es \`1\`. Se ejecuta \`acumulador = operacion(acumulador, numero)\`, que es \`multiplicar_elementos(1, 1)\`. El \`acumulador\` se convierte en \`1\`.
3. **Iteración 2**: \`numero\` es \`2\`. Se ejecuta \`multiplicar_elementos(1, 2)\`. El \`acumulador\` se convierte en \`2\`.
4. **Iteración 3**: \`numero\` es \`3\`. Se ejecuta \`multiplicar_elementos(2, 3)\`. El \`acumulador\` se convierte en \`6\`.
5. **Iteración 4**: \`numero\` es \`4\`. Se ejecuta \`multiplicar_elementos(6, 4)\`. El \`acumulador\` se convierte en \`24\`.

El bucle termina y la función retorna el valor final del \`acumulador\`, que es **24**. Si hubiéramos pasado \`sumar_elementos\` y un \`valor_inicial\` de \`0\`, el resultado habría sido \`10\`.

**Conceptos clave:**
- **Función de orden superior**: Función que acepta otra función como parámetro
- **Patrón Strategy**: Permite cambiar el algoritmo sin modificar la estructura principal
- **Flexibilidad**: El mismo código puede comportarse de múltiples formas según la estrategia pasada`
    },
    {
        question: "**Pregunta 22: Función predicado para formateo condicional**\n\nUna función de reporte, `generar_reporte_condicional`, debe formatear una lista de mediciones. Algunas mediciones deben ser resaltadas con una marca `[!]` si cumplen una condición específica. Para que la función sea reutilizable, la lógica para decidir si un valor debe ser resaltado se pasa como un argumento: una **función predicado**. Un predicado es simplemente una función que recibe un valor y devuelve `True` o `False`.\n\nSe proporcionan dos funciones predicado: `es_valor_negativo` y `es_valor_extremo`. ¿Cuál será la lista de cadenas de texto generada si se usa el predicado `es_valor_extremo`?\n\n```python\nfrom typing import List, Callable\n\n# --- Funciones Predicado ---\ndef es_valor_negativo(valor: float) -> bool:\n    \"\"\"Predicado que devuelve True si el valor es negativo.\"\"\"\n    return valor < 0\n\ndef es_valor_extremo(valor: float) -> bool:\n    \"\"\"Predicado que devuelve True si el valor está fuera del rango (-50, 50).\"\"\"\n    return valor < -50 or valor > 50\n\n# --- Función principal que acepta un predicado ---\ndef generar_reporte_condicional(\n    mediciones: List[float], \n    condicion_resaltado: Callable[[float], bool]\n) -> List[str]:\n    \"\"\"Formatea una lista de mediciones, aplicando un resaltado\n    basado en la función predicado que se pasa como argumento.\n    \"\"\"\n    reporte_formateado = []\n    for medicion in mediciones:\n        # Llama a la función predicado pasada como argumento\n        if condicion_resaltado(medicion):\n            reporte_formateado.append(f\"{medicion:.1f} [!]\")\n        else:\n            reporte_formateado.append(f\"{medicion:.1f}\")\n    return reporte_formateado\n\n# --- Datos de entrada y llamada ---\ndatos_sensor = [-60.5, 25.0, 49.9, -5.1]\n# Se pasa la función es_valor_extremo como el predicado para el resaltado.\nreporte = generar_reporte_condicional(datos_sensor, es_valor_extremo)\n```\n\n¿Cuál será el valor de `reporte`?",
        code: ``,
        options: [
            "['-60.5 [!]', '25.0', '49.9', '-5.1']",
            "['-60.5 [!]', '25.0', '49.9', '-5.1 [!]']",
            "[True, False, False, False]",
            "['-60.5', '25.0', '49.9', '-5.1']"
        ],
        correct: "['-60.5 [!]', '25.0', '49.9', '-5.1']",
        explanation: `**Respuesta correcta: A) ['-60.5 [!]', '25.0', '49.9', '-5.1']**

Este patrón es extremadamente útil para desacoplar la lógica de iteración y formato de las reglas de negocio específicas. La función \`generar_reporte_condicional\` sabe *cómo* construir el reporte, pero delega la decisión de *cuándo* resaltar a la función \`condicion_resaltado\` que recibe.

En la llamada, \`condicion_resaltado\` es una referencia a la función \`es_valor_extremo\`. La lógica de este predicado es: \`valor < -50 or valor > 50\`.

Veamos cómo se procesa cada medición:

1. **Valor -60.5**: Se llama a \`es_valor_extremo(-60.5)\`. La condición \`-60.5 < -50\` es **True**. Por lo tanto, se añade la cadena \`"-60.5 [!]"\`.
2. **Valor 25.0**: Se llama a \`es_valor_extremo(25.0)\`. Ni \`25.0 < -50\` ni \`25.0 > 50\` son verdaderas. El predicado devuelve **False**. Se añade la cadena \`"25.0"\`.
3. **Valor 49.9**: Se llama a \`es_valor_extremo(49.9)\`. Ni \`49.9 < -50\` ni \`49.9 > 50\` son verdaderas. El predicado devuelve **False**. Se añade la cadena \`"49.9"\`.
4. **Valor -5.1**: Se llama a \`es_valor_extremo(-5.1)\`. Ni \`-5.1 < -50\` ni \`-5.1 > 50\` son verdaderas. El predicado devuelve **False**. Se añade la cadena \`"-5.1"\`.

La lista final construida es la que se describe en la opción A. Si se hubiera pasado la función \`es_valor_negativo\`, el resultado habría sido la opción B.

**Conceptos clave:**
- **Función predicado**: Función que devuelve un valor booleano para tomar decisiones
- **Separación de responsabilidades**: La lógica de formato está separada de la lógica de condición
- **Reutilización**: La misma función de reporte puede usarse con diferentes predicados`
    },
    {
        question: "**Pregunta 23: Ajuste de puntuaciones con función auxiliar**\n\nEn un sistema de calificación, una función principal `aplicar_ajuste_a_lista` debe procesar una lista de puntuaciones. Para mantener el código organizado, la fórmula específica del ajuste se define en una función auxiliar separada llamada `ajustar_puntuacion`. La función principal simplemente itera sobre la lista y llama a la función auxiliar para cada puntuación.\n\n¿Cuál es la lista de puntuaciones ajustadas que devuelve la función `aplicar_ajuste_a_lista`?\n\n```python\nfrom typing import List\n\ndef ajustar_puntuacion(puntuacion: int) -> int:\n    \"\"\"\n    Función auxiliar que aplica una regla de negocio:\n    duplica la puntuación y suma un bono de 5 puntos.\n    \"\"\"\n    return (puntuacion * 2) + 5\n\ndef aplicar_ajuste_a_lista(puntuaciones: List[int]) -> List[int]:\n    \"\"\"\n    Función principal que recorre una lista y aplica el ajuste\n    llamando a la función auxiliar.\n    \"\"\"\n    puntuaciones_ajustadas = []\n    for p in puntuaciones:\n        nueva_puntuacion = ajustar_puntuacion(p)\n        puntuaciones_ajustadas.append(nueva_puntuacion)\n    return puntuaciones_ajustadas\n\n# --- Datos de entrada ---\npuntuaciones_iniciales = [10, 20, 0]\n\n# --- Llamada a la función ---\naplicar_ajuste_a_lista(puntuaciones_iniciales)\n```\n\n¿Cuál será el resultado?",
        code: ``,
        options: [
            "[20, 40, 0]",
            "[15, 25, 5]",
            "[25, 45, 5]",
            "[30, 50, 10]"
        ],
        correct: "[25, 45, 5]",
        explanation: `**Respuesta correcta: C) [25, 45, 5]**

Este es un ejemplo claro de cómo se organiza el código para mejorar la legibilidad y el mantenimiento. La función principal \`aplicar_ajuste_a_lista\` se encarga de la tarea de "recorrer la lista", mientras que la función auxiliar \`ajustar_puntuacion\` se encarga del "cálculo específico".

El proceso es el siguiente:

1. La función \`aplicar_ajuste_a_lista\` recibe la lista \`[10, 20, 0]\`.

2. **Para el primer elemento, 10**:
   - Llama a \`ajustar_puntuacion(10)\`
   - Esta función calcula \`(10 × 2) + 5 = 20 + 5 = 25\`
   - El \`25\` se añade a la nueva lista

3. **Para el segundo elemento, 20**:
   - Llama a \`ajustar_puntuacion(20)\`
   - Esta función calcula \`(20 × 2) + 5 = 40 + 5 = 45\`
   - El \`45\` se añade a la nueva lista

4. **Para el tercer elemento, 0**:
   - Llama a \`ajustar_puntuacion(0)\`
   - Esta función calcula \`(0 × 2) + 5 = 0 + 5 = 5\`
   - El \`5\` se añade a la nueva lista

La función principal retorna la lista completamente construida: **[25, 45, 5]**.

**Ventajas de este patrón:**
- **Separación de responsabilidades**: La iteración está separada del cálculo
- **Facilidad de prueba**: Se puede probar \`ajustar_puntuacion\` de forma independiente
- **Mantenibilidad**: Si cambia la fórmula, solo se modifica la función auxiliar`
    },
    {
        question: "**Pregunta 24: Conteo genérico con función predicado**\n\nSe quiere crear una herramienta de conteo genérica llamada `contar_si_cumple`. Esta función no debe tener una condición de conteo fija; en su lugar, debe recibir como argumento la **función de condición** que usará para decidir si un número debe ser contado o no. Este tipo de función de condición, que devuelve `True` o `False`, se conoce como **predicado**.\n\nDada una lista de números y el predicado `es_par`, ¿cuántos números contará la función `contar_si_cumple`?\n\n```python\nfrom typing import List, Callable\n\ndef es_par(numero: int) -> bool:\n    \"\"\"Predicado que devuelve True si un número es par, y False si no lo es.\"\"\"\n    return numero % 2 == 0\n\ndef contar_si_cumple(numeros: List[int], condicion: Callable[[int], bool]) -> int:\n    \"\"\"\n    Cuenta cuántos números de una lista cumplen con la 'condicion' pasada\n    como argumento.\n    \"\"\"\n    contador = 0\n    for n in numeros:\n        # Llama a la función 'condicion' (que en este caso es 'es_par')\n        if condicion(n):\n            contador += 1\n    return contador\n\n# --- Datos de entrada y llamada ---\nlista_de_muestra = [1, 2, 3, 4, 5, 6]\n# Se pasa la función 'es_par' como argumento para que sea usada como la condición.\ntotal_pares = contar_si_cumple(lista_de_muestra, es_par)\n```\n\n¿Cuál será el valor de `total_pares`?",
        code: ``,
        options: [
            "6",
            "[2, 4, 6]",
            "12",
            "3"
        ],
        correct: "3",
        explanation: `**Respuesta correcta: D) 3**

Este patrón hace que la función \`contar_si_cumple\` sea increíblemente reutilizable. Podríamos pasarle cualquier otra función predicado (como \`es_impar\` o \`es_mayor_a_tres\`) sin tener que cambiar una sola línea de su código.

La llamada \`contar_si_cumple(lista_de_muestra, es_par)\` le dice a la función principal que use \`es_par\` como su lógica de decisión.

El flujo de ejecución es:

1. La variable \`contador\` se inicializa en \`0\`.

2. Se itera sobre la lista \`[1, 2, 3, 4, 5, 6]\`:
   - \`n = 1\`: \`es_par(1)\` retorna \`False\` → contador no cambia
   - \`n = 2\`: \`es_par(2)\` retorna \`True\` → contador aumenta a \`1\`
   - \`n = 3\`: \`es_par(3)\` retorna \`False\` → contador no cambia
   - \`n = 4\`: \`es_par(4)\` retorna \`True\` → contador aumenta a \`2\`
   - \`n = 5\`: \`es_par(5)\` retorna \`False\` → contador no cambia
   - \`n = 6\`: \`es_par(6)\` retorna \`True\` → contador aumenta a \`3\`

Al finalizar el bucle, la función retorna el valor final de \`contador\`, que es **3**, correspondiente al número de elementos pares en la lista (2, 4 y 6).

**Por qué las otras opciones son incorrectas:**
- **A (6)**: Es la longitud total de la lista, no el conteo de pares
- **B ([2, 4, 6])**: Es la lista de números pares, pero la función retorna un conteo (int), no una lista
- **C (12)**: Es la suma de los números pares, no el conteo

**Conceptos clave:**
- **Función genérica**: \`contar_si_cumple\` funciona con cualquier predicado
- **Predicado como parámetro**: Permite personalizar el comportamiento sin modificar la función
- **Reutilización**: El mismo código puede contar pares, impares, negativos, etc.`
    }
]
