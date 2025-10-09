# Quiz: Funciones Auxiliares en Python

## Descripción
Este quiz evalúa la comprensión de funciones auxiliares (helper functions) y funciones de orden superior en Python, patrones fundamentales de programación que mejoran la modularidad y reutilización del código.

## Temas Cubiertos
- **Patrón de función auxiliar**: Encapsular lógica compleja en funciones reutilizables
- **Composición de funciones**: Combinar múltiples funciones para crear operaciones complejas
- **Funciones de orden superior**: Funciones que aceptan otras funciones como parámetros
- **Patrón Strategy**: Delegar algoritmos a funciones intercambiables
- **Funciones predicado**: Funciones que retornan valores booleanos para tomar decisiones
- **Transformaciones geométricas**: Aplicación práctica de funciones auxiliares

## Preguntas
1. **Pregunta 17**: Procesamiento por lotes con función auxiliar
   - Validación de usuarios usando función auxiliar
   - Clasificación de registros válidos e inválidos
   - Manejo de casos edge (datos faltantes, valores inválidos)

2. **Pregunta 18**: Transformaciones geométricas con funciones auxiliares
   - Escalado de puntos
   - Traslación de puntos
   - Composición de transformaciones
   - Importancia del orden en las operaciones

3. **Pregunta 21**: Patrón Strategy con función de orden superior
   - Funciones de orden superior que aceptan estrategias
   - Patrón de diseño Strategy
   - Procesamiento de datos con operaciones intercambiables
   - Flexibilidad mediante composición de funciones

4. **Pregunta 22**: Función predicado para formateo condicional
   - Funciones predicado para tomar decisiones
   - Separación de responsabilidades
   - Formateo condicional basado en predicados
   - Reutilización de lógica de negocio

5. **Pregunta 23**: Ajuste de puntuaciones con función auxiliar
   - Iteración simple con función auxiliar
   - Transformación de lista elemento por elemento
   - Separación entre iteración y cálculo
   - Patrón map implícito

6. **Pregunta 24**: Conteo genérico con función predicado
   - Conteo condicional usando predicado
   - Función genérica reutilizable
   - Predicado como parámetro
   - Patrón filter/count

## Conceptos Clave

### Patrón de Función Auxiliar
```python
def funcion_auxiliar(elemento):
    """Maneja una operación específica."""
    # Lógica encapsulada
    return resultado

def funcion_principal(coleccion):
    """Coordina múltiples operaciones."""
    return [funcion_auxiliar(elem) for elem in coleccion]
```

### Función de Orden Superior
```python
def procesar(datos, operacion):
    """Acepta una función como parámetro."""
    resultado = inicial
    for dato in datos:
        resultado = operacion(resultado, dato)
    return resultado
```

### Función Predicado
```python
def cumple_condicion(valor):
    """Retorna True o False."""
    return valor > umbral

def filtrar(datos, predicado):
    """Usa el predicado para filtrar."""
    return [d for d in datos if predicado(d)]
```

### Beneficios
- **Reutilización**: Las funciones pueden usarse en múltiples contextos
- **Legibilidad**: Código más fácil de entender
- **Mantenibilidad**: Cambios aislados en funciones específicas
- **Testabilidad**: Funciones pequeñas son más fáciles de probar
- **Flexibilidad**: Comportamiento cambiable sin modificar la estructura

## Validación
Las respuestas han sido validadas con los scripts:
```bash
python validation/validate_helper_functions.py
python validation/validate_higher_order_functions.py
python validation/validate_simple_helper_functions.py
```

**Resultados:**
- ✅ Pregunta 17: Respuesta B correcta
- ✅ Pregunta 18: Respuesta A correcta
- ✅ Pregunta 21: Respuesta B correcta
- ✅ Pregunta 22: Respuesta A correcta
- ✅ Pregunta 23: Respuesta C correcta
- ✅ Pregunta 24: Respuesta D correcta

## Uso
Abre `index.html` en tu navegador para comenzar el quiz.

## Dependencias
- Tailwind CSS (CDN)
- Highlight.js (CDN)
- Marked.js (CDN)
- Shared quiz engine (`../../assets/js/quiz-engine.js`)
- Shared styles (`../../assets/css/quiz-styles.css`)
