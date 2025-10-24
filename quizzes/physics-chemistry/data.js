/**
 * @file Physics and Chemistry Quiz Data
 * @description Question data for physics and chemistry exercises
 */

const physicsChemistryQuizData = {
    randomize: true,// Assessment mode: broad understanding
    questions: [
    {
        question: "Una simulación física calcula qué partículas estarán dentro de una zona después de 2.0 segundos. ¿Qué lista de IDs retornará?",
        code: `from typing import List, Dict, Any, Tuple

def filtrar_particulas_en_zona(
    particulas: List[Dict[str, Any]], 
    zona_objetivo: Dict[str, float], 
    delta_t: float
) -> List[str]:
    """
    Calcula la posición futura de las partículas y filtra las que están en una zona.
    Fórmula: posicion_final = posicion_inicial + velocidad * tiempo
    """
    ids_en_zona: List[str] = []
    
    for p in particulas:
        pos_inicial: Tuple[float, float] = p['pos']
        velocidad: Tuple[float, float] = p['vel']
        
        # Calcular la nueva posición en cada eje
        pos_final_x = pos_inicial[0] + velocidad[0] * delta_t
        pos_final_y = pos_inicial[1] + velocidad[1] * delta_t
        
        # Comprobar si la posición final está dentro de los límites de la zona
        en_zona_x = zona_objetivo['x_min'] <= pos_final_x <= zona_objetivo['x_max']
        en_zona_y = zona_objetivo['y_min'] <= pos_final_y <= zona_objetivo['y_max']
        
        if en_zona_x and en_zona_y:
            ids_en_zona.append(p['id'])
            
    return ids_en_zona

# Datos de la simulación
particulas_simulacion = [
    {'id': 'alpha', 'pos': (0, 0),   'vel': (5, 10)},
    {'id': 'beta',  'pos': (10, 30), 'vel': (-2, -5)},
    {'id': 'gamma', 'pos': (5, 5),   'vel': (10, 10)},
    {'id': 'delta', 'pos': (0, 30),  'vel': (5, 0)}
]
zona_deteccion = {'x_min': 5, 'x_max': 20, 'y_min': 15, 'y_max': 30}

# Llamada
filtrar_particulas_en_zona(particulas_simulacion, zona_deteccion, 2.0)`,
        options: ["['alpha', 'beta']", "['alpha', 'beta', 'delta']", "['gamma']", "['alpha', 'beta', 'gamma', 'delta']"],
        correct: "['alpha', 'beta', 'delta']",
        explanation: `
La función calcula la posición final de cada partícula después de \`t=2.0s\` y comprueba si cae en la zona \`x:[5, 20], y:[15, 30]\`.

* **Partícula 'alpha'**:
    * \`pos_final_x\` = 0 + (5 * 2.0) = **10**
    * \`pos_final_y\` = 0 + (10 * 2.0) = **20**
    * El punto (10, 20) está dentro de la zona. ✓ **Se incluye**.
* **Partícula 'beta'**:
    * \`pos_final_x\` = 10 + (-2 * 2.0) = **6**
    * \`pos_final_y\` = 30 + (-5 * 2.0) = **20**
    * El punto (6, 20) está dentro de la zona. ✓ **Se incluye**.
* **Partícula 'gamma'**:
    * \`pos_final_x\` = 5 + (10 * 2.0) = **25**
    * \`pos_final_y\` = 5 + (10 * 2.0) = **25**
    * El punto (25, 25) está **fuera** de la zona porque \`x=25 > x_max=20\`. ✗ **No se incluye**.
* **Partícula 'delta'**:
    * \`pos_final_x\` = 0 + (5 * 2.0) = **10**
    * \`pos_final_y\` = 30 + (0 * 2.0) = **30**
    * El punto (10, 30) está en el borde superior. Como la comprobación es inclusiva (\`<=\`), se considera dentro. ✓ **Se incluye**.

La lista final de IDs es \`['alpha', 'beta', 'delta']\`.
`
    },
    {
        question: "Un circuito en serie con corriente de **0.05 A** necesita análisis de potencia. ¿Qué reporte genera la función?",
        code: `from typing import List, Dict, Any

def analizar_circuito(
    componentes: List[Dict[str, Any]], 
    corriente_a: float
) -> Dict[str, Dict[str, Any]]:
    """
    Calcula la potencia disipada por cada componente y comprueba su estado.
    """
    reporte: Dict[str, Dict[str, Any]] = {}
    
    for comp in componentes:
        id_comp = comp['id']
        resistencia = comp['resistencia_ohm']
        potencia_max = comp['potencia_max_w']
        
        # Ley de Potencia de Joule: P = I^2 * R
        potencia_disipada = (corriente_a ** 2) * resistencia
        
        estado = 'ok'
        if potencia_disipada > potencia_max:
            estado = 'sobrecarga'
            
        reporte[id_comp] = {
            'potencia_w': round(potencia_disipada, 3),
            'estado': estado
        }
    
    return reporte

# Datos del circuito
componentes_circuito = [
    {'id': 'R1', 'resistencia_ohm': 100, 'potencia_max_w': 0.5},
    {'id': 'R2', 'resistencia_ohm': 470, 'potencia_max_w': 2.0},
    {'id': 'L1', 'resistencia_ohm': 50,  'potencia_max_w': 0.1}
]
corriente_del_circuito = 0.05 # 50mA

# Llamada
analizar_circuito(componentes_circuito, corriente_del_circuito)`,
        options: [
            `{
    'R1': {'potencia_w': 0.25, 'estado': 'sobrecarga'},
    'R2': {'potencia_w': 1.175, 'estado': 'ok'},
    'L1': {'potencia_w': 0.125, 'estado': 'sobrecarga'}
}`,
            `{
    'R1': {'potencia_w': 0.25, 'estado': 'ok'},
    'R2': {'potencia_w': 1.175, 'estado': 'ok'},
    'L1': {'potencia_w': 0.1, 'estado': 'ok'}
}`,
            `{
    'R1': {'potencia_w': 0.25, 'estado': 'ok'},
    'R2': {'potencia_w': 1.175, 'estado': 'ok'},
    'L1': {'potencia_w': 0.125, 'estado': 'sobrecarga'}
}`,
            `{
    'R1': {'potencia_w': 5.0, 'estado': 'sobrecarga'},
    'R2': {'potencia_w': 23.5, 'estado': 'sobrecarga'},
    'L1': {'potencia_w': 2.5, 'estado': 'sobrecarga'}
}`
        ],
        correct: `{
    'R1': {'potencia_w': 0.25, 'estado': 'ok'},
    'R2': {'potencia_w': 1.175, 'estado': 'ok'},
    'L1': {'potencia_w': 0.125, 'estado': 'sobrecarga'}
}`,
        explanation: `
La corriente es \`I = 0.05 A\`, por lo que \`I² = 0.0025 A²\`. Se calcula la potencia para cada componente usando **P = I² × R**:

* **Componente 'R1'**:
    * \`P = 0.0025 × 100 Ω = 0.25 W\`.
    * Se compara \`0.25 W\` con su máximo de \`0.5 W\`. La condición \`0.25 > 0.5\` es **falsa**.
    * Estado: **'ok'** ✓
* **Componente 'R2'**:
    * \`P = 0.0025 × 470 Ω = 1.175 W\`.
    * Se compara \`1.175 W\` con su máximo de \`2.0 W\`. La condición \`1.175 > 2.0\` es **falsa**.
    * Estado: **'ok'** ✓
* **Componente 'L1'**:
    * \`P = 0.0025 × 50 Ω = 0.125 W\`.
    * Se compara \`0.125 W\` con su máximo de \`0.1 W\`. La condición \`0.125 > 0.1\` es **verdadera**.
    * Estado: **'sobrecarga'** ⚠️

El reporte final muestra que R1 y R2 operan correctamente pero L1 está sobrecargado.
`
    },
    {
        question: "Dada una ecuación química simple, ¿qué retorna la función de validación de balanceo?",
        code: `from typing import Dict

def validar_balanceo(ecuacion: Dict[str, Dict[str, int]]) -> bool:
    """
    Verifica si una ecuación química está balanceada comparando
    el número de átomos de cada elemento en reactivos y productos.
    """
    reactivos = ecuacion['reactivos']
    productos = ecuacion['productos']
    
    # Obtener todos los elementos únicos
    elementos = set(reactivos.keys()) | set(productos.keys())
    
    # Verificar que cada elemento tenga el mismo número de átomos
    for elemento in elementos:
        atomos_reactivos = reactivos.get(elemento, 0)
        atomos_productos = productos.get(elemento, 0)
        
        if atomos_reactivos != atomos_productos:
            return False
    
    return True

# Ecuación: CH4 + O2 -> CO2 + H2O (sin balancear)
ecuacion_ejemplo = {
    'reactivos': {'C': 1, 'H': 4, 'O': 2},
    'productos': {'C': 1, 'H': 2, 'O': 3}
}

# Llamada
validar_balanceo(ecuacion_ejemplo)`,
        options: ["True", "False", "{'C': True, 'H': False, 'O': False}", "Error: ecuación inválida"],
        correct: "False",
        explanation: `
La función compara el número de átomos de cada elemento en ambos lados de la ecuación:

* **Carbono (C)**: Reactivos = 1, Productos = 1. ✓ **Coinciden**.
* **Hidrógeno (H)**: Reactivos = 4, Productos = 2. ✗ **No coinciden** (4 ≠ 2).
* **Oxígeno (O)**: Reactivos = 2, Productos = 3. ✗ **No coinciden** (2 ≠ 3).

Como el hidrógeno y el oxígeno no están balanceados, la función retorna **False**.

**Nota**: La ecuación balanceada correctamente sería: CH₄ + 2O₂ → CO₂ + 2H₂O
`
    },
    {
        question: "Calcula la masa molar de un compuesto químico. ¿Qué retorna para el compuesto 'C2H5X' donde 'X' es un elemento desconocido?",
        code: `from typing import Dict

def calcular_masa_molar(formula: str, masas_atomicas: Dict[str, float]) -> float:
    """
    Calcula la masa molar de un compuesto sumando las masas atómicas
    de cada elemento multiplicadas por su cantidad.
    Si encuentra un elemento desconocido, retorna 0.0.
    """
    masa_total = 0.0
    i = 0
    
    while i < len(formula):
        # Leer el símbolo del elemento (1 o 2 caracteres)
        elemento = formula[i]
        i += 1
        
        if i < len(formula) and formula[i].islower():
            elemento += formula[i]
            i += 1
        
        # Leer el número de átomos (si existe)
        cantidad_str = ''
        while i < len(formula) and formula[i].isdigit():
            cantidad_str += formula[i]
            i += 1
        
        cantidad = int(cantidad_str) if cantidad_str else 1
        
        # Verificar si el elemento existe en la tabla
        if elemento not in masas_atomicas:
            return 0.0
        
        masa_total += masas_atomicas[elemento] * cantidad
    
    return round(masa_total, 2)

# Tabla de masas atómicas
tabla_masas = {
    'H': 1.008,
    'C': 12.011,
    'O': 15.999,
    'N': 14.007
}

# Llamada
calcular_masa_molar('C2H5X', tabla_masas)`,
        options: ["29.06", "0.0", "Error: elemento no encontrado", "45.06"],
        correct: "0.0",
        explanation: `
La función procesa la fórmula 'C2H5X' carácter por carácter:

1. **'C2'**: Elemento C con cantidad 2.
   * Masa = 12.011 × 2 = 24.022 g/mol
   * masa_total = 24.022 g/mol

2. **'H5'**: Elemento H con cantidad 5.
   * Masa = 1.008 × 5 = 5.04 g/mol
   * masa_total = 24.022 + 5.04 = 29.062 g/mol

3. **'X'**: Elemento X con cantidad 1.
   * El elemento 'X' **no existe** en \`tabla_masas\`.
   * La condición \`if elemento not in masas_atomicas\` es **verdadera**.
   * La función retorna inmediatamente **0.0**.

El valor de retorno es **0.0**, indicando que hay un elemento desconocido en la fórmula.
`
    }

    ]
}
