/* ============================================================
   VetLu — Calculadora de edad en años humanos
   Fórmulas aproximadas usadas por la práctica veterinaria.
   ============================================================ */
window.VetAge = (function () {
  var SP = {
    perro: { label: "Perro", em: "🐶", maxM: 240, sizes: true },
    gato: { label: "Gato", em: "🐱", maxM: 300 },
    conejo: { label: "Conejo", em: "🐰", maxM: 168 },
    hamster: { label: "Hámster", em: "🐹", maxM: 48 }
  };
  var RATE = { pequeno: 4, mediano: 5, grande: 6, gigante: 7 };

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

  function stage(sp, months, size) {
    var y = months / 12;
    if (sp === "perro") {
      var senior = size === "gigante" ? 5 : size === "grande" ? 6 : 7;
      if (y < 1) return ["Cachorro", "Etapa de vacunas, socialización y mucho juego. Visítanos cada 3–4 semanas hasta completar su calendario."];
      if (y < 3) return ["Joven", "Energía al máximo: ejercicio diario, educación con refuerzo positivo y esterilización si aún no se hizo."];
      if (y < senior) return ["Adulto", "Mantén su peso ideal y su chequeo anual. Revisa dientes y piel en cada baño."];
      return ["Senior", "Chequeos cada 6 meses, análisis de sangre y cuidado de articulaciones. ¡Merece todos los mimos!"];
    }
    if (sp === "gato") {
      if (y < 1) return ["Gatito", "Vacunas, desparasitación y juego para cazar. Enséñale el arenero y el rascador desde ahora."];
      if (y < 3) return ["Joven", "Ideal para esterilizar y crear rutinas. Juegos de caza 2 veces al día."];
      if (y < 10) return ["Adulto", "Vigila su peso y que tome suficiente agua. Un chequeo al año."];
      return ["Senior", "Chequeos cada 6 meses: riñones, tiroides y dientes son prioridad."];
    }
    if (sp === "conejo") {
      if (y < 1) return ["Joven", "Mucho heno, espacio para correr y primera visita con veterinario de exóticos."];
      if (y < 5) return ["Adulto", "Revisión de dientes y peso cada 6–12 meses. Esterilizar previene problemas graves."];
      return ["Senior", "Revisión cada 6 meses. Atento a la artritis: suelos blandos y accesos bajos."];
    }
    if (months < 3) return ["Cría / joven", "Manipúlalo con calma y poco a poco para ganar su confianza."];
    if (months < 15) return ["Adulto", "Rueda grande, sustrato profundo y una revisión cada 6 meses."];
    return ["Senior", "Su metabolismo cambia rápido: controla peso, dientes y bultos."];
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
      '<div>' + speciesHTML +
      '<div class="field size-field"><span class="label">Tamaño</span><div class="chips">' +
      [["pequeno", "Pequeño <10 kg"], ["mediano", "Mediano 10–25 kg"], ["grande", "Grande 25–45 kg"], ["gigante", "Gigante +45 kg"]].map(function (s) {
        return '<button type="button" data-size="' + s[0] + '" aria-pressed="' + (s[0] === size) + '">' + s[1] + '</button>';
      }).join("") + '</div></div>' +
      '<div class="field"><label for="age-' + sp + '">Edad real</label><div class="range-row">' +
      '<input type="range" id="age-' + sp + '" min="1" step="1">' +
      '<output></output></div></div>' +
      '<p class="note">Cálculo aproximado basado en tablas veterinarias. Cada animal envejece distinto según raza, genética y cuidados.</p>' +
      '</div>' +
      '<div class="result" aria-live="polite"><span class="label">Equivale a</span><div class="years"></div><span class="stage"></span><p class="tip"></p></div>' +
      '</div>';

    var range = root.querySelector("input[type=range]");
    var out = root.querySelector("output");
    var yearsEl = root.querySelector(".years");
    var stageEl = root.querySelector(".stage");
    var tipEl = root.querySelector(".tip");
    var sizeField = root.querySelector(".size-field");

    function setSpecies(k) {
      sp = k;
      range.max = SP[k].maxM;
      if (months > SP[k].maxM) months = Math.round(SP[k].maxM / 2);
      range.value = months;
      sizeField.style.display = SP[k].sizes ? "" : "none";
      root.querySelectorAll("[data-sp]").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.sp === k); });
      update();
    }
    function update() {
      months = +range.value;
      out.textContent = fmt(months);
      var h = Math.round(human(sp, months, size));
      yearsEl.innerHTML = h + ' <small>años humanos</small>';
      var st = stage(sp, months, size);
      stageEl.textContent = SP[sp].em + " " + st[0];
      tipEl.textContent = st[1];
      var pct = (months - range.min) / (range.max - range.min) * 100;
      range.style.background = "linear-gradient(90deg, var(--terra) " + pct + "%, var(--sand) " + pct + "%)";
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
