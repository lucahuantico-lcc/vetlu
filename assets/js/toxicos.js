/* ============================================================
   VetLu — Lista de alimentos y sustancias prohibidas
   sp: p = perro, g = gato, c = conejo, h = hámster
   lvl: mortal | grave | cuidado
   ============================================================ */
(function () {
  var CATS = [
    ["golosinas", "🍫", "Golosinas y bebidas"],
    ["frutas", "🍇", "Frutas"],
    ["verduras", "🧅", "Verduras, hierbas y condimentos"],
    ["animal", "🍗", "Carnes, lácteos y huevos"],
    ["casa", "🍟", "Comida de casa y snacks"],
    ["semillas", "🥜", "Frutos secos, semillas y granos"],
    ["plantas", "🌿", "Plantas que se comen por curiosidad"],
    ["hogar", "💊", "Medicinas y productos del hogar"]
  ];

  var T = [
    // ---------- Golosinas y bebidas ----------
    ["golosinas", "🍫", "Chocolate y cacao", "Chocolate negro, de leche, bitter, cacao en polvo, brownies, chocotejas", "pgch", "mortal", "La teobromina y la cafeína aceleran el corazón. Causa vómitos, temblores, arritmias y convulsiones. El chocolate negro y el cacao son los más peligrosos."],
    ["golosinas", "☕", "Café, té y bebidas con cafeína", "Café, té, mate, energizantes, gaseosas cola, pastillas de cafeína", "pgch", "grave", "Provoca taquicardia, hiperactividad, temblores y, en dosis altas, convulsiones."],
    ["golosinas", "🍬", "Xilitol (endulzante)", "Chicles y caramelos “sin azúcar”, gomitas light, algunas mantequillas de maní, pasta dental", "pgch", "mortal", "En perros libera insulina de golpe: baja el azúcar en minutos y puede destruir el hígado. Revisa siempre la etiqueta."],
    ["golosinas", "🍺", "Alcohol", "Cerveza, vino, pisco, chicha fermentada, postres o tortas con licor", "pgch", "mortal", "Incluso poca cantidad causa vómitos, descoordinación, baja de temperatura, coma y muerte."],
    ["golosinas", "🍞", "Panetón y queques con pasas", "Panetón, queque inglés, galletas o pan con pasas", "pg", "mortal", "Las pasas pueden causar insuficiencia renal aguda en perros. Muy común en Navidad: no le des “un pedacito”."],
    ["golosinas", "🍰", "Dulces, tortas y helados", "Torta, helado, picarones, mazamorra, arroz con leche, alfajores, gelatina", "pgch", "cuidado", "Exceso de azúcar y grasa: diarrea, obesidad, diabetes y pancreatitis. Algunos traen chocolate, pasas o xilitol."],
    ["golosinas", "🥤", "Gaseosas y jugos azucarados", "Gaseosas, refrescos, jugos de caja, bebidas deportivas", "pgch", "cuidado", "Azúcar, gas y cafeína en algunas. Solo deben tomar agua fresca."],

    // ---------- Frutas ----------
    ["frutas", "🍇", "Uvas y pasas", "Uvas frescas, pasas, jugo de uva, vino", "pg", "mortal", "Pueden causar falla renal en perros incluso en cantidades pequeñas. No se sabe qué perros son más sensibles: evítalas siempre."],
    ["frutas", "🥑", "Palta", "Pulpa, pepa, cáscara, guacamole", "pgch", "mortal", "La persina es mortal para conejos y roedores. En perros y gatos causa vómitos y pancreatitis por la grasa; la pepa obstruye el intestino."],
    ["frutas", "🍑", "Pepas y carozos de frutas", "Pepa de durazno, mango, ciruela, cereza, níspero, damasco; semillas de manzana y pera", "pgch", "grave", "Liberan cianuro al masticarse y los carozos grandes obstruyen el intestino. Da la fruta siempre sin pepas."],
    ["frutas", "⭐", "Carambola", "Fruta estrella", "pg", "grave", "Sus oxalatos dañan los riñones, sobre todo en animales con problemas renales."],
    ["frutas", "🍋", "Cítricos", "Limón, naranja, mandarina, toronja, sus cáscaras y aceites", "pgh", "cuidado", "Sus aceites irritan el estómago y la piel. En hámsters son demasiado ácidos; a los gatos les causan vómitos."],
    ["frutas", "🍎", "Frutas dulces en hámsters enanos", "Plátano, uva, mango y otras frutas muy dulces", "h", "cuidado", "Los hámsters Roborovski y Campbell tienden a la diabetes: casi nada de fruta."],
    ["frutas", "🌿", "Ruibarbo", "Tallos y hojas", "pgch", "grave", "Rico en oxalatos: daña los riñones y baja el calcio en la sangre."],

    // ---------- Verduras, hierbas y condimentos ----------
    ["verduras", "🧅", "Cebolla", "Cruda, cocida, frita, deshidratada, en polvo, en salsas, sopas y aderezos", "pgch", "grave", "Destruye los glóbulos rojos y causa anemia días después de comerla. Los gatos son los más sensibles."],
    ["verduras", "🧄", "Ajo", "Diente de ajo, ajo en polvo, sal de ajo, aderezos y marinados", "pgch", "grave", "Mismo efecto que la cebolla (anemia), y es aún más concentrado. No sirve como antipulgas: es un mito."],
    ["verduras", "🌱", "Poro, cebolla china y cebollino", "Cebolla china del chaufa, poro, chalota, cebollino", "pgch", "grave", "Son de la misma familia que la cebolla y el ajo: también causan anemia."],
    ["verduras", "🥔", "Papa cruda o verde y sus brotes", "Papa cruda, cáscara verde, brotes, hojas y tallos de la planta", "pgch", "grave", "La solanina causa vómitos, debilidad y alteraciones nerviosas. En conejos y hámsters además tiene demasiado almidón."],
    ["verduras", "🍠", "Camote crudo", "Camote crudo, con cáscara, con moho o en dulce (con azúcar o chancaca)", "pgc", "cuidado", "No es tóxico, pero crudo es difícil de digerir: gases, vómitos y riesgo de que los trozos duros se atoren. Cocido, sin cáscara y sin azúcar sí es un buen premio para perros. A los conejos no se les da por su almidón."],
    ["verduras", "🍅", "Tomate verde y la planta de tomate", "Tomates verdes, hojas y tallos", "pgch", "grave", "Contienen solanina y tomatina. El tomate bien maduro en poca cantidad no suele ser problema para perros."],
    ["verduras", "🍄", "Hongos silvestres", "Hongos que crecen en jardines y parques", "pgch", "mortal", "Algunos destruyen el hígado en horas. Si lo viste comer uno, llévalo de inmediato con una foto del hongo."],
    ["verduras", "🌶️", "Ají, rocoto y comida picante", "Ají amarillo, rocoto, ají limo, salsas picantes", "pgch", "cuidado", "Irritan la boca y el estómago: babeo, vómitos y diarrea."],
    ["verduras", "🫘", "Menestras crudas", "Frejol, pallar, garbanzo y lentejas crudos o mal cocidos", "pgch", "grave", "Las lectinas crudas causan vómitos y diarrea fuertes. A conejos y hámsters no se les dan ni cocidas."],
    ["verduras", "🌽", "Choclo en coronta", "Mazorca o coronta de choclo", "pg", "grave", "Los perros la tragan en trozos y causa obstrucción intestinal que suele necesitar cirugía."],
    ["verduras", "🥬", "Lechuga americana (iceberg)", "Lechuga repollada o iceberg", "ch", "cuidado", "Casi no nutre y provoca diarrea en conejos y hámsters. Usa lechuga romana u hojas verdes oscuras."],
    ["verduras", "🥦", "Repollo y coliflor en exceso", "Repollo, coliflor, col", "c", "cuidado", "Producen muchos gases, y en los conejos los gases pueden ser graves."],
    ["verduras", "🍆", "Berenjena cruda", "Berenjena y su planta", "ch", "cuidado", "Contiene solanina, igual que la papa verde."],
    ["verduras", "🧂", "Nuez moscada y especias fuertes", "Nuez moscada, clavo de olor, canela en exceso, curry", "pgch", "grave", "La nuez moscada causa alucinaciones, temblores y convulsiones."],

    // ---------- Carnes, lácteos y huevos ----------
    ["animal", "🦴", "Huesos cocidos", "Huesos de pollo, chancho o res cocidos o a la parrilla", "pg", "grave", "Se astillan y pueden atorarse en la garganta o perforar el estómago y el intestino."],
    ["animal", "🐟", "Espinas de pescado", "Espinas, cabezas y colas de pescado", "pg", "grave", "Se clavan en la boca, la garganta o el intestino."],
    ["animal", "🥓", "Grasa, piel y chicharrón", "Piel de pollo, pellejo, gordura de la carne, chicharrón", "pg", "grave", "Mucha grasa de golpe causa pancreatitis: vómitos, dolor abdominal fuerte y decaimiento."],
    ["animal", "🥩", "Carne, pollo o pescado crudos", "Carne cruda, ceviche, pescado crudo, menudencias crudas", "pgh", "cuidado", "Riesgo de salmonela y parásitos. En gatos, el pescado crudo frecuente destruye la vitamina B1."],
    ["animal", "🥚", "Huevo crudo", "Huevo crudo, ponches o masas con huevo crudo", "pg", "cuidado", "Riesgo de salmonela. La clara cruda bloquea la absorción de biotina. Cocido sí puede comerlo."],
    ["animal", "🫀", "Hígado en exceso", "Hígado de pollo o res todos los días", "pg", "cuidado", "Demasiada vitamina A daña huesos y articulaciones."],
    ["animal", "🥛", "Leche y lácteos", "Leche de vaca, queso, yogur azucarado, manjar blanco, helado", "pgc", "cuidado", "La mayoría de perros y gatos adultos no digiere la lactosa: diarrea y gases. Los conejos nunca deben comer lácteos."],
    ["animal", "🌭", "Embutidos", "Jamón, hot dog, salchicha, chorizo, mortadela, tocino", "pg", "cuidado", "Mucha sal, grasa y conservantes; muchos traen ajo y cebolla."],
    ["animal", "🍖", "Cualquier carne o huevo para conejos", "Carne, pollo, huevo, comida de perro o gato", "c", "grave", "Los conejos son herbívoros estrictos: su intestino no procesa proteína animal."],
    ["animal", "🐟", "Atún en lata para humanos", "Atún en aceite o salmuera todos los días", "g", "cuidado", "Exceso de sal y mercurio. Crea adicción y desbalancea su dieta."],
    ["animal", "🐶", "Comida de perro para gatos", "Croquetas o latas de perro", "g", "cuidado", "No tiene suficiente taurina: a la larga causa problemas del corazón y ceguera en gatos."],

    // ---------- Comida de casa y snacks ----------
    ["casa", "🍗", "Pollo a la brasa y sus cremas", "Piel, huesos, papas fritas, mayonesa, ají, huancaína, ketchup", "pg", "grave", "Junta todo lo peligroso: grasa (pancreatitis), huesos que se astillan, sal, ajo y cebolla."],
    ["casa", "🍟", "Frituras y comida rápida", "Salchipapa, hamburguesa, pizza, pollo broaster, papas fritas", "pg", "grave", "Exceso de grasa y sal: pancreatitis, obesidad y problemas del corazón."],
    ["casa", "🍜", "Sobras condimentadas", "Arroz chaufa, tallarín saltado, lomo saltado, guisos, seco, ají de gallina", "pg", "cuidado", "Casi siempre llevan cebolla, ajo, sillao (mucha sal) y condimentos."],
    ["casa", "🍿", "Snacks salados", "Papitas, canchita, chifles, galletas saladas, piqueos", "pgch", "cuidado", "Exceso de sodio: sed intensa, vómitos y, en grandes cantidades, convulsiones."],
    ["casa", "🧊", "Sal en exceso y cubitos de caldo", "Cubitos, sazonadores en sobre, glutamato, sal de mesa", "pgch", "grave", "Intoxicación por sodio. Los cubitos además contienen cebolla y ajo en polvo."],
    ["casa", "🥖", "Masa cruda con levadura", "Masa de pan o pizza sin hornear", "pg", "mortal", "Se infla dentro del estómago y produce alcohol al fermentar: hinchazón grave e intoxicación."],
    ["casa", "🍞", "Pan, galletas, cereales y fideos", "Pan, galletas, cereales azucarados, fideos, arroz", "c", "cuidado", "Los carbohidratos alteran la flora intestinal del conejo y pueden causar estasis digestiva."],
    ["casa", "🍪", "Comida pegajosa para hámsters", "Mantequilla de maní, caramelo, chicle, miel espesa", "h", "grave", "Se pega en los abazones (cachetes) y puede infectarlos o asfixiarlo."],

    // ---------- Frutos secos, semillas y granos ----------
    ["semillas", "🌰", "Nueces de macadamia", "Macadamias solas o en galletas y chocolates", "p", "grave", "En perros causan debilidad en las patas traseras, temblores y fiebre."],
    ["semillas", "🥜", "Nueces, pecanas y castañas", "Nueces, pecanas, castañas, pistachos", "pg", "cuidado", "Mucha grasa (pancreatitis) y pueden tener moho tóxico. Las enteras pueden obstruir el intestino."],
    ["semillas", "🌰", "Almendras", "Almendras, sobre todo las amargas", "ph", "grave", "Las almendras amargas contienen cianuro, muy peligroso para hámsters. En perros causan obstrucción."],
    ["semillas", "🥜", "Maní salado o confitado", "Maní salado, garapiñado, confitado o con chocolate", "pgch", "cuidado", "Sal, azúcar y a veces xilitol. El maní natural sin sal, en poca cantidad, no suele ser problema para perros."],
    ["semillas", "🌻", "Semillas de girasol en exceso", "Pepitas de girasol, mezclas con muchas semillas grasas", "ch", "cuidado", "Muy grasas: obesidad e hígado graso. Solo como premio ocasional en hámsters."],
    ["semillas", "🌽", "Mezclas de semillas y maíz para conejos", "Mezclas de colores con maíz, semillas y galletitas", "c", "cuidado", "El conejo se come solo lo dulce y deja el heno: problemas dentales y digestivos."],

    // ---------- Plantas ----------
    ["plantas", "🌸", "Lirios y azucenas", "Hojas, flores, polen y hasta el agua del florero", "g", "mortal", "Causan insuficiencia renal en gatos en 1 a 3 días. Basta con lamerse el polen del pelo."],
    ["plantas", "🌴", "Cica (palma de sagú)", "Semillas, hojas y raíz", "pg", "mortal", "Destruye el hígado. Es muy común en jardines de Lima."],
    ["plantas", "🌺", "Adelfa (laurel rosa)", "Hojas, flores y tallos; común en parques y bermas", "pgch", "mortal", "Afecta el corazón: arritmias y paro cardíaco incluso con pocas hojas."],
    ["plantas", "🌱", "Higuerilla (ricino)", "Semillas de la planta silvestre que crece en descampados", "pgch", "mortal", "Sus semillas contienen ricina, una de las toxinas más potentes que existen."],
    ["plantas", "🎺", "Floripondio", "Flores, hojas y semillas", "pgch", "mortal", "Causa alucinaciones, pupilas dilatadas, taquicardia y convulsiones."],
    ["plantas", "🪴", "Poto, galatea (diefembaquia), filodendro y cala", "Plantas de interior muy comunes", "pgch", "grave", "Sus cristales de oxalato queman la boca: babeo intenso, hinchazón y vómitos."],
    ["plantas", "🌷", "Azalea, tulipán, narciso y hiedra", "Flores, hojas y sobre todo los bulbos", "pgch", "grave", "Vómitos, diarrea, debilidad y alteraciones del corazón."],
    ["plantas", "🌵", "Sábila (aloe vera)", "Hojas y látex amarillo", "pgc", "cuidado", "Su látex causa vómitos y diarrea."],
    ["plantas", "🌺", "Flor de Pascua", "Hojas rojas de Navidad", "pg", "cuidado", "Su savia irrita la boca y el estómago."],

    // ---------- Medicinas y productos del hogar ----------
    ["hogar", "💊", "Paracetamol", "Panadol, Doloral y cualquier antigripal con paracetamol", "pgch", "mortal", "Una sola pastilla puede matar a un gato. En perros daña el hígado."],
    ["hogar", "💊", "Antiinflamatorios humanos", "Ibuprofeno, naproxeno, diclofenaco, aspirina, ketorolaco", "pgch", "mortal", "Causan úlceras con sangrado y falla renal. Nunca los medices por tu cuenta."],
    ["hogar", "💉", "Otros medicamentos humanos", "Antidepresivos, pastillas para dormir, anticonceptivos, vitaminas con hierro", "pgch", "grave", "Guarda los medicamentos en lugares altos y cerrados: los perros muerden los blísteres."],
    ["hogar", "🐀", "Raticidas y venenos", "Veneno para ratas en cebo, pellets o bloques", "pgch", "mortal", "Causan hemorragias internas días después. Lleva el empaque al veterinario: el tratamiento depende del tipo."],
    ["hogar", "🐜", "Pipeta de perro en gatos", "Pipetas o collares con permetrina para perros", "g", "mortal", "La permetrina causa temblores y convulsiones en gatos. Usa solo productos indicados para gatos."],
    ["hogar", "🧴", "Productos de limpieza", "Lejía, detergente, desinfectantes, limpiadores con fenol o pino", "pgch", "grave", "Quemaduras en boca y esófago. Los gatos son muy sensibles a los fenoles."],
    ["hogar", "🫙", "Aceites esenciales", "Árbol de té, eucalipto, menta, cítricos, difusores", "pg", "grave", "Los gatos no pueden eliminarlos: daño al hígado y temblores. Cuidado con los difusores en casa."],
    ["hogar", "🚬", "Cigarros y vapeadores", "Colillas, tabaco, líquidos de vape, chicles de nicotina", "pgch", "mortal", "La nicotina causa vómitos, temblores y paro cardíaco."],
    ["hogar", "🔋", "Pilas, monedas y objetos pequeños", "Pilas de botón, monedas, imanes, ligas, hilos", "pgch", "grave", "Las pilas queman el esófago en horas; algunas monedas liberan zinc tóxico."],
    ["hogar", "🚗", "Refrigerante de auto (anticongelante)", "Líquido de radiador", "pg", "mortal", "Tiene sabor dulce y lo beben con gusto. Pocas cucharadas causan falla renal."],
    ["hogar", "🌿", "Marihuana y comestibles con THC", "Hojas, colillas, brownies o gomitas", "pg", "grave", "Descoordinación, orina sin control, pupilas dilatadas y, si trae chocolate, doble intoxicación."]
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
    }).join("") || '<p class="tox-empty">No encontramos coincidencias. Si tienes una duda sobre un alimento, <a data-wa="Hola VetLu, ¿mi mascota puede comer…?">pregúntanos por WhatsApp</a>.</p>';
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

  var hash = location.hash.replace("#", "");
  if (SP[{ perro: "p", gato: "g", conejo: "c", hamster: "h" }[hash]]) {
    var k = { perro: "p", gato: "g", conejo: "c", hamster: "h" }[hash];
    state.sp = k;
    var btn = document.querySelector('[data-tox="sp"] [data-v="' + k + '"]');
    if (btn) document.querySelectorAll('[data-tox="sp"] button').forEach(function (x) { x.setAttribute("aria-pressed", x === btn); });
  }
  render();
})();
