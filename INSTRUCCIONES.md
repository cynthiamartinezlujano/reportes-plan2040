# Publicar el Directorio de reportes — Plan 20·40

## Contenido del paquete
- `index.html` — el directorio completo (responsive: funciona en celular).
- `support.js` y `_ds/` — motor y sistema de diseño (no se tocan).

Solo hay reportes de Power BI (Estatus de Indicadores y Reporte Mensual).
No hay archivos HTML con datos: todo dato sensible vive en Power BI,
protegido por el inicio de sesión Microsoft de cada visitante.

## 1. Subir a GitHub Pages (una sola vez)

1. En tu repositorio, sube TODO el contenido de esta carpeta `publicacion/`
   (el `index.html` debe quedar en la raíz del repo):
   ```
   git clone https://github.com/TU-USUARIO/TU-REPO.git
   # copia aquí todos los archivos de publicacion/
   git add .
   git commit -m "Directorio de reportes"
   git push
   ```
2. En GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
3. En 1-2 minutos tu página queda en `https://TU-USUARIO.github.io/TU-REPO/`.

## 2. Notas de comportamiento

- Las MINIATURAS de Power BI se muestran sin panel de filtros ni pestañas
  (más limpias); el visor grande ("Ampliar") sí muestra las pestañas de
  páginas y el panel de filtros de Power BI.
- No hay pantalla de login del directorio: Power BI pide la sesión Microsoft
  al cargar cada reporte y respeta los permisos de cada cuenta.
- En celular: menú de hamburguesa, tarjetas a una columna y visor a pantalla
  completa.

## 3. Para agregar un reporte nuevo

- Power BI: pásame el link de "Insertar" (embed) del reporte y lo conecto
  (o agrégalo en la lista `BASE_REPORTS` dentro de `index.html`).
- Si más adelante vuelven los reportes HTML, te regenero las instrucciones
  de auto-push desde tu modelo de Python.
