# VetLu 🐾

Sitio web de **VetLu**, clínica veterinaria en San Gabriel, Villa María del Triunfo (Lima, Perú).
Promueve la **adopción responsable**: no se venden animales.

## Páginas

| Página | Contenido |
|---|---|
| `index.html` | Portada: intro, curiosidades, guías por especie, calculadora, test "¿qué mascota va contigo?", contacto |
| `servicios.html` | Servicios de la clínica |
| `precios.html` | Tarifas en soles y planes de salud |
| `productos.html` | Productos recomendados con filtros |
| `consejos.html` | Hábitos, mitos vs. realidad y cuidados por temporada |
| `visitas.html` | Cada cuánto ir al veterinario y calendario de vacunas |
| `edad.html` | Calculadora y tablas de edad en años humanos |
| `adopcion.html` | Mascotas en adopción, requisitos, proceso y FAQ |
| `perro.html`, `gato.html`, `conejo.html`, `hamster.html` | Guía completa por especie |

## Cómo editar

- **Datos de contacto, redes y horario:** `assets/js/config.js` (se actualizan en todo el sitio).
- **Contenido de las guías por especie:** `assets/js/animals.js`.
- **Mascotas en adopción:** `adopcion.html` (cada tarjeta `<article class="buddy">`).
- **Precios:** `precios.html`.
- **Colores y tipografía:** variables al inicio de `assets/css/styles.css`.

HTML, CSS y JavaScript puros, sin compilación. Desplegado en Vercel.
