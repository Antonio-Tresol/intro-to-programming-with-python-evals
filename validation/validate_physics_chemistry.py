from typing import List, Dict, Any, Tuple

# Exercise 1: Particle Physics Simulation
def filtrar_particulas_en_zona(
    particulas: List[Dict[str, Any]], 
    zona_objetivo: Dict[str, float], 
    delta_t: float
) -> List[str]:
    """
    Calcula la posición futura de las partículas y filtra las que están en una zona.
    Fórmula de movimiento: posicion_final = posicion_inicial + velocidad * tiempo
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

# --- Datos de la simulación ---
particulas_simulacion = [
    {'id': 'alpha', 'pos': (0, 0),   'vel': (5, 10)},
    {'id': 'beta',  'pos': (10, 30), 'vel': (-2, -5)},
    {'id': 'gamma', 'pos': (5, 5),   'vel': (10, 10)},
    {'id': 'delta', 'pos': (0, 30),  'vel': (5, 0)}
]
zona_deteccion = {'x_min': 5, 'x_max': 20, 'y_min': 15, 'y_max': 30}

# --- Llamada a la función ---
resultado_particulas = filtrar_particulas_en_zona(particulas_simulacion, zona_deteccion, 2.0)
print("=" * 60)
print("PREGUNTA 13: Filtrar partículas en zona")
print("=" * 60)
print(f"Resultado: {resultado_particulas}")
print(f"Esperado:  ['alpha', 'beta', 'delta']")
print(f"¿Correcto? {resultado_particulas == ['alpha', 'beta', 'delta']}")
print()

# Let's trace each particle
print("Trazado detallado:")
for p in particulas_simulacion:
    pos_inicial = p['pos']
    velocidad = p['vel']
    pos_final_x = pos_inicial[0] + velocidad[0] * 2.0
    pos_final_y = pos_inicial[1] + velocidad[1] * 2.0
    en_zona_x = 5 <= pos_final_x <= 20
    en_zona_y = 15 <= pos_final_y <= 30
    en_zona = en_zona_x and en_zona_y
    print(f"  {p['id']:6s}: pos_inicial={pos_inicial}, vel={velocidad}")
    print(f"          pos_final=({pos_final_x}, {pos_final_y})")
    print(f"          en_zona_x={en_zona_x}, en_zona_y={en_zona_y}, en_zona={en_zona}")

print("\n")

# Exercise 2: Circuit Analysis
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
            'potencia_w': round(potencia_disipada, 3), # Redondear para claridad
            'estado': estado
        }
    
    return reporte

# --- Datos del circuito ---
componentes_circuito = [
    {'id': 'R1', 'resistencia_ohm': 100, 'potencia_max_w': 0.5},
    {'id': 'R2', 'resistencia_ohm': 470, 'potencia_max_w': 2.0},
    {'id': 'L1', 'resistencia_ohm': 50,  'potencia_max_w': 0.1} # LED con resistencia efectiva
]
corriente_del_circuito = 0.05 # 50mA

# --- Llamada a la función ---
resultado_circuito = analizar_circuito(componentes_circuito, corriente_del_circuito)

print("=" * 60)
print("PREGUNTA 14: Analizar circuito")
print("=" * 60)
print(f"Resultado: {resultado_circuito}")
print()

esperado = {
    'R1': {'potencia_w': 0.25, 'estado': 'ok'}, 
    'R2': {'potencia_w': 1.175, 'estado': 'ok'}, 
    'L1': {'potencia_w': 0.125, 'estado': 'sobrecarga'}
}
print(f"Esperado:  {esperado}")
print(f"¿Correcto? {resultado_circuito == esperado}")
print()

# Let's trace each component
print("Trazado detallado:")
print(f"Corriente: {corriente_del_circuito} A")
print(f"I^2 = {corriente_del_circuito ** 2}")
print()
for comp in componentes_circuito:
    potencia = (corriente_del_circuito ** 2) * comp['resistencia_ohm']
    sobrecarga = potencia > comp['potencia_max_w']
    print(f"  {comp['id']:3s}: R={comp['resistencia_ohm']} Ω, P_max={comp['potencia_max_w']} W")
    print(f"       P = {corriente_del_circuito}^2 * {comp['resistencia_ohm']} = {potencia} W (redondeado: {round(potencia, 3)} W)")
    print(f"       {potencia} > {comp['potencia_max_w']} = {sobrecarga} → estado: {'sobrecarga' if sobrecarga else 'ok'}")

print("\n")

# Exercise 3: Chemical Equation Balancing
from typing import List, Dict, Tuple

def validar_balanceo(
    reactantes: List[Tuple[int, str]], 
    productos: List[Tuple[int, str]],
    moleculas_db: Dict[str, Dict[str, int]]
) -> bool:
    """
    Verifica si una ecuación química está balanceada contando los átomos
    de cada elemento en ambos lados.
    """
    conteo_reactantes: Dict[str, int] = {}
    conteo_productos: Dict[str, int] = {}

    # Procesa una lista (reactantes o productos) y actualiza su diccionario de conteo
    def contar_atomos(lista_terminos, conteo_final):
        for coeficiente, formula in lista_terminos:
            if formula in moleculas_db:
                for elemento, cantidad in moleculas_db[formula].items():
                    conteo_final[elemento] = conteo_final.get(elemento, 0) + cantidad * coeficiente

    contar_atomos(reactantes, conteo_reactantes)
    contar_atomos(productos, conteo_productos)
    
    return conteo_reactantes == conteo_productos

# --- Base de datos de moléculas y propuesta de ecuación ---
moleculas_conocidas = {
    'CH4': {'C': 1, 'H': 4},
    'O2':  {'O': 2},
    'CO2': {'C': 1, 'O': 2},
    'H2O': {'H': 2, 'O': 1}
}

# Ecuación propuesta: CH4 + O2 -> CO2 + H2O
reactantes_propuestos = [(1, 'CH4'), (1, 'O2')]
productos_propuestos = [(1, 'CO2'), (1, 'H2O')]

# --- Llamada a la función ---
resultado_balanceo = validar_balanceo(reactantes_propuestos, productos_propuestos, moleculas_conocidas)

print("=" * 60)
print("PREGUNTA 15: Validar balanceo de ecuación química")
print("=" * 60)
print(f"Ecuación: CH4 + O2 -> CO2 + H2O")
print(f"Resultado: {resultado_balanceo}")
print(f"Esperado:  False")
print(f"¿Correcto? {resultado_balanceo == False}")
print()

# Let's trace the atom counts
print("Trazado detallado:")
conteo_reactantes_trace = {}
conteo_productos_trace = {}

for coef, formula in reactantes_propuestos:
    print(f"  Reactante: {coef} × {formula}")
    if formula in moleculas_conocidas:
        for elemento, cantidad in moleculas_conocidas[formula].items():
            conteo_reactantes_trace[elemento] = conteo_reactantes_trace.get(elemento, 0) + cantidad * coef
            print(f"    {elemento}: {cantidad} × {coef} = {cantidad * coef}")

print(f"  Total reactantes: {conteo_reactantes_trace}")
print()

for coef, formula in productos_propuestos:
    print(f"  Producto: {coef} × {formula}")
    if formula in moleculas_conocidas:
        for elemento, cantidad in moleculas_conocidas[formula].items():
            conteo_productos_trace[elemento] = conteo_productos_trace.get(elemento, 0) + cantidad * coef
            print(f"    {elemento}: {cantidad} × {coef} = {cantidad * coef}")

print(f"  Total productos: {conteo_productos_trace}")
print(f"  ¿Balanceado? {conteo_reactantes_trace == conteo_productos_trace}")

print("\n")

# Exercise 4: Molar Mass Calculation
def calcular_masa_molar(
    composicion: List[Tuple[str, int]], 
    masas_atomicas: Dict[str, float]
) -> float:
    """
    Calcula la masa molar de un compuesto. Si un elemento es desconocido, retorna 0.0.
    """
    masa_total: float = 0.0
    for elemento, cantidad in composicion:
        if elemento not in masas_atomicas:
            return 0.0 # Elemento no encontrado, cálculo inválido.
            
        masa_elemento = masas_atomicas[elemento]
        masa_total += cantidad * masa_elemento
        
    return masa_total

# --- Datos disponibles ---
masas_atomicas_std = {
    'C': 12.01,
    'H': 1.008,
    'O': 16.00
}

# Fórmula de un compuesto hipotético: C₂H₅X
formula_desconocida = [('C', 2), ('H', 5), ('X', 1)]

# --- Llamada a la función ---
resultado_masa_molar = calcular_masa_molar(formula_desconocida, masas_atomicas_std)

print("=" * 60)
print("PREGUNTA 16: Calcular masa molar con elemento desconocido")
print("=" * 60)
print(f"Fórmula: C₂H₅X")
print(f"Resultado: {resultado_masa_molar}")
print(f"Esperado:  0.0")
print(f"¿Correcto? {resultado_masa_molar == 0.0}")
print()

# Let's trace the calculation
print("Trazado detallado:")
masa_parcial = 0.0
for elemento, cantidad in formula_desconocida:
    if elemento in masas_atomicas_std:
        contribucion = cantidad * masas_atomicas_std[elemento]
        masa_parcial += contribucion
        print(f"  {elemento}: {cantidad} × {masas_atomicas_std[elemento]} = {contribucion} g/mol")
        print(f"       masa_total acumulada: {masa_parcial} g/mol")
    else:
        print(f"  {elemento}: No está en masas_atomicas_std")
        print(f"       La función retorna 0.0 inmediatamente")
        break
