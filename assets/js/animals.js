/* ============================================================
   VetLu — Fichas de cuidado por especie
   Cada página (perro.html, gato.html…) tiene <body data-animal="perro">
   y este archivo construye su contenido.
   ============================================================ */
(function () {
  function img(id, w) { return "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=" + (w || 1600) + "&q=75"; }

  var A = {
    perro: {
      nombre: "Perro", plural: "perros", em: "🐶",
      foto: "photo-1543466835-00a7907e9de1",
      tagline: "Leal por naturaleza, feliz por los cuidados que le das.",
      intro: "Llevan más de 15 000 años a nuestro lado. Un perro sano necesita tres cosas que no se compran: tiempo, rutina y cariño. Aquí tienes todo lo demás.",
      hechos: [["Vida", "10–16 años"], ["1 año", "≈ 15 humanos"], ["Paseo", "30–120 min/día"], ["Sueño", "12–14 h/día"]],
      curiosidades: [
        ["👃", "¿Qué tan bueno es su olfato?", "50×", "Tienen hasta 300 millones de receptores olfativos; nosotros, unos 6 millones."],
        ["🫆", "¿Su nariz es como una huella?", "Única", "El patrón de su trufa es tan único como nuestra huella dactilar."],
        ["💤", "¿Los perros sueñan?", "Sí", "Tienen fase REM. Cuando mueven las patas dormidos, probablemente están 'corriendo'."],
        ["🗣️", "¿Cuántas palabras entienden?", "~165", "Un perro promedio entiende unas 165 palabras y gestos; los más listos, más de 250."]
      ],
      etapas: [
        ["🍼", "Cachorro", "0 a 12 meses", "Desparasitación desde las 2 semanas; vacunas de parvovirus, triple y antirrábica hasta los 4 meses. Socialización con personas, ruidos y otros perros.", "Cada 3–4 semanas"],
        ["⚡", "Joven", "1 a 3 años", "Mucha energía. Momento ideal para educar con refuerzo positivo y esterilizar.", "1 vez al año"],
        ["🌿", "Adulto", "3 a 7 años", "Mantener peso ideal, higiene dental y ejercicio constante.", "1 vez al año"],
        ["🧡", "Senior", "7 años a más", "Chequeos con análisis de sangre, cuidado de articulaciones, corazón y riñones.", "Cada 6 meses"]
      ],
      si: [
        ["🥣", "Alimento balanceado de calidad", "Según su etapa (cachorro, adulto, senior) y tamaño. Es la base de su dieta."],
        ["🍗", "Pollo o pavo cocido", "Sin piel, sin huesos, sin sal ni condimentos. Ideal como premio."],
        ["🥕", "Zanahoria, zapallo, vainita", "Cocidos o crudos en trozos. Bajos en calorías y ricos en fibra."],
        ["🍎", "Manzana, plátano, sandía", "En trozos pequeños y sin semillas. Siempre con moderación."],
        ["💧", "Agua fresca todo el día", "Cámbiala al menos 2 veces al día, sobre todo en verano."]
      ],
      no: [
        ["🍫", "Chocolate y café", "La teobromina y la cafeína son tóxicas; pueden causar convulsiones."],
        ["🍇", "Uvas y pasas", "Incluso pocas pueden provocar insuficiencia renal aguda."],
        ["🧅", "Cebolla, ajo y puerro", "Dañan los glóbulos rojos, crudos o cocidos."],
        ["🍬", "Xilitol (chicles y dulces 'sin azúcar')", "Causa una caída brusca de azúcar y daño al hígado."],
        ["🦴", "Huesos cocidos", "Se astillan y pueden perforar el intestino."],
        ["🥑", "Palta y macadamias", "Provocan vómitos, debilidad y problemas digestivos."]
      ],
      racion: "Cachorros: 3–4 comidas al día. Adultos: 2 comidas. Evita dejar comida todo el día y no le des sobras de la mesa.",
      cuidados: [
        ["🚶", "Ejercicio diario", "Mínimo 2 paseos. Razas activas (border collie, labrador) necesitan más de 1 hora."],
        ["🛁", "Baño", "Cada 3 a 6 semanas con champú para perros. Bañarlo de más reseca su piel."],
        ["🪥", "Dientes", "Cepíllalos 2–3 veces por semana. El 80 % de perros mayores de 3 años tiene sarro."],
        ["✂️", "Uñas y oídos", "Uñas cada 3–4 semanas; limpia oídos cada 15 días si tiene orejas caídas."],
        ["🧠", "Mente activa", "Olfateo, juguetes rellenables y trucos nuevos cansan tanto como correr."],
        ["🏷️", "Identificación", "Placa con tu teléfono y microchip. Así, si se pierde, vuelve a casa."]
      ],
      enfermedades: [
        { n: "Parvovirus", lvl: "alta", s: ["Vómitos y diarrea con sangre", "Decaimiento y fiebre", "No quiere comer", "Muy común en cachorros sin vacunas"], q: ["Ve al veterinario de inmediato: es una emergencia", "No le des medicinas caseras", "Aíslalo de otros perros", "Desinfecta con lejía diluida"], p: ["Vacuna parvovirus + coronavirus al mes y medio y a los 2 meses y medio", "No sacarlo a la calle hasta completar vacunas", "Revacunación anual (quíntuple)"] },
        { n: "Moquillo (distemper)", lvl: "alta", s: ["Secreción en ojos y nariz", "Tos y fiebre", "Almohadillas endurecidas", "Temblores o convulsiones"], q: ["Atención veterinaria urgente", "Hidratación y reposo en un lugar cálido", "Aislamiento estricto"], p: ["Vacuna triple (moquillo, hepatitis, leptospira) a los 2 y 3 meses", "Revacunación anual (quíntuple)"] },
        { n: "Pulgas, garrapatas y ehrlichiosis", lvl: "media", s: ["Rascado constante", "Garrapatas visibles en orejas y patas", "Fiebre, sangrado nasal o encías pálidas"], q: ["Retira garrapatas con pinza, sin aplastarlas", "Consulta para análisis si hay fiebre", "Trata también el ambiente (cama, mantas)"], p: ["Antipulgas mensual o trimestral", "Revisarlo después de cada paseo"] },
        { n: "Otitis", lvl: "media", s: ["Sacude la cabeza", "Mal olor u oído rojo", "Se rasca la oreja"], q: ["No uses hisopos ni remedios caseros", "Consulta para un limpiador y tratamiento adecuado"], p: ["Secar bien sus orejas tras el baño", "Limpieza quincenal"] },
        { n: "Golpe de calor", lvl: "alta", s: ["Jadeo exagerado", "Lengua muy roja o morada", "Babeo y tambaleo"], q: ["Llévalo a la sombra", "Moja con agua fresca (no helada) patas, ingle y cuello", "Ofrécele agua en pequeñas cantidades", "Ve al veterinario aunque mejore"], p: ["Nunca lo dejes en un auto cerrado", "Pasea temprano o al atardecer en verano"] },
        { n: "Obesidad", lvl: "baja", s: ["No se le sienten las costillas", "Se cansa rápido", "No tiene 'cintura'"], q: ["Pide un plan de peso en consulta", "Mide la comida con taza medidora", "Cambia premios por zanahoria"], p: ["Pesarlo cada mes", "Ejercicio diario"] }
      ],
      alarma: ["Vómitos o diarrea por más de 24 horas", "Abdomen hinchado y duro con arcadas sin vómito", "Dificultad para respirar", "Convulsiones o desmayos", "Ingirió algo tóxico", "No orina o hay sangre en la orina"]
    },

    gato: {
      nombre: "Gato", plural: "gatos", em: "🐱",
      foto: "photo-1514888286974-6c03e2ca1dba",
      tagline: "Independiente, sí. Pero nunca indiferente a tu cuidado.",
      intro: "Los gatos esconden muy bien el dolor; es su instinto. Por eso conocer sus señales y llevarlo a sus chequeos marca la diferencia entre un susto y una vida larga.",
      hechos: [["Vida", "12–18 años"], ["1 año", "≈ 15 humanos"], ["Sueño", "12–16 h/día"], ["Dieta", "Carnívoro estricto"]],
      curiosidades: [
        ["😺", "¿Por qué ronronean?", "25–150 Hz", "Ronronean en una frecuencia que se asocia con la reparación de huesos y tejidos."],
        ["🍭", "¿Sienten el sabor dulce?", "No", "No tienen receptores para el dulce; por eso no les interesan los postres."],
        ["🗨️", "¿A quién le maúllan?", "A ti", "Los gatos adultos casi solo maúllan para hablar con humanos, no entre ellos."],
        ["👂", "¿Cuánto giran sus orejas?", "180°", "Cada oreja tiene 32 músculos y se mueve de forma independiente."]
      ],
      etapas: [
        ["🍼", "Gatito", "0 a 12 meses", "Desparasitación al mes, triple felina a los 2 y 3 meses y rabia a los 3 meses y medio. Aprende arenero y rascador.", "Cada 3–4 semanas"],
        ["⚡", "Joven", "1 a 3 años", "Esterilización y rutinas de juego. Mucha curiosidad: protege ventanas.", "1 vez al año"],
        ["🌿", "Adulto", "3 a 10 años", "Controlar peso y consumo de agua. Revisar dientes.", "1 vez al año"],
        ["🧡", "Senior", "10 años a más", "Análisis de riñón y tiroides, control de presión y articulaciones.", "Cada 6 meses"]
      ],
      si: [
        ["🥣", "Alimento balanceado para gatos", "Con taurina, esencial para su corazón y vista. Nunca alimento de perro."],
        ["🥫", "Comida húmeda", "Ayuda a que tomen más agua y protege sus riñones y vías urinarias."],
        ["🍗", "Pollo o pescado cocido", "Sin espinas, sin sal ni condimentos. Solo como premio."],
        ["⛲", "Agua en fuente o varios platos", "Prefieren el agua en movimiento y lejos de su comida."],
        ["🌱", "Hierba para gatos", "Ayuda a eliminar bolas de pelo de forma natural."]
      ],
      no: [
        ["🥛", "Leche de vaca", "La mayoría de gatos adultos no digiere la lactosa: diarrea asegurada."],
        ["🧅", "Cebolla y ajo", "Destruyen sus glóbulos rojos y causan anemia."],
        ["🌸", "Lirios y azucenas", "Hasta el polen puede causar insuficiencia renal. ¡Mantenlos fuera de casa!"],
        ["🍫", "Chocolate, café y alcohol", "Tóxicos incluso en cantidades pequeñas."],
        ["🐟", "Atún en lata para humanos", "Tiene exceso de sal y mercurio si se da con frecuencia."],
        ["💊", "Paracetamol e ibuprofeno", "Una sola pastilla puede ser mortal para un gato."]
      ],
      racion: "Varias comidas pequeñas al día (3–4), como hacen en la naturaleza. Mide la porción diaria para evitar el sobrepeso.",
      cuidados: [
        ["🧺", "Arenero", "Uno por gato + uno extra. Límpialo a diario y lávalo por completo cada semana."],
        ["🪵", "Rascador", "Rascar es una necesidad, no un capricho: afila uñas y marca territorio."],
        ["🎣", "Juego de caza", "10–15 min, 2 veces al día, con caña o plumas. Reduce el estrés y el sobrepeso."],
        ["🪟", "Ventanas con malla", "Las caídas desde balcones son muy frecuentes en Lima. Instala mallas."],
        ["🖌️", "Cepillado", "Semanal en pelo corto, diario en pelo largo. Menos bolas de pelo."],
        ["🛋️", "Zonas altas", "Repisas y escondites les dan seguridad y les permiten vigilar."]
      ],
      enfermedades: [
        { n: "Obstrucción urinaria (FLUTD)", lvl: "alta", s: ["Va mucho al arenero y sale poca o nada de orina", "Orina fuera del arenero o con sangre", "Se lame los genitales y maúlla al orinar"], q: ["Si es macho y no orina: emergencia, puede ser mortal en 24–48 h", "Ve al veterinario de inmediato"], p: ["Comida húmeda y más agua", "Mantener peso ideal", "Arenero siempre limpio"] },
        { n: "Gripe felina (rinotraqueítis / calicivirus)", lvl: "media", s: ["Estornudos y mocos", "Ojos llorosos o pegados", "Llagas en la boca, deja de comer"], q: ["Consulta para tratamiento y evitar complicaciones", "Limpia ojos y nariz con suero", "Ofrécele comida húmeda tibia (más olor = más apetito)"], p: ["Triple felina a los 2 y 3 meses", "Revacunación anual"] },
        { n: "Leucemia (FeLV) e inmunodeficiencia (FIV)", lvl: "alta", s: ["Pérdida de peso", "Infecciones que se repiten", "Encías pálidas o inflamadas"], q: ["Prueba rápida en consulta", "Con buen manejo pueden vivir muchos años"], p: ["Prueba antes de juntarlo con otros gatos", "Vacuna de leucemia", "Esterilización (menos peleas)"] },
        { n: "Enfermedad renal crónica", lvl: "media", s: ["Toma mucha agua y orina mucho", "Pierde peso", "Vómitos y mal aliento"], q: ["Análisis de sangre y orina", "Dieta renal recetada", "Hidratación constante"], p: ["Chequeo anual desde los 7 años", "Comida húmeda"] },
        { n: "Bolas de pelo", lvl: "baja", s: ["Arcadas o tos seca", "Vomita pelo en forma de tubo"], q: ["Cepillado más frecuente", "Malta o pasta para bolas de pelo", "Si vomita seguido o no come: consulta"], p: ["Cepillado regular", "Hierba para gatos"] }
      ],
      alarma: ["Macho que va al arenero y no orina", "Más de 24 horas sin comer", "Respira con la boca abierta", "Se esconde y no sale, muy decaído", "Encías pálidas o amarillas", "Comió una planta o medicamento"]
    },

    conejo: {
      nombre: "Conejo", plural: "conejos", em: "🐰",
      foto: "photo-1585110396000-c9ffd4e4b308",
      tagline: "Curioso, sensible y mucho más inteligente de lo que imaginas.",
      intro: "Un conejo no es una mascota 'fácil' de jaula: vive hasta 12 años, necesita espacio para saltar y su dieta es 80 % heno. Bien cuidado, es cariñoso y hasta aprende su nombre.",
      hechos: [["Vida", "8–12 años"], ["1 año", "≈ 21 humanos"], ["Dieta", "80 % heno"], ["Libertad", "3–4 h/día"]],
      curiosidades: [
        ["🦷", "¿Sus dientes dejan de crecer?", "Nunca", "Crecen alrededor de 1 cm al mes. El heno es lo que los desgasta."],
        ["🤸", "¿Qué es un 'binky'?", "Felicidad", "Ese salto en el aire con giro es la forma en que un conejo dice 'estoy feliz'."],
        ["👀", "¿Cuánto ven sin girar?", "≈ 360°", "Sus ojos laterales les dan casi una vista completa, excepto justo frente a su nariz."],
        ["🤢", "¿Pueden vomitar?", "No", "No pueden vomitar; por eso un problema digestivo es siempre urgente."]
      ],
      etapas: [
        ["🍼", "Gazapo", "0 a 6 meses", "No separarlo de la madre antes de las 8 semanas. Introducir verduras poco a poco.", "Al adoptar + 1 control"],
        ["⚡", "Joven", "6 meses a 1 año", "Esterilización recomendada: en hembras previene cáncer de útero.", "Cada 6 meses"],
        ["🌿", "Adulto", "1 a 6 años", "Revisión de dientes y peso. Mantener mucho heno y ejercicio.", "Cada 6–12 meses"],
        ["🧡", "Senior", "6 años a más", "Artritis y problemas dentales: suelos blandos y control frecuente.", "Cada 6 meses"]
      ],
      si: [
        ["🌾", "Heno ilimitado", "Debe ser el 80 % de su dieta. Desgasta sus dientes y mueve su intestino."],
        ["🥬", "Hojas verdes", "Lechuga romana, cilantro, perejil, hojas de apio, hojas de zanahoria."],
        ["🟢", "Pellets de heno (poca cantidad)", "Una cucharada por kg de peso al día. Evita las mezclas con semillas de colores."],
        ["🍓", "Fruta como premio", "Fresa, manzana sin semillas, papaya: un trocito al día como máximo."],
        ["💧", "Agua fresca", "Mejor en plato pesado que en bebedero de bolita."]
      ],
      no: [
        ["🥗", "Lechuga americana (iceberg)", "Casi no nutre y puede causarle diarrea."],
        ["🍞", "Pan, galletas y cereales", "Alteran su flora intestinal y causan engorde."],
        ["🥔", "Papa, camote y palta", "La palta es tóxica; los tubérculos le dan exceso de almidón."],
        ["🧅", "Cebolla, ajo y poro", "Tóxicos para su sangre."],
        ["🍫", "Chocolate y dulces", "Tóxicos y dañinos para su intestino."],
        ["🌽", "Mezclas con semillas y maíz", "Hacen que elija solo lo dulce y deje el heno."]
      ],
      racion: "Heno a libre disposición todo el día, un plato de verduras (1 taza por kg) y pellets medidos. Los cambios de dieta deben ser muy graduales.",
      cuidados: [
        ["🏠", "Espacio", "Un recinto donde pueda dar al menos 3 saltos seguidos y pararse en dos patas."],
        ["🔌", "Casa a prueba de conejos", "Protege cables y muebles: roer es instintivo."],
        ["🚫", "No bañarlo", "El baño les causa estrés e hipotermia. Se limpian solos; solo cepíllalo."],
        ["🤲", "Cómo cargarlo", "Nunca de las orejas. Una mano bajo el pecho y otra bajo la cadera."],
        ["🌡️", "Calor", "Sufren mucho por encima de 28 °C. En verano: sombra y una botella congelada envuelta."],
        ["🧸", "Compañía", "Son sociales: necesitan interacción diaria o un compañero conejo esterilizado."]
      ],
      enfermedades: [
        { n: "Estasis gastrointestinal", lvl: "alta", s: ["Deja de comer", "No hace cacas o son muy pequeñas", "Postura encorvada, rechina los dientes"], q: ["Es una emergencia: más de 12 horas sin comer es grave", "Ve a un veterinario de exóticos de inmediato", "No le des laxantes caseros"], p: ["Heno ilimitado", "Ejercicio diario", "Evitar el estrés"] },
        { n: "Maloclusión dental", lvl: "media", s: ["Babeo o pelo mojado en la barbilla", "Come menos o selecciona la comida", "Ojos llorosos"], q: ["Revisión y limado dental en consulta", "Nunca cortes sus dientes en casa"], p: ["Mucho heno y ramas para roer", "Revisión dental cada 6 meses"] },
        { n: "Pasteurelosis ('resfriado')", lvl: "media", s: ["Estornudos y mocos blancos", "Patas delanteras sucias (se limpia la nariz)", "Cabeza ladeada en casos avanzados"], q: ["Consulta para antibiótico adecuado", "Ambiente limpio y sin polvo"], p: ["Heno de calidad, sin polvo", "Buena ventilación"] },
        { n: "Pododermatitis", lvl: "baja", s: ["Calvas o heridas en la planta de las patas", "Cojea o se mueve menos"], q: ["Consulta para curaciones", "Cambia el suelo por uno blando"], p: ["Nunca jaulas con suelo de rejilla", "Mantener su peso"] },
        { n: "Golpe de calor", lvl: "alta", s: ["Respiración rápida", "Orejas muy calientes", "Decaimiento o convulsiones"], q: ["Llévalo a un lugar fresco", "Moja suavemente sus orejas con agua fresca", "Ve al veterinario"], p: ["Ambiente ventilado", "Evitar el sol directo"] }
      ],
      alarma: ["Más de 12 horas sin comer o sin hacer cacas", "Respira con la boca abierta", "Cabeza ladeada o pérdida de equilibrio", "Diarrea líquida", "Herida infestada de moscas", "Se cayó o lo dejaron caer"]
    },

    hamster: {
      nombre: "Hámster", plural: "hámsters", em: "🐹",
      foto: "photo-1425082661705-1834bfd09dca",
      tagline: "Pequeño de tamaño, enorme en personalidad.",
      intro: "Vive solo 2 a 3 años, así que cada día cuenta. Un hámster feliz necesita una jaula amplia, una rueda grande y que respetes su horario: es un animal nocturno.",
      hechos: [["Vida", "2–3 años"], ["1 año", "≈ 26 humanos"], ["Activo", "De noche"], ["Corre", "Hasta 9 km/noche"]],
      curiosidades: [
        ["🏃", "¿Cuánto corren?", "9 km", "En la naturaleza recorren varios kilómetros cada noche buscando comida."],
        ["🥜", "¿Para qué son sus cachetes?", "Despensa", "Sus abazones se extienden hasta los hombros para transportar comida."],
        ["🦷", "¿Sus dientes crecen?", "Siempre", "Como los conejos, necesitan roer para desgastarlos."],
        ["🙋", "¿Pueden vivir en pareja?", "Sirios no", "El hámster sirio es solitario: juntos pelean, a veces hasta la muerte."]
      ],
      etapas: [
        ["🍼", "Cría", "0 a 2 meses", "No separarlo de la madre antes de las 4 semanas. No manipular a las crías.", "Al adoptar"],
        ["⚡", "Joven", "2 a 6 meses", "Ganar su confianza con premios en la mano. Mucha exploración.", "Cada 6 meses"],
        ["🌿", "Adulto", "6 a 18 meses", "Rueda adecuada, sustrato profundo y dieta variada.", "Cada 6 meses"],
        ["🧡", "Senior", "18 meses a más", "Pierde peso y pelo; vigila bultos, dientes y ojos.", "Cada 3–4 meses"]
      ],
      si: [
        ["🌰", "Mezcla o pellet para hámster", "Base de su dieta. Mejor variada y sin colorantes."],
        ["🥦", "Verduras frescas", "Brócoli, zanahoria, pepino, zapallito: un trocito del tamaño de una uña."],
        ["🥚", "Proteína ocasional", "Huevo duro, pollo cocido sin sal o gusanos de harina, 1–2 veces por semana."],
        ["🌾", "Heno y semillas naturales", "Mijo, linaza y heno para roer y forrajear."],
        ["💧", "Agua fresca diaria", "Revisa que el bebedero funcione: a veces se atascan."]
      ],
      no: [
        ["🍊", "Cítricos", "Son muy ácidos para su sistema digestivo."],
        ["🧅", "Cebolla, ajo y poro", "Tóxicos para su sangre."],
        ["🍫", "Chocolate y dulces", "Tóxicos y causan diabetes, sobre todo en hámsters enanos."],
        ["🍇", "Fruta en hámsters enanos", "Roborovski y Campbell tienen tendencia a la diabetes: casi nada de fruta."],
        ["🍬", "Comida pegajosa", "Mantequilla de maní o caramelos se pegan en sus abazones."],
        ["🥩", "Carne cruda y almendras amargas", "Riesgo de bacterias y de toxinas."]
      ],
      racion: "Una cucharada de mezcla al día (sirio) y media para enanos. Esconde parte de la comida para que la busque: es su forma de jugar.",
      cuidados: [
        ["📏", "Jaula amplia", "Mínimo 100 × 50 cm de base. Las jaulas pequeñas de tienda les causan estrés."],
        ["🎡", "Rueda grande", "28 cm o más para sirios, sin barrotes. Si arquea la espalda, es pequeña."],
        ["🪨", "Sustrato profundo", "15–20 cm de viruta sin aroma o papel para excavar madrigueras."],
        ["🏖️", "Baño de arena", "Nunca con agua: usa arena de chinchilla (no polvo) en un recipiente."],
        ["🌙", "Respeta su sueño", "No lo despiertes de día. Interactúa con él al anochecer."],
        ["🙌", "Manipulación", "Siempre sentado y cerca del suelo: una caída de 30 cm puede lastimarlo."]
      ],
      enfermedades: [
        { n: "Cola húmeda (diarrea)", lvl: "alta", s: ["Zona de la cola mojada y sucia", "Decaimiento y no come", "Mal olor"], q: ["Emergencia: puede ser mortal en 48 horas", "Ve al veterinario de exóticos", "Mantén la jaula limpia y seca"], p: ["Evitar cambios bruscos de dieta", "Higiene semanal de la jaula", "Reducir el estrés"] },
        { n: "Dientes demasiado largos", lvl: "media", s: ["Le cuesta comer", "Pierde peso", "Dientes que se ven curvados"], q: ["Corte dental en consulta", "Nunca lo cortes tú"], p: ["Ramas y juguetes de madera para roer"] },
        { n: "Abazones impactados", lvl: "media", s: ["Un cachete siempre inflado", "Mal olor en la boca"], q: ["Consulta para vaciarlos y limpiarlos"], p: ["Evitar comida pegajosa"] },
        { n: "Tumores y bultos", lvl: "media", s: ["Bultos en el cuerpo", "Pierde peso rápidamente"], q: ["Consulta pronto: algunos se pueden operar"], p: ["Revisarlo al cargarlo cada semana"] },
        { n: "Resfriado", lvl: "baja", s: ["Estornudos", "Ojos llorosos", "Respiración ruidosa"], q: ["Consulta para tratamiento", "Evita corrientes de aire"], p: ["Jaula lejos de ventanas y aire acondicionado"] }
      ],
      alarma: ["Zona de la cola mojada", "Más de 24 horas sin comer", "Respiración con chasquidos", "Sangrado o heridas por pelea", "Inmóvil y frío (puede estar en hibernación por frío: caliéntalo poco a poco y consulta)"]
    }
  };

  var key = document.body.getAttribute("data-animal");
  var a = A[key];
  var root = document.getElementById("animal");
  if (!a || !root) return;

  document.title = a.nombre + "s: cuidados, edad y salud · VetLu";

  var letters = a.nombre.split("").map(function (c, i) {
    return '<span class="char" style="animation-delay:' + (0.15 + i * 0.07) + 's">' + c + '</span>';
  }).join("");

  var otros = Object.keys(A).filter(function (k) { return k !== key; });

  function list(arr) { return "<ul>" + arr.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>"; }

  root.innerHTML =
    /* 1. Intro a pantalla completa */
    '<section class="intro">' +
    '<div class="intro-bg"><img src="' + img(a.foto, 2000) + '" alt="' + a.nombre + '" fetchpriority="high"></div>' +
    '<div class="container" style="width:min(var(--max),100% - 32px)">' +
    '<a href="index.html" class="back fade-up" style="animation-delay:.1s"><span class="circle">←</span>Volver a VetLu</a>' +
    '<p class="eyebrow fade-up" style="color:var(--gold-soft);animation-delay:.2s">Guía de cuidado</p>' +
    '<h1 aria-label="' + a.nombre + '">' + letters + '</h1>' +
    '<p class="tagline fade-up" style="animation-delay:.7s">' + a.tagline + '</p>' +
    '<p class="lead fade-up" style="animation-delay:.85s">' + a.intro + '</p>' +
    '<div class="intro-facts fade-up" style="animation-delay:1s">' + a.hechos.map(function (h) { return "<div><b>" + h[0] + "</b>" + h[1] + "</div>"; }).join("") + '</div>' +
    '<div class="btn-row fade-up" style="animation-delay:1.15s"><a href="#cuidados" class="btn btn--light">Descubre cómo cuidarlo <span class="arrow">↓</span></a>' +
    '<a href="adopcion.html#' + key + '" class="btn btn--ghost-light">Adopta un ' + a.nombre.toLowerCase() + ' 🐾</a></div>' +
    '</div></section>' +

    /* Sub-navegación */
    '<nav class="subnav" aria-label="Secciones de la guía"><div class="container"><ul>' +
    [["cuidados", "¿Sabías que?"], ["edad", "Edad humana"], ["etapas", "Etapas y visitas"], ["comida", "Alimentación"], ["dia", "Cuidado diario"], ["salud", "Enfermedades"]].map(function (s) {
      return '<li><a href="#' + s[0] + '">' + s[1] + '</a></li>';
    }).join("") + '</ul></div></nav>' +

    /* 2. Curiosidades */
    '<section class="section" id="cuidados"><div class="container">' +
    '<div class="section-head section-head--split"><div><p class="eyebrow">¿Sabías que…?</p><h2>Datos que harán que lo mires <em>distinto</em></h2></div>' +
    '<p class="lead">Pasa el cursor (o toca) cada tarjeta para descubrir la respuesta.</p></div>' +
    '<div class="grid grid-4">' + a.curiosidades.map(function (c, i) {
      return '<div class="flip reveal" data-delay="' + (i + 1) + '" tabindex="0"><div class="flip-inner">' +
        '<div class="flip-face flip-front"><span class="em">' + c[0] + '</span><span class="q">' + c[1] + '</span><small>Toca para ver ↻</small></div>' +
        '<div class="flip-face flip-back"><span class="big">' + c[2] + '</span><p>' + c[3] + '</p></div>' +
        '</div></div>';
    }).join("") + '</div></div></section>' +

    /* 3. Edad humana */
    '<section class="section section--sand" id="edad"><div class="container">' +
    '<div class="section-head center"><p class="eyebrow">Calculadora</p><h2>¿Cuántos años tendría <em>si fuera humano?</em></h2>' +
    '<p class="lead">Mueve la barra y descubre su edad equivalente y qué necesita en esa etapa.</p></div>' +
    '<div class="reveal" data-age-calc="' + key + '"></div>' +
    '<div class="center" style="margin-top:28px"><a href="edad.html" class="btn btn--ghost">Ver tabla completa de todas las especies <span class="arrow">→</span></a></div>' +
    '</div></section>' +

    /* 4. Etapas + visitas */
    '<section class="section" id="etapas"><div class="container">' +
    '<div class="section-head section-head--split"><div><p class="eyebrow">Etapas de vida</p><h2>¿Cada cuánto debe <em>visitarnos?</em></h2></div>' +
    '<p class="lead">La prevención cuesta mucho menos que el tratamiento. Esta es la frecuencia ideal según su edad.</p></div>' +
    '<div class="timeline">' + a.etapas.map(function (e, i) {
      return '<div class="t-step reveal" data-delay="' + (i + 1) + '"><div class="t-dot">' + e[0] + '</div><span class="when">' + e[2] + '</span><h3>' + e[1] + '</h3><p>' + e[3] + '</p><span class="freq">🩺 ' + e[4] + '</span></div>';
    }).join("") + '</div></div></section>' +

    /* 5. Comida */
    '<section class="section section--sage" id="comida"><div class="container">' +
    '<div class="section-head center"><p class="eyebrow">Alimentación</p><h2>Lo que <em>sí</em> y lo que <em>nunca</em></h2>' +
    '<p class="lead">' + a.racion + '</p></div>' +
    '<div class="food">' +
    '<div class="food-col yes reveal"><h3><span class="tag">✓</span>Sí puede comer</h3><ul>' + a.si.map(function (f) { return '<li><span class="em">' + f[0] + '</span><div><b>' + f[1] + '</b><span>' + f[2] + '</span></div></li>'; }).join("") + '</ul></div>' +
    '<div class="food-col no reveal" data-delay="2"><h3><span class="tag">✕</span>Nunca le des</h3><ul>' + a.no.map(function (f) { return '<li><span class="em">' + f[0] + '</span><div><b>' + f[1] + '</b><span>' + f[2] + '</span></div></li>'; }).join("") + '</ul></div>' +
    '</div>' +
    '<div class="center" style="margin-top:32px"><a href="comida-prohibida.html#' + key + '" class="btn btn--terra">Ver la lista completa de alimentos prohibidos <span class="arrow">→</span></a></div>' +
    '</div></section>' +

    /* 6. Cuidado diario */
    '<section class="section" id="dia"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">Rutina</p><h2>Cuidado <em>día a día</em></h2></div>' +
    '<div class="grid grid-3">' + a.cuidados.map(function (c, i) {
      return '<div class="card reveal" data-delay="' + (i % 3 + 1) + '"><div class="icon">' + c[0] + '</div><h3>' + c[1] + '</h3><p>' + c[2] + '</p></div>';
    }).join("") + '</div></div></section>' +

    /* 7. Enfermedades */
    '<section class="section section--sand" id="salud"><div class="container">' +
    '<div class="section-head section-head--split"><div><p class="eyebrow">Salud</p><h2>Si sufre de… <em>esto puedes hacer</em></h2></div>' +
    '<p class="lead">Las enfermedades más comunes, cómo reconocerlas y qué hacer mientras llegas a consulta. Toca cada una para abrirla.</p></div>' +
    '<div class="acc">' + a.enfermedades.map(function (d, i) {
      var lvl = { alta: "Urgente", media: "Atención pronto", baja: "Leve" }[d.lvl];
      return '<div class="acc-item' + (i === 0 ? " open" : "") + '"><button class="acc-btn" aria-expanded="' + (i === 0) + '"><span class="lvl ' + d.lvl + '">' + lvl + '</span><span>' + d.n + '</span><span class="plus">+</span></button>' +
        '<div class="acc-panel"><div><div class="acc-body">' +
        '<div class="box"><h4>🔎 Señales</h4>' + list(d.s) + '</div>' +
        '<div class="box"><h4>🩹 Qué hacer</h4>' + list(d.q) + '</div>' +
        '<div class="box"><h4>🛡️ Prevención</h4>' + list(d.p) + '</div>' +
        '</div></div></div></div>';
    }).join("") + '</div>' +
    '<div class="alert reveal"><span class="em">🚨</span><div><h3>Ve al veterinario de inmediato si notas:</h3>' + list(a.alarma) +
    '<div class="btn-row" style="margin-top:22px"><a class="btn btn--light" data-wa="Hola VetLu, tengo una emergencia con mi ' + a.nombre.toLowerCase() + '">Escribir por emergencia <span class="arrow">→</span></a></div></div></div>' +
    '<p class="disclaimer" style="margin-top:32px">Esta guía es informativa y no reemplaza una consulta. Nunca mediques a tu mascota sin indicación veterinaria: muchos medicamentos humanos son tóxicos para ellos.</p>' +
    '</div></section>' +

    /* 8. Adopción */
    '<section class="section--tight"><div class="container">' +
    '<div class="cta-band reveal"><div><p class="eyebrow" style="color:var(--gold-soft)">Adopta, no compres</p><h2>Hay ' + a.plural + ' esperando <em>un hogar como el tuyo</em></h2>' +
    '<p>En VetLu los entregamos vacunados, desparasitados, con su primera consulta gratis y 6 meses de plan de salud gratis.</p></div>' +
    '<div class="btn-row"><a href="adopcion.html#' + key + '" class="btn btn--light">Conocerlos <span class="arrow">→</span></a></div></div>' +
    '</div></section>' +

    /* Otras guías */
    '<section class="section--tight" style="padding-top:0"><div class="container">' +
    '<p class="eyebrow">Sigue explorando</p><div class="grid grid-3">' + otros.map(function (k) {
      return '<a class="card card--link reveal" href="' + k + '.html"><div class="icon">' + A[k].em + '</div><h3>' + A[k].nombre + 's</h3><p>' + A[k].tagline + '</p><span class="more">Ver guía <span class="arrow">→</span></span></a>';
    }).join("") + '</div></div></section>';

  // Acordeón
  root.querySelectorAll(".acc-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      var it = b.parentElement;
      var open = it.classList.toggle("open");
      b.setAttribute("aria-expanded", open);
    });
  });

  // Sub-navegación activa
  var links = root.querySelectorAll(".subnav a");
  var ids = ["cuidados", "edad", "etapas", "comida", "dia", "salud"];
  var ticking = false;
  function spy() {
    var current = null;
    ids.forEach(function (id) { if (document.getElementById(id).getBoundingClientRect().top < 160) current = id; });
    links.forEach(function (l) {
      var on = l.getAttribute("href") === "#" + current;
      l.classList.toggle("active", on);
      if (on) l.parentElement.parentElement.scrollLeft = l.offsetLeft - 16; // mantiene visible la pestaña activa en celular
    });
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, { passive: true });
  spy();
})();
