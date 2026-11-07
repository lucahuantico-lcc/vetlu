/* ============================================================
   VetLu — Calculadora de edad en años humanos
   Fórmulas aproximadas usadas por la práctica veterinaria.
   ============================================================ */
window.VetAge = (function () {
  var SP = {
    perro: {
      label: "Perro", em: "🐶", maxM: 240, sizes: true, vida: "10–16 años",
      regla: "1.er año ≈ 15 · 2.º año ≈ 24 · luego +4 (pequeño), +5 (mediano), +6 (grande) o +7 (gigante) por año."
    },
    gato: {
      label: "Gato", em: "🐱", maxM: 300, vida: "12–18 años",
      regla: "1.er año ≈ 15 · 2.º año ≈ 24 · luego +4 años humanos por cada año."
    },
    conejo: {
      label: "Conejo", em: "🐰", maxM: 168, vida: "8–12 años",
      regla: "1.er año ≈ 21 · luego +6 años humanos por cada año."
    },
    hamster: {
      label: "Hámster", em: "🐹", maxM: 48, vida: "2–3 años",
      regla: "Cada mes ≈ 2 años humanos: a los 12 meses ya tiene unos 26."
    }
  };
  var RATE = { pequeno: 4, mediano: 5, grande: 6, gigante: 7 };

  /* Etapas: [nombre, fin en meses, consejo, frecuencia de visita] */
  function stages(sp, size) {
    if (sp === "perro") {
      var s = size === "gigante" ? 60 : size === "grande" ? 72 : 84;
      return [
        ["Cachorro", 12, "Etapa de vacunas, socialización y mucho juego. Completa su calendario antes de sacarlo a la calle.", "Cada 3–4 semanas"],
        ["Joven", 36, "Energía al máximo: ejercicio diario, educación con refuerzo positivo y esterilización si aún no se hizo.", "1 vez al año"],
        ["Adulto", s, "Mantén su peso ideal, cepilla sus dientes y revisa piel y oídos en cada baño.", "1 vez al año"],
        ["Senior", 240, "Chequeos con análisis de sangre, cuidado de articulaciones y paseos más cortos pero frecuentes.", "Cada 6 meses"]
      ];
    }
    if (sp === "gato") return [
      ["Gatito", 12, "Vacunas, desparasitación y juego de caza. Enséñale el arenero y el rascador desde ahora.", "Cada 3–4 semanas"],
      ["Joven", 36, "Ideal para esterilizar y crear rutinas. Juegos de caza 2 veces al día.", "1 vez al año"],
      ["Adulto", 120, "Vigila su peso y que tome suficiente agua: la comida húmeda ayuda a sus riñones.", "1 vez al año"],
      ["Senior", 300, "Riñones, tiroides y dientes son prioridad. Pon rampas o escalones a sus lugares altos.", "Cada 6 meses"]
    ];
    if (sp === "conejo") return [
      ["Joven", 12, "Mucho heno, espacio para correr y primera visita con veterinario de exóticos.", "Cada 6 meses"],
      ["Adulto", 72, "Revisa dientes y peso. Esterilizar previene problemas graves, sobre todo en hembras.", "Cada 6–12 meses"],
      ["Senior", 168, "Atento a la artritis: suelos blandos, accesos bajos y revisión dental frecuente.", "Cada 6 meses"]
    ];
    return [
      ["Joven", 6, "Manipúlalo con calma y poco a poco, con premios en tu mano, para ganar su confianza.", "Al adoptar"],
      ["Adulto", 18, "Rueda grande, sustrato profundo para excavar y una dieta variada.", "Cada 6 meses"],
      ["Senior", 48, "Su metabolismo cambia rápido: controla peso, dientes y cualquier bulto.", "Cada 3–4 meses"]
    ];
  }

  function human(sp, months, size) {
    var y = months / 12;
    if (sp === "perro" || sp === "gato") {
      var r = sp === "gato" ? 4 : RATE[size || "mediano"];
      if (y <= 1) return 15 * y;
      if (y <= 2) return 15 + 9 * (y - 1);
      return 24 + (y - 2) * r;
    }
    if (sp === "conejo") return y <= 1 ? 21 * y : 21 + (y - 1) * 6;
    if (sp === "hamster") return months * 2.2;
    return 0;
  }

  function stageOf(sp, months, size) {
    var st = stages(sp, size);
    for (var i = 0; i < st.length; i++) if (months < st[i][1]) return st[i];
    return st[st.length - 1];
  }

  function fmt(months) {
    var y = Math.floor(months / 12), m = months % 12;
    var s = [];
    if (y) s.push(y + (y === 1 ? " año" : " años"));
    if (m || !y) s.push(m + (m === 1 ? " mes" : " meses"));
    return s.join(" y ");
  }

  function mount(root, opts) {
    opts = opts || {};
    var sp = opts.species || "perro";
    var size = "mediano";
    var months = opts.months || 36;

    var speciesHTML = opts.lock ? "" :
      '<div class="field"><span class="label">Especie</span><div class="species">' +
      Object.keys(SP).map(function (k) {
        return '<button type="button" data-sp="' + k + '" aria-pressed="' + (k === sp) + '"><span class="em">' + SP[k].em + '</span>' + SP[k].label + '</button>';
      }).join("") + '</div></div>';

    root.innerHTML =
      '<div class="calc">' +
      '<div class="calc-in">' + speciesHTML +
      '<div class="field size-field"><span class="label">Tamaño</span><div class="chips">' +
      [["pequeno", "Pequeño <10 kg"], ["mediano", "Mediano 10–25 kg"], ["grande", "Grande 25–45 kg"], ["gigante", "Gigante +45 kg"]].map(function (s) {
        return '<button type="button" data-size="' + s[0] + '" aria-pressed="' + (s[0] === size) + '">' + s[1] + '</button>';
      }).join("") + '</div></div>' +
      '<div class="field"><div class="age-head"><label for="age-' + sp + '">Edad real</label><output></output></div>' +
      '<input type="range" id="age-' + sp + '" min="1" step="1">' +
      '<div class="range-ends"><span>1 mes</span><span class="max"></span></div></div>' +
      '<div class="rule"><b>Regla rápida</b><span class="rule-txt"></span></div>' +
      '<p class="note">Cálculo aproximado basado en tablas veterinarias. Cada animal envejece distinto según su raza, genética y cuidados.</p>' +
      '</div>' +
      '<div class="result" aria-live="polite">' +
      '<span class="label">Equivale a</span>' +
      '<div class="years"><span class="n"></span><small>años humanos</small></div>' +
      '<span class="stage"></span>' +
      '<p class="rtip"></p>' +
      '<div class="lifebar"><div class="lb-track"></div><span class="lb-dot"></span></div>' +
      '<div class="rstats"><div><b>Visita al veterinario</b><span class="visit"></span></div><div><b>Esperanza de vida</b><span class="life"></span></div></div>' +
      '</div>' +
      '</div>';

    var $ = function (s) { return root.querySelector(s); };
    var range = $("input[type=range]");

    function setSpecies(k) {
      sp = k;
      range.max = SP[k].maxM;
      if (months > SP[k].maxM) months = Math.round(SP[k].maxM / 2);
      range.value = months;
      $(".size-field").style.display = SP[k].sizes ? "" : "none";
      $(".range-ends .max").textContent = fmt(SP[k].maxM);
      $(".life").textContent = SP[k].vida;
      $(".rule-txt").textContent = SP[k].regla;
      root.querySelectorAll("[data-sp]").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.sp === k); });
      update();
    }

    function drawBar() {
      // Etapas de igual ancho; el punto se ubica proporcionalmente dentro de su etapa
      var st = stages(sp, size), w = 100 / st.length, prev = 0, pos = 100;
      for (var i = 0; i < st.length; i++) {
        var end = Math.min(st[i][1], SP[sp].maxM);
        if (months < end || i === st.length - 1) { pos = (i + Math.min(1, (months - prev) / (end - prev))) * w; break; }
        prev = end;
      }
      $(".lb-track").innerHTML = st.map(function (s) { return '<span style="width:' + w + '%"><i>' + s[0] + '</i></span>'; }).join("");
      $(".lb-dot").style.left = pos + "%";
    }

    function update() {
      months = +range.value;
      $("output").textContent = fmt(months);
      $(".years .n").textContent = Math.round(human(sp, months, size));
      var st = stageOf(sp, months, size);
      $(".stage").textContent = SP[sp].em + " " + st[0];
      $(".rtip").textContent = st[2];
      $(".visit").textContent = st[3];
      var pct = (months - range.min) / (range.max - range.min) * 100;
      range.style.background = "linear-gradient(90deg, var(--terra) " + pct + "%, var(--sand) " + pct + "%)";
      drawBar();
    }

    range.addEventListener("input", update);
    root.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      if (b.dataset.sp) setSpecies(b.dataset.sp);
      if (b.dataset.size) {
        size = b.dataset.size;
        root.querySelectorAll("[data-size]").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        update();
      }
    });
    if (sp === "hamster" && !opts.months) months = 12;
    setSpecies(sp);
  }

  function table(sp, size) {
    var rows = sp === "hamster" ? [3, 6, 12, 18, 24, 30, 36] :
      sp === "conejo" ? [6, 12, 24, 36, 60, 84, 120] : [6, 12, 24, 36, 60, 84, 120, 156, 180];
    return rows.map(function (m) { return [fmt(m), Math.round(human(sp, m, size))]; });
  }

  return { mount: mount, human: human, table: table, fmt: fmt };
})();

document.querySelectorAll("[data-age-calc]").forEach(function (el) {
  var sp = el.getAttribute("data-age-calc");
  VetAge.mount(el, sp ? { species: sp, lock: true } : {});
});
