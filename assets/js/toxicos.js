/* ============================================================
   VetLu — Lista de alimentos y sustancias prohibidas
   sp: p = perro, g = gato, c = conejo, h = hámster
   lvl: mortal | grave | cuidado
   ============================================================ */
(function () {
  var CATS = [
    ["golosinas", "🍫", "Golosinas y bebidas"],
    ["frutas", "🍇", "Frutas"],
    ["verduras", "🧅", "Verduras y condimentos"],
    ["animal", "🍗", "Carnes, lácteos y huevos"],
    ["casa", "🍟", "Comida casera y snacks"],
    ["semillas", "🥜", "Frutos secos y semillas"],
    ["plantas", "🌿", "Plantas"],
    ["hogar", "💊", "Medicamentos y productos del hogar"]
  ];

  var T = [
    // ---------- Golosinas y bebidas ----------
    ["golosinas", "🍫", "Chocolate y cacao", "Chocolate, cacao en polvo, brownies, chocotejas", "pgch", "mortal", "Altera el ritmo cardíaco y provoca convulsiones."],
    ["golosinas", "☕", "Café, té y energizantes", "Café, té, mate, gaseosas cola", "pgch", "grave", "La cafeína causa taquicardia y temblores."],
    ["golosinas", "🍬", "Xilitol", "Chicles y caramelos sin azúcar, algunas mantequillas de maní", "pgch", "mortal", "En perros baja el azúcar en minutos y daña el hígado."],
    ["golosinas", "🍺", "Alcohol", "Cerveza, vino, pisco, postres con licor", "pgch", "mortal", "Provoca intoxicación grave incluso en poca cantidad."],
    ["golosinas", "🍞", "Panetón y queques con pasas", "Panetón, queque inglés, pan con pasas", "pg", "mortal", "Las pasas pueden causar falla renal."],
    ["golosinas", "🍰", "Dulces y postres", "Torta, helado, picarones, mazamorra", "pgch", "cuidado", "Exceso de azúcar y grasa: diarrea y obesidad."],
    ["golosinas", "🥤", "Gaseosas y jugos azucarados", "Gaseosas, refrescos, jugos de caja", "pgch", "cuidado", "Solo deben beber agua."],

    // ---------- Frutas ----------
    ["frutas", "🍇", "Uvas y pasas", "Frescas, secas o en jugo", "pg", "mortal", "Pueden causar falla renal aguda."],
    ["frutas", "🥑", "Palta", "Pulpa, pepa y cáscara", "pgch", "mortal", "Mortal en conejos y roedores; la pepa obstruye el intestino."],
    ["frutas", "🍑", "Pepas y semillas de frutas", "Durazno, mango, ciruela, cereza, manzana", "pgch", "grave", "Liberan cianuro y pueden obstruir el intestino."],
    ["frutas", "⭐", "Carambola", "Fruta estrella", "pg", "grave", "Daña los riñones."],
    ["frutas", "🍋", "Cítricos", "Limón, naranja, mandarina y sus cáscaras", "pgh", "cuidado", "Irritan el estómago."],
    ["frutas", "🍎", "Frutas dulces en hámsters enanos", "Plátano, uva, mango", "h", "cuidado", "Favorecen la diabetes."],
    ["frutas", "🌿", "Ruibarbo", "Tallos y hojas", "pgch", "grave", "Daña los riñones."],

    // ---------- Verduras y condimentos ----------
    ["verduras", "🧅", "Cebolla", "Cruda, cocida, en polvo o en salsas", "pgch", "grave", "Destruye los glóbulos rojos y causa anemia."],
    ["verduras", "🧄", "Ajo", "Diente, en polvo o en aderezos", "pgch", "grave", "Causa anemia. No sirve como antipulgas."],
    ["verduras", "🌱", "Poro y cebolla china", "Poro, cebolla china, cebollino", "pgch", "grave", "Causan anemia, igual que la cebolla."],
    ["verduras", "🥔", "Papa cruda o verde", "Papa cruda, cáscara verde, brotes", "pgch", "grave", "La solanina causa vómitos y debilidad."],
    ["verduras", "🍠", "Camote crudo", "Crudo, con cáscara o en dulce", "pgc", "cuidado", "Difícil de digerir. Cocido y sin cáscara sí es apto para perros."],
    ["verduras", "🍅", "Tomate verde y su planta", "Tomates verdes, hojas y tallos", "pgch", "grave", "Contienen solanina."],
    ["verduras", "🍄", "Hongos silvestres", "De jardines y parques", "pgch", "mortal", "Algunos destruyen el hígado en horas."],
    ["verduras", "🌶️", "Ají y rocoto", "Ají, rocoto, salsas picantes", "pgch", "cuidado", "Irritan la boca y el estómago."],
    ["verduras", "🫘", "Menestras crudas", "Frejol, pallar, garbanzo crudos", "pgch", "grave", "Provocan vómitos y diarrea intensos."],
    ["verduras", "🌽", "Choclo en coronta", "Mazorca o coronta", "pg", "grave", "Causa obstrucción intestinal."],
    ["verduras", "🥬", "Lechuga americana", "Lechuga iceberg", "ch", "cuidado", "Provoca diarrea."],
    ["verduras", "🥦", "Repollo y coliflor en exceso", "Repollo, coliflor, col", "c", "cuidado", "Producen gases peligrosos en conejos."],
    ["verduras", "🍆", "Berenjena cruda", "Fruto y planta", "ch", "cuidado", "Contiene solanina."],
    ["verduras", "🧂", "Nuez moscada", "Nuez moscada y especias fuertes", "pgch", "grave", "Causa temblores y convulsiones."],

    // ---------- Carnes, lácteos y huevos ----------
    ["animal", "🦴", "Huesos cocidos", "Pollo, cerdo o res", "pg", "grave", "Se astillan y perforan el intestino."],
    ["animal", "🐟", "Espinas de pescado", "Espinas y cabezas", "pg", "grave", "Se clavan en la boca o el intestino."],
    ["animal", "🥓", "Grasa y piel", "Piel de pollo, gordura, chicharrón", "pg", "grave", "Causan pancreatitis."],
    ["animal", "🥩", "Carne o pescado crudos", "Carne cruda, ceviche", "pgh", "cuidado", "Riesgo de bacterias y parásitos."],
    ["animal", "🥚", "Huevo crudo", "Huevo crudo o en masas", "pg", "cuidado", "Riesgo de salmonela. Cocido sí es apto."],
    ["animal", "🫀", "Hígado en exceso", "Hígado diario", "pg", "cuidado", "El exceso de vitamina A daña los huesos."],
    ["animal", "🥛", "Leche y lácteos", "Leche, queso, manjar blanco, helado", "pgc", "cuidado", "Provocan diarrea."],
    ["animal", "🌭", "Embutidos", "Jamón, hot dog, chorizo", "pg", "cuidado", "Exceso de sal, grasa y condimentos."],
    ["animal", "🍖", "Carne o huevo para conejos", "Cualquier alimento de origen animal", "c", "grave", "Son herbívoros estrictos."],
    ["animal", "🐟", "Atún enlatado frecuente", "Atún en aceite o salmuera", "g", "cuidado", "Exceso de sal y mercurio."],
    ["animal", "🐶", "Alimento de perro para gatos", "Croquetas o latas de perro", "g", "cuidado", "Carece de taurina."],

    // ---------- Comida casera y snacks ----------
    ["casa", "🍗", "Pollo a la brasa y cremas", "Piel, huesos, papas fritas, mayonesa, ají", "pg", "grave", "Grasa, huesos, sal y condimentos a la vez."],
    ["casa", "🍟", "Frituras y comida rápida", "Salchipapa, hamburguesa, pizza", "pg", "grave", "Causan pancreatitis."],
    ["casa", "🍜", "Comida condimentada", "Chaufa, lomo saltado, guisos", "pg", "cuidado", "Suelen contener cebolla, ajo y sillao."],
    ["casa", "🍿", "Snacks salados", "Papitas, canchita, chifles", "pgch", "cuidado", "Exceso de sodio."],
    ["casa", "🧊", "Cubitos y sazonadores", "Cubitos de caldo, sal, glutamato", "pgch", "grave", "Intoxicación por sodio; contienen cebolla y ajo."],
    ["casa", "🥖", "Masa cruda con levadura", "Masa de pan o pizza", "pg", "mortal", "Se expande en el estómago y produce alcohol."],
    ["casa", "🍞", "Pan, galletas y cereales", "Pan, fideos, arroz, cereales", "c", "cuidado", "Alteran su digestión."],
    ["casa", "🍪", "Alimentos pegajosos", "Mantequilla de maní, caramelo", "h", "grave", "Obstruyen los abazones."],

    // ---------- Frutos secos y semillas ----------
    ["semillas", "🌰", "Nueces de macadamia", "Solas o en galletas", "p", "grave", "Causan debilidad y temblores."],
    ["semillas", "🥜", "Nueces y castañas", "Nueces, pecanas, pistachos", "pg", "cuidado", "Exceso de grasa y riesgo de moho."],
    ["semillas", "🌰", "Almendras", "Especialmente las amargas", "ph", "grave", "Contienen cianuro."],
    ["semillas", "🥜", "Maní salado o confitado", "Salado, garapiñado o con chocolate", "pgch", "cuidado", "Sal, azúcar y posible xilitol."],
    ["semillas", "🌻", "Semillas de girasol en exceso", "Pepitas y mezclas grasas", "ch", "cuidado", "Causan obesidad."],
    ["semillas", "🌽", "Mezclas con maíz para conejos", "Mezclas de colores", "c", "cuidado", "Causan problemas dentales y digestivos."],

    // ---------- Plantas ----------
    ["plantas", "🌸", "Lirios y azucenas", "Hojas, flores y polen", "g", "mortal", "Causan falla renal en gatos."],
    ["plantas", "🌴", "Cica (palma de sagú)", "Semillas y hojas", "pg", "mortal", "Destruye el hígado."],
    ["plantas", "🌺", "Adelfa (laurel rosa)", "Común en parques", "pgch", "mortal", "Provoca paro cardíaco."],
    ["plantas", "🌱", "Higuerilla (ricino)", "Crece en descampados", "pgch", "mortal", "Sus semillas son altamente tóxicas."],
    ["plantas", "🎺", "Floripondio", "Flores y semillas", "pgch", "mortal", "Causa alucinaciones y convulsiones."],
    ["plantas", "🪴", "Plantas de interior", "Poto, galatea, filodendro, cala", "pgch", "grave", "Queman la boca y causan vómitos."],
    ["plantas", "🌷", "Azalea, tulipán y hiedra", "Flores y bulbos", "pgch", "grave", "Afectan el corazón y la digestión."],
    ["plantas", "🌵", "Sábila", "Hojas y látex", "pgc", "cuidado", "Provoca vómitos y diarrea."],
    ["plantas", "🌺", "Flor de Pascua", "Hojas rojas navideñas", "pg", "cuidado", "Irrita la boca y el estómago."],

    // ---------- Medicamentos y productos del hogar ----------
    ["hogar", "💊", "Paracetamol", "Y antigripales que lo contengan", "pgch", "mortal", "Una pastilla puede ser mortal para un gato."],
    ["hogar", "💊", "Antiinflamatorios de uso humano", "Ibuprofeno, naproxeno, diclofenaco, aspirina", "pgch", "mortal", "Causan úlceras y falla renal."],
    ["hogar", "💉", "Otros medicamentos humanos", "Antidepresivos, somníferos, vitaminas con hierro", "pgch", "grave", "Guárdelos fuera de su alcance."],
    ["hogar", "🐀", "Raticidas", "Cebos y pellets", "pgch", "mortal", "Provocan hemorragias internas."],
    ["hogar", "🐜", "Pipeta de perro en gatos", "Productos con permetrina", "g", "mortal", "Causa convulsiones en gatos."],
    ["hogar", "🧴", "Productos de limpieza", "Lejía, detergente, desinfectantes", "pgch", "grave", "Queman la boca y el esófago."],
    ["hogar", "🫙", "Aceites esenciales", "Árbol de té, eucalipto, difusores", "pg", "grave", "Dañan el hígado, sobre todo en gatos."],
    ["hogar", "🚬", "Cigarros y vapeadores", "Colillas y líquidos con nicotina", "pgch", "mortal", "La nicotina provoca paro cardíaco."],
    ["hogar", "🔋", "Pilas y monedas", "Pilas de botón, monedas, imanes", "pgch", "grave", "Queman el esófago o liberan zinc."],
    ["hogar", "🚗", "Refrigerante de auto", "Líquido de radiador", "pg", "mortal", "Su sabor dulce atrae; causa falla renal."],
    ["hogar", "🌿", "Marihuana", "Hojas o comestibles", "pg", "grave", "Causa descoordinación y somnolencia."]
  ];

  var SP = { p: ["🐶", "Perro"], g: ["🐱", "Gato"], c: ["🐰", "Conejo"], h: ["🐹", "Hámster"] };
  var LVL = { mortal: "Puede ser mortal", grave: "Grave", cuidado: "Evitar" };

  var list = document.getElementById("toxList");
  if (!list) return;
  var state = { sp: "todos", lvl: "todos", q: "" };

  function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }

  function render() {
    var q = norm(state.q), total = 0;
    list.innerHTML = CATS.map(function (c) {
      var items = T.filter(function (t) {
        return t[0] === c[0] &&
          (state.sp === "todos" || t[4].indexOf(state.sp) > -1) &&
          (state.lvl === "todos" || t[5] === state.lvl) &&
          (!q || norm(t[2] + " " + t[3] + " " + t[6]).indexOf(q) > -1);
      });
      total += items.length;
      if (!items.length) return "";
      return '<div class="tox-cat"><h3><span>' + c[1] + '</span>' + c[2] + ' <small>' + items.length + '</small></h3><div class="tox-grid">' +
        items.map(function (t) {
          return '<article class="tox ' + t[5] + '"><div class="tox-top"><span class="tox-em">' + t[1] + '</span><span class="tox-lvl">' + LVL[t[5]] + '</span></div>' +
            '<h4>' + t[2] + '</h4><p class="ej">' + t[3] + '</p><p>' + t[6] + '</p>' +
            '<div class="tox-sp">' + t[4].split("").map(function (k) { return '<span title="' + SP[k][1] + '">' + SP[k][0] + ' ' + SP[k][1] + '</span>'; }).join("") + '</div></article>';
        }).join("") + '</div></div>';
    }).join("") || '<p class="tox-empty">Sin resultados. <a data-wa="Hola VetLu, ¿mi mascota puede comer…?">Consúltenos por WhatsApp</a>.</p>';
    document.getElementById("toxCount").textContent = total;
    list.querySelectorAll("[data-wa]").forEach(function (a) { a.href = window.VETLU.wa(a.getAttribute("data-wa")); a.target = "_blank"; });
  }

  document.getElementById("toxTotal").textContent = T.length;
  document.querySelectorAll("[data-tox]").forEach(function (group) {
    group.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-v]");
      if (!b) return;
      state[group.dataset.tox] = b.dataset.v;
      group.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      render();
    });
  });
  document.getElementById("toxSearch").addEventListener("input", function (e) { state.q = e.target.value; render(); });

  // Filtrar por especie desde el enlace (#perro, #gato…)
  var k = { perro: "p", gato: "g", conejo: "c", hamster: "h" }[location.hash.replace("#", "")];
  if (k) {
    state.sp = k;
    var btn = document.querySelector('[data-tox="sp"] [data-v="' + k + '"]');
    if (btn) document.querySelectorAll('[data-tox="sp"] button').forEach(function (x) { x.setAttribute("aria-pressed", x === btn); });
  }
  render();
})();
