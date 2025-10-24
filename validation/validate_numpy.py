#!/usr/bin/env python3
"""
Validation script for NumPy Fundamentals quiz.
Tests a sample of questions to verify correct answers.
"""

import numpy as np
from typing import Any, List


def test_question_1():
    """Test Question 1: Basic array creation."""
    print("Testing Question 1: Basic array creation...")
    
    arr = np.array([1, 2, 3, 4, 5])
    
    assert isinstance(arr, np.ndarray)
    assert arr.tolist() == [1, 2, 3, 4, 5]
    
    print("  ✓ Array created correctly with np.array()")


def test_question_2():
    """Test Question 2: zeros function."""
    print("Testing Question 2: zeros function...")
    
    arr = np.zeros(4)
    
    assert arr.tolist() == [0.0, 0.0, 0.0, 0.0]
    assert arr.dtype == np.float64
    
    print(f"  ✓ np.zeros(4) = {arr}")


def test_question_3():
    """Test Question 3: arange function."""
    print("Testing Question 3: arange function...")
    
    arr = np.arange(2, 10, 2)
    
    assert arr.tolist() == [2, 4, 6, 8]
    
    print(f"  ✓ np.arange(2, 10, 2) = {arr}")


def test_question_4():
    """Test Question 4: linspace vs arange."""
    print("Testing Question 4: linspace vs arange...")
    
    arr_a = np.arange(0, 10, 2)
    arr_b = np.linspace(0, 10, 5)
    
    assert arr_a.tolist() == [0, 2, 4, 6, 8]
    assert len(arr_b) == 5
    assert arr_b[0] == 0 and arr_b[-1] == 10
    
    print(f"  ✓ arange: {arr_a}")
    print(f"  ✓ linspace: {arr_b}")


def test_question_5():
    """Test Question 5: Multidimensional arrays."""
    print("Testing Question 5: Multidimensional arrays...")
    
    matriz = np.array([[1, 2, 3], [4, 5, 6]])
    
    assert matriz.shape == (2, 3)
    assert matriz.ndim == 2
    
    print(f"  ✓ 2D array shape: {matriz.shape}")


def test_question_6():
    """Test Question 6: Shape attribute."""
    print("Testing Question 6: Shape attribute...")
    
    arr = np.array([[1, 2, 3, 4],
                    [5, 6, 7, 8],
                    [9, 10, 11, 12]])
    
    resultado = arr.shape
    
    assert resultado == (3, 4)
    
    print(f"  ✓ arr.shape = {resultado}")


def test_question_7():
    """Test Question 7: dtype attribute."""
    print("Testing Question 7: dtype attribute...")
    
    arr = np.array([1, 2, 3, 4, 5])
    
    # dtype can be int32 or int64 depending on system
    assert arr.dtype in [np.int32, np.int64]
    
    print(f"  ✓ arr.dtype = {arr.dtype}")


def test_question_8():
    """Test Question 8: Size attributes."""
    print("Testing Question 8: Size attributes...")
    
    arr = np.array([[1, 2, 3],
                    [4, 5, 6]])
    
    a = arr.size
    b = arr.ndim
    c = len(arr)
    
    assert a == 6
    assert b == 2
    assert c == 2
    
    print(f"  ✓ size={a}, ndim={b}, len={c}")


def test_question_9():
    """Test Question 9: Basic indexing."""
    print("Testing Question 9: Basic indexing...")
    
    arr = np.array([[10, 20, 30],
                    [40, 50, 60],
                    [70, 80, 90]])
    
    valor = arr[1, 2]
    
    assert valor == 60
    
    print(f"  ✓ arr[1, 2] = {valor}")


def test_question_10():
    """Test Question 10: Array slicing."""
    print("Testing Question 10: Array slicing...")
    
    arr = np.array([10, 20, 30, 40, 50, 60, 70, 80, 90])
    resultado = arr[2:7:2]
    
    assert resultado.tolist() == [30, 50, 70]
    
    print(f"  ✓ arr[2:7:2] = {resultado}")


def test_question_11():
    """Test Question 11: Multidimensional slicing."""
    print("Testing Question 11: Multidimensional slicing...")
    
    arr = np.array([[1, 2, 3, 4],
                    [5, 6, 7, 8],
                    [9, 10, 11, 12]])
    
    resultado = arr[:2, 1:]
    
    assert resultado.tolist() == [[2, 3, 4], [6, 7, 8]]
    
    print(f"  ✓ arr[:2, 1:] = \n{resultado}")


def test_question_12():
    """Test Question 12: Arithmetic operations."""
    print("Testing Question 12: Arithmetic operations...")
    
    arr = np.array([10, 20, 30, 40])
    resultado = arr * 2 + 5
    
    assert resultado.tolist() == [25, 45, 65, 85]
    
    print(f"  ✓ arr * 2 + 5 = {resultado}")


def test_question_13():
    """Test Question 13: Array multiplication."""
    print("Testing Question 13: Array multiplication...")
    
    a = np.array([1, 2, 3, 4])
    b = np.array([2, 2, 2, 2])
    resultado = a * b
    
    assert resultado.tolist() == [2, 4, 6, 8]
    
    print(f"  ✓ a * b = {resultado}")


def test_question_14():
    """Test Question 14: Mathematical functions."""
    print("Testing Question 14: Mathematical functions...")
    
    arr = np.array([1, 4, 9, 16, 25])
    resultado = np.sqrt(arr)
    
    expected = np.array([1., 2., 3., 4., 5.])
    assert np.allclose(resultado, expected)
    
    print(f"  ✓ np.sqrt(arr) = {resultado}")


def test_question_15():
    """Test Question 15: Reshape."""
    print("Testing Question 15: Reshape...")
    
    arr = np.arange(12)
    resultado = arr.reshape(3, 4)
    
    assert resultado.shape == (3, 4)
    assert resultado.size == 12
    
    print(f"  ✓ arr.reshape(3, 4) shape = {resultado.shape}")


def test_question_16():
    """Test Question 16: Transpose."""
    print("Testing Question 16: Transpose...")
    
    matriz = np.array([[1, 2, 3],
                       [4, 5, 6]])
    
    resultado = matriz.T
    
    assert resultado.shape == (3, 2)
    assert resultado.tolist() == [[1, 4], [2, 5], [3, 6]]
    
    print(f"  ✓ matriz.T = \n{resultado}")


def test_question_17():
    """Test Question 17: Concatenation."""
    print("Testing Question 17: Concatenation...")
    
    a = np.array([[1, 2], [3, 4]])
    b = np.array([[5, 6], [7, 8]])
    
    resultado = np.concatenate((a, b), axis=0)
    
    assert resultado.tolist() == [[1, 2], [3, 4], [5, 6], [7, 8]]
    
    print(f"  ✓ np.concatenate (axis=0) = \n{resultado}")


def test_question_18():
    """Test Question 18: sum with axis."""
    print("Testing Question 18: sum with axis...")
    
    arr = np.array([[1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]])
    
    resultado = arr.sum(axis=0)
    
    assert resultado.tolist() == [12, 15, 18]
    
    print(f"  ✓ arr.sum(axis=0) = {resultado}")


def test_question_19():
    """Test Question 19: mean function."""
    print("Testing Question 19: mean function...")
    
    arr = np.array([10, 20, 30, 40, 50])
    resultado = np.mean(arr)
    
    assert resultado == 30.0
    
    print(f"  ✓ np.mean(arr) = {resultado}")


def test_question_20():
    """Test Question 20: std function."""
    print("Testing Question 20: std function...")
    
    notas = np.array([85, 90, 78, 92, 88])
    desviacion = np.std(notas)
    
    # Just check it returns a reasonable value
    assert desviacion > 0
    assert desviacion < 20
    
    print(f"  ✓ np.std(notas) = {desviacion:.2f}")


def test_question_21():
    """Test Question 21: Broadcasting basics."""
    print("Testing Question 21: Broadcasting basics...")
    
    matriz = np.array([[1, 2, 3],
                       [4, 5, 6]])
    
    resultado = matriz + 10
    
    assert resultado.tolist() == [[11, 12, 13], [14, 15, 16]]
    
    print(f"  ✓ Broadcasting: matriz + 10 = \n{resultado}")


def test_question_22():
    """Test Question 22: Broadcasting with vectors."""
    print("Testing Question 22: Broadcasting with vectors...")
    
    matriz = np.array([[1, 2, 3],
                       [4, 5, 6]])
    
    vector = np.array([10, 20, 30])
    
    resultado = matriz + vector
    
    assert resultado.tolist() == [[11, 22, 33], [14, 25, 36]]
    
    print(f"  ✓ Broadcasting result = \n{resultado}")


def test_question_23():
    """Test Question 23: Advanced broadcasting."""
    print("Testing Question 23: Advanced broadcasting...")
    
    a = np.array([[1], [2], [3]])  # shape (3, 1)
    b = np.array([10, 20, 30])      # shape (3,)
    
    resultado = a + b
    
    assert resultado.shape == (3, 3)
    assert resultado.tolist() == [[11, 21, 31], [12, 22, 32], [13, 23, 33]]
    
    print(f"  ✓ Advanced broadcasting result = \n{resultado}")


def test_question_24():
    """Test Question 24: Vectorization."""
    print("Testing Question 24: Vectorization...")
    
    # Test that vectorized operation works
    arr = np.arange(100)
    resultado = arr * 2
    
    assert len(resultado) == 100
    assert resultado[0] == 0
    assert resultado[50] == 100
    
    print(f"  ✓ Vectorization works efficiently")


def test_question_25():
    """Test Question 25: Copy vs View."""
    print("Testing Question 25: Copy vs View...")
    
    arr = np.array([1, 2, 3, 4, 5])
    
    # Test copy
    a = arr.copy()
    original_arr = arr.copy()
    a[0] = 99
    
    assert arr.tolist() == original_arr.tolist()  # arr unchanged
    assert a[0] == 99
    
    # Reset arr
    arr = np.array([1, 2, 3, 4, 5])
    
    # Test view
    b = arr.view()
    b[0] = 77
    
    assert arr[0] == 77  # arr changed
    assert b[0] == 77
    
    print(f"  ✓ copy() creates independent copy")
    print(f"  ✓ view() shares data")


def main():
    """Run all tests."""
    print("=" * 60)
    print("VALIDATING NUMPY FUNDAMENTALS QUIZ")
    print("=" * 60)
    
    tests = [
        test_question_1,
        test_question_2,
        test_question_3,
        test_question_4,
        test_question_5,
        test_question_6,
        test_question_7,
        test_question_8,
        test_question_9,
        test_question_10,
        test_question_11,
        test_question_12,
        test_question_13,
        test_question_14,
        test_question_15,
        test_question_16,
        test_question_17,
        test_question_18,
        test_question_19,
        test_question_20,
        test_question_21,
        test_question_22,
        test_question_23,
        test_question_24,
        test_question_25,
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
        except Exception as e:
            failed += 1
            print(f"  ✗ ERROR: {e}")
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
