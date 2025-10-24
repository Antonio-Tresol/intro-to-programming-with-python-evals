#!/usr/bin/env python3
"""
Validation script for Python Lists quiz.
Tests a sample of questions to verify correct answers.
"""

from typing import List


def test_question_1():
    """Test Question 1: Creating empty list."""
    print("Testing Question 1: Creating empty list...")
    
    # Correct answer
    mi_lista: List = []
    
    assert mi_lista == []
    assert isinstance(mi_lista, list)
    assert len(mi_lista) == 0
    
    print("  ✓ Empty list created correctly")


def test_question_2():
    """Test Question 2: Indexing."""
    print("Testing Question 2: Indexing...")
    
    numeros: List[int] = [10, 20, 30, 40, 50]
    resultado = numeros[2]
    
    assert resultado == 30
    
    print(f"  ✓ numeros[2] = {resultado}")


def test_question_3():
    """Test Question 3: Negative indices."""
    print("Testing Question 3: Negative indices...")
    
    frutas: List[str] = ["manzana", "banana", "naranja", "uva"]
    ultimo = frutas[-1]
    
    assert ultimo == "uva"
    
    print(f"  ✓ frutas[-1] = {ultimo}")


def test_question_6():
    """Test Question 6: append() method."""
    print("Testing Question 6: append() method...")
    
    animales: List[str] = ["perro", "gato"]
    animales.append("pájaro")
    animales.append("pez")
    
    expected = ["perro", "gato", "pájaro", "pez"]
    assert animales == expected
    
    print(f"  ✓ After append: {animales}")


def test_question_7():
    """Test Question 7: extend() vs append()."""
    print("Testing Question 7: extend() vs append()...")
    
    # Código A
    lista_a: List[int] = [1, 2]
    lista_a.append([3, 4])
    
    # Código B
    lista_b: List[int] = [1, 2]
    lista_b.extend([3, 4])
    
    assert lista_a == [1, 2, [3, 4]]
    assert lista_b == [1, 2, 3, 4]
    
    print(f"  ✓ append: {lista_a}")
    print(f"  ✓ extend: {lista_b}")


def test_question_11():
    """Test Question 11: Basic slicing."""
    print("Testing Question 11: Basic slicing...")
    
    letras: List[str] = ["a", "b", "c", "d", "e", "f"]
    resultado = letras[1:4]
    
    expected = ["b", "c", "d"]
    assert resultado == expected
    
    print(f"  ✓ letras[1:4] = {resultado}")


def test_question_12():
    """Test Question 12: Slicing with step."""
    print("Testing Question 12: Slicing with step...")
    
    numeros: List[int] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    resultado = numeros[1:8:2]
    
    expected = [1, 3, 5, 7]
    assert resultado == expected
    
    print(f"  ✓ numeros[1:8:2] = {resultado}")


def test_question_16():
    """Test Question 16: List comprehension."""
    print("Testing Question 16: List comprehension...")
    
    cuadrados: List[int] = [x ** 2 for x in range(1, 6)]
    
    expected = [1, 4, 9, 16, 25]
    assert cuadrados == expected
    
    print(f"  ✓ List comprehension: {cuadrados}")


def test_question_17():
    """Test Question 17: List comprehension with filter."""
    print("Testing Question 17: List comprehension with filter...")
    
    numeros: List[int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    pares: List[int] = [x for x in numeros if x % 2 == 0]
    
    expected = [2, 4, 6, 8, 10]
    assert pares == expected
    
    print(f"  ✓ Filtered list: {pares}")


def test_question_19():
    """Test Question 19: Nested lists access."""
    print("Testing Question 19: Nested lists access...")
    
    matriz: List[List[int]] = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    valor = matriz[1][2]
    
    assert valor == 6
    
    print(f"  ✓ matriz[1][2] = {valor}")


def test_question_20():
    """Test Question 20: Nested list comprehension."""
    print("Testing Question 20: Nested list comprehension...")
    
    matriz: List[List[int]] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    plana: List[int] = [elemento for fila in matriz for elemento in fila]
    
    expected = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    assert plana == expected
    
    print(f"  ✓ Flattened list: {plana}")


def test_question_21():
    """Test Question 21: sort() vs sorted()."""
    print("Testing Question 21: sort() vs sorted()...")
    
    # Enfoque A
    lista_a: List[int] = [3, 1, 4, 1, 5]
    result_a = lista_a.sort()
    
    # Enfoque B
    lista_b: List[int] = [3, 1, 4, 1, 5]
    result_b = sorted(lista_b)
    
    assert result_a is None
    assert lista_a == [1, 1, 3, 4, 5]
    assert result_b == [1, 1, 3, 4, 5]
    assert lista_b == [3, 1, 4, 1, 5]  # Unchanged
    
    print(f"  ✓ sort() modifies in-place, returns None")
    print(f"  ✓ sorted() returns new sorted list")


def test_question_22():
    """Test Question 22: List concatenation."""
    print("Testing Question 22: List concatenation...")
    
    lista1: List[int] = [1, 2, 3]
    lista2: List[int] = [4, 5]
    lista3: List[int] = lista1 + lista2
    lista1.append(6)
    
    assert lista3 == [1, 2, 3, 4, 5]
    assert lista1 == [1, 2, 3, 6]
    
    print(f"  ✓ lista3 = {lista3}")
    print(f"  ✓ lista1 = {lista1}")


def main():
    """Run all tests."""
    print("=" * 60)
    print("VALIDATING PYTHON LISTS QUIZ")
    print("=" * 60)
    
    tests = [
        test_question_1,
        test_question_2,
        test_question_3,
        test_question_6,
        test_question_7,
        test_question_11,
        test_question_12,
        test_question_16,
        test_question_17,
        test_question_19,
        test_question_20,
        test_question_21,
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


def test_question_25():
    """Test Question 25: Traditional iteration with for."""
    print("Testing Question 25: Traditional iteration...")
    
    from typing import List
    
    frutas: List[str] = ["manzana", "banana", "naranja"]
    result = []
    for fruta in frutas:
        result.append(fruta.upper())
    
    expected = ["MANZANA", "BANANA", "NARANJA"]
    assert result == expected
    
    print(f"  ✓ Traditional iteration: {result}")


def test_question_26():
    """Test Question 26: Iteration with enumerate()."""
    print("Testing Question 26: Iteration with enumerate()...")
    
    from typing import List
    
    colores: List[str] = ["rojo", "verde", "azul"]
    result = []
    for indice, color in enumerate(colores):
        result.append(f"{indice}: {color}")
    
    expected = ["0: rojo", "1: verde", "2: azul"]
    assert result == expected
    
    print(f"  ✓ enumerate() result: {result}")


def test_question_27():
    """Test Question 27: Nested list iteration."""
    print("Testing Question 27: Nested list iteration...")
    
    from typing import List
    
    matriz: List[List[int]] = [
        [1, 2],
        [3, 4],
        [5, 6]
    ]
    
    result = []
    for fila in matriz:
        for elemento in fila:
            result.append(elemento)
    
    expected = [1, 2, 3, 4, 5, 6]
    assert result == expected
    
    print(f"  ✓ Flattened result: {result}")


def test_question_28():
    """Test Question 28: sum() function."""
    print("Testing Question 28: sum() function...")
    
    from typing import List
    
    numeros: List[int] = [10, 20, 30, 40, 50]
    resultado = sum(numeros)
    
    assert resultado == 150
    
    print(f"  ✓ sum(numeros) = {resultado}")


def test_question_29():
    """Test Question 29: max() and min() functions."""
    print("Testing Question 29: max() and min() functions...")
    
    from typing import List
    
    temperaturas: List[float] = [18.5, 22.0, 15.3, 25.8, 19.2]
    maxima = max(temperaturas)
    minima = min(temperaturas)
    
    assert maxima == 25.8
    assert minima == 15.3
    
    print(f"  ✓ max = {maxima}, min = {minima}")


# Update main to include new tests
if __name__ == "__main__":
    import sys
    
    # Get the original main function
    original_tests = [
        test_question_1,
        test_question_2,
        test_question_3,
        test_question_6,
        test_question_7,
        test_question_11,
        test_question_12,
        test_question_16,
        test_question_17,
        test_question_19,
        test_question_20,
        test_question_21,
        test_question_22,
        test_question_25,
        test_question_26,
        test_question_27,
        test_question_28,
        test_question_29,
    ]
    
    print("=" * 60)
    print("VALIDATING PYTHON LISTS QUIZ (Updated)")
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
