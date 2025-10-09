#!/usr/bin/env python3
"""
Validation script for list comprehension quiz exercises.
Tests Questions 25, 26, and 27 to verify correct answers.
"""

from typing import List, Dict, Any


def test_question_25():
    """Test Question 25: List comprehension with filter and transform."""
    print("Testing Question 25: Message Analysis with List Comprehension...")
    
    # Copy the functions from the quiz
    def es_mensaje_seguro(mensaje: str) -> bool:
        """Predicado: devuelve False si el mensaje contiene la palabra 'spam'."""
        return "spam" not in mensaje.lower()

    def extraer_palabra_clave(mensaje: str) -> str:
        """Transformación: busca el primer '#' y devuelve la palabra que le sigue."""
        if '#' in mensaje:
            # Divide el mensaje a partir del '#' y toma la parte de la derecha
            parte_derecha = mensaje.split('#', 1)[1]
            # Toma la primera palabra de esa parte
            return parte_derecha.split(' ', 1)[0]
        return "N/A"

    def analizar_mensajes(mensajes: List[str]) -> List[str]:
        """
        Usa una list comprehension para filtrar y transformar mensajes.
        Estructura: [transformacion(m) for m in mensajes if filtro(m)]
        """
        return [extraer_palabra_clave(m) for m in mensajes if es_mensaje_seguro(m)]

    # Test data
    lista_mensajes = [
        "Me encantó el partido de #futbol de anoche",
        "URGENTE: ha ganado un premio (spam)",
        "Qué buen día para #programar en Python",
        "Comida deliciosa #gourmet"
    ]
    
    # Execute
    resultado = analizar_mensajes(lista_mensajes)
    
    # Expected answer
    esperado = ['futbol', 'programar', 'gourmet']
    
    # Verify
    assert resultado == esperado, f"Expected {esperado}, got {resultado}"
    
    # Detailed validation
    print(f"  Input messages: {len(lista_mensajes)} messages")
    print()
    print("  Step-by-step processing:")
    for i, msg in enumerate(lista_mensajes, 1):
        es_seguro = es_mensaje_seguro(msg)
        if es_seguro:
            palabra = extraer_palabra_clave(msg)
            print(f"    Message {i}: SAFE ✅")
            print(f"      → Extracted keyword: '{palabra}'")
        else:
            print(f"    Message {i}: SPAM ❌ (filtered out)")
    
    print()
    print(f"  Final result: {resultado}")
    print("  ✅ Question 25 PASSED - Answer B is correct")
    print()


def test_question_26():
    """Test Question 26: Nested list comprehension with filtering."""
    print("Testing Question 26: Flattening with Nested List Comprehension...")
    
    # Copy the functions from the quiz
    def es_medicion_valida(valor: float) -> bool:
        """Devuelve True si la medición es positiva."""
        return valor > 0

    def obtener_mediciones_validas(experimentos: List[Dict[str, Any]]) -> List[float]:
        """
        Usa una list comprehension anidada para aplanar y filtrar los datos.
        Estructura: [m for exp in experimentos for m in exp['mediciones'] if filtro(m)]
        """
        return [
            m 
            for exp in experimentos 
            for m in exp['mediciones'] 
            if es_medicion_valida(m)
        ]

    # Test data
    datos_experimentos = [
        {'id': 'EXP01', 'mediciones': [10.2, -1.5, 8.8]},
        {'id': 'EXP02', 'mediciones': [-0.5, 20.1]},
        {'id': 'EXP03', 'mediciones': [5.0]}
    ]
    
    # Execute
    resultado = obtener_mediciones_validas(datos_experimentos)
    
    # Expected answer
    esperado = [10.2, 8.8, 20.1, 5.0]
    
    # Verify
    assert resultado == esperado, f"Expected {esperado}, got {resultado}"
    
    # Detailed validation
    print(f"  Input: {len(datos_experimentos)} experiments")
    print()
    print("  Step-by-step processing:")
    for exp in datos_experimentos:
        print(f"    {exp['id']}: mediciones = {exp['mediciones']}")
        for m in exp['mediciones']:
            valida = es_medicion_valida(m)
            if valida:
                print(f"      → {m}: VALID ✅ (> 0)")
            else:
                print(f"      → {m}: INVALID ❌ (<= 0, filtered out)")
    
    print()
    print(f"  Flattened valid measurements: {resultado}")
    print("  ✅ Question 26 PASSED - Answer C is correct")
    print()


def test_question_27():
    """Test Question 27: List comprehension creating dictionaries."""
    print("Testing Question 27: Creating Profile Dictionaries...")
    
    # Copy the functions from the quiz
    def generar_id_usuario(nombre: str) -> str:
        """Crea un ID con las 3 primeras letras del nombre y su longitud."""
        return f"{nombre[:3].lower()}{len(nombre)}"

    def crear_perfiles(nombres: List[str]) -> List[Dict[str, str]]:
        """
        Usa una list comprehension para crear una lista de diccionarios.
        También filtra los nombres que son demasiado cortos.
        """
        return [
            {'nombre': n, 'id_usuario': generar_id_usuario(n)} 
            for n in nombres 
            if len(n) > 2
        ]

    # Test data
    lista_alumnos = ["Ana", "Carlos", "Lu", "Beatriz"]
    
    # Execute
    resultado = crear_perfiles(lista_alumnos)
    
    # Expected answer
    esperado = [
        {'nombre': 'Ana', 'id_usuario': 'ana3'},
        {'nombre': 'Carlos', 'id_usuario': 'car6'},
        {'nombre': 'Beatriz', 'id_usuario': 'bea7'}
    ]
    
    # Verify
    assert resultado == esperado, f"Expected {esperado}, got {resultado}"
    
    # Detailed validation
    print(f"  Input names: {lista_alumnos}")
    print()
    print("  Step-by-step processing:")
    for nombre in lista_alumnos:
        longitud = len(nombre)
        if longitud > 2:
            id_usuario = generar_id_usuario(nombre)
            print(f"    '{nombre}' (length={longitud}): PASS ✅")
            print(f"      → ID: {nombre[:3].lower()} + {longitud} = '{id_usuario}'")
            print(f"      → Profile: {{'nombre': '{nombre}', 'id_usuario': '{id_usuario}'}}")
        else:
            print(f"    '{nombre}' (length={longitud}): FILTERED ❌ (length <= 2)")
    
    print()
    print(f"  Final profiles: {resultado}")
    print("  ✅ Question 27 PASSED - Answer D is correct")
    print()


if __name__ == "__main__":
    print("═" * 60)
    print("VALIDATION: List Comprehensions Quiz (Questions 25-27)")
    print("═" * 60)
    print()
    
    try:
        test_question_25()
        test_question_26()
        test_question_27()
        
        print("═" * 60)
        print("✅ ALL VALIDATIONS PASSED")
        print("═" * 60)
        print()
        print("Summary:")
        print("  • Question 25: Answer B (['futbol', 'programar', 'gourmet']) ✅")
        print("  • Question 26: Answer C ([10.2, 8.8, 20.1, 5.0]) ✅")
        print("  • Question 27: Answer D (list of 3 profile dicts) ✅")
        print("  • All questions are ready for quiz!")
        print()
        
    except AssertionError as e:
        print(f"\n❌ VALIDATION FAILED: {e}\n")
        exit(1)
    except Exception as e:
        print(f"\n❌ ERROR: {e}\n")
        exit(1)
