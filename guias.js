// Guías de lectura de cada reporte — las muestra la ventana del reporte en el portal.
// Estructura: resumen (1 línea) · puntos [{t: título, d: detalle}] · ojo (aviso opcional)
// Para editar una guía: cambia su texto aquí y publica (push).
(function () {
  const planMes = {
    resumen: "A quién toca visitar este mes, por guía y por zona, con sus pendientes.",
    puntos: [
      { t: "Primero elige la zona", d: "Arriba filtras Todas, CC · Cabecera, CC · Ejidos o Independencia. Luego decide si ver las familias «A visitar» o las que «Descansan» este mes." },
      { t: "Filtra por esquema y tipo de familia", d: "El esquema dice cada cuándo se visita (bimestral A/B, tercios de ejido T1–T3 o mensual). El tipo separa familias con P2040, con embarazadas, mixtas o sin P2040; los botones 1–4+ filtran por cuántos niños tiene la familia." },
      { t: "Las banderas marcan prioridad", d: "🚨 Urgentes, ⚠️ Indicadores pendientes y 👥 Familias con 2 responsables: actívalas para ver solo esas familias." },
      { t: "Saca tus listas", d: "«Generar listados del mes» abre el generador para imprimir una lista por guía; «Excel» descarga lo que tengas filtrado; «Ver historial de visitas» muestra qué se hizo en meses anteriores." },
    ],
    ojo: "«Descansan» no es un pendiente: son familias a las que, por su esquema, no les toca visita este mes.",
    manual: "manuales/plan-visitas.html",
  };

  window.P2040_GUIAS = {
    // ── Reuniones de seguimiento ──────────────────────────────────────────
    r38: {
      resumen: "Cómo va el mes en curso, semana a semana, contra el cierre del mes anterior.",
      puntos: [
        { t: "Elige comunidad y semana", d: "Arriba filtras Todas, Cuatro Ciénegas o Independencia, y con los botones «Sem 1, Sem 2…» eliges qué semana del mes ver." },
        { t: "Empieza por Beneficiarios", d: "Niños P2040 activos y familias al corte, contra la semana anterior. Si hay una baja, revisa abajo los movimientos (altas, reactivados, inactivados, defunciones) y sus motivos." },
        { t: "Luego recorre las pestañas", d: "Resumen de la semana, Visitas, Embarazadas, Casos y Programas: cada una muestra la misma semana desde su tema." },
      ],
      ojo: "Visitas, Acompañamiento y Formación empiezan en cero cada mes: compáralos contra el mes pasado al mismo día, no contra el cierre. La semana con * va en curso.",
      manual: "manuales/reporte-semanal.html",
    },
    r44: {
      resumen: "El panorama integral del Plan mes por mes: indicadores por pilar, beneficiarios y avance.",
      puntos: [
        { t: "Elige mes y comunidad", d: "Con los botones de arriba cambias de mes (Ene…Nov) y filtras Todas, Cuatro Ciénegas o Independencia. Todo el reporte se recalcula." },
        { t: "Indicadores por pilar", d: "Cada tarjeta muestra el % del mes y la flechita contra el mes anterior, en puntos porcentuales. La ⭐ marca los indicadores que reportamos; las tarjetas punteadas son solo de referencia." },
        { t: "Pestañas de detalle", d: "Beneficiarios, Acompañamiento, Formación, Educación, Salud, Familia y Espiritualidad abren cada tema a fondo. La «Reflexión por generación» responde si cumplimos cada indicador a la edad que corresponde." },
        { t: "Compacta o amplia", d: "La vista compacta es para la reunión; la amplia muestra el detalle de cada indicador. «Descargar PDF» guarda la vista actual." },
      ],
      ojo: "El mes con * es el mes en curso: muestra el último corte disponible, no el cierre.",
      manual: "manuales/reporte-mensual.html",
    },

    // ── Panorama del Plan ─────────────────────────────────────────────────
    r27: {
      resumen: "Los indicadores por pilar en una sola tabla, mes a mes, desde el cierre del año anterior.",
      puntos: [
        { t: "Cómo se lee la tabla", d: "Cada renglón es un indicador y cada columna un mes. La primera columna (diciembre) es el punto de partida del año; las demás son el cierre de cada mes." },
        { t: "Filtra lo que necesites", d: "Comunidad, Generación y Responsable recalculan toda la tabla. «Limpiar filtros» regresa a la vista completa." },
        { t: "Para compartir", d: "«PDF ejecutivo» arma una versión de una página lista para enviar o imprimir." },
      ],
      ojo: "La última columna dice «corte», no «cierre»: es el mes en curso y todavía puede moverse. Las reglas de cálculo son las mismas del Reporte Mensual (están en «¿Cómo se calculan los indicadores?» al final).",
      manual: "manuales/one-page.html",
    },
    r29: {
      resumen: "Qué porcentaje de los niños cumple cada meta del Plan, por comunidad, guía y niño.",
      puntos: [
        { t: "Tres vistas", d: "Tablero muestra cada meta con su %; Guías compara el avance de cada guía; Niños deja ver meta por meta a cada niño." },
        { t: "Elige comunidad", d: "Todas, Cuatro Ciénegas o Independencia. Arriba verás cuántos niños atendidos entran en el cálculo y el promedio general." },
        { t: "Antes de concluir", d: "Abre «¿Cómo se calcula cada meta?»: ahí está quién entra al denominador y qué cuenta como cumplido." },
      ],
      ojo: "Semáforo: verde 85 % o más, amarillo 60–84 %, rojo menos de 60 %. El promedio general resume todas las metas juntas: una meta muy baja se esconde detrás de otras altas, así que revisa el tablero meta por meta.",
      manual: "manuales/tablero-metas.html",
    },
    r35: {
      resumen: "Quién entró y quién salió del padrón P2040 en el mes, y por qué.",
      puntos: [
        { t: "Resumen, Bajas y Altas", d: "El Resumen da el balance del mes y el desglose por comunidad; las pestañas Bajas y Altas traen la lista de niños, con su conteo entre paréntesis." },
        { t: "Filtra", d: "Comunidad, mes analizado, guía, localidad o búsqueda por nombre. «Descargar Excel» baja la lista filtrada." },
        { t: "Lee los motivos", d: "En bajas: voluntaria, emigración, no localizado, defunción, etc. En altas: nuevo registro, reactivado o reclasificado." },
      ],
      ojo: "«Sin motivo capturado» y «Desapareció del corte» (el registro ya no vino en la descarga) son pendientes de revisar con la guía, no bajas confirmadas. Un «Reclasificado a F2040» tampoco es una pérdida: el niño sigue en el Plan con otro perfil.",
      manual: "manuales/altas-bajas.html",
    },
    r43: {
      resumen: "Para bajar las bases maestras del CRM a Excel, filtradas a tu medida.",
      puntos: [
        { t: "Elige comunidad y base", d: "Primero Cuatrociénegas o Independencia; luego la base que necesitas. «Cambiar» te regresa a elegir comunidad." },
        { t: "Filtra y escoge columnas", d: "«＋ Filtro por columna» acota los renglones; «Columnas visibles» decide qué campos se descargan." },
        { t: "Descarga", d: "«Excel (vista filtrada)» baja solo lo que ves; «Excel (toda la comunidad)» baja la base completa." },
      ],
      ojo: "Son datos personales de las familias: descarga solo lo necesario y no los reenvíes fuera del equipo. «Modo prueba» no es para practicar: muestra solo los registros de prueba que quedaron en el CRM (PRUEBA, EXAGONO, TEST…). Para trabajar, usa «Datos reales».",
      manual: "manuales/descargas-maestros.html",
    },

    // ── Visitas ───────────────────────────────────────────────────────────
    r28: {
      resumen: "Cómo trabajan las guías: cuántas visitas hacen, cuándo y qué tan a tiempo las capturan.",
      puntos: [
        { t: "Empieza por Conclusiones", d: "Resume en tarjetas el día y la semana más productivos, la guía con más visitas, la brecha entre guías, la disciplina de captura y la comparación entre comunidades." },
        { t: "Mes en curso", d: "La cobertura acumulada del mes, los niños visitados por semana y el avance de cada guía hacia el 100%." },
        { t: "Resumen, Comparativa y CC vs CI", d: "Tendencias por día, semana y mes; el ranking y la comparación entre guías; y las mismas gráficas lado a lado por comunidad. Filtra arriba por mes, comunidad y cabecera/ejidos." },
      ],
      ojo: "«Disciplina de captura» compara el día de la visita contra el día en que se registró: capturar tarde no es visitar menos, pero retrasa los reportes. Si una guía aparece dos veces en la lista (con o sin acento o mayúsculas), suma ambas.",
      manual: "manuales/desempeno-visitas.html",
    },
    r46: planMes,
    r47: planMes,
    r48: planMes,
    r51: {
      resumen: "Los tres KPIs de cada guía contra la meta del 90%: visitas, registro completo y formación.",
      puntos: [
        { t: "Elige comunidad, mes y forma de medir", d: "Todas, Cuatro Ciénegas o Independencia; el mes; y «Familia» o «Niño». Niño es igual al indicador de visitas del Reporte Mensual." },
        { t: "La tabla por guía", d: "Un renglón por guía con sus tres porcentajes; da clic en un encabezado para ordenar. Debajo, «¿Qué campo frena el registro completo?» dice qué dato falta más." },
        { t: "Detalle por guía", d: "Al desplegar a una guía ves quiénes le faltan: familias o niños sin visita y visitados con registro incompleto." },
      ],
      ojo: "Por familia es más estricto: una familia cuenta como visitada solo si TODOS sus P2040 tuvieron visita. Formación se mide por las visitas con tema registrado.",
      manual: "manuales/kpis-guias.html",
    },
    r52: {
      resumen: "Para coordinadoras: cómo va cada guía con las visitas del mes y a quién le falta visitar.",
      puntos: [
        { t: "Elige tu comunidad y el mes", d: "Cuatro Ciénegas o Independencia. Arriba ves cuántos niños lleva visitados el equipo, cuántas visitas faltan para el 90 % y cuántas por día hábil." },
        { t: "Tus guías", d: "Una tarjeta por guía con su % de niños visitados y una etiqueta: buen ritmo, en camino o le vendría bien un empujón. «Quién necesita apoyo» las ordena de la que va más atrás a la que va mejor." },
        { t: "Toca a una guía", d: "Ves sus niños, familias y embarazadas por visitar, y puedes copiar un mensaje de ánimo para WhatsApp. «Lista del equipo en Excel» baja a todos los que faltan." },
      ],
      ojo: "Mismas cifras que el Reporte Mensual: no cuenta a los bimestrales que descansan. En el mes en curso la etiqueta compara contra el ritmo esperado a la fecha, no contra la meta final.",
      manual: "manuales/avance-visitas-guias.html",
    },
    r30: {
      resumen: "Arma e imprime la lista de visitas de cada guía, con la información que tú elijas.",
      puntos: [
        { t: "Elige la lista y carga la base", d: "Primero elige «Niños Plan 20·40» o «Mamás embarazadas». Luego sube la base exportada de Power BI (.xlsx o .csv) y, si quieres anexar a las mamás embarazadas, también su base (opcional). Después, «Cargar y configurar»." },
        { t: "Sigue los 7 pasos", d: "Comunidad y guías → qué columnas lleva cada lista → pendientes y cumpleaños → temas de formación → comentarios → encabezado y orden → impresión (papel, orientación, tamaño de letra)." },
        { t: "Imprime", d: "«Imprimir / PDF» genera una lista por guía, cada una en hojas separadas." },
      ],
      ojo: "La lista sale con los datos de la base que cargaste: si la base es vieja, la lista también. Usa siempre la más reciente.",
      manual: "manuales/generador-listados.html",
    },

    // ── Acompañamiento ────────────────────────────────────────────────────
    r33: {
      resumen: "Seguimiento de las mamás embarazadas: riesgo, pendientes y próximos partos.",
      puntos: [
        { t: "Elige comunidad", d: "Cuatro Ciénegas, Independencia o «Coordinación» para ver ambas. «Cambiar comunidad» te regresa a elegir." },
        { t: "Resumen", d: "Cuántas embarazadas vigentes hay por riesgo calculado (alto, medio, sin factores, sin ficha prenatal) y qué factores de riesgo pesan más." },
        { t: "Qué hacer esta semana", d: "La lista de acción: llenar fichas prenatales, cerrar embarazos que siguen abiertos aunque ya nació el bebé, y visitar a quienes están a 4 semanas o menos de dar a luz. «Exportar pendientes a Excel» la baja." },
      ],
      ojo: "«Sin ficha prenatal» no significa sin riesgo: significa que falta la valoración clínica. Para cerrar un embarazo en el CRM: perfil → Datos personales → Salud → Más acciones → Cerrar embarazo.",
      manual: "manuales/embarazadas.html",
    },
    r31: {
      resumen: "La formación que dan las guías: a cuántas familias llega, qué temas y si va acorde a la edad.",
      puntos: [
        { t: "Cuatro secciones", d: "1 · P2040 por familia (cuántos niños tiene cada familia y dónde se concentran) · 2 · Formación acorde a la edad · 3 · Temas y familias alcanzadas · 4 · Pilares." },
        { t: "Mes o año", d: "Puedes ver el mes de cierre o el acumulado del año. Filtra por comunidad, localidad, guía o pilar." },
        { t: "¿La carpeta correspondió a la edad?", d: "La sección 2 muestra, mes a mes, si el tema dado coincide con la edad del niño, y qué carpetas se salen más de rango." },
      ],
      ojo: "Una familia con varios P2040 cuenta una vez en «familias alcanzadas», aunque reciba varias carpetas. El reporte muestra el último mes cerrado, no el mes en curso.",
      manual: "manuales/formacion.html",
    },

    // ── Equipo de guías ────────────────────────────────────────────────────────
    r42: {
      resumen: "Qué documentos e indicadores le faltan a cada niño, para cerrar capturas.",
      puntos: [
        { t: "Filtra primero", d: "Comunidad, guía y localidad aplican a los conteos, a las listas y a las descargas." },
        { t: "Archivos o indicadores", d: "En «Archivos» cada tarjeta es un documento (foto, CURP, acta, constancias…) con cuántos niños lo deben; «Ver lista» abre quiénes son. «Indicadores» hace lo mismo por indicador." },
        { t: "Por niño", d: "Muestra todo lo que le falta a cada niño en un solo lugar: útil para preparar la visita." },
      ],
      ojo: "Cada lista se descarga en Excel con edad, comunidad, teléfono, guía y qué falta. «Excel · todos los pendientes» baja todo de una vez.",
      manual: "manuales/pendientes-nino.html",
    },

    // ── Reportes por pilar · Salud ────────────────────────────────────────
    r40: {
      resumen: "El seguimiento nutricional de Independencia: quién se mide, cada cuándo y cómo sale.",
      puntos: [
        { t: "Dos tipos de medición", d: "PIN es la consulta con la nutrióloga (da un DX); la cinta MUAC la miden las guías en campo (da un semáforo). El Resumen reparte a todos los niños en tres grupos que suman el 100%: en PIN, solo MUAC y sin medición." },
        { t: "Pestañas", d: "Resumen, Actividad por mes/semana, Por niño, Por guía y localidad, y Definiciones." },
        { t: "Filtros", d: "En «Filtros» acotas el periodo, el programa, la racha de meses seguidos medidos y la guía." },
      ],
      ojo: "«Racha» son los meses seguidos con medición PIN: una racha corta puede ser un niño que dejó de asistir. Si un término no te queda claro, la pestaña Definiciones lo explica.",
      manual: "manuales/seguimiento-nutricional.html",
    },
    r36: {
      resumen: "Las cartillas de vacunación de Independencia: cuáles se subieron, cuáles faltan y cuáles corregir.",
      puntos: [
        { t: "Cuatro pestañas", d: "Subidas por mes · Pendientes de carga (niños sin cartilla) · Por actualizar (cartillas viejas, agrupadas por antigüedad) · Corrección de captura (donde la cartilla no coincide con lo capturado en el CRM)." },
        { t: "Filtra", d: "Generación, guía, localidad, mes o búsqueda por nombre. Cada lista se descarga en Excel." },
        { t: "Estados de la cartilla", d: "Completa, parcial, ilegible, «no es cartilla» o con alerta. Las marcas de corrección dicen qué hacer: capturar vacunas, verificar o revisar." },
      ],
      ojo: "Este reporte es solo de Independencia.",
      manual: "manuales/cartillas-vacunacion.html",
    },
    r41: {
      resumen: "La cobertura de vacunación con los lineamientos 2026, vacuna por vacuna.",
      puntos: [
        { t: "Elige mes, comunidad y edad", d: "Los botones de mes, la comunidad y el rango de edad (desde–hasta) recalculan todo." },
        { t: "Por dosis o por esquema", d: "«Por dosis» muestra cada una de las 16 vacunas; «Por esquema» cuenta niños con su esquema completo." },
        { t: "Pestañas", d: "Resumen, Indicadores, Tendencia general, Detalle por guía y Detalle por generación." },
      ],
      ojo: "Son lineamientos preliminares 2026: los números pueden diferir del indicador oficial. Al final, «Reglas de cálculo» y «Reglas que se conservan del oficial» explican las diferencias.",
      manual: "manuales/vacunas-lineamientos.html",
    },

    // ── Reportes por pilar · Educación ────────────────────────────────────
    r49: {
      resumen: "Quién debe inscribirse al próximo ciclo escolar y cómo va su preinscripción.",
      puntos: [
        { t: "Filtra primero", d: "Por comunidad, guía y localidad; los conteos, listas y descargas respetan los filtros." },
        { t: "Cuatro grupos", d: "Entran a preescolar · Pasan a primaria · Sin escuela registrada · Continúan en su nivel. Cada tarjeta tiene «Ver lista» y «Excel»." },
        { t: "Avance por guía", d: "Muestra cuántos niños de cada guía ya tienen preinscripción, para priorizar visitas antes de las fechas de inscripción." },
      ],
      ojo: "«Sin escuela registrada» puede ser falta de captura en el CRM, no necesariamente un niño fuera de la escuela: confírmalo en la visita.",
      manual: "manuales/transiciones-inscripciones.html",
    },
    r50: {
      resumen: "Si cada niño cursa el grado que le toca por su edad, y qué grados no cursó.",
      puntos: [
        { t: "1 · ¿Cursa el grado que le toca?", d: "Reparte a los niños en: en su grado, un grado abajo, dos o más abajo y adelantado, y luego por grado que cursan." },
        { t: "2 · Huecos en su trayectoria", d: "Qué grados se saltaron o no cursaron, por nivel, y cuántos años de preescolar tuvieron quienes ya están en primaria." },
        { t: "Datos por actualizar", d: "Niños con datos escolares viejos o incompletos: son la lista para corregir en las visitas." },
      ],
      ojo: "Solo es rezago confirmado si el grado se actualizó este ciclo; lo demás es «por confirmar». Filtra con «Grado actualizado este ciclo» antes de sacar conclusiones.",
      manual: "manuales/rezago-educativo.html",
    },

    // ── Análisis y diagnósticos ───────────────────────────────────────────
    r45: {
      resumen: "Familias con señales de situación crítica en los comentarios de visita, desde enero 2025.",
      puntos: [
        { t: "Antes de entrar", d: "El archivo está cifrado: pide la contraseña a Análisis. No la compartas por chat ni correo." },
        { t: "Resumen", d: "Familias con señal, con señal crítica, total de señales y familias con señal psicológica; la evolución mes a mes y el resumen por tipo de señal." },
        { t: "Familias a canalizar", d: "La lista para actuar, ordenada por puntaje (crítica = 5, alta = 2, media = 1 por señal). Filtra por mes, comunidad y sector." },
      ],
      ojo: "Es un tamizaje automático de texto, no un diagnóstico: antes de canalizar, lee el comentario completo. La señal se liga a la persona visitada, pero puede referirse a otro miembro del hogar.",
    },
  };
})();
