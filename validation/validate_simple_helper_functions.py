#!/usr/bin/env python3
"""
Validation script for simpler helper functions exercises.
Tests Questions 23 and 24 to verify correct answers.
"""

from typing import List, Callable


def test_question_23():
    """Test Question 23: Simple helper function for score adjustment."""
    print("Testing Question 23: Score Adjustment with Helper Function...")
    
    # Copy the functions from the quiz
    def ajustar_puntuacion(puntuacion: int) -> int:
        """
        Función auxiliar que aplica una regla de negocio:
        duplica la puntuación y suma un bono de 5 puntos.
        """
        return (puntuacion * 2) + 5

    def aplicar_ajuste_a_lista(puntuaciones: List[int]) -> List[int]:
        """
        Función principal que recorre una lista y aplica el ajuste
        llamando a la función auxiliar.
        """
        puntuaciones_ajustadas = []
        for p in puntuaciones:
            nueva_puntuacion = ajustar_puntuacion(p)
            puntuaciones_ajustadas.append(nueva_puntuacion)
        return puntuaciones_ajustadas

    # Test data
    puntuaciones_iniciales = [10, 20, 0]
    
    # Execute
    resultado = aplicar_ajuste_a_lista(puntuaciones_iniciales)
    
    # Expected answer
    esperado = [25, 45, 5]
    
    # Verify
    assert resultado == esperado, f"Expected {esperado}, got {resultado}"
    
    # Detailed validation
    print(f"  Input scores: {puntuaciones_iniciales}")
    print(f"  Adjustment formula: (score × 2) + 5")
    print()
    print("  Step-by-step calculation:")
    for i, score in enumerate(puntuaciones_iniciales):
        adjusted = ajustar_puntuacion(score)
        print(f"    Score {score}: ({score} × 2) + 5 = {score * 2} + 5 = {adjusted}")
    
    print()
    print(f"  Final adjusted scores: {resultado}")
    print("  ✅ Question 23 PASSED - Answer C is correct")
    print()


def test_question_24():
    """Test Question 24: Generic counting with predicate function."""
    print("Testing Question 24: Generic Counting with Predicate...")
    
    # Copy the functions from the quiz
    def es_par(numero: int) -> bool:
        """Predicado que devuelve True si un número es par, y False si no lo es."""
        return numero % 2 == 0

    def contar_si_cumple(numeros: List[int], condicion: Callable[[int], bool]) -> int:
        """
        Cuenta cuántos números de una lista cumplen con la 'condicion' pasada
        como argumento.
        """
        contador = 0
        for n in numeros:
            # Llama a la función 'condicion' (que en este caso es 'es_par')
            if condicion(n):
                contador += 1
        return contador

    # Test data
    lista_de_muestra = [1, 2, 3, 4, 5, 6]
    
    # Execute
    total_pares = contar_si_cumple(lista_de_muestra, es_par)
    
    # Expected answer
    esperado = 3
    
    # Verify
    assert total_pares == esperado, f"Expected {esperado}, got {total_pares}"
    
    # Detailed validation
    print(f"  Input list: {lista_de_muestra}")
    print(f"  Predicate: es_par (checks if number % 2 == 0)")
    print()
    print("  Step-by-step evaluation:")
    print(f"    Initial: contador = 0")
    
    contador_debug = 0
    for n in lista_de_muestra:
        es_par_resultado = es_par(n)
        if es_par_resultado:
            contador_debug += 1
            print(f"    n = {n}: es_par({n}) → {es_par_resultado} → contador = {contador_debug}")
        else:
            print(f"    n = {n}: es_par({n}) → {es_par_resultado} → contador unchanged")
    
    print()
    print(f"  Final count: {total_pares}")
    print(f"  Even numbers found: {[n for n in lista_de_muestra if es_par(n)]}")
    print("  ✅ Question 24 PASSED - Answer D is correct")
    print()
    
    # Test with alternative predicate to verify flexibility
    print("  Verifying flexibility with different predicate:")
    
    def es_impar(numero: int) -> bool:
        """Predicado para números impares."""
        return numero % 2 != 0
    
    total_impares = contar_si_cumple(lista_de_muestra, es_impar)
    print(f"    With es_impar: {total_impares} odd numbers")
    assert total_impares == 3, f"Should find 3 odd numbers, got {total_impares}"
    print("  ✅ Generic counting works with different predicates")
    print()


if __name__ == "__main__":
    print("═" * 60)
    print("VALIDATION: Simple Helper Functions Quiz (Questions 23-24)")
    print("═" * 60)
    print()
    
    try:
        test_question_23()
        test_question_24()
        
        print("═" * 60)
        print("✅ ALL VALIDATIONS PASSED")
        print("═" * 60)
        print()
        print("Summary:")
        print("  • Question 23: Answer C ([25, 45, 5]) ✅")
        print("  • Question 24: Answer D (3) ✅")
        print("  • Both questions are ready for quiz!")
        print()
        
    except AssertionError as e:
        print(f"\n❌ VALIDATION FAILED: {e}\n")
        exit(1)
    except Exception as e:
        print(f"\n❌ ERROR: {e}\n")
        exit(1)
