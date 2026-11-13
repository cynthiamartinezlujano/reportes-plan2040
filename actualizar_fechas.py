#!/usr/bin/env python3
"""Actualiza fechas.js con la fecha real de generación de cada reporte.

Lee la fecha de modificación del archivo HTML local (OneDrive) de cada
reporte del directorio y escribe fechas.js en esta carpeta. El portal la
muestra como "Actualizado hace X". Correr después de regenerar reportes
(lo llama "Actualizar Dashboards.command") y luego publicar con git push.
"""
import json
import os
from datetime import datetime

ONEDRIVE = os.path.expanduser("~/Library/CloudStorage/OneDrive-QUALFON")
AQUI = os.path.dirname(os.path.abspath(__file__))
RCH = "Semanal_CRM/reportes de consulta - html"
AP = "Análisis_Proyectos"

# id del reporte en index.html → archivo HTML que lo respalda
ARCHIVOS = {
    "r27": f"{RCH}/Reporte_OnePage_actual.html",
    "r28": f"{AP}/Desempeño Visitas/Dashboard Desempeño Visitas.html",
    "r29": f"{RCH}/Tableros Metas/Tableros_Metas_2026.html",
    "r30": f"{AP}/Proceso de Visitas/Listados por Guía/Generador de Listados por Guía · Plan 20·40.html",
    "r31": f"{RCH}/Dashboard Formacion/Dashboard_Formacion_2026.html",
    "r33": f"{AP}/Acompañamiento Embarazadas/Acompañamiento Embarazadas · Plan 20·40.html",
    "r35": f"{AP}/Altas y Bajas/Altas_Bajas_P2040.html",
    "r36": f"{AP}/Cartillas Independencia/Cartillas_Independencia_por_mes.html",
    "r46": f"{AP}/Plan del Mes/Plan_del_Mes_2026-11.html",
    "r47": f"{AP}/Plan del Mes/Plan_del_Mes_2026-10.html",
    "r48": f"{AP}/Plan del Mes/Plan_del_Mes_2026-09.html",
    "r38": f"{AP}/Reporte Semanal/Reporte_Semanal.html",
    "r40": f"{AP}/Nutrición/Output_Nutrición/Seguimiento_Nutricional_Independencia.html",
    "r41": f"{AP}/Vacunas/Lineamientos 2026 (preliminar)/Vacunas_Lineamientos_2026.html",
    "r42": f"{RCH}/Pendientes por Niño/Pendientes_por_Nino.html",
    "r43": f"{RCH}/Descargas Maestros/Descargas_Maestros.html",
    "r44": f"{AP}/Reporte Mensual/Reporte_Mensual_actual.html",
    "r45": f"{AP}/Diagnóstico y perfilamiento/Situaciones Críticas · Histórico.html",
    "r49": f"{AP}/Educación/Transiciones Escolares/Transiciones_Escolares.html",
    "r50": f"{AP}/Educación/Rezago Educativo/Rezago_Educativo.html",
}


def main():
    fechas, faltan = {}, []
    for rid, rel in ARCHIVOS.items():
        ruta = os.path.join(ONEDRIVE, rel)
        try:
            mt = os.path.getmtime(ruta)
            fechas[rid] = datetime.fromtimestamp(mt).strftime("%Y-%m-%dT%H:%M")
        except OSError:
            faltan.append(rel)
    salida = os.path.join(AQUI, "fechas.js")
    cuerpo = ("// Generado por actualizar_fechas.py — no editar a mano.\n"
              "window.P2040_FECHAS = " + json.dumps(fechas, indent=2, ensure_ascii=False) + ";\n")
    with open(salida, "w", encoding="utf-8") as fh:
        fh.write(cuerpo)
    print(f"✔ fechas.js: {len(fechas)} reportes con fecha")
    for rel in faltan:
        print(f"  ⚠ No se encontró: {rel}")
    if faltan:
        print("  (esos reportes mostrarán su frecuencia en lugar de la fecha)")


if __name__ == "__main__":
    main()
