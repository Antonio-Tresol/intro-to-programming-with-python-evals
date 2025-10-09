# Python Quiz Validation Scripts

This folder contains Python scripts for validating quiz answers before adding them to the quizzes.

## 📁 Files

- `validate_physics_chemistry.py` - Validates physics and chemistry exercises
- `validate_chemistry.py` - Additional chemistry-specific validations

## 🎯 Purpose

These scripts ensure that:
- ✅ Quiz answers are mathematically correct
- ✅ Code functions work as expected
- ✅ Edge cases are handled properly
- ✅ Explanations match actual results

## 🚀 Usage

```bash
# Run validation for physics/chemistry quiz
python validation/validate_physics_chemistry.py

# Run chemistry-specific validation
python validation/validate_chemistry.py
```

## 📝 Adding New Validations

When creating a new quiz:

1. Create a new validation file:
   ```bash
   touch validation/validate_your_quiz.py
   ```

2. Import necessary types:
   ```python
   from typing import List, Dict, Any
   ```

3. Copy the functions from your quiz

4. Create test cases with expected outputs

5. Run and verify before adding to quiz

## ✅ Best Practices

- **Test all edge cases**: Empty inputs, negative numbers, etc.
- **Match exact outputs**: Ensure validation matches quiz exactly
- **Document assumptions**: Note any simplifications
- **Use type hints**: Makes code clearer and catches errors
- **Print detailed traces**: Helps debug when results don't match

## 📊 Example Validation

```python
def validate_example():
    """Validates the example quiz question"""
    # Test data
    input_data = [1, 2, 3, 4, 5]
    expected_output = [2, 4]
    
    # Run function
    actual_output = process_list(input_data)
    
    # Validate
    if actual_output == expected_output:
        print("✅ CORRECT")
    else:
        print(f"❌ INCORRECT: Expected {expected_output}, got {actual_output}")
```

## 🔍 Common Issues

### Floating-Point Precision
Be careful with float comparisons:
```python
# ❌ Don't do this
if result == 0.25:
    
# ✅ Do this instead
if abs(result - 0.25) < 0.0001:
```

### String Formatting
Ensure strings match exactly:
```python
# Pay attention to spaces, capitalization, quotes
expected = "Option A"
actual = " Option A"  # Has leading space!
```

### List/Dict Ordering
Remember that order can matter:
```python
# These are different for lists but same for sets
[1, 2, 3] != [3, 2, 1]  
{1, 2, 3} == {3, 2, 1}
```

## 📚 Resources

- [Python typing module](https://docs.python.org/3/library/typing.html)
- [Python unittest](https://docs.python.org/3/library/unittest.html)
- [Floating-point arithmetic](https://docs.python.org/3/tutorial/floatingpoint.html)

---

**Remember**: Always validate before deploying to the quiz! 🎓
