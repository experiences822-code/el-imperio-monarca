# Publicar EL IMPERIO MONARCA V2 en GitHub Pages

## Configuración incluida

- Repositorio esperado: `experiences822-code/el-imperio-monarca`.
- Rama de publicación: `main`.
- Vite genera los recursos con la base `/el-imperio-monarca/` únicamente en producción.
- React Router utiliza `import.meta.env.BASE_URL` como `basename`.
- Las imágenes públicas usan la misma base dinámica, por lo que no apuntan a la raíz equivocada del dominio.
- GitHub Actions instala con `npm install`, ejecuta `npm run build` y publica `dist/`.
- Se genera `404.html` para que las rutas internas de la SPA puedan resolverse al abrirse directamente.

## Pasos en un equipo nuevo

1. Instalar Node.js 20 LTS y Git.
2. Descomprimir el ZIP.
3. Abrir en VS Code la carpeta que contiene `package.json`, `vite.config.js` y `src/`.
4. Abrir PowerShell en esa carpeta.
5. Ejecutar:

```powershell
npm install
npm run dev
```

6. Para probar la compilación de producción:

```powershell
npm run build
```

7. Inicializar Git solo si la carpeta todavía no está conectada a un repositorio:

```powershell
git init
git branch -M main
git remote add origin https://github.com/experiences822-code/el-imperio-monarca.git
```

8. Guardar y publicar:

```powershell
git add .
git commit -m "Publish EL IMPERIO MONARCA V2"
git push -u origin main
```

Si `origin` ya existe, no repetir `git remote add`. Verificarlo con `git remote -v`.

## Activar Pages

En GitHub: Settings → Pages → Build and deployment → Source: **GitHub Actions**.
Después, cada `push` a `main` ejecuta el despliegue automáticamente. Revisar la pestaña Actions para confirmar que ambos trabajos (`build` y `deploy`) terminaron correctamente.

URL pública esperada: https://experiences822-code.github.io/el-imperio-monarca/

## Publicación automatizada desde PowerShell

Con Git instalado y autenticado, abrir PowerShell en la carpeta del proyecto y ejecutar:

```powershell
.\publicar-github.ps1
```

El script verifica los recursos y valida la compilación antes de hacer `git add`, `git commit` y `git push`. Si la carpeta extraída no tiene `.git`, clona el repositorio existente y conserva su historial. No publica si falla la compilación.
