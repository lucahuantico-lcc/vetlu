/* ============================================================
   VetLu — Interacciones de las páginas
   ============================================================ */
(function () {
  var C = window.VETLU;

  /* ---------- Ticker de curiosidades ---------- */
  var ticker = document.getElementById("ticker");
  if (ticker) {
    var datos = [
      "Los gatos pasan hasta el 70 % de su vida durmiendo",
      "La huella de la nariz de un perro es única",
      "Un conejo feliz salta y gira en el aire: se llama 'binky'",
      "Los hámsters pueden correr 9 km en una noche",
      "Los perros entienden unas 165 palabras",
      "Los gatos tienen 32 músculos en cada oreja",
      "Los dientes de un conejo crecen ~1 cm al mes",
      "Un perro puede oler el miedo a través del sudor humano",
      "Los gatos casi solo maúllan para comunicarse con humanos",
      "Adoptar salva dos vidas: la suya y la del siguiente rescatado"
    ];
    var html = datos.map(function (d) { return '<span class="ticker-item">' + d + "</span>"; }).join("");
    ticker.innerHTML = html + html;
  }

  /* ---------- Quiz: ¿qué mascota va contigo? ---------- */
  var quizBox = document.getElementById("quizBox");
  if (quizBox) {
    var Q = [
      ["¿Cómo es tu hogar?", [
        ["🏡 Casa con patio o jardín", { perro: 3, conejo: 1 }],
        ["🏢 Departamento", { gato: 2, conejo: 2, hamster: 1 }],
        ["🛏️ Una habitación", { hamster: 3, gato: 1 }],
        ["🌳 Departamento cerca de un parque", { perro: 2, gato: 1 }]
      ]],
      ["¿Cuánto tiempo puedes dedicarle al día?", [
        ["⏰ Más de 2 horas", { perro: 3 }],
        ["⌛ Alrededor de 1 hora", { conejo: 2, gato: 2 }],
        ["⏱️ 30 minutos", { hamster: 2, gato: 1 }],
        ["🌙 Solo por las noches", { hamster: 3, gato: 1 }]
      ]],
      ["¿Qué buscas en un compañero?", [
        ["🏃 Aventuras y paseos", { perro: 3 }],
        ["🛋️ Mimos y calma", { gato: 3, conejo: 1 }],
        ["🤓 Observarlo y aprender de él", { hamster: 2, conejo: 1 }],
        ["🎈 Juego y curiosidad", { conejo: 2, gato: 1, perro: 1 }]
      ]],
      ["¿Por cuánto tiempo puedes comprometerte?", [
        ["💍 15 años o más", { gato: 3, perro: 2 }],
        ["📅 Unos 10 años", { perro: 2, conejo: 2 }],
        ["🗓️ 2 a 3 años", { hamster: 3 }],
        ["❤️ Toda su vida, sea cual sea", { perro: 1, gato: 1, conejo: 1, hamster: 1 }]
      ]]
    ];
    var R = {
      perro: ["🐶", "¡Un perro!", "Tienes energía, tiempo y ganas de salir. Un perro adoptado será tu mejor compañero de aventuras."],
      gato: ["🐱", "¡Un gato!", "Valoras la calma y la independencia. Un gato te dará cariño a su ritmo (y mucha compañía)."],
      conejo: ["🐰", "¡Un conejo!", "Eres paciente y detallista. Un conejo te sorprenderá con su inteligencia y sus 'binkies'."],
      hamster: ["🐹", "¡Un hámster!", "Tu espacio y horario son ideales para un pequeño nocturno lleno de personalidad."]
    };
    // answers[n] = índice de la opción elegida en la pregunta n (permite volver atrás)
    var step = 0, answers = [];
    var backBtn = '<button type="button" class="quiz-back" data-back>← Anterior</button>';
    function score() {
      var s = { perro: 0, gato: 0, conejo: 0, hamster: 0 };
      answers.forEach(function (a, n) {
        var pts = Q[n][1][a][1];
        Object.keys(pts).forEach(function (k) { s[k] += pts[k]; });
      });
      return s;
    }
    function render() {
      var pct = step / Q.length * 100;
      if (step >= Q.length) {
        var s = score();
        var best = Object.keys(s).sort(function (a, b) { return s[b] - s[a]; })[0];
        var r = R[best];
        quizBox.innerHTML = '<div class="progress"><span style="width:100%"></span></div><div class="final"><span class="em">' + r[0] + '</span><h3 style="font-size:2.2rem">' + r[1] + '</h3><p class="lead" style="margin:0 auto 24px">' + r[2] + '</p>' +
          '<div class="btn-row" style="justify-content:center"><a href="adopcion.html#' + best + '" class="btn btn--terra">Conoce a los que buscan hogar <span class="arrow">→</span></a><a href="' + best + '.html" class="btn btn--ghost">Leer su guía</a><button class="btn btn--ghost" type="button" data-again>Repetir</button></div>' +
          '<div class="quiz-nav" style="justify-content:center">' + backBtn + '</div></div>';
        return;
      }
      var q = Q[step];
      quizBox.innerHTML = '<div class="progress"><span style="width:' + pct + '%"></span></div>' +
        '<p class="eyebrow">Pregunta ' + (step + 1) + ' de ' + Q.length + '</p><p class="qtext">' + q[0] + '</p>' +
        '<div class="opts">' + q[1].map(function (o, i) {
          return '<button type="button" data-i="' + i + '"' + (answers[step] === i ? ' class="chosen"' : '') + '>' + o[0] + '</button>';
        }).join("") + '</div>' +
        (step > 0 ? '<div class="quiz-nav">' + backBtn + '</div>' : '');
    }
    quizBox.addEventListener("click", function (e) {
      if (e.target.closest("[data-back]")) { step--; render(); return; }
      if (e.target.closest("[data-again]")) { step = 0; answers = []; render(); return; }
      var b = e.target.closest("[data-i]");
      if (!b) return;
      answers[step] = +b.dataset.i;
      answers.length = step + 1; // al cambiar una respuesta, se vuelven a contestar las siguientes
      step++;
      render();
    });
    render();
  }

  /* ---------- Formulario de cita → WhatsApp ---------- */
  var form = document.getElementById("citaForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ""; };
      var msg = "Hola VetLu 🐾, soy " + v("fNombre") + ".\n" +
        "Motivo: " + v("fMotivo") + "\n" +
        "Mascota: " + (v("fMascota") || "—") + " (" + v("fEspecie") + ")" +
        (v("fMsg") ? "\nDetalle: " + v("fMsg") : "");
      window.open(C.wa(msg), "_blank", "noopener");
    });
  }

  /* ---------- Filtros (productos y adopción) ---------- */
  document.querySelectorAll("[data-filter-group]").forEach(function (group) {
    var target = document.querySelectorAll(group.getAttribute("data-filter-group"));
    function apply(f) {
      group.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.f === f); });
      target.forEach(function (el) {
        var show = f === "todos" || (" " + el.dataset.cat + " ").indexOf(" " + f + " ") > -1;
        el.classList.toggle("hide", !show);
        el.style.display = show ? "" : "none";
      });
    }
    group.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-f]");
      if (b) apply(b.dataset.f);
    });
    var hash = location.hash.replace("#", "");
    if (hash && group.querySelector('[data-f="' + hash + '"]')) {
      apply(hash);
      setTimeout(function () { group.scrollIntoView({ behavior: "smooth", block: "start" }); }, 300);
    }
  });

  /* ---------- Favoritos en adopción ---------- */
  document.querySelectorAll(".heart").forEach(function (h) {
    var id = "vetlu-fav-" + h.dataset.id;
    try { if (localStorage.getItem(id)) { h.classList.add("on"); h.textContent = "❤️"; } } catch (e) {}
    h.addEventListener("click", function () {
      var on = h.classList.toggle("on");
      h.textContent = on ? "❤️" : "🤍";
      try { on ? localStorage.setItem(id, 1) : localStorage.removeItem(id); } catch (e) {}
    });
  });
})();
