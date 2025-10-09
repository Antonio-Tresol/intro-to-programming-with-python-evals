# Quiz: List & Dict Comprehensions en Python

## Descripción
Este quiz evalúa la comprensión de list comprehensions y dict comprehensions en Python, técnicas esenciales para escribir código más conciso, legible y pythonic.

## Temas Cubiertos
- **List comprehensions con filtrado**: Combinar iteración, transformación y condiciones
- **Comprehensions anidadas**: Aplanar estructuras de datos anidadas
- **Creación de diccionarios**: Generar estructuras complejas con comprehensions
- **Transformación de datos**: Aplicar funciones auxiliares en comprehensions

## Preguntas

1. **Pregunta 25**: Análisis de mensajes con list comprehension
   - Filtrado con predicados (función `es_mensaje_seguro`)
   - Transformación con función auxiliar (`extraer_palabra_clave`)
   - Estructura: `[transform(x) for x in items if predicate(x)]`
   - Extracción de palabras clave de mensajes no-spam

2. **Pregunta 26**: Aplanamiento con list comprehension anidada
   - Comprehensions anidadas para aplanar listas
   - Filtrado de valores en estructuras anidadas
   - Estructura: `[item for sublist in lists for item in sublist if condition]`
   - Procesamiento de datos de experimentos

3. **Pregunta 27**: Creación de diccionarios con list comprehension
   - Generación de lista de diccionarios
   - Transformación con función auxiliar (`generar_id_usuario`)
   - Filtrado por longitud
   - Estructura: `[{'key': func(x)} for x in items if condition]`

## Conceptos Clave

### List Comprehension Básica
```python
# Estructura general
[expresión for item in iterable if condición]

# Equivalente a:
resultado = []
for item in iterable:
    if condición:
        resultado.append(expresión)
```

### List Comprehension Anidada
```python
# Aplanar lista de listas
[item for sublist in lists for item in sublist]

# Equivalente a:
resultado = []
for sublist in lists:
    for item in sublist:
        resultado.append(item)
```

### Creación de Diccionarios
```python
# Lista de diccionarios
[{'key': value} for item in items]

# Dict comprehension
{key: value for item in items}
```

### Ventajas
- **Concisión**: Una línea vs múltiples líneas de código
- **Legibilidad**: Expresión clara de la intención
- **Rendimiento**: Generalmente más rápido que bucles explícitos
- **Pythonic**: Estilo idiomático de Python

## Validación
Las respuestas han sido validadas con el script:
```bash
python validation/validate_list_comprehensions.py
```

**Resultados:**
- ✅ Pregunta 25: Respuesta B correcta (['futbol', 'programar', 'gourmet'])
- ✅ Pregunta 26: Respuesta C correcta ([10.2, 8.8, 20.1, 5.0])
- ✅ Pregunta 27: Respuesta D correcta (lista de 3 diccionarios)

## Uso
Abre `index.html` en tu navegador para comenzar el quiz.

## Dependencias
- Tailwind CSS (CDN)
- Highlight.js (CDN)
- Marked.js (CDN)
- Shared quiz engine (`../../assets/js/quiz-engine.js`)
- Shared styles (`../../assets/css/quiz-styles.css`)

## Nivel
Intermedio - Se recomienda tener conocimientos previos de:
- Sintaxis básica de Python
- Funciones y funciones auxiliares
- Iteración con bucles for
- Listas y diccionarios
