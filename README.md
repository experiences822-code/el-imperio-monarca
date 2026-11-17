# EL IMPERIO MONARCA by I DO NAILS — Versión 5.1.0

Aplicativo web responsive desarrollado con React + Vite. Dirección visual: café mocha, crema vainilla, champagne y oro suave; iluminación ambiental inspirada en velas, transparencias y paneles de cristal.

## Requisitos
- Node.js 20 LTS recomendado (Node 18.18+ como mínimo para Vite 6).
- npm.

## Ejecutar en VS Code
1. Descomprimir el ZIP.
2. Abrir en VS Code la carpeta `el_imperio_monarca_rebuild` (la que contiene `package.json`).
3. Abrir la terminal integrada y ejecutar:

```bash
npm install
npm run dev
```

4. Abrir la URL local que muestre Vite. Mantener la terminal abierta mientras se usa el sitio.

Para compilar la versión de producción:

```bash
npm run build
npm run preview
```

## Identidad y recursos gráficos
- Se conservan los PNG originales suministrados: `portadablanca.png`, `portadanegra.png`, `fondoblanco.png`, `fondodorado.png`, `fondonegro.png`, `divisionesblanca.png` y `divisionesnegra.png`.
- `portadablanca.png` y `portadanegra.png` se integran como marcas de agua decorativas en la portada principal, sin alterar sus archivos.
- La mariposa de fondo utiliza el recurso original de marca en baja opacidad.
- La cortina de bienvenida mantiene los elementos PNG de identidad y aparece cada vez que se recarga el sitio.
- Se mantienen las fotografías editadas originales de uñas y cabello.
- Se incorporan cuatro imágenes de apoyo generadas para la maqueta en `public/assets/ritual/` (cuidado corporal, pedicure, cejas/pestañas y cuidado capilar). Son imágenes conceptuales; no representan resultados garantizados ni inventario específico.

## Cambios V5
- Portada principal con las dos imágenes PNG de marca como marcas de agua.
- Mariposa monarca ambiental en el fondo del sitio.
- Paneles translúcidos más visibles y bordes más redondeados, manteniendo geometrías rectangulares.
- Sección Amor propio ampliada con la filosofía RITUAL y cuatro pasos de cuidado: limpieza, exfoliación moderada, hidratación y protección/constancia.
- Se desarrollan los tres pilares del concepto RITUAL: ancestralidad, enfoque de terapéutico (con lenguaje responsable sobre el respaldo de ingredientes y fórmulas) y lujo sensorial.
- Transiciones de navegación y microinteracciones conservadas.
- Diseño adaptable a celular y computador.

## Funcionalidades incluidas
- Cortina de bienvenida al cargar o refrescar la página.
- Navegación: inicio, nosotros, servicios, tienda, amor propio, contacto, agendamiento y carrito.
- Catálogo por departamentos, búsqueda y tarifas de referencia.
- Lista de consulta de productos y acceso a WhatsApp.
- Solicitudes de agendamiento almacenadas localmente en el navegador.
- Panel administrativo demostrativo local.

## Backend y publicación
La conexión con Supabase está preparada mediante `.env.example`, `src/supabase.js` y `supabase/schema.sql`. Para habilitarla, configura `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`, aplica el esquema y define autenticación, roles y políticas RLS.

**Estado:** prototipo funcional de frontend. Las solicitudes locales no se sincronizan entre dispositivos y el panel `/admin` no tiene autenticación. No publicar como sistema de producción hasta conectar y proteger el backend.

## Datos comerciales
Los precios son referencias del documento de tarifas compartido y deben confirmarse con el establecimiento antes de publicarse. El número de WhatsApp configurado también debe validarse.


## Versión 5.1 — portada editorial
- Se conserva la cortina de bienvenida, navegación, catálogo, servicios, tienda, ritual, contacto y estructura Supabase de V5.
- Encabezado actualizado: símbolo monarca lineal junto al nombre tipográfico.
- Portada rediseñada con panel de bienvenida translúcido, fotografía cálida de ritual corporal, mariposa ambiental y panel de valores.
- Diseño responsive para escritorio, tablet y móvil.
- Las imágenes de marca originales portadablanca.png y portadanegra.png se conservan como detalles de marca de agua.

Para ejecutar: abre esta carpeta en VS Code, ejecuta `npm install` y luego `npm run dev`.
