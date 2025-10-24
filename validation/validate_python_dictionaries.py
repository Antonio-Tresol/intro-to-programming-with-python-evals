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


def test_question_23():
    """Test Question 23: Iterate with items()."""
    print("Testing Question 23: Iterate with items()...")
    
    from typing import Dict
    
    precios: Dict[str, float] = {
        "manzana": 1.5,
        "banana": 0.8,
        "naranja": 1.2
    }
    
    result = []
    for producto, precio in precios.items():
        result.append(f"{producto}: ${precio}")
    
    # Check that all expected items are present
    assert len(result) == 3
    assert any("manzana: $1.5" in r for r in result)
    
    print(f"  ✓ items() iteration works correctly")


def test_question_24():
    """Test Question 24: Iterate with keys()."""
    print("Testing Question 24: Iterate with keys()...")
    
    from typing import Dict
    
    usuarios: Dict[str, int] = {"ana": 25, "bob": 30, "carlos": 28}
    
    # Both methods should produce same result
    result_a = list(usuarios)
    result_b = list(usuarios.keys())
    
    assert set(result_a) == set(result_b)
    
    print(f"  ✓ Both iteration methods produce same keys")


def test_question_25():
    """Test Question 25: Iterate with values()."""
    print("Testing Question 25: Iterate with values()...")
    
    from typing import Dict
    
    notas: Dict[str, int] = {
        "matematicas": 85,
        "fisica": 90,
        "quimica": 78
    }
    
    total: int = 0
    for nota in notas.values():
        total += nota
    
    promedio = total / len(notas)
    
    assert total == 253
    assert abs(promedio - 84.333) < 0.01
    
    print(f"  ✓ total = {total}, promedio = {promedio:.2f}")


def test_question_26():
    """Test Question 26: Nested dictionaries access."""
    print("Testing Question 26: Nested dictionaries access...")
    
    from typing import Dict, Any
    
    empresa: Dict[str, Any] = {
        "nombre": "TechCorp",
        "empleados": {
            "ingenieria": {
                "senior": ["Ana", "Bob"],
                "junior": ["Carlos"]
            },
            "ventas": {
                "senior": ["Diana"],
                "junior": ["Eva", "Frank"]
            }
        }
    }
    
    resultado = empresa["empleados"]["ingenieria"]["senior"][1]
    
    assert resultado == "Bob"
    
    print(f"  ✓ Nested access: {resultado}")


def test_question_27():
    """Test Question 27: List of dictionaries."""
    print("Testing Question 27: List of dictionaries...")
    
    from typing import List, Dict, Any
    
    estudiantes: List[Dict[str, Any]] = [
        {"nombre": "Ana", "edad": 20, "nota": 85},
        {"nombre": "Bob", "edad": 22, "nota": 92},
        {"nombre": "Carlos", "edad": 21, "nota": 78}
    ]
    
    result = []
    for estudiante in estudiantes:
        if estudiante["nota"] >= 80:
            result.append(estudiante["nombre"])
    
    expected = ["Ana", "Bob"]
    assert result == expected
    
    print(f"  ✓ Filtered students: {result}")


def test_question_28():
    """Test Question 28: Iterate nested dictionaries."""
    print("Testing Question 28: Iterate nested dictionaries...")
    
    from typing import Dict
    
    inventario: Dict[str, Dict[str, int]] = {
        "frutas": {"manzanas": 10, "bananas": 15},
        "verduras": {"zanahorias": 8, "lechugas": 5}
    }
    
    # Count total items
    total = 0
    for categoria, productos in inventario.items():
        for producto, cantidad in productos.items():
            total += cantidad
    
    expected_total = 10 + 15 + 8 + 5
    assert total == expected_total
    
    print(f"  ✓ Total inventory: {total}")


# Update main to include new tests
if __name__ == "__main__":
    import sys
    
    original_tests = [
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
        test_question_23,
        test_question_24,
        test_question_25,
        test_question_26,
        test_question_27,
        test_question_28,
    ]
    
    print("=" * 60)
    print("VALIDATING PYTHON DICTIONARIES QUIZ (Updated)")
    print("=" * 60)
    
    passed = 0
    failed = 0
    
    for test in original_tests:
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
        sys.exit(0)
    else:
        print("❌ Some tests failed")
        sys.exit(1)
