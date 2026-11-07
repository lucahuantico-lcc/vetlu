/* ============================================================
   VetLu — Datos de contacto
   Cambia aquí tus datos y se actualizan en TODAS las páginas.
   ============================================================ */
window.VETLU = {
  nombre: "VetLu",
  whatsapp: "51925659628",           // código de país + número, sin espacios ni +
  telefono: "925 659 628",
  email: "lucahuantico@gmail.com",
  instagram: "https://www.instagram.com/luis.cahuantico_c/",
  x: "https://x.com/",                       // ← reemplaza por tu perfil
  direccion: "San Gabriel, Villa María del Triunfo",
  ciudad: "Lima, Perú",
  mapa: "https://www.google.com/maps/search/?api=1&query=San+Gabriel+Villa+Maria+del+Triunfo+Lima",
  horario: [
    ["Lunes a sábado", "9:00 a.m. – 8:00 p.m."],
    ["Domingos", "9:00 a.m. – 1:00 p.m."],
    ["Emergencias", "Escríbenos por WhatsApp"]
  ]
};

window.VETLU.wa = function (mensaje) {
  return "https://wa.me/" + window.VETLU.whatsapp + "?text=" + encodeURIComponent(mensaje || "Hola VetLu 🐾, quisiera más información.");
};
