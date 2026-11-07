/* ============================================================
   VetLu — Encabezado, pie de página y efectos compartidos
   ============================================================ */
(function () {
  var C = window.VETLU;
  var page = document.body.getAttribute("data-page") || "";

  var paw = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><ellipse cx="6" cy="9" rx="2.2" ry="2.8"/><ellipse cx="10" cy="5.5" rx="2.2" ry="2.8"/><ellipse cx="14.5" cy="5.5" rx="2.2" ry="2.8"/><ellipse cx="18.5" cy="9" rx="2.2" ry="2.8"/><path d="M12 11c-3.2 0-6.5 4.4-6.5 7.2 0 1.8 1.5 2.8 3.3 2.8 1.3 0 2.1-.7 3.2-.7s1.9.7 3.2.7c1.8 0 3.3-1 3.3-2.8C18.5 15.4 15.2 11 12 11z"/></svg>';
  var icoIG = '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.9 1.4 1.4 0 000-2.9z"/></svg>';
  var icoX = '<svg viewBox="0 0 24 24"><path d="M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5L9 13 0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.4h2L6.5 3.3H4.3l13.3 17.3z"/></svg>';
  var icoMail = '<svg viewBox="0 0 24 24"><path d="M2 4h20a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2zm10 8.7L2.4 6.5v.3L12 13l9.6-6.2v-.3L12 12.7z"/></svg>';
  var icoWA = '<svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1112 21.8zm8.4-18.2A11.8 11.8 0 001.7 17.9L0 24l6.3-1.6a11.8 11.8 0 005.7 1.4A11.8 11.8 0 0020.4 3.6z"/></svg>';

  var icoPin = '<svg viewBox="0 0 24 24"><path d="M12 0C7.6 0 4 3.6 4 8c0 6 8 16 8 16s8-10 8-16c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z"/></svg>';
  var facts = [
    "Un perro puede entender unas 165 palabras.",
    "Los gatos casi solo maúllan para hablar con humanos.",
    "Los dientes de un conejo crecen ~1 cm al mes.",
    "Un hámster puede correr 9 km en una noche.",
    "La huella de la nariz de un perro es única.",
    "Las uvas y pasas pueden dañar los riñones de un perro.",
    "Los lirios son mortales para los gatos, hasta su polen."
  ];

  var nav = [
    ["inicio", "index.html", "Inicio"],
    ["servicios", "servicios.html", "Servicios"],
    ["precios", "precios.html", "Precios"],
    ["productos", "productos.html", "Productos"],
    ["mascotas", "#", "Mascotas", [
      ["perro", "perro.html", "🐶", "Perros", "Cuidados, edad y salud"],
      ["gato", "gato.html", "🐱", "Gatos", "Felinos felices"],
      ["conejo", "conejo.html", "🐰", "Conejos", "Heno, espacio y calma"],
      ["hamster", "hamster.html", "🐹", "Hámsters", "Pequeños gigantes"],
      ["comida", "comida-prohibida.html", "🚫", "Comida prohibida", "Lo que nunca deben comer"]
    ]],
    ["consejos", "consejos.html", "Consejos"],
    ["visitas", "visitas.html", "¿Cada cuánto?"],
    ["edad", "edad.html", "Edad humana"]
  ];

  var petPages = ["perro", "gato", "conejo", "hamster", "comida"];
  var links = nav.map(function (n) {
    if (n[3]) {
      var active = petPages.indexOf(page) > -1 ? " active" : "";
      return '<li class="has-drop"><a href="perro.html" class="' + active + '" aria-haspopup="true">' + n[2] + ' ▾</a><ul class="dropdown">' +
        n[3].map(function (d) {
          return '<li><a href="' + d[1] + '"><span class="em">' + d[2] + '</span><span>' + d[3] + '<small>' + d[4] + '</small></span></a></li>';
        }).join("") + '</ul></li>';
    }
    return '<li><a href="' + n[1] + '"' + (page === n[0] ? ' class="active" aria-current="page"' : "") + '>' + n[2] + '</a></li>';
  }).join("") + '<li><a href="adopcion.html" class="nav-cta">🐾 Adopta</a></li>';

  var headerDark = document.body.getAttribute("data-header") === "dark";
  var header = document.createElement("header");
  header.className = "site-header" + (headerDark ? " on-dark" : " solid");
  header.innerHTML =
    '<div class="container nav">' +
    '<a href="index.html" class="logo" aria-label="VetLu, ir al inicio"><span class="logo-mark">' + paw + '</span><span>Vet<em>Lu</em></span></a>' +
    '<nav aria-label="Principal"><ul class="nav-links" id="menu">' + links + '</ul></nav>' +
    '<button class="burger" aria-label="Abrir menú" aria-controls="menu" aria-expanded="false"><span></span></button>' +
    '</div>';
  document.body.prepend(header);

  var footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML =
    '<div class="container">' +
    '<div class="footer-grid">' +
    '<div><a href="index.html" class="logo"><span class="logo-mark">' + paw + '</span><span>Vet<em>Lu</em></span></a>' +
    '<p>Clínica veterinaria en ' + C.direccion + '. Cuidamos con ciencia y con cariño, y creemos que el mejor amigo no se compra: <b style="color:var(--gold-soft)">se adopta</b>.</p>' +
    '<div class="socials">' +
    '<a href="' + C.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + icoIG + '</a>' +
    '<a href="' + C.x + '" target="_blank" rel="noopener" aria-label="X">' + icoX + '</a>' +
    '<a href="mailto:' + C.email + '" aria-label="Correo">' + icoMail + '</a>' +
    '<a href="' + C.wa() + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + icoWA + '</a>' +
    '</div></div>' +
    '<div><h4>Horario de atención</h4><ul class="hours">' +
    C.horario.map(function (h) { return '<li><span>' + h[0] + '</span><b>' + h[1] + '</b></li>'; }).join("") +
    '</ul></div>' +
    '<div><h4>Contacto</h4><ul class="contact-list">' +
    '<li>' + icoPin + '<a href="' + C.mapa + '" target="_blank" rel="noopener">' + C.direccion + '<br>' + C.ciudad + '</a></li>' +
    '<li>' + icoWA + '<a href="' + C.wa() + '" target="_blank" rel="noopener">' + C.telefono + '</a></li>' +
    '<li>' + icoMail + '<a href="mailto:' + C.email + '">' + C.email + '</a></li>' +
    '</ul><a class="btn btn--ghost-light" style="margin-top:18px;padding:.75em 1.2em;font-size:.85rem" href="' + C.mapa + '" target="_blank" rel="noopener">Cómo llegar <span class="arrow">→</span></a></div>' +
    '<div class="foot-card"><span class="hand">¿sabías que…?</span><p class="fact">' + facts[Math.floor(Math.random() * facts.length)] + '</p>' +
    '<p class="foot-cta">Adopta y recibe <b>consulta gratis + 6 meses de plan de salud</b>.</p>' +
    '<a href="adopcion.html" class="btn btn--terra" style="padding:.75em 1.2em;font-size:.85rem">Conoce a los que buscan hogar <span class="arrow">→</span></a></div>' +
    '</div>' +
    '<div class="big-word">VetLu</div>' +
    '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + ' VetLu · Clínica Veterinaria · Lima, Perú</span><span>Adopta, no compres 🐾</span></div>' +
    '</div>';
  document.body.appendChild(footer);

  var wa = document.createElement("a");
  wa.className = "wa-float";
  wa.href = C.wa();
  wa.target = "_blank";
  wa.rel = "noopener";
  wa.setAttribute("aria-label", "Escríbenos por WhatsApp");
  wa.innerHTML = icoWA;
  document.body.appendChild(wa);

  var top = document.createElement("button");
  top.className = "to-top";
  top.setAttribute("aria-label", "Volver arriba");
  top.textContent = "↑";
  top.onclick = function () { window.scrollTo({ top: 0, behavior: "smooth" }); };
  document.body.appendChild(top);

  // Enlaces de WhatsApp declarativos: <a data-wa="mensaje">
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = C.wa(a.getAttribute("data-wa"));
    a.target = "_blank";
    a.rel = "noopener";
  });
  document.querySelectorAll("[data-mail]").forEach(function (a) { a.href = "mailto:" + C.email; a.textContent = a.textContent || C.email; });

  // Menú móvil
  var burger = header.querySelector(".burger");
  burger.addEventListener("click", function () {
    var open = document.body.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  header.querySelectorAll(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () {
      if (a.getAttribute("aria-haspopup") && window.innerWidth <= 1080) return;
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
    });
  });

  // Encabezado al hacer scroll
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle("scrolled", y > 40);
    top.classList.toggle("show", y > 700);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Aparición al hacer scroll
  window.vetluReveal = function (root) {
    var els = (root || document).querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e) { io.observe(e); });
  };
  window.vetluReveal();

  // Tarjetas giratorias en táctil
  document.addEventListener("click", function (e) {
    var f = e.target.closest(".flip");
    if (f) f.classList.toggle("on");
  });
})();
