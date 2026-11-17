$ErrorActionPreference = 'Stop'

Write-Host "`n=== EL IMPERIO MONARCA V2 | PUBLICACIÓN ===" -ForegroundColor Magenta

if (-not (Test-Path "package.json")) {
  throw "Abre PowerShell dentro de la carpeta del proyecto (la que contiene package.json)."
}

Write-Host "`n[1/4] Instalando dependencias..." -ForegroundColor Cyan
npm install
if ($LASTEXITCODE -ne 0) { throw "Falló npm install." }

Write-Host "`n[2/4] Construyendo versión de producción..." -ForegroundColor Cyan
npm run check:assets
if ($LASTEXITCODE -ne 0) { throw "Falló la verificación de imágenes. No se publicaron cambios." }
npm run build
if ($LASTEXITCODE -ne 0) { throw "Falló npm run build. No se publicaron cambios." }

Write-Host "`n[3/4] Preparando Git..." -ForegroundColor Cyan
if (-not (Test-Path ".git")) {
  # Recupera el historial del repositorio existente sin reemplazar los archivos V2.
  $tempRepo = Join-Path $env:TEMP ("monarca-git-" + [guid]::NewGuid().ToString("N"))
  git clone "https://github.com/experiences822-code/el-imperio-monarca.git" $tempRepo
  if ($LASTEXITCODE -ne 0) { throw "No se pudo clonar el repositorio existente. Verifica tu conexión." }
  Copy-Item (Join-Path $tempRepo ".git") ".git" -Recurse -Force
  Remove-Item $tempRepo -Recurse -Force
}

git branch -M main
if ($LASTEXITCODE -ne 0) { throw "No se pudo establecer la rama main." }

$remote = git remote get-url origin 2>$null
if (-not $remote) {
  git remote add origin "https://github.com/experiences822-code/el-imperio-monarca.git"
  if ($LASTEXITCODE -ne 0) { throw "No se pudo configurar el remoto origin." }
}

Write-Host "`n[4/4] Enviando cambios a GitHub..." -ForegroundColor Cyan
git add .
if ($LASTEXITCODE -ne 0) { throw "Falló git add." }

git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
  git commit -m "Publish EL IMPERIO MONARCA V2"
  if ($LASTEXITCODE -ne 0) { throw "Falló git commit." }
} else {
  Write-Host "No hay cambios nuevos para confirmar; se enviará el estado actual." -ForegroundColor Yellow
}

git push -u origin main
if ($LASTEXITCODE -ne 0) { throw "Falló git push. Revisa la autenticación y el remoto." }

Write-Host "`n¡Cambios enviados! GitHub Actions iniciará el despliegue." -ForegroundColor Green
Write-Host "URL esperada: https://experiences822-code.github.io/el-imperio-monarca/" -ForegroundColor Green
Write-Host "Revisa la pestaña Actions del repositorio para confirmar el despliegue." -ForegroundColor Green
