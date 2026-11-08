/* ============================================================
   VetLu — "¿Por qué hace eso?": casos de comportamiento y alimentación
   sp: perro | gato | conejo | hamster
   v: veredicto → [texto, tono]  tono: ok | ojo | vet
   ============================================================ */
(function () {
  var C = [
    /* ---------------- PERROS ---------------- */
    {
      id: "camote", sp: "perro", em: "🍠", tema: "Alimentación",
      q: "¿Mi perro puede comer camote crudo?",
      v: ["Mejor cocido", "ojo"],
      corto: "No es tóxico, pero crudo es difícil de digerir. Cocido y sin cáscara es un buen premio.",
      porqueT: "¿Por qué no crudo?",
      porque: ["El almidón crudo es difícil de digerir para el perro.", "Por eso puede causarle gases, vómitos o diarrea.", "Los trozos duros pueden obstruir el intestino."],
      hacer: ["Ofrézcalo sancochado, sin cáscara, sal ni azúcar.", "Máximo 1–2 cucharadas al día en un perro mediano.", "Guárdelo fuera de su alcance: su olor dulce lo atrae."],
      vet: ["Vómitos repetidos", "Abdomen hinchado", "Más de 24 horas sin defecar"],
      tip: "Congelado dentro de un juguete rellenable, es un premio sano y entretenido."
    },
    {
      id: "plastico", sp: "perro", em: "🧴", tema: "Comportamiento",
      q: "¿Por qué mi perro come plástico, medias o piedras?",
      v: ["Peligroso", "vet"],
      corto: "Se denomina pica. Puede deberse a aburrimiento, ansiedad o un problema de salud, y puede causar una obstrucción intestinal.",
      porque: ["Aburrimiento o poco ejercicio.", "Ansiedad al quedarse solo.", "Parásitos, anemia o una dieta insuficiente."],
      hacer: ["Solicite una consulta para descartar causas médicas.", "Retire bolsas, medias y objetos pequeños de su alcance.", "Cambie el objeto por un premio en lugar de perseguirlo.", "Ofrézcale juguetes resistentes para morder."],
      vet: ["Vómitos repetidos", "No defeca o lo hace con esfuerzo", "Se tragó un objeto grande o un hilo"],
      tip: "No le provoque el vómito en casa: un objeto con punta puede dañar el esófago."
    },
    {
      id: "moscas", sp: "perro", em: "🪰", tema: "Comportamiento",
      q: "¿Por qué mi perro atrapa moscas?",
      v: ["Normal", "ok"],
      corto: "Es instinto de caza. Solo preocupa si intenta atrapar moscas que no existen.",
      porque: ["Instinto cazador.", "Aburrimiento.", "Si muerde el aire: malestar digestivo, problemas de visión o convulsiones leves."],
      hacer: ["Reduzca las moscas: basura cerrada y heces recogidas a diario.", "No use insecticidas cerca de él.", "Si muerde el aire, grábelo y muéstrenos el video."],
      vet: ["Muerde el aire sin moscas", "Se queda con la mirada fija", "Se le hincha la cara tras atrapar una abeja"],
      tip: "Los juegos de búsqueda canalizan su instinto de forma segura."
    },
    {
      id: "orina", sp: "perro", em: "💧", tema: "Comportamiento",
      q: "¿Por qué mi perro orina en cualquier lugar?",
      v: ["Tiene solución", "ojo"],
      corto: "Puede ser marcaje, falta de entrenamiento o emoción, pero también una infección urinaria.",
      porque: ["Infección urinaria: orina poco y muchas veces.", "Marcaje, sobre todo sin esterilizar.", "Entrenamiento incompleto, miedo o emoción."],
      hacer: ["Realice un análisis de orina.", "Sáquelo a horarios fijos y prémielo al orinar afuera.", "No lo castigue.", "Limpie con limpiador enzimático, nunca con lejía."],
      vet: ["Orina con sangre o con esfuerzo", "Gotea orina dormido", "Toma mucha más agua"],
      tip: "La esterilización reduce notablemente el marcaje."
    },
    {
      id: "heces", sp: "perro", em: "🚫", tema: "Comportamiento",
      q: "¿Por qué mi perro come heces?",
      v: ["Corregible", "ojo"],
      corto: "Se denomina coprofagia. Es frecuente en cachorros, pero puede indicar hambre o parásitos.",
      porque: ["Imitación o aburrimiento.", "Temor al castigo.", "Dieta insuficiente o parásitos."],
      hacer: ["Recoja las heces de inmediato.", "Desparasítelo y revise su alimento.", "Coloque el arenero del gato fuera de su alcance."],
      vet: ["Pérdida de peso", "Diarrea o hambre excesiva"],
      tip: "Llámelo y prémielo apenas termine de defecar."
    },
    {
      id: "pasto", sp: "perro", em: "🌱", tema: "Comportamiento",
      q: "¿Por qué mi perro come pasto?",
      v: ["Normal", "ok"],
      corto: "Generalmente le gusta o busca fibra. Rara vez indica enfermedad.",
      porque: ["Gusto por la textura.", "Necesidad de fibra.", "Ocasionalmente, malestar estomacal."],
      hacer: ["Evite parques fumigados.", "Desparasítelo cada 3 meses."],
      vet: ["Vomita con frecuencia", "Rechaza su alimento"],
      tip: "Puede sembrarle una maceta de trigo o avena."
    },
    {
      id: "patas", sp: "perro", em: "🐾", tema: "Salud",
      q: "¿Por qué mi perro se lame las patas constantemente?",
      v: ["Revisar", "ojo"],
      corto: "Suele indicar alergia, hongos, una herida o ansiedad.",
      porque: ["Alergias.", "Hongos o bacterias entre los dedos.", "Heridas o dolor."],
      hacer: ["Revise entre los dedos.", "Seque bien sus patas tras el baño.", "No aplique cremas de uso humano."],
      vet: ["Patas rojas o con mal olor", "Cojea", "Se provoca heridas"],
      tip: "El pelo rojizo entre los dedos indica que se lame en exceso."
    },
    {
      id: "trasero", sp: "perro", em: "🛷", tema: "Salud",
      q: "¿Por qué mi perro arrastra el trasero?",
      v: ["Revisar", "ojo"],
      corto: "Casi siempre se debe a glándulas anales llenas o irritadas.",
      porque: ["Glándulas anales obstruidas.", "Parásitos.", "Alergias."],
      hacer: ["Desparasítelo.", "Añada fibra a su dieta.", "No vacíe las glándulas sin indicación."],
      vet: ["Lo hace varios días seguidos", "Hinchazón o sangrado en la zona"],
      tip: "El vaciado de glándulas en consulta alivia de inmediato."
    },
    {
      id: "cola", sp: "perro", em: "🌀", tema: "Comportamiento",
      q: "¿Por qué mi perro persigue su cola?",
      v: ["Depende", "ojo"],
      corto: "En cachorros es juego. En adultos puede indicar aburrimiento, pulgas o estrés.",
      porque: ["Exceso de energía.", "Pulgas o picazón.", "Conducta compulsiva."],
      hacer: ["Revise si tiene pulgas.", "Aumente el ejercicio.", "No celebre la conducta."],
      vet: ["Se lastima la cola", "No es posible interrumpirlo"],
      tip: "Un video ayuda a distinguir juego de compulsión."
    },
    {
      id: "rapido", sp: "perro", em: "⚡", tema: "Alimentación",
      q: "¿Es malo que mi perro coma muy rápido?",
      v: ["Riesgoso", "ojo"],
      corto: "Sí: puede vomitar y, en razas grandes, sufrir una torsión gástrica.",
      porque: ["Competencia con otros animales.", "Hambre previa, común en rescatados.", "Pocas comidas al día."],
      hacer: ["Use un plato de alimentación lenta.", "Divida la ración en 2 o 3 comidas.", "Evite el ejercicio justo después de comer."],
      vet: ["Abdomen hinchado con arcadas sin vómito (emergencia)"],
      tip: "Los perros adoptados suelen calmarse con el tiempo."
    },
    {
      id: "solo", sp: "perro", em: "🏠", tema: "Comportamiento",
      q: "¿Por qué llora o rompe cosas cuando se queda solo?",
      v: ["Ansiedad", "ojo"],
      corto: "Es ansiedad por separación, no venganza. Es común en perros adoptados.",
      porque: ["Cambio de hogar o rutina.", "Mucho tiempo solo.", "Poco ejercicio."],
      hacer: ["Paséelo antes de salir.", "Practique ausencias cortas y progresivas.", "Déjele un juguete rellenable."],
      vet: ["Se lastima intentando salir", "No mejora en algunas semanas"],
      tip: "Castigarlo al regresar aumenta la ansiedad."
    },
    {
      id: "estornudo", sp: "perro", em: "😮‍💨", tema: "Salud",
      q: "¿Por qué mi perro hace un ruido como si se ahogara?",
      v: ["Normal", "ok"],
      corto: "Probablemente es un estornudo invertido. Dura segundos y es inofensivo.",
      porque: ["Irritación nasal por polvo o perfume.", "Emoción o tirones de correa.", "Frecuente en razas pequeñas."],
      hacer: ["Mantenga la calma y acaricie su cuello.", "Use arnés en lugar de collar."],
      vet: ["Dura más de un minuto", "Encías moradas o desmayo (emergencia)"],
      tip: "Grabe el episodio para mostrarlo en consulta."
    },
    {
      id: "agua", sp: "perro", em: "🚰", tema: "Salud",
      q: "¿Es normal que mi perro tome mucha agua?",
      v: ["Revisar", "vet"],
      corto: "Si de pronto toma mucho más, puede indicar diabetes, problemas renales o una infección.",
      porque: ["Calor o ejercicio (normal).", "Alimento muy salado.", "Diabetes, enfermedad renal o infección uterina."],
      hacer: ["Mida cuánta agua toma en un día.", "Nunca le retire el agua.", "Lleve una muestra de orina a consulta."],
      vet: ["Toma el doble de lo habitual", "Hembra sin esterilizar, con flujo y decaída (emergencia)"],
      tip: "Un perro toma unos 50–60 ml de agua por kilo al día."
    },

    /* ---------------- GATOS ---------------- */
    {
      id: "arenero", sp: "gato", em: "🧺", tema: "Comportamiento",
      q: "¿Por qué mi gato orina fuera del arenero?",
      v: ["Revisar pronto", "vet"],
      corto: "Suele deberse a un problema urinario o a algo del arenero que no le agrada.",
      porque: ["Infección o cristales urinarios.", "Arenero sucio o mal ubicado.", "Estrés."],
      hacer: ["Realice un análisis de orina.", "Un arenero por gato más uno adicional.", "Límpielo a diario."],
      vet: ["Macho que no logra orinar (emergencia)", "Orina con sangre"],
      tip: "Si orina sobre su ropa o cama, suele ser estrés."
    },
    {
      id: "amasa", sp: "gato", em: "🍞", tema: "Comportamiento",
      q: "¿Por qué mi gato amasa con las patas?",
      v: ["Normal", "ok"],
      corto: "Es una conducta aprendida al lactar. Indica que se siente seguro.",
      porque: ["Recuerdo de la lactancia.", "Bienestar.", "Marca con su olor."],
      hacer: ["Mantenga sus uñas cortas.", "Use una manta gruesa si le incomoda."],
      vet: ["Chupa y come telas de forma obsesiva"],
      tip: "No lo castigue: es una muestra de afecto."
    },
    {
      id: "noche", sp: "gato", em: "🌙", tema: "Comportamiento",
      q: "¿Por qué mi gato corre de noche?",
      v: ["Normal", "ok"],
      corto: "Es un cazador nocturno y libera la energía acumulada.",
      porque: ["Instinto de caza.", "Energía acumulada.", "Aburrimiento."],
      hacer: ["Juegue con él antes de dormir.", "Aliméntelo después del juego."],
      vet: ["Gato mayor desorientado de noche", "Adelgaza pese a comer más"],
      tip: "No le preste atención si lo despierta de madrugada."
    },
    {
      id: "muerde", sp: "gato", em: "😾", tema: "Comportamiento",
      q: "¿Por qué mi gato muerde de repente al acariciarlo?",
      v: ["Normal", "ok"],
      corto: "Es sobreestimulación: las caricias le resultan molestas.",
      porque: ["Caricias prolongadas.", "Zonas sensibles como el abdomen.", "Señales de aviso no percibidas."],
      hacer: ["Observe si mueve la cola o baja las orejas.", "Acarícielo en cabeza y mejillas, en sesiones cortas."],
      vet: ["Muerde siempre al tocar la misma zona"],
      tip: "Las mordeduras de gato se infectan con facilidad."
    },

    /* ---------------- CONEJOS ---------------- */
    {
      id: "cecotrofos", sp: "conejo", em: "🫐", tema: "Alimentación",
      q: "¿Por qué mi conejo come sus propias heces?",
      v: ["Normal", "ok"],
      corto: "Come cecotrofos, unas heces blandas ricas en vitaminas que necesita.",
      porque: ["Su digestión procesa el alimento dos veces.", "Los cecotrofos aportan vitaminas y proteína."],
      hacer: ["No lo impida.", "Si quedan muchos sin comer, aumente el heno y reduzca la fruta."],
      vet: ["Cola sucia con frecuencia", "Deja de comer o de defecar (emergencia)"],
      tip: "El sobrepeso le impide alcanzar sus cecotrofos."
    },
    {
      id: "rechina", sp: "conejo", em: "😬", tema: "Salud",
      q: "¿Por qué mi conejo rechina los dientes?",
      v: ["Depende", "ojo"],
      corto: "Suave mientras lo acaricia es bienestar; fuerte y encorvado es dolor.",
      porque: ["Satisfacción (suave).", "Dolor abdominal o dental (fuerte)."],
      hacer: ["Observe su postura, apetito y heces."],
      vet: ["Permanece inmóvil", "Más de 12 horas sin comer (emergencia)"],
      tip: "Los conejos ocultan el dolor."
    },

    /* ---------------- HÁMSTERS ---------------- */
    {
      id: "barrotes", sp: "hamster", em: "🔒", tema: "Comportamiento",
      q: "¿Por qué mi hámster muerde los barrotes?",
      v: ["Estrés", "ojo"],
      corto: "Generalmente indica que la jaula es pequeña o poco estimulante.",
      porque: ["Jaula menor de 100 × 50 cm.", "Rueda pequeña.", "Poco sustrato."],
      hacer: ["Amplíe la jaula.", "Use una rueda de 28 cm o más.", "Ofrézcale madera para roer."],
      vet: ["Nariz lastimada o dientes torcidos"],
      tip: "En una jaula adecuada, casi nunca muerde los barrotes."
    },
    {
      id: "crias", sp: "hamster", em: "🐣", tema: "Comportamiento",
      q: "¿Por qué la hámster se come a sus crías?",
      v: ["Estrés", "ojo"],
      corto: "Ocurre cuando la madre percibe peligro, estrés o falta de alimento.",
      porque: ["Ruido o manipulación.", "Olor humano en las crías.", "Falta de proteína."],
      hacer: ["No toque el nido durante 2 semanas.", "Ubique la jaula en un lugar tranquilo.", "Ofrézcale huevo cocido."],
      vet: ["La madre está decaída o sangra"],
      tip: "Evite que los hámsters convivan en pareja."
    }
  ];

  var root = document.getElementById("casos");
  if (!root) return;
  var state = { sp: "todos", q: "" };
  function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function li(a) { return "<ul>" + a.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>"; }

  function render() {
    var q = norm(state.q);
    var list = C.filter(function (c) {
      return (state.sp === "todos" || c.sp === state.sp) &&
        (!q || norm([c.q, c.corto, c.tema].concat(c.porque, c.hacer).join(" ")).indexOf(q) > -1);
    });
    document.getElementById("casosCount").textContent = list.length;
    root.innerHTML = list.length ? list.map(function (c) {
      return '<article class="caso" id="' + c.id + '">' +
        '<button class="caso-head" aria-expanded="false"><span class="caso-em">' + c.em + '</span>' +
        '<span class="caso-q"><small>' + c.tema + '</small>' + c.q + '</span>' +
        '<span class="verdict ' + c.v[1] + '">' + c.v[0] + '</span><span class="plus">+</span></button>' +
        '<div class="acc-panel"><div><div class="caso-body">' +
        '<p class="caso-corto">' + c.corto + '</p>' +
        '<div class="caso-cols">' +
        '<div class="box"><h4>' + (c.porqueT || "¿Por qué ocurre?") + '</h4>' + li(c.porque) + '</div>' +
        '<div class="box"><h4>Qué hacer</h4>' + li(c.hacer) + '</div>' +
        '<div class="box vet"><h4>Acuda al veterinario si</h4>' + li(c.vet) + '</div>' +
        '</div>' +
        '<p class="caso-tip"><b>Consejo VetLu:</b> ' + c.tip + '</p>' +
        '</div></div></div></article>';
    }).join("") : '<p class="tox-empty">No encontramos ese caso. <a data-wa="Hola VetLu, tengo una consulta sobre el comportamiento de mi mascota">Consúltenos por WhatsApp</a>.</p>';
    root.querySelectorAll("[data-wa]").forEach(function (a) { a.href = window.VETLU.wa(a.getAttribute("data-wa")); a.target = "_blank"; });
  }

  root.addEventListener("click", function (e) {
    var b = e.target.closest(".caso-head");
    if (!b) return;
    var open = b.parentElement.classList.toggle("open");
    b.setAttribute("aria-expanded", open);
  });
  document.querySelector("[data-casos]").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-v]");
    if (!b) return;
    state.sp = b.dataset.v;
    this.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
    render();
  });
  document.getElementById("casosSearch").addEventListener("input", function (e) { state.q = e.target.value; render(); });

  // Abrir un caso desde un enlace (#plastico) o filtrar por especie (#perro)
  var h = location.hash.replace("#", "");
  var bySp = document.querySelector('[data-casos] [data-v="' + h + '"]');
  if (bySp) bySp.click(); else render();
  var target = h && document.getElementById(h);
  if (target && target.classList.contains("caso")) {
    target.classList.add("open");
    target.querySelector(".caso-head").setAttribute("aria-expanded", "true");
    setTimeout(function () { target.scrollIntoView({ block: "start" }); }, 200);
  }
})();
