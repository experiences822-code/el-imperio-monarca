# Contenido y activos visuales

## Identidad visual conservada

- Paleta café mocha, chocolate, crema vainilla, champagne y oro suave.
- Fondo cálido con iluminación ambiental y transparencia.
- Paneles de vidrio semitransparentes, bordes suavemente redondeados y composición rectangular.
- Mariposa monarca lineal como recurso ambiental.
- `portadablanca.png` y `portadanegra.png` conservadas como marcas de agua.
- Cortina de bienvenida al cargar o refrescar la página.
- Transiciones discretas entre secciones y microinteracciones.

## Estructura de imágenes

Los archivos públicos viven en `public/assets/` y se sirven desde `BASE_URL`:

- `brand/`: logotipos, portadas y fondos originales.
- `nails/`: referencias visuales de manicura.
- `hair/`: referencias visuales de cabello.
- `ritual/`: cuidado corporal, pedicure, cejas/pestañas y cuidado capilar.
- `butterfly-monarch-sketch.svg`: croquis lineal de mariposa.

No mover ni renombrar estos recursos sin actualizar las referencias de `src/App.jsx`, `src/data.js` y el HTML.

## Catálogo y precios

Los servicios se agrupan en Nail Studio, Pedicure & Spa, Hair Studio, Brows & Lashes y Depilación. La información de referencia se encuentra en `src/data.js`. Los importes se presentan como tarifas de referencia y los valores “desde” pueden variar según técnica, largo, diseño, producto y valoración. Confirmar tarifas finales antes de agendar.

Los productos de tienda son categorías/referencias de catálogo, no existencias confirmadas.
