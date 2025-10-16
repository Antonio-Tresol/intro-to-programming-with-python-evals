#!/usr/bin/env python3
"""
Validation script for Python Dictionaries quiz.
Tests a sample of questions to verify correct answers.
"""

from typing import Dict, Any, List


def test_question_1():
    """Test Question 1: Creating empty dictionary."""
    print("Testing Question 1: Creating empty dictionary...")
    
    # Correct answer
    mi_dict: Dict = {}
    
    assert mi_dict == {}
    assert isinstance(mi_dict, dict)
    assert len(mi_dict) == 0
    
    print("  ✓ Empty dictionary created correctly")


def test_question_2():
    """Test Question 2: Accessing values by key."""
    print("Testing Question 2: Accessing values by key...")
    
    estudiante: Dict[str, Any] = {
        "nombre": "Ana",
        "edad": 20,
        "nota": 95
    }
    resultado = estudiante["edad"]
    
    assert resultado == 20
    
    print(f"  ✓ estudiante['edad'] = {resultado}")


def test_question_4():
    """Test Question 4: Modifying dictionary values."""
    print("Testing Question 4: Modifying dictionary values...")
    
    precios: Dict[str, float] = {
        "manzana": 1.50,
        "banana": 0.80,
        "naranja": 1.20
    }
    precios["banana"] = 0.90
    precios["uva"] = 2.00
    
    expected = {"manzana": 1.50, "banana": 0.90, "naranja": 1.20, "uva": 2.00}
    assert precios == expected
    
    print(f"  ✓ Modified dictionary: {precios}")


def test_question_5():
    """Test Question 5: get() vs direct access."""
    print("Testing Question 5: get() vs direct access...")
    
    persona: Dict[str, str] = {"nombre": "Juan", "edad": "30"}
    
    # Test get() with missing key
    valor_b = persona.get("ciudad")
    assert valor_b is None
    
    # Test get() with default
    valor_c = persona.get("ciudad", "Desconocida")
    assert valor_c == "Desconocida"
    
    print("  ✓ get() returns None for missing key")
    print("  ✓ get() with default works correctly")


def test_question_6():
    """Test Question 6: keys(), values(), items()."""
    print("Testing Question 6: keys(), values(), items()...")
    
    datos: Dict[str, int] = {"a": 1, "b": 2, "c": 3}
    
    claves = list(datos.keys())
    valores = list(datos.values())
    pares = list(datos.items())
    
    assert set(claves) == {"a", "b", "c"}
    assert set(valores) == {1, 2, 3}
    assert set(pares) == {("a", 1), ("b", 2), ("c", 3)}
    
    print(f"  ✓ keys(): {claves}")
    print(f"  ✓ values(): {valores}")
    print(f"  ✓ items(): {pares}")


def test_question_7():
    """Test Question 7: update() method."""
    print("Testing Question 7: update() method...")
    
    config: Dict[str, Any] = {"tema": "oscuro", "idioma": "es"}
    nuevos: Dict[str, Any] = {"idioma": "en", "fuente": 14}
    config.update(nuevos)
    
    expected = {"tema": "oscuro", "idioma": "en", "fuente": 14}
    assert config == expected
    
    print(f"  ✓ After update: {config}")


def test_question_8():
    """Test Question 8: pop() method."""
    print("Testing Question 8: pop() method...")
    
    inventario: Dict[str, int] = {
        "manzanas": 10,
        "bananas": 15,
        "naranjas": 8
    }
    valor = inventario.pop("bananas")
    
    assert valor == 15
    expected_dict = {"manzanas": 10, "naranjas": 8}
    assert inventario == expected_dict
    
    print(f"  ✓ Popped value: {valor}")
    print(f"  ✓ Dictionary after pop: {inventario}")


def test_question_9():
    """Test Question 9: 'in' operator with dictionaries."""
    print("Testing Question 9: 'in' operator with dictionaries...")
    
    producto: Dict[str, Any] = {
        "nombre": "Laptop",
        "precio": 999.99,
        "stock": 5
    }
    
    resultado1 = "precio" in producto
    resultado2 = 999.99 in producto
    resultado3 = "marca" in producto
    
    assert resultado1 is True
    assert resultado2 is False  # Checks keys, not values
    assert resultado3 is False
    
    print("  ✓ 'precio' in producto = True")
    print("  ✓ 999.99 in producto = False (checks keys only)")
    print("  ✓ 'marca' in producto = False")


def test_question_10():
    """Test Question 10: setdefault() method."""
    print("Testing Question 10: setdefault() method...")
    
    contador: Dict[str, int] = {"a": 1, "b": 2}
    
    valor1 = contador.setdefault("a", 0)
    valor2 = contador.setdefault("c", 0)
    
    assert valor1 == 1
    assert valor2 == 0
    expected_dict = {"a": 1, "b": 2, "c": 0}
    assert contador == expected_dict
    
    print(f"  ✓ setdefault on existing key: {valor1}")
    print(f"  ✓ setdefault on new key: {valor2}")
    print(f"  ✓ Dictionary after setdefault: {contador}")


def test_question_13():
    """Test Question 13: copy() vs assignment."""
    print("Testing Question 13: copy() vs assignment...")
    
    original: Dict[str, int] = {"a": 1, "b": 2}
    
    # Assignment (reference)
    copia_a = original
    copia_a["c"] = 3
    
    assert original == {"a": 1, "b": 2, "c": 3}
    
    # Reset
    original = {"a": 1, "b": 2}
    
    # Copy method (new dict)
    copia_b = original.copy()
    copia_b["d"] = 4
    
    assert original == {"a": 1, "b": 2}
    assert copia_b == {"a": 1, "b": 2, "d": 4}
    
    print("  ✓ Assignment creates reference (modifies original)")
    print("  ✓ copy() creates new dictionary (doesn't modify original)")


def test_question_16():
    """Test Question 16: Dictionary comprehension."""
    print("Testing Question 16: Dictionary comprehension...")
    
    numeros = [1, 2, 3, 4]
    cuadrados: Dict[int, int] = {x: x**2 for x in numeros}
    
    expected = {1: 1, 2: 4, 3: 9, 4: 16}
    assert cuadrados == expected
    
    print(f"  ✓ Dictionary comprehension: {cuadrados}")


def test_question_17():
    """Test Question 17: Dictionary comprehension with filter."""
    print("Testing Question 17: Dictionary comprehension with filter...")
    
    datos: Dict[str, int] = {
        "a": 5,
        "b": 12,
        "c": 8,
        "d": 15
    }
    filtrado: Dict[str, int] = {k: v for k, v in datos.items() if v > 10}
    
    expected = {"b": 12, "d": 15}
    assert filtrado == expected
    
    print(f"  ✓ Filtered dictionary: {filtrado}")


def test_question_19():
    """Test Question 19: Nested dictionaries access."""
    print("Testing Question 19: Nested dictionaries access...")
    
    empresa: Dict[str, Any] = {
        "nombre": "TechCorp",
        "empleados": {
            "gerente": "Ana",
            "dev": "Bob"
        },
        "ingresos": 1000000
    }
    valor = empresa["empleados"]["dev"]
    
    assert valor == "Bob"
    
    print(f"  ✓ empresa['empleados']['dev'] = {valor}")


def test_question_22():
    """Test Question 22: fromkeys() method."""
    print("Testing Question 22: fromkeys() method...")
    
    claves: List[str] = ["a", "b", "c"]
    resultado: Dict[str, int] = dict.fromkeys(claves, 0)
    
    expected = {"a": 0, "b": 0, "c": 0}
    assert resultado == expected
    
    print(f"  ✓ fromkeys() result: {resultado}")


def main():
    """Run all tests."""
    print("=" * 60)
    print("VALIDATING PYTHON DICTIONARIES QUIZ")
    print("=" * 60)
    
    tests = [
        test_question_1,
        test_question_2,
        test_question_4,
        test_question_5,
        test_question_6,
        test_question_7,
        test_question_8,
        test_question_9,
        test_question_10,
        test_question_13,
        test_question_16,
        test_question_17,
        test_question_19,
        test_question_22,
    ]
    
    passed = 0
    failed = 0
    
    for test in tests:
        try:
            test()
            passed += 1
            print()
        except AssertionError as e:
            failed += 1
            print(f"  ✗ FAILED: {e}")
            print()
    
    print("=" * 60)
    print(f"RESULTS: {passed} passed, {failed} failed")
    print("=" * 60)
    
    if failed == 0:
        print("✅ All tests passed!")
        return 0
    else:
        print("❌ Some tests failed")
        return 1


if __name__ == "__main__":
    exit(main())
