#!/usr/bin/env python3
"""
Validation script for higher-order functions quiz exercises.
Tests Questions 21 and 22 to verify correct answers.
"""

from typing import List, Callable


def test_question_21():
    """Test Question 21: Strategy pattern with higher-order function."""
    print("Testing Question 21: Strategy Pattern with Higher-Order Function...")
    
    # Copy the functions from the quiz
    def sumar_elementos(a: float, b: float) -> float:
        """Estrategia para sumar dos números."""
        return a + b

    def multiplicar_elementos(a: float, b: float) -> float:
        """Estrategia para multiplicar dos números."""
        return a * b

    def procesar_datos_numericos(
        datos: List[float], 
        operacion: Callable[[float, float], float], 
        valor_inicial: float
    ) -> float:
        """
        Procesa una lista de datos usando una función de operación que se pasa
        como argumento.
        """
        acumulador = valor_inicial
        for numero in datos:
            acumulador = operacion(acumulador, numero)
        return acumulador

    # Test data
    lista_numeros = [1, 2, 3, 4]
    
    # Execute with multiplication strategy
    resultado_final = procesar_datos_numericos(lista_numeros, multiplicar_elementos, 1)
    
    # Expected answer
    esperado = 24
    
    # Verify
    assert resultado_final == esperado, f"Expected {esperado}, got {resultado_final}"
    
    # Detailed validation
    print(f"  Input list: {lista_numeros}")
    print(f"  Strategy: multiplicar_elementos")
    print(f"  Initial value: 1")
    print()
    print("  Step-by-step execution:")
    print(f"    Initial: acumulador = 1")
    print(f"    Iteration 1: numero = 1 → acumulador = multiplicar_elementos(1, 1) = 1")
    print(f"    Iteration 2: numero = 2 → acumulador = multiplicar_elementos(1, 2) = 2")
    print(f"    Iteration 3: numero = 3 → acumulador = multiplicar_elementos(2, 3) = 6")
    print(f"    Iteration 4: numero = 4 → acumulador = multiplicar_elementos(6, 4) = 24")
    print()
    print(f"  Final result: {resultado_final}")
    print("  ✅ Question 21 PASSED - Answer B is correct")
    print()
    
    # Test with alternative strategy (sum) to verify flexibility
    print("  Verifying alternative strategy (sum):")
    resultado_suma = procesar_datos_numericos(lista_numeros, sumar_elementos, 0)
    print(f"    With sumar_elementos and initial value 0: {resultado_suma}")
    assert resultado_suma == 10, f"Sum should be 10, got {resultado_suma}"
    print("  ✅ Strategy pattern works correctly with different operations")
    print()


def test_question_22():
    """Test Question 22: Predicate function pattern."""
    print("Testing Question 22: Predicate Function Pattern...")
    
    # Copy the functions from the quiz
    def es_valor_negativo(valor: float) -> bool:
        """Predicado que devuelve True si el valor es negativo."""
        return valor < 0

    def es_valor_extremo(valor: float) -> bool:
        """Predicado que devuelve True si el valor está fuera del rango (-50, 50)."""
        return valor < -50 or valor > 50

    def generar_reporte_condicional(
        mediciones: List[float], 
        condicion_resaltado: Callable[[float], bool]
    ) -> List[str]:
        """Formatea una lista de mediciones, aplicando un resaltado
        basado en la función predicado que se pasa como argumento.
        """
        reporte_formateado = []
        for medicion in mediciones:
            # Llama a la función predicado pasada como argumento
            if condicion_resaltado(medicion):
                reporte_formateado.append(f"{medicion:.1f} [!]")
            else:
                reporte_formateado.append(f"{medicion:.1f}")
        return reporte_formateado

    # Test data
    datos_sensor = [-60.5, 25.0, 49.9, -5.1]
    
    # Execute with es_valor_extremo predicate
    reporte = generar_reporte_condicional(datos_sensor, es_valor_extremo)
    
    # Expected answer
    esperado = ['-60.5 [!]', '25.0', '49.9', '-5.1']
    
    # Verify
    assert reporte == esperado, f"Expected {esperado}, got {reporte}"
    
    # Detailed validation
    print(f"  Input measurements: {datos_sensor}")
    print(f"  Predicate: es_valor_extremo (value < -50 or value > 50)")
    print()
    print("  Step-by-step evaluation:")
    
    for i, valor in enumerate(datos_sensor, 1):
        resultado_predicado = es_valor_extremo(valor)
        if valor < -50:
            razon = f"{valor} < -50 is True"
        elif valor > 50:
            razon = f"{valor} > 50 is True"
        else:
            razon = f"neither {valor} < -50 nor {valor} > 50 is true"
        
        texto_formateado = reporte[i-1]
        print(f"    Value {valor}: {razon}")
        print(f"      → Predicate returns: {resultado_predicado}")
        print(f"      → Formatted as: '{texto_formateado}'")
    
    print()
    print(f"  Final report: {reporte}")
    print("  ✅ Question 22 PASSED - Answer A is correct")
    print()
    
    # Test with alternative predicate to verify flexibility
    print("  Verifying alternative predicate (es_valor_negativo):")
    reporte_negativo = generar_reporte_condicional(datos_sensor, es_valor_negativo)
    esperado_negativo = ['-60.5 [!]', '25.0', '49.9', '-5.1 [!]']
    print(f"    With es_valor_negativo: {reporte_negativo}")
    assert reporte_negativo == esperado_negativo, \
        f"Expected {esperado_negativo}, got {reporte_negativo}"
    print("  ✅ Predicate pattern works correctly with different conditions")
    print()


if __name__ == "__main__":
    print("═" * 60)
    print("VALIDATION: Higher-Order Functions Quiz (Questions 21-22)")
    print("═" * 60)
    print()
    
    try:
        test_question_21()
        test_question_22()
        
        print("═" * 60)
        print("✅ ALL VALIDATIONS PASSED")
        print("═" * 60)
        print()
        print("Summary:")
        print("  • Question 21: Answer B (24) ✅")
        print("  • Question 22: Answer A (['-60.5 [!]', '25.0', '49.9', '-5.1']) ✅")
        print("  • Both questions are ready for quiz!")
        print()
        
    except AssertionError as e:
        print(f"\n❌ VALIDATION FAILED: {e}\n")
        exit(1)
    except Exception as e:
        print(f"\n❌ ERROR: {e}\n")
        exit(1)
