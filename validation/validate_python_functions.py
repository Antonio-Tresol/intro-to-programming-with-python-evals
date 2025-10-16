#!/usr/bin/env python3
"""
Validation script for Python Functions quiz.
Tests all 22 questions to verify correct answers.
"""

from typing import List, Dict, Any, Callable
import sys


def test_question_1():
    """Test Q1: 'def' keyword for function definition."""
    print("Testing Q1: Function definition keyword...")
    
    # The correct keyword is 'def'
    correct_answer = "def"
    
    # Try to use def to define a function
    try:
        exec("def mi_funcion():\n    print('Hola')")
        print(f"  ✅ Q1 PASSED - 'def' is correct")
    except:
        print(f"  ❌ Q1 FAILED - 'def' should work")
        return False
    
    return True


def test_question_2():
    """Test Q2: Calling a function with parentheses."""
    print("Testing Q2: Function calling syntax...")
    
    def saludar():
        return "¡Hola, mundo!"
    
    # Calling with parentheses executes the function
    result = saludar()
    expected = "¡Hola, mundo!"
    
    if result == expected:
        print(f"  ✅ Q2 PASSED - saludar() returns '{expected}'")
        return True
    else:
        print(f"  ❌ Q2 FAILED - Expected '{expected}', got '{result}'")
        return False


def test_question_3():
    """Test Q3: Simple function output."""
    print("Testing Q3: Basic function execution...")
    
    output = []
    
    def mensaje():
        output.append("Python es genial")
    
    mensaje()
    
    expected = "Python es genial"
    
    if output[0] == expected:
        print(f"  ✅ Q3 PASSED - Output is '{expected}'")
        return True
    else:
        print(f"  ❌ Q3 FAILED - Expected '{expected}', got '{output[0]}'")
        return False


def test_question_4():
    """Test Q4: Multiple function calls."""
    print("Testing Q4: Multiple function calls...")
    
    count = []
    
    def imprimir_hola():
        count.append("Hola")
    
    imprimir_hola()
    imprimir_hola()
    imprimir_hola()
    
    expected_count = 3
    
    if len(count) == expected_count:
        print(f"  ✅ Q4 PASSED - Function called {expected_count} times")
        return True
    else:
        print(f"  ❌ Q4 FAILED - Expected {expected_count} calls, got {len(count)}")
        return False


def test_question_5():
    """Test Q5: Function with parameter."""
    print("Testing Q5: Function parameters...")
    
    def saludar(nombre):
        return "Hola, " + nombre
    
    result = saludar("Ana")
    expected = "Hola, Ana"
    
    if result == expected:
        print(f"  ✅ Q5 PASSED - Output is '{expected}'")
        return True
    else:
        print(f"  ❌ Q5 FAILED - Expected '{expected}', got '{result}'")
        return False


def test_question_6():
    """Test Q6: Missing required parameter."""
    print("Testing Q6: Missing parameter error...")
    
    def sumar(a, b):
        return a + b
    
    try:
        result = sumar(5)  # Missing second parameter
        print(f"  ❌ Q6 FAILED - Should raise TypeError")
        return False
    except TypeError:
        print(f"  ✅ Q6 PASSED - Correctly raises TypeError for missing parameter")
        return True


def test_question_7():
    """Test Q7: Multiple parameters calculation."""
    print("Testing Q7: Multiple parameters...")
    
    def calcular(x, y, z):
        return x + y * z
    
    result = calcular(2, 3, 4)
    expected = 14  # 2 + (3 * 4) = 2 + 12 = 14
    
    if result == expected:
        print(f"  ✅ Q7 PASSED - Result is {expected}")
        return True
    else:
        print(f"  ❌ Q7 FAILED - Expected {expected}, got {result}")
        return False


def test_question_8():
    """Test Q8: Default parameter value."""
    print("Testing Q8: Default parameter values...")
    
    def saludar(nombre="Invitado"):
        return "Bienvenido, " + nombre
    
    result = saludar()  # No argument, uses default
    expected = "Bienvenido, Invitado"
    
    if result == expected:
        print(f"  ✅ Q8 PASSED - Default value used: '{expected}'")
        return True
    else:
        print(f"  ❌ Q8 FAILED - Expected '{expected}', got '{result}'")
        return False


def test_question_9():
    """Test Q9: Return value."""
    print("Testing Q9: Return values...")
    
    def sumar(a, b):
        return a + b
    
    resultado = sumar(3, 5)
    expected = 8
    
    if resultado == expected:
        print(f"  ✅ Q9 PASSED - Returned value is {expected}")
        return True
    else:
        print(f"  ❌ Q9 FAILED - Expected {expected}, got {resultado}")
        return False


def test_question_10():
    """Test Q10: Function without return returns None."""
    print("Testing Q10: No return means None...")
    
    def imprimir_mensaje():
        pass  # Simulates print, no return
    
    x = imprimir_mensaje()
    expected = None
    
    if x == expected:
        print(f"  ✅ Q10 PASSED - Returns None as expected")
        return True
    else:
        print(f"  ❌ Q10 FAILED - Expected None, got {x}")
        return False


def test_question_11():
    """Test Q11: Return complex calculation."""
    print("Testing Q11: Returning calculations...")
    
    def multiplicar_y_sumar(a, b, c):
        resultado = (a * b) + c
        return resultado
    
    valor = multiplicar_y_sumar(4, 5, 10)
    expected = 30  # (4 * 5) + 10 = 20 + 10 = 30
    
    if valor == expected:
        print(f"  ✅ Q11 PASSED - Result is {expected}")
        return True
    else:
        print(f"  ❌ Q11 FAILED - Expected {expected}, got {valor}")
        return False


def test_question_12():
    """Test Q12: Return boolean value."""
    print("Testing Q12: Returning boolean...")
    
    def es_mayor(a, b):
        return a > b
    
    result = es_mayor(10, 5)
    expected = True
    
    if result == expected:
        print(f"  ✅ Q12 PASSED - Returns {expected}")
        return True
    else:
        print(f"  ❌ Q12 FAILED - Expected {expected}, got {result}")
        return False


def test_question_13():
    """Test Q13: Local variable scope."""
    print("Testing Q13: Local variable scope...")
    
    def mi_funcion():
        x = 10
        return x
    
    result = mi_funcion()
    
    # Try to access x outside function - should fail
    try:
        _ = x  # This should raise NameError
        print(f"  ❌ Q13 FAILED - x should not be accessible outside function")
        return False
    except NameError:
        print(f"  ✅ Q13 PASSED - Local variable correctly scoped")
        return True


def test_question_14():
    """Test Q14: Reading global variable."""
    print("Testing Q14: Reading global variables...")
    
    nombre = "Python"
    
    def mostrar_nombre():
        return nombre
    
    result = mostrar_nombre()
    expected = "Python"
    
    if result == expected:
        print(f"  ✅ Q14 PASSED - Can read global variable")
        return True
    else:
        print(f"  ❌ Q14 FAILED - Expected '{expected}', got '{result}'")
        return False


def test_question_15():
    """Test Q15: Separate local namespaces."""
    print("Testing Q15: Separate function namespaces...")
    
    def funcion_a():
        x = 5
        return x
    
    def funcion_b():
        x = 10
        return x
    
    result_a = funcion_a()
    result_b = funcion_b()
    
    if result_a == 5 and result_b == 10:
        print(f"  ✅ Q15 PASSED - Functions have separate namespaces")
        return True
    else:
        print(f"  ❌ Q15 FAILED - Expected 5 and 10, got {result_a} and {result_b}")
        return False


def test_question_16():
    """Test Q16: Keyword arguments."""
    print("Testing Q16: Keyword arguments...")
    
    def presentar(nombre, edad, ciudad):
        return f"{nombre} tiene {edad} años y vive en {ciudad}"
    
    # Call with keyword arguments in different order
    result = presentar(edad=25, ciudad="Madrid", nombre="Ana")
    expected = "Ana tiene 25 años y vive en Madrid"
    
    if result == expected:
        print(f"  ✅ Q16 PASSED - Keyword arguments work correctly")
        return True
    else:
        print(f"  ❌ Q16 FAILED - Expected '{expected}', got '{result}'")
        return False


def test_question_17():
    """Test Q17: *args for variable arguments."""
    print("Testing Q17: *args...")
    
    def sumar_todos(*numeros):
        total = 0
        for num in numeros:
            total += num
        return total
    
    resultado = sumar_todos(1, 2, 3, 4, 5)
    expected = 15
    
    if resultado == expected:
        print(f"  ✅ Q17 PASSED - *args works correctly, sum is {expected}")
        return True
    else:
        print(f"  ❌ Q17 FAILED - Expected {expected}, got {resultado}")
        return False


def test_question_18():
    """Test Q18: **kwargs for variable keyword arguments."""
    print("Testing Q18: **kwargs...")
    
    def mostrar_info(**datos):
        return datos
    
    resultado = mostrar_info(nombre="Carlos", edad=30, ciudad="Barcelona")
    expected_keys = {'nombre', 'edad', 'ciudad'}
    
    if set(resultado.keys()) == expected_keys:
        print(f"  ✅ Q18 PASSED - **kwargs captures all keyword arguments")
        return True
    else:
        print(f"  ❌ Q18 FAILED - Expected keys {expected_keys}, got {set(resultado.keys())}")
        return False


def test_question_19():
    """Test Q19: Lambda function."""
    print("Testing Q19: Lambda functions...")
    
    doble = lambda x: x * 2
    
    resultado = doble(5)
    expected = 10
    
    if resultado == expected:
        print(f"  ✅ Q19 PASSED - Lambda returns {expected}")
        return True
    else:
        print(f"  ❌ Q19 FAILED - Expected {expected}, got {resultado}")
        return False


def test_question_20():
    """Test Q20: Lambda with map."""
    print("Testing Q20: Lambda with map...")
    
    numeros = [1, 2, 3, 4, 5]
    cuadrados = list(map(lambda x: x ** 2, numeros))
    expected = [1, 4, 9, 16, 25]
    
    if cuadrados == expected:
        print(f"  ✅ Q20 PASSED - map with lambda produces {expected}")
        return True
    else:
        print(f"  ❌ Q20 FAILED - Expected {expected}, got {cuadrados}")
        return False


def test_question_21():
    """Test Q21: Nested functions."""
    print("Testing Q21: Nested functions...")
    
    def exterior(x):
        def interior(y):
            return x + y
        return interior(5)
    
    resultado = exterior(10)
    expected = 15
    
    if resultado == expected:
        print(f"  ✅ Q21 PASSED - Nested function returns {expected}")
        return True
    else:
        print(f"  ❌ Q21 FAILED - Expected {expected}, got {resultado}")
        return False


def test_question_22():
    """Test Q22: Functions as first-class objects."""
    print("Testing Q22: Functions as arguments...")
    
    def aplicar_operacion(func, x, y):
        return func(x, y)
    
    def sumar(a, b):
        return a + b
    
    def multiplicar(a, b):
        return a * b
    
    resultado1 = aplicar_operacion(sumar, 5, 3)
    resultado2 = aplicar_operacion(multiplicar, 5, 3)
    
    if resultado1 == 8 and resultado2 == 15:
        print(f"  ✅ Q22 PASSED - Functions as arguments work correctly")
        return True
    else:
        print(f"  ❌ Q22 FAILED - Expected 8 and 15, got {resultado1} and {resultado2}")
        return False


def run_all_tests():
    """Run all validation tests."""
    print("=" * 60)
    print("PYTHON FUNCTIONS QUIZ VALIDATION")
    print("=" * 60)
    print()
    
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
    ]
    
    results = []
    for test in tests:
        try:
            result = test()
            results.append(result)
            print()
        except Exception as e:
            print(f"  ❌ Test failed with exception: {e}")
            results.append(False)
            print()
    
    print("=" * 60)
    print("SUMMARY")
    print("=" * 60)
    
    passed = sum(results)
    total = len(results)
    percentage = (passed / total) * 100
    
    print(f"Tests passed: {passed}/{total} ({percentage:.1f}%)")
    
    if passed == total:
        print("\n✅ ALL VALIDATIONS PASSED!")
        print("All quiz answers are verified as correct.")
        return 0
    else:
        print(f"\n❌ {total - passed} TEST(S) FAILED")
        print("Please review the failed tests above.")
        return 1


if __name__ == "__main__":
    sys.exit(run_all_tests())
