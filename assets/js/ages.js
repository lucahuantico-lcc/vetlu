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
      regla: "Cada mes equivale a unos 2 años humanos."
    }
  };
  var RATE = { pequeno: 4, mediano: 5, grande: 6, gigante: 7 };

  /* Etapas: [nombre, fin en meses, consejo, frecuencia de visita] */
  function stages(sp, size) {
    if (sp === "perro") {
      var s = size === "gigante" ? 60 : size === "grande" ? 72 : 84;
      return [
        ["Cachorro", 12, "Complete sus vacunas antes de sacarlo a la calle.", "Cada 3–4 semanas"],
        ["Joven", 36, "Ejercicio diario, educación y esterilización.", "1 vez al año"],
        ["Adulto", s, "Mantenga su peso ideal y su higiene dental.", "1 vez al año"],
        ["Senior", 240, "Análisis de sangre y cuidado de articulaciones.", "Cada 6 meses"]
      ];
    }
    if (sp === "gato") return [
      ["Gatito", 12, "Vacunas, desparasitación y uso del arenero.", "Cada 3–4 semanas"],
      ["Joven", 36, "Momento ideal para esterilizarlo.", "1 vez al año"],
      ["Adulto", 120, "Controle su peso y su consumo de agua.", "1 vez al año"],
      ["Senior", 300, "Controle riñones, tiroides y dientes.", "Cada 6 meses"]
    ];
    if (sp === "conejo") return [
      ["Joven", 12, "Heno ilimitado y primera visita veterinaria.", "Cada 6 meses"],
      ["Adulto", 72, "Control dental y esterilización.", "Cada 6–12 meses"],
      ["Senior", 168, "Suelos blandos y control dental frecuente.", "Cada 6 meses"]
    ];
    return [
      ["Joven", 6, "Gane su confianza con premios en la mano.", "Al adoptar"],
      ["Adulto", 18, "Rueda grande y sustrato profundo.", "Cada 6 meses"],
      ["Senior", 48, "Controle su peso, dientes y bultos.", "Cada 3–4 meses"]
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
      '<p class="note">Cálculo aproximado según tablas veterinarias.</p>' +
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
