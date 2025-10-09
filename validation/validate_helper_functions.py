#!/usr/bin/env python3
"""
Validation script for helper functions quiz exercises.
Tests Questions 17 and 18 to verify correct answers.
"""

from typing import List, Dict, Any, Tuple


def test_question_17():
    """Test Question 17: User validation with helper function."""
    print("Testing Question 17: User Batch Processing...")
    
    # Copy the functions from the quiz
    def es_usuario_valido(usuario: Dict[str, Any]) -> bool:
        """Función auxiliar que valida un único diccionario de usuario."""
        email = usuario.get('email')
        edad = usuario.get('edad')
        
        # Regla 1: El email debe existir y contener un '@'
        if not email or '@' not in email:
            return False
        
        # Regla 2: La edad debe existir, ser un entero y ser >= 18
        if not isinstance(edad, int) or edad < 18:
            return False
            
        return True

    def procesar_lote_usuarios(usuarios: List[Dict[str, Any]]) -> Dict[str, List[str]]:
        """Función principal que clasifica a los usuarios usando la función auxiliar."""
        reporte = {'validos': [], 'invalidos': []}
        
        for u in usuarios:
            if es_usuario_valido(u):
                reporte['validos'].append(u['id'])
            else:
                reporte['invalidos'].append(u['id'])
                
        return reporte

    # Test data
    nuevos_registros = [
        {'id': 'u101', 'email': 'user.one@example.com', 'edad': 25},
        {'id': 'u102', 'email': 'usertwo.com', 'edad': 30},           # Email inválido
        {'id': 'u103', 'email': 'user.three@example.com', 'edad': 17}, # Edad inválida
        {'id': 'u104', 'email': 'user.four@example.com'},            # Falta la edad
        {'id': 'u105', 'email': 'user.five@example.com', 'edad': 18}
    ]
    
    # Execute
    resultado = procesar_lote_usuarios(nuevos_registros)
    
    # Expected answer
    esperado = {'validos': ['u101', 'u105'], 'invalidos': ['u102', 'u103', 'u104']}
    
    # Verify
    assert resultado == esperado, f"Expected {esperado}, got {resultado}"
    
    # Detailed validation
    print(f"  Result: {resultado}")
    print(f"  ✅ u101: Valid (email has @, age 25 >= 18)")
    print(f"  ✅ u102: Invalid (email missing @)")
    print(f"  ✅ u103: Invalid (age 17 < 18)")
    print(f"  ✅ u104: Invalid (age is None, not an int)")
    print(f"  ✅ u105: Valid (email has @, age 18 >= 18)")
    print("  ✅ Question 17 PASSED - Answer B is correct")
    print()


def test_question_18():
    """Test Question 18: Geometric transformations with helper functions."""
    print("Testing Question 18: Geometric Transformations...")
    
    # Copy the functions from the quiz
    def escalar_puntos(puntos: List[Tuple[float, float]], factor: float) -> List[Tuple[float, float]]:
        """Multiplica las coordenadas de cada punto por un factor."""
        return [(x * factor, y * factor) for x, y in puntos]

    def trasladar_puntos(puntos: List[Tuple[float, float]], vector: Tuple[float, float]) -> List[Tuple[float, float]]:
        """Suma un vector de traslación a cada punto."""
        vx, vy = vector
        return [(x + vx, y + vy) for x, y in puntos]

    def aplicar_transformaciones_figura(
        puntos_iniciales: List[Tuple[float, float]], 
        factor_escala: float, 
        vector_traslacion: Tuple[float, float]
    ) -> List[Tuple[float, float]]:
        """Aplica una secuencia de transformaciones: primero escala, luego traslada."""
        puntos_escalados = escalar_puntos(puntos_iniciales, factor_escala)
        puntos_finales = trasladar_puntos(puntos_escalados, vector_traslacion)
        return puntos_finales

    # Test data
    triangulo_original = [(0, 0), (2, 0), (1, 2)]
    factor = 2.0
    vector = (5, -3)
    
    # Execute
    resultado = aplicar_transformaciones_figura(triangulo_original, factor, vector)
    
    # Expected answer
    esperado = [(5.0, -3.0), (9.0, -3.0), (7.0, 1.0)]
    
    # Verify (with float comparison)
    for i, (punto_resultado, punto_esperado) in enumerate(zip(resultado, esperado)):
        assert abs(punto_resultado[0] - punto_esperado[0]) < 0.001, \
            f"Point {i} x-coordinate mismatch: {punto_resultado[0]} != {punto_esperado[0]}"
        assert abs(punto_resultado[1] - punto_esperado[1]) < 0.001, \
            f"Point {i} y-coordinate mismatch: {punto_resultado[1]} != {punto_esperado[1]}"
    
    # Detailed validation
    print(f"  Original triangle: {triangulo_original}")
    print(f"  Factor: {factor}, Vector: {vector}")
    print()
    print("  Step 1 - Scaling (multiply by 2.0):")
    print(f"    (0, 0) → (0*2.0, 0*2.0) → (0, 0)")
    print(f"    (2, 0) → (2*2.0, 0*2.0) → (4, 0)")
    print(f"    (1, 2) → (1*2.0, 2*2.0) → (2, 4)")
    print(f"    Scaled: [(0, 0), (4, 0), (2, 4)]")
    print()
    print("  Step 2 - Translation (add (5, -3)):")
    print(f"    (0, 0) → (0+5, 0-3) → (5, -3)")
    print(f"    (4, 0) → (4+5, 0-3) → (9, -3)")
    print(f"    (2, 4) → (2+5, 4-3) → (7, 1)")
    print()
    print(f"  Final result: {resultado}")
    print("  ✅ Question 18 PASSED - Answer A is correct")
    print()


def test_wrong_order():
    """Demonstrate what happens if transformations are in wrong order."""
    print("Testing wrong order (translate first, then scale):")
    
    def escalar_puntos(puntos: List[Tuple[float, float]], factor: float) -> List[Tuple[float, float]]:
        return [(x * factor, y * factor) for x, y in puntos]

    def trasladar_puntos(puntos: List[Tuple[float, float]], vector: Tuple[float, float]) -> List[Tuple[float, float]]:
        vx, vy = vector
        return [(x + vx, y + vy) for x, y in puntos]

    triangulo_original = [(0, 0), (2, 0), (1, 2)]
    factor = 2.0
    vector = (5, -3)
    
    # Wrong order: translate first, then scale
    puntos_trasladados = trasladar_puntos(triangulo_original, vector)
    puntos_finales_incorrecto = escalar_puntos(puntos_trasladados, factor)
    
    print(f"  Wrong order result: {puntos_finales_incorrecto}")
    print(f"  This matches option C: [(10, -6), (14, -6), (12, -2)]")
    print(f"  ⚠️  This demonstrates why order matters!")
    print()


if __name__ == "__main__":
    print("═" * 60)
    print("VALIDATION: Helper Functions Quiz (Questions 17-18)")
    print("═" * 60)
    print()
    
    try:
        test_question_17()
        test_question_18()
        test_wrong_order()
        
        print("═" * 60)
        print("✅ ALL VALIDATIONS PASSED")
        print("═" * 60)
        print()
        print("Summary:")
        print("  • Question 17: Answer B ✅")
        print("  • Question 18: Answer A ✅")
        print("  • Both questions are ready for quiz!")
        print()
        
    except AssertionError as e:
        print(f"\n❌ VALIDATION FAILED: {e}\n")
        exit(1)
    except Exception as e:
        print(f"\n❌ ERROR: {e}\n")
        exit(1)
