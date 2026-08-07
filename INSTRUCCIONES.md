# Publicar el Directorio de reportes — Plan 20·40

## 1. Subir a GitHub Pages (una sola vez)

1. En tu repositorio nuevo, sube TODO el contenido de esta carpeta `publicacion/`
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

Notas:
- Los reportes de Power BI piden inicio de sesión Microsoft a cada visitante y
  respetan sus permisos (no hay que configurar nada extra).
- La página es pública en esa URL; los datos sensibles siguen protegidos porque
  viven en Power BI, pero los HTML de `reportes-html/` sí son visibles para
  quien tenga el link. Si eso es un problema, la alternativa es hospedar en
  SharePoint con el login corporativo.

## 2. Actualización automática desde tu modelo de Python

Tu script ya genera los HTML. Solo agrega al final que los copie al repo y haga push.
Requisito: tener el repo clonado en la máquina donde corre el modelo y `git` configurado.

```python
import shutil, subprocess
from pathlib import Path

REPO = Path(r"C:\ruta\a\TU-REPO")          # carpeta del repo clonado
DESTINO = REPO / "reportes-html"

# 1. Copiar los HTML recién generados (mismos nombres SIEMPRE)
ARCHIVOS = {
    "Tableros_Metas_2026.html":            "tableros-metas-2026.html",
    "Dashboard_Formacion_2026.html":       "dashboard-formacion-2026.html",
    "Reporte_OnePage_2026_cierre_julio.html": "reporte-onepage-2026.html",
    "Dashboard Desempeño Visitas.html":    "dashboard-desempeno-visitas.html",
}
SALIDA = Path(r"C:\ruta\donde\tu\modelo\genera\los\html")
for origen, destino in ARCHIVOS.items():
    f = SALIDA / origen
    if f.exists():
        shutil.copy(f, DESTINO / destino)

# 2. Commit y push
subprocess.run(["git", "add", "reportes-html"], cwd=REPO, check=True)
r = subprocess.run(["git", "commit", "-m", "Actualización de reportes"], cwd=REPO)
if r.returncode == 0:                       # hubo cambios
    subprocess.run(["git", "push"], cwd=REPO, check=True)
```

Cada corrida del modelo → push → GitHub Pages republica solo (1-2 min).
El directorio no se toca: apunta a los archivos por nombre, por eso es clave
que los nombres de la columna derecha no cambien.

## 3. Para agregar un reporte nuevo después

- HTML nuevo: agrégalo a `reportes-html/` y pídeme que lo conecte en el
  directorio (o edita la lista `REPORTS` dentro de `index.html`).
- Power BI nuevo: solo necesito el link de "Insertar" (embed) del reporte.
