# EL IMPERIO MONARCA by I DO NAILS — V2.0.0

Sitio web responsive desarrollado con React + Vite. V2 conserva la identidad cálida y editorial de la versión aprobada y corrige la publicación en GitHub Pages para el repositorio `el-imperio-monarca`.

## Requisitos

- Node.js 20 LTS.
- npm.
- Git (solo para publicar).

## Ejecutar localmente

Abrir esta carpeta (la que contiene `package.json`) en VS Code y ejecutar:

```powershell
npm install
npm run dev
```

Vite mostrará la dirección local. Mantener la terminal abierta mientras se utiliza el sitio.

## Compilar

```powershell
npm run build
```

La salida de producción queda en `dist/`.

## Publicar

El workflow `.github/workflows/deploy.yml` despliega automáticamente al hacer `git push` a `main`. La configuración de Vite, el enrutador y los recursos gráficos ya contemplan la subruta de GitHub Pages `/el-imperio-monarca/`.

Instrucciones completas: [`docs/DEPLOY_GITHUB_PAGES.md`](docs/DEPLOY_GITHUB_PAGES.md).

## Diseño y experiencia

- Fondo café cálido con destellos y luces ambientales.
- Crema vainilla, champagne y oro suave.
- Paneles translúcidos y bordes redondeados sin perder la geometría rectangular.
- Portada editorial con mariposa monarca y marcas de agua de marca.
- Cortina de bienvenida que aparece en cada carga/refresco.
- Transiciones suaves y responsive para celular, tablet y computador.

## Secciones y funciones

Inicio, Nosotros, Servicios por categoría, Tienda/Distribuidora, Amor propio, Contacto, Agendamiento, Carrito de consulta y Panel administrativo demostrativo. La selección de productos y las solicitudes de cita funcionan localmente en el navegador; la solicitud de cita no confirma disponibilidad automáticamente.

## Precios y catálogo

Los valores de `src/data.js` se basan en la lista de precios suministrada. Los precios marcados “desde” y los servicios que requieran valoración deben confirmarse antes de la atención. Las imágenes de producto son referencias visuales; marcas, stock y precios de distribuidora deben validarse antes de anunciar disponibilidad.

## Supabase

La integración es opcional y está preparada, pero no se requiere para ejecutar ni publicar el frontend. Ver [`docs/SEGURIDAD_Y_SUPABASE.md`](docs/SEGURIDAD_Y_SUPABASE.md). No subir secretos al repositorio.

## Estructura

```text
el_imperio_monarca_rebuild/
├── .github/workflows/deploy.yml
├── docs/
├── public/assets/
├── src/
├── supabase/schema.sql
├── index.html
├── 404.html
├── package.json
└── vite.config.js
```

## Publicación rápida desde PowerShell

Con Git instalado, abre PowerShell dentro de esta carpeta y ejecuta:

```powershell
.\publicar-github.ps1
```

El script instala dependencias, verifica las imágenes, construye `dist` y envía los cambios a `main`. Si extraes el ZIP en una carpeta nueva sin `.git`, recupera el historial del repositorio de GitHub antes de preparar el commit. La autenticación de GitHub puede abrir una ventana del navegador. Después, GitHub Actions realiza el despliegue.
