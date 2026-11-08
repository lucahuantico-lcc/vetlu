/* ============================================================
   VetLu — Guías de cuidado por especie
   Cada página (perro.html, gato.html…) tiene <body data-animal="perro">
   y este archivo construye su contenido.
   ============================================================ */
(function () {
  function img(id, w) { return "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=" + (w || 1600) + "&q=75"; }

  var A = {
    perro: {
      nombre: "Perro", plural: "perros", em: "🐶",
      foto: "photo-1543466835-00a7907e9de1",
      tagline: "Leal por naturaleza, sano gracias a sus cuidados.",
      intro: "Un perro sano necesita rutina, ejercicio y controles veterinarios. Aquí encontrará lo esencial.",
      hechos: [["Vida", "10–16 años"], ["1 año", "≈ 15 humanos"], ["Paseo", "30–120 min/día"], ["Sueño", "12–14 h/día"]],
      curiosidades: [
        ["👃", "¿Qué tan bueno es su olfato?", "50×", "Tiene unos 300 millones de receptores olfativos; las personas, 6 millones."],
        ["🫆", "¿Su nariz es única?", "Sí", "El patrón de su nariz es tan único como una huella dactilar."],
        ["💤", "¿Los perros sueñan?", "Sí", "Tienen fase REM, igual que las personas."],
        ["🗣️", "¿Cuántas palabras entienden?", "~165", "Un perro promedio comprende unas 165 palabras y gestos."]
      ],
      etapas: [
        ["🍼", "Cachorro", "0 a 12 meses", "Desparasitación desde las 2 semanas y vacunas hasta los 4 meses.", "Cada 2–4 semanas"],
        ["⚡", "Joven", "1 a 3 años", "Educación, ejercicio y esterilización.", "1 vez al año"],
        ["🌿", "Adulto", "3 a 7 años", "Peso ideal e higiene dental.", "1 vez al año"],
        ["🧡", "Senior", "7 años a más", "Análisis de sangre y cuidado articular.", "Cada 6 meses"]
      ],
      si: [
        ["🥣", "Alimento balanceado", "Según su edad y tamaño."],
        ["🍗", "Pollo o pavo cocido", "Sin piel, huesos ni sal."],
        ["🥕", "Zanahoria y zapallo", "Cocidos o crudos, en trozos."],
        ["🍎", "Manzana o plátano", "Sin semillas, como premio."]
      ],
      no: [
        ["🍫", "Chocolate y café", "Pueden causar convulsiones."],
        ["🍇", "Uvas y pasas", "Dañan los riñones."],
        ["🧅", "Cebolla y ajo", "Provocan anemia."],
        ["🍬", "Xilitol", "Presente en chicles sin azúcar."],
        ["🦴", "Huesos cocidos", "Se astillan y perforan."]
      ],
      racion: "Cachorros: 3–4 comidas al día. Adultos: 2 comidas.",
      cuidados: [
        ["🚶", "Ejercicio", "Al menos 2 paseos diarios."],
        ["🛁", "Baño", "Cada 3 a 6 semanas."],
        ["🪥", "Dientes", "Cepillado 2–3 veces por semana."],
        ["✂️", "Uñas y oídos", "Uñas cada mes; oídos cada 15 días."],
        ["🧠", "Estimulación", "Juegos de olfato y juguetes rellenables."],
        ["🏷️", "Identificación", "Placa con su teléfono y microchip."]
      ],
      enfermedades: [
        { n: "Parvovirus", lvl: "alta", s: ["Vómitos y diarrea con sangre", "Decaimiento"], q: ["Acuda de inmediato a consulta", "Aíslelo de otros perros"], p: ["Vacuna al mes y medio y a los 2 meses y medio", "Revacunación anual"] },
        { n: "Moquillo", lvl: "alta", s: ["Secreción en ojos y nariz", "Tos, fiebre o temblores"], q: ["Atención veterinaria urgente", "Aislamiento"], p: ["Vacuna triple a los 2 y 3 meses", "Revacunación anual"] },
        { n: "Garrapatas y erliquiosis", lvl: "media", s: ["Fiebre", "Sangrado nasal o encías pálidas"], q: ["Retire la garrapata con pinza", "Solicite análisis de sangre"], p: ["Antipulgas al día", "Revisarlo tras cada paseo"] },
        { n: "Otitis", lvl: "media", s: ["Sacude la cabeza", "Mal olor en el oído"], q: ["No use hisopos", "Solicite consulta"], p: ["Secar bien sus orejas tras el baño"] },
        { n: "Golpe de calor", lvl: "alta", s: ["Jadeo excesivo", "Lengua muy roja o morada"], q: ["Llévelo a la sombra", "Moje patas y cuello con agua fresca", "Acuda a consulta"], p: ["Nunca lo deje en un auto cerrado", "Paseos en horas frescas"] }
      ],
      alarma: ["Vómitos o diarrea por más de 24 horas", "Abdomen hinchado con arcadas", "Dificultad para respirar", "Convulsiones", "Ingesta de algo tóxico"]
    },

    gato: {
      nombre: "Gato", plural: "gatos", em: "🐱",
      foto: "photo-1514888286974-6c03e2ca1dba",
      tagline: "Independiente, pero nunca indiferente a su cuidado.",
      intro: "Los gatos ocultan el dolor por instinto. Conocer sus señales y llevarlo a sus controles prolonga su vida.",
      hechos: [["Vida", "12–18 años"], ["1 año", "≈ 15 humanos"], ["Sueño", "12–16 h/día"], ["Dieta", "Carnívoro estricto"]],
      curiosidades: [
        ["😺", "¿Por qué ronronean?", "25–150 Hz", "Esa frecuencia se asocia con la reparación de tejidos."],
        ["🍭", "¿Perciben el sabor dulce?", "No", "No tienen receptores para el dulce."],
        ["🗨️", "¿A quién le maúllan?", "A usted", "Los gatos adultos casi solo maúllan a las personas."],
        ["👂", "¿Cuánto giran sus orejas?", "180°", "Cada oreja tiene 32 músculos."]
      ],
      etapas: [
        ["🍼", "Gatito", "0 a 12 meses", "Desparasitación al mes, triple felina a los 2 y 3 meses y rabia.", "Cada 3–4 semanas"],
        ["⚡", "Joven", "1 a 3 años", "Esterilización y rutinas de juego.", "1 vez al año"],
        ["🌿", "Adulto", "3 a 10 años", "Control de peso y consumo de agua.", "1 vez al año"],
        ["🧡", "Senior", "10 años a más", "Control renal, de tiroides y dental.", "Cada 6 meses"]
      ],
      si: [
        ["🥣", "Alimento para gatos", "Con taurina, esencial para su corazón."],
        ["🥫", "Comida húmeda", "Mejora su hidratación."],
        ["🍗", "Pollo o pescado cocido", "Sin espinas ni condimentos."],
        ["⛲", "Agua en fuente", "Prefieren el agua en movimiento."]
      ],
      no: [
        ["🥛", "Leche de vaca", "Les causa diarrea."],
        ["🧅", "Cebolla y ajo", "Provocan anemia."],
        ["🌸", "Lirios", "Mortales, incluso el polen."],
        ["🐶", "Alimento de perro", "Carece de taurina."],
        ["💊", "Paracetamol", "Una pastilla puede ser mortal."]
      ],
      racion: "Varias porciones pequeñas al día (3–4), medidas para evitar el sobrepeso.",
      cuidados: [
        ["🧺", "Arenero", "Uno por gato más uno adicional; limpieza diaria."],
        ["🪵", "Rascador", "Rascar es una necesidad natural."],
        ["🎣", "Juego", "10–15 minutos, dos veces al día."],
        ["🪟", "Ventanas con malla", "Previenen caídas graves."],
        ["🖌️", "Cepillado", "Semanal; diario en pelo largo."],
        ["🛋️", "Zonas altas", "Repisas y escondites le dan seguridad."]
      ],
      enfermedades: [
        { n: "Obstrucción urinaria", lvl: "alta", s: ["Va al arenero y no orina", "Orina con sangre"], q: ["En machos es una emergencia: acuda de inmediato"], p: ["Comida húmeda", "Arenero limpio"] },
        { n: "Gripe felina", lvl: "media", s: ["Estornudos y secreción nasal", "Ojos llorosos"], q: ["Solicite consulta", "Limpie ojos y nariz con suero"], p: ["Triple felina", "Revacunación anual"] },
        { n: "Leucemia felina (FeLV)", lvl: "alta", s: ["Pérdida de peso", "Infecciones frecuentes"], q: ["Prueba rápida en consulta"], p: ["Prueba antes de convivir con otros gatos", "Vacuna opcional"] },
        { n: "Enfermedad renal", lvl: "media", s: ["Bebe y orina mucho", "Pierde peso"], q: ["Análisis de sangre y orina", "Dieta renal"], p: ["Control anual desde los 7 años"] }
      ],
      alarma: ["Macho que no logra orinar", "Más de 24 horas sin comer", "Respira con la boca abierta", "Encías pálidas o amarillas", "Ingesta de una planta o medicamento"]
    },

    conejo: {
      nombre: "Conejo", plural: "conejos", em: "🐰",
      foto: "photo-1585110396000-c9ffd4e4b308",
      tagline: "Curioso, sensible y muy inteligente.",
      intro: "Vive hasta 12 años, necesita espacio y su dieta debe ser 80 % heno.",
      hechos: [["Vida", "8–12 años"], ["1 año", "≈ 21 humanos"], ["Dieta", "80 % heno"], ["Libertad", "3–4 h/día"]],
      curiosidades: [
        ["🦷", "¿Sus dientes dejan de crecer?", "Nunca", "Crecen alrededor de 1 cm al mes."],
        ["🤸", "¿Qué es un “binky”?", "Alegría", "Un salto con giro que expresa felicidad."],
        ["👀", "¿Cuánto ve sin girar?", "≈ 360°", "Sus ojos laterales le dan una visión casi total."],
        ["🤢", "¿Puede vomitar?", "No", "Por eso un problema digestivo siempre es urgente."]
      ],
      etapas: [
        ["🍼", "Gazapo", "0 a 6 meses", "No separarlo de la madre antes de las 8 semanas.", "Al adoptar"],
        ["⚡", "Joven", "6 a 12 meses", "Esterilización recomendada.", "Cada 6 meses"],
        ["🌿", "Adulto", "1 a 6 años", "Control dental y de peso.", "Cada 6–12 meses"],
        ["🧡", "Senior", "6 años a más", "Atención a la artritis.", "Cada 6 meses"]
      ],
      si: [
        ["🌾", "Heno ilimitado", "El 80 % de su dieta."],
        ["🥬", "Hojas verdes", "Lechuga romana, cilantro, perejil."],
        ["🟢", "Pellets de heno", "En poca cantidad."],
        ["🍓", "Fruta", "Solo un trozo pequeño como premio."]
      ],
      no: [
        ["🥗", "Lechuga americana", "Le causa diarrea."],
        ["🍞", "Pan y galletas", "Alteran su digestión."],
        ["🥑", "Palta", "Es mortal para conejos."],
        ["🥔", "Papa y camote", "Exceso de almidón."],
        ["🍖", "Carne o lácteos", "Es herbívoro estricto."]
      ],
      racion: "Heno a libre disposición, una taza de hojas verdes por kilo y pellets medidos.",
      cuidados: [
        ["🏠", "Espacio", "Debe poder dar tres saltos seguidos."],
        ["🔌", "Cables protegidos", "Roer es instintivo."],
        ["🚫", "Sin baños", "El agua le causa estrés; solo cepíllelo."],
        ["🤲", "Cómo cargarlo", "Nunca de las orejas."],
        ["🌡️", "Calor", "Sufre por encima de 28 °C."],
        ["🧸", "Compañía", "Necesita interacción diaria."]
      ],
      enfermedades: [
        { n: "Estasis gastrointestinal", lvl: "alta", s: ["Deja de comer", "No defeca"], q: ["Más de 12 horas sin comer es una emergencia"], p: ["Heno ilimitado", "Ejercicio diario"] },
        { n: "Problemas dentales", lvl: "media", s: ["Babeo", "Come menos"], q: ["Limado dental en consulta"], p: ["Heno y ramas para roer"] },
        { n: "Pasteurelosis", lvl: "media", s: ["Estornudos y secreción nasal"], q: ["Solicite consulta"], p: ["Heno sin polvo", "Buena ventilación"] },
        { n: "Golpe de calor", lvl: "alta", s: ["Respiración rápida", "Orejas calientes"], q: ["Llévelo a un lugar fresco", "Acuda a consulta"], p: ["Ambiente ventilado"] }
      ],
      alarma: ["Más de 12 horas sin comer o sin defecar", "Respira con la boca abierta", "Cabeza ladeada", "Diarrea líquida", "Una caída"]
    },

    hamster: {
      nombre: "Hámster", plural: "hámsters", em: "🐹",
      foto: "photo-1425082661705-1834bfd09dca",
      tagline: "Pequeño de tamaño, grande en personalidad.",
      intro: "Vive de 2 a 3 años y es nocturno. Necesita una jaula amplia y una rueda adecuada.",
      hechos: [["Vida", "2–3 años"], ["1 año", "≈ 26 humanos"], ["Activo", "De noche"], ["Recorre", "Hasta 9 km/noche"]],
      curiosidades: [
        ["🏃", "¿Cuánto corre?", "9 km", "En libertad recorre varios kilómetros cada noche."],
        ["🥜", "¿Para qué sirven sus mejillas?", "Despensa", "Sus abazones transportan alimento."],
        ["🦷", "¿Sus dientes crecen?", "Siempre", "Necesita roer para desgastarlos."],
        ["🙋", "¿Puede vivir en pareja?", "Sirio, no", "El hámster sirio es solitario."]
      ],
      etapas: [
        ["🍼", "Cría", "0 a 2 meses", "No separarlo de la madre antes de las 4 semanas.", "Al adoptar"],
        ["⚡", "Joven", "2 a 6 meses", "Ganar su confianza con premios.", "Cada 6 meses"],
        ["🌿", "Adulto", "6 a 18 meses", "Rueda adecuada y dieta variada.", "Cada 6 meses"],
        ["🧡", "Senior", "18 meses a más", "Control de peso, dientes y bultos.", "Cada 3–4 meses"]
      ],
      si: [
        ["🌰", "Mezcla para hámster", "Base de su dieta."],
        ["🥦", "Verduras", "Brócoli, zanahoria, pepino."],
        ["🥚", "Proteína", "Huevo cocido, 1–2 veces por semana."],
        ["💧", "Agua fresca", "Revise el bebedero a diario."]
      ],
      no: [
        ["🍊", "Cítricos", "Demasiado ácidos."],
        ["🧅", "Cebolla y ajo", "Tóxicos."],
        ["🍫", "Chocolate y dulces", "Tóxicos y causan diabetes."],
        ["🍬", "Alimentos pegajosos", "Obstruyen sus abazones."],
        ["🌰", "Almendras amargas", "Contienen cianuro."]
      ],
      racion: "Una cucharada de mezcla al día. Esconda parte para que la busque.",
      cuidados: [
        ["📏", "Jaula amplia", "Mínimo 100 × 50 cm."],
        ["🎡", "Rueda", "28 cm o más, sin barrotes."],
        ["🪨", "Sustrato", "15–20 cm para excavar."],
        ["🏖️", "Baño de arena", "Nunca con agua."],
        ["🌙", "Descanso", "No lo despierte de día."],
        ["🙌", "Manipulación", "Siempre cerca del suelo."]
      ],
      enfermedades: [
        { n: "Cola húmeda (diarrea)", lvl: "alta", s: ["Zona de la cola mojada", "Decaimiento"], q: ["Emergencia: acuda de inmediato"], p: ["Evitar cambios bruscos de dieta", "Jaula limpia"] },
        { n: "Dientes largos", lvl: "media", s: ["Dificultad para comer", "Pérdida de peso"], q: ["Corte dental en consulta"], p: ["Madera para roer"] },
        { n: "Tumores", lvl: "media", s: ["Bultos en el cuerpo"], q: ["Consulta pronta"], p: ["Revisarlo cada semana"] },
        { n: "Resfriado", lvl: "baja", s: ["Estornudos", "Ojos llorosos"], q: ["Solicite consulta"], p: ["Jaula lejos de corrientes de aire"] }
      ],
      alarma: ["Cola mojada", "Más de 24 horas sin comer", "Respiración ruidosa", "Heridas por pelea", "Inmóvil y frío"]
    }
  };

  var key = document.body.getAttribute("data-animal");
  var a = A[key];
  var root = document.getElementById("animal");
  if (!a || !root) return;

  document.title = a.nombre + "s: cuidados, edad y salud · VetLu";

  var letters = a.nombre.split("").map(function (c, i) {
    return '<span class="char" style="animation-delay:' + (0.15 + i * 0.07) + 's">' + c + '</span>';
  }).join("");

  var otros = Object.keys(A).filter(function (k) { return k !== key; });

  function list(arr) { return "<ul>" + arr.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>"; }

  root.innerHTML =
    /* 1. Intro a pantalla completa */
    '<section class="intro">' +
    '<div class="intro-bg"><img src="' + img(a.foto, 2000) + '" alt="' + a.nombre + '" fetchpriority="high"></div>' +
    '<div class="container" style="width:min(var(--max),100% - 32px)">' +
    '<a href="index.html" class="back fade-up" style="animation-delay:.1s"><span class="circle">←</span>Volver a VetLu</a>' +
    '<p class="eyebrow fade-up" style="color:var(--gold-soft);animation-delay:.2s">Guía de cuidado</p>' +
    '<h1 aria-label="' + a.nombre + '">' + letters + '</h1>' +
    '<p class="tagline fade-up" style="animation-delay:.7s">' + a.tagline + '</p>' +
    '<p class="lead fade-up" style="animation-delay:.85s">' + a.intro + '</p>' +
    '<div class="intro-facts fade-up" style="animation-delay:1s">' + a.hechos.map(function (h) { return "<div><b>" + h[0] + "</b>" + h[1] + "</div>"; }).join("") + '</div>' +
    '<div class="btn-row fade-up" style="animation-delay:1.15s"><a href="#cuidados" class="btn btn--light">Ver la guía <span class="arrow">↓</span></a>' +
    '<a href="adopcion.html#' + key + '" class="btn btn--ghost-light">Adoptar 🐾</a></div>' +
    '</div></section>' +

    /* Sub-navegación */
    '<nav class="subnav" aria-label="Secciones de la guía"><div class="container"><ul>' +
    [["cuidados", "¿Sabía que?"], ["edad", "Edad humana"], ["etapas", "Etapas y visitas"], ["comida", "Alimentación"], ["dia", "Cuidado diario"], ["salud", "Enfermedades"]].map(function (s) {
      return '<li><a href="#' + s[0] + '">' + s[1] + '</a></li>';
    }).join("") + '</ul></div></nav>' +

    /* 2. Curiosidades */
    '<section class="section" id="cuidados"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">¿Sabía que…?</p><h2>Datos <em>curiosos</em></h2></div>' +
    '<div class="grid grid-4">' + a.curiosidades.map(function (c, i) {
      return '<div class="flip reveal" data-delay="' + (i + 1) + '" tabindex="0"><div class="flip-inner">' +
        '<div class="flip-face flip-front"><span class="em">' + c[0] + '</span><span class="q">' + c[1] + '</span><small>Toque para ver ↻</small></div>' +
        '<div class="flip-face flip-back"><span class="big">' + c[2] + '</span><p>' + c[3] + '</p></div>' +
        '</div></div>';
    }).join("") + '</div></div></section>' +

    /* 3. Edad humana */
    '<section class="section section--sand" id="edad"><div class="container">' +
    '<div class="section-head center"><p class="eyebrow">Calculadora</p><h2>Su edad en <em>años humanos</em></h2></div>' +
    '<div class="reveal" data-age-calc="' + key + '"></div>' +
    '<div class="center" style="margin-top:28px"><a href="edad.html" class="btn btn--ghost">Ver todas las especies <span class="arrow">→</span></a></div>' +
    '</div></section>' +

    /* 4. Etapas + visitas */
    '<section class="section" id="etapas"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">Etapas de vida</p><h2>¿Cada cuánto debe <em>visitarnos?</em></h2></div>' +
    '<div class="timeline">' + a.etapas.map(function (e, i) {
      return '<div class="t-step reveal" data-delay="' + (i + 1) + '"><div class="t-dot">' + e[0] + '</div><span class="when">' + e[2] + '</span><h3>' + e[1] + '</h3><p>' + e[3] + '</p><span class="freq">🩺 ' + e[4] + '</span></div>';
    }).join("") + '</div></div></section>' +

    /* 5. Comida */
    '<section class="section section--sage" id="comida"><div class="container">' +
    '<div class="section-head center"><p class="eyebrow">Alimentación</p><h2>Lo que <em>sí</em> y lo que <em>no</em></h2>' +
    '<p class="lead">' + a.racion + '</p></div>' +
    '<div class="food">' +
    '<div class="food-col yes reveal"><h3><span class="tag">✓</span>Puede comer</h3><ul>' + a.si.map(function (f) { return '<li><span class="em">' + f[0] + '</span><div><b>' + f[1] + '</b><span>' + f[2] + '</span></div></li>'; }).join("") + '</ul></div>' +
    '<div class="food-col no reveal" data-delay="2"><h3><span class="tag">✕</span>Nunca le dé</h3><ul>' + a.no.map(function (f) { return '<li><span class="em">' + f[0] + '</span><div><b>' + f[1] + '</b><span>' + f[2] + '</span></div></li>'; }).join("") + '</ul></div>' +
    '</div>' +
    '<div class="center" style="margin-top:32px"><a href="comida-prohibida.html#' + key + '" class="btn btn--terra">Lista completa de alimentos prohibidos <span class="arrow">→</span></a></div>' +
    '</div></section>' +

    /* 6. Cuidado diario */
    '<section class="section" id="dia"><div class="container">' +
    '<div class="section-head section-head--split"><div><p class="eyebrow">Rutina</p><h2>Cuidado <em>diario</em></h2></div>' +
    '<p class="lead">¿Tiene una conducta extraña? <a href="por-que-hace-eso.html#' + key + '" style="color:var(--terra);font-weight:700">Consulte las causas →</a></p></div>' +
    '<div class="grid grid-3">' + a.cuidados.map(function (c, i) {
      return '<div class="card reveal" data-delay="' + (i % 3 + 1) + '"><div class="icon">' + c[0] + '</div><h3>' + c[1] + '</h3><p>' + c[2] + '</p></div>';
    }).join("") + '</div></div></section>' +

    /* 7. Enfermedades */
    '<section class="section section--sand" id="salud"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">Salud</p><h2>Enfermedades <em>frecuentes</em></h2></div>' +
    '<div class="acc">' + a.enfermedades.map(function (d, i) {
      var lvl = { alta: "Urgente", media: "Atención pronta", baja: "Leve" }[d.lvl];
      return '<div class="acc-item' + (i === 0 ? " open" : "") + '"><button class="acc-btn" aria-expanded="' + (i === 0) + '"><span class="lvl ' + d.lvl + '">' + lvl + '</span><span>' + d.n + '</span><span class="plus">+</span></button>' +
        '<div class="acc-panel"><div><div class="acc-body">' +
        '<div class="box"><h4>Señales</h4>' + list(d.s) + '</div>' +
        '<div class="box"><h4>Qué hacer</h4>' + list(d.q) + '</div>' +
        '<div class="box"><h4>Prevención</h4>' + list(d.p) + '</div>' +
        '</div></div></div></div>';
    }).join("") + '</div>' +
    '<div class="alert reveal"><span class="em">🚨</span><div><h3>Acuda de inmediato si presenta:</h3>' + list(a.alarma) +
    '<div class="btn-row" style="margin-top:22px"><a class="btn btn--light" data-wa="Hola VetLu, tengo una emergencia con mi ' + a.nombre.toLowerCase() + '">Emergencia por WhatsApp <span class="arrow">→</span></a></div></div></div>' +
    '<p class="disclaimer" style="margin-top:32px">Información referencial. No medique a su mascota sin indicación veterinaria.</p>' +
    '</div></section>' +

    /* 8. Adopción */
    '<section class="section--tight"><div class="container">' +
    '<div class="cta-band reveal"><div><p class="eyebrow" style="color:var(--gold-soft)">Adopte, no compre</p><h2>Hay ' + a.plural + ' esperando <em>un hogar</em></h2>' +
    '<p>Consulta gratis y 6 meses de plan de salud gratis al adoptar.</p></div>' +
    '<div class="btn-row"><a href="adopcion.html#' + key + '" class="btn btn--light">Conocerlos <span class="arrow">→</span></a></div></div>' +
    '</div></section>' +

    /* Otras guías */
    '<section class="section--tight" style="padding-top:0"><div class="container">' +
    '<p class="eyebrow">Otras guías</p><div class="grid grid-3">' + otros.map(function (k) {
      return '<a class="card card--link reveal" href="' + k + '.html"><div class="icon">' + A[k].em + '</div><h3>' + A[k].nombre + 's</h3><p>' + A[k].tagline + '</p><span class="more">Ver guía <span class="arrow">→</span></span></a>';
    }).join("") + '</div></div></section>';

  // Acordeón
  root.querySelectorAll(".acc-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      var it = b.parentElement;
      var open = it.classList.toggle("open");
      b.setAttribute("aria-expanded", open);
    });
  });

  // Sub-navegación activa
  var links = root.querySelectorAll(".subnav a");
  var ids = ["cuidados", "edad", "etapas", "comida", "dia", "salud"];
  var ticking = false;
  function spy() {
    var current = null;
    ids.forEach(function (id) { if (document.getElementById(id).getBoundingClientRect().top < 160) current = id; });
    links.forEach(function (l) {
      var on = l.getAttribute("href") === "#" + current;
      l.classList.toggle("active", on);
      if (on) l.parentElement.parentElement.scrollLeft = l.offsetLeft - 16; // mantiene visible la pestaña activa en celular
    });
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, { passive: true });
  spy();
})();
