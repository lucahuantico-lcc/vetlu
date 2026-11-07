/* Tablas de equivalencia de edad (edad.html) */
(function () {
  var box = document.getElementById("ageTables");
  if (!box || !window.VetAge) return;
  var cards = [
    ["🐶", "Perro pequeño / mediano / grande", null],
    ["🐱", "Gato", "gato"],
    ["🐰", "Conejo", "conejo"],
    ["🐹", "Hámster", "hamster"]
  ];
  box.innerHTML = cards.map(function (c) {
    var body;
    if (!c[2]) {
      var p = VetAge.table("perro", "pequeno"), m = VetAge.table("perro", "mediano"), g = VetAge.table("perro", "grande");
      body = '<thead><tr><th>Edad real</th><th>Pequeño</th><th>Mediano</th><th>Grande</th></tr></thead><tbody>' +
        p.map(function (r, i) { return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td><td>" + m[i][1] + "</td><td>" + g[i][1] + "</td></tr>"; }).join("") + "</tbody>";
    } else {
      body = '<thead><tr><th>Edad real</th><th>Edad humana</th></tr></thead><tbody>' +
        VetAge.table(c[2]).map(function (r) { return "<tr><td>" + r[0] + "</td><td>" + r[1] + " años</td></tr>"; }).join("") + "</tbody>";
    }
    var link = c[2] || "perro";
    return '<div class="card reveal"><div class="icon">' + c[0] + '</div><h3>' + c[1] + '</h3><div style="overflow-x:auto"><table class="age-table">' + body +
      '</table></div><a href="' + link + '.html#edad" class="btn btn--ghost" style="margin-top:20px">Guía completa <span class="arrow">→</span></a></div>';
  }).join("");
})();
