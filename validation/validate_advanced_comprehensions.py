#!/usr/bin/env python3
"""
Validation script for advanced list comprehension quiz exercises.
Tests Questions 28, 29, and 30 to verify correct answers.
"""

from typing import List, Dict, Any, Tuple


def test_question_28():
    """Test Question 28: List comprehension with ternary operator."""
    print("Testing Question 28: Conditional Formatting with Ternary Operator...")
    
    # Copy the functions from the quiz
    def formatear_ingreso(monto: float) -> str:
        """Formats a positive transaction amount."""
        return f"Ingreso: +{monto:.2f} USD"

    def formatear_gasto(monto: float) -> str:
        """Formats a negative transaction amount."""
        return f"Gasto: {monto:.2f} USD"

    def categorizar_transacciones(transacciones: List[float]) -> List[str]:
        """
        Uses a list comprehension with a ternary operator to format each transaction.
        Structure: [func_si_true(t) if condition else func_si_false(t) for t in list]
        """
        return [formatear_ingreso(t) if t >= 0 else formatear_gasto(t) for t in transacciones]

    # Test data
    movimientos = [150.75, -45.20, -19.99, 300.0]
    
    # Execute
    resultado = categorizar_transacciones(movimientos)
    
    # Expected answer
    esperado = ['Ingreso: +150.75 USD', 'Gasto: -45.20 USD', 'Gasto: -19.99 USD', 'Ingreso: +300.00 USD']
    
    # Verify
    assert resultado == esperado, f"Expected {esperado}, got {resultado}"
    
    # Detailed validation
    print(f"  Input transactions: {movimientos}")
    print()
    print("  Step-by-step processing:")
    for t in movimientos:
        if t >= 0:
            formatted = formatear_ingreso(t)
            print(f"    {t}: >= 0 → formatear_ingreso() → '{formatted}'")
        else:
            formatted = formatear_gasto(t)
            print(f"    {t}: < 0 → formatear_gasto() → '{formatted}'")
    
    print()
    print(f"  Final result: {resultado}")
    print("  ✅ Question 28 PASSED - Answer C is correct")
    print()


def test_question_29():
    """Test Question 29: Complex tuple creation with multiple helper functions."""
    print("Testing Question 29: Student Summary with Helper Functions...")
    
    # Copy the functions from the quiz
    def calcular_promedio(calificaciones: List[int]) -> float:
        """Calculates the average of a list of grades."""
        return sum(calificaciones) / len(calificaciones) if calificaciones else 0.0

    def determinar_estado(promedio: float, asistencia: float) -> str:
        """Determines student status based on average and attendance."""
        if promedio >= 70 and asistencia >= 0.8:
            return "Aprobado"
        return "Reprobado"

    def generar_resumen_final(estudiantes: List[Dict]) -> List[Tuple[str, float, str]]:
        """
        Uses a list comprehension to create a summary tuple for each student,
        calling multiple helper functions in the process.
        """
        return [
            (
                e['nombre'],
                round(calcular_promedio(e['calificaciones']), 2),
                determinar_estado(calcular_promedio(e['calificaciones']), e['asistencia'])
            )
            for e in estudiantes
        ]

    # Test data
    registros_academicos = [
        {'nombre': 'Ana', 'calificaciones': [80, 90, 95], 'asistencia': 0.9},
        {'nombre': 'Luis', 'calificaciones': [60, 65, 70], 'asistencia': 0.85},
        {'nombre': 'Marta', 'calificaciones': [90, 100], 'asistencia': 0.75}
    ]
    
    # Execute
    resultado = generar_resumen_final(registros_academicos)
    
    # Expected answer
    esperado = [('Ana', 88.33, 'Aprobado'), ('Luis', 65.0, 'Reprobado'), ('Marta', 95.0, 'Reprobado')]
    
    # Verify
    assert resultado == esperado, f"Expected {esperado}, got {resultado}"
    
    # Detailed validation
    print(f"  Input: {len(registros_academicos)} student records")
    print()
    print("  Step-by-step processing:")
    
    for e in registros_academicos:
        promedio = calcular_promedio(e['calificaciones'])
        estado = determinar_estado(promedio, e['asistencia'])
        print(f"    {e['nombre']}:")
        print(f"      Grades: {e['calificaciones']} → Average: {promedio:.2f}")
        print(f"      Attendance: {e['asistencia']} (threshold: 0.8)")
        print(f"      Status check: avg={promedio:.2f} >= 70? {promedio >= 70}, attendance >= 0.8? {e['asistencia'] >= 0.8}")
        print(f"      → Status: {estado}")
        print(f"      → Tuple: ('{e['nombre']}', {round(promedio, 2)}, '{estado}')")
    
    print()
    print(f"  Final result: {resultado}")
    print("  ✅ Question 29 PASSED - Answer C is correct")
    print()


def test_question_30():
    """Test Question 30: Dictionary comprehension with filtering and transformation."""
    print("Testing Question 30: Dictionary Comprehension with ISBN Index...")
    
    # Copy the functions from the quiz
    def formatear_nombre_autor(autor: str) -> str:
        """Converts 'Last, First' format to 'First Last'."""
        if ', ' in autor:
            apellido, nombre = autor.split(', ', 1)
            return f"{nombre} {apellido}"
        return autor

    def crear_indice_autores(libros: List[Dict]) -> Dict[str, str]:
        """
        Uses a dictionary comprehension to create an ISBN -> Author index.
        Structure: {key(b): value(b) for b in libros if condition(b)}
        """
        return {
            libro['isbn']: formatear_nombre_autor(libro['autor']) 
            for libro in libros 
            if libro.get('isbn')
        }

    # Test data
    biblioteca = [
        {'titulo': 'Cien años de soledad', 'autor': 'García Márquez, Gabriel', 'isbn': '978-0307350434'},
        {'titulo': 'El túnel', 'autor': 'Sábato, Ernesto', 'isbn': '978-8432217639'},
        {'titulo': 'Poesías', 'autor': 'Anónimo'} # No tiene ISBN
    ]
    
    # Execute
    resultado = crear_indice_autores(biblioteca)
    
    # Expected answer
    esperado = {'978-0307350434': 'Gabriel García Márquez', '978-8432217639': 'Ernesto Sábato'}
    
    # Verify
    assert resultado == esperado, f"Expected {esperado}, got {resultado}"
    
    # Detailed validation
    print(f"  Input: {len(biblioteca)} books")
    print()
    print("  Step-by-step processing:")
    
    for libro in biblioteca:
        isbn = libro.get('isbn')
        if isbn:
            formatted_author = formatear_nombre_autor(libro['autor'])
            print(f"    '{libro['titulo']}':")
            print(f"      ISBN: {isbn} ✅")
            print(f"      Author: '{libro['autor']}' → '{formatted_author}'")
            print(f"      → Added to dict: '{isbn}': '{formatted_author}'")
        else:
            print(f"    '{libro['titulo']}':")
            print(f"      ISBN: None ❌ (filtered out)")
    
    print()
    print(f"  Final dictionary: {resultado}")
    print("  ✅ Question 30 PASSED - Answer C is correct")
    print()


if __name__ == "__main__":
    print("═" * 60)
    print("VALIDATION: Advanced List Comprehensions (Questions 28-30)")
    print("═" * 60)
    print()
    
    try:
        test_question_28()
        test_question_29()
        test_question_30()
        
        print("═" * 60)
        print("✅ ALL VALIDATIONS PASSED")
        print("═" * 60)
        print()
        print("Summary:")
        print("  • Question 28: Answer C (formatted transactions list) ✅")
        print("  • Question 29: Answer C (student summaries with status) ✅")
        print("  • Question 30: Answer C (ISBN -> Author dict) ✅")
        print("  • All questions are ready for quiz!")
        print()
        
    except AssertionError as e:
        print(f"\n❌ VALIDATION FAILED: {e}\n")
        exit(1)
    except Exception as e:
        print(f"\n❌ ERROR: {e}\n")
        exit(1)
