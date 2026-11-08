/* ============================================================
   VetLu — "¿Por qué hace eso?": casos de comportamiento y alimentación
   sp: perro | gato | conejo | hamster
   v: veredicto → [texto, tono]  tono: ok | ojo | vet
   ============================================================ */
(function () {
  var C = [
    /* ---------------- PERROS ---------------- */
    {
      id: "camote", sp: "perro", em: "🍠", tema: "Alimentación",
      q: "¿Mi perro puede comer camote crudo?",
      v: ["Mejor cocido", "ojo"],
      corto: "El camote no es tóxico (no es pariente de la papa), pero crudo es duro y difícil de digerir. Cocido, sin cáscara y sin azúcar, es un buen premio.",
      porque: [
        "Crudo tiene almidón que el perro casi no puede digerir: le causa gases, vómitos o diarrea.",
        "Los trozos duros que traga sin masticar pueden atorarse en el esófago o el intestino.",
        "La cáscara y el camote viejo con moho o brotes le caen pesados al estómago.",
        "Muchos perros lo buscan por su olor dulce, sobre todo si lo encuentran en la cocina o la basura."
      ],
      hacer: [
        "Si ya comió un poco crudo: dale agua y obsérvalo 24 horas. La mayoría solo tiene gases o heces blandas.",
        "Para dárselo bien: sancochado o al horno, sin cáscara, sin sal, azúcar ni mantequilla, en cubitos.",
        "Cantidad: como premio, no más del 10 % de lo que come al día (1–2 cucharadas en un perro mediano).",
        "Para evitar que lo robe: guarda camotes y papas en un cajón cerrado y usa tacho con tapa."
      ],
      vet: ["Vomita varias veces o intenta vomitar sin sacar nada", "Tiene el abdomen hinchado o duro", "No hace caca en más de 24 horas", "Comió camote frito, en dulce o con chancaca"],
      tip: "Camote cocido aplastado dentro de un juguete rellenable y congelado: un premio sano que lo entretiene un buen rato."
    },
    {
      id: "plastico", sp: "perro", em: "🧴", tema: "Comportamiento",
      q: "¿Por qué mi perra come plástico, medias o piedras?",
      v: ["Peligroso", "vet"],
      corto: "Comer cosas que no son comida se llama pica. Puede ser por aburrimiento o ansiedad, pero también por un problema de salud. Siempre hay que tomarlo en serio: puede causar una obstrucción intestinal.",
      porque: [
        "Aburrimiento o falta de ejercicio: masticar libera tensión.",
        "Ansiedad, sobre todo cuando se queda sola o hay cambios en casa.",
        "Cachorros: exploran el mundo con la boca y les duelen los dientes nuevos.",
        "Hambre o dieta pobre: comida insuficiente o de baja calidad.",
        "Causas médicas: parásitos, anemia, problemas digestivos o diabetes.",
        "Llamar tu atención: aprende que si agarra algo prohibido, todos la persiguen."
      ],
      hacer: [
        "Primero descarta lo médico: consulta, desparasitación y análisis de sangre si pasa seguido.",
        "Quita de su alcance bolsas, botellas, medias, ligas y juguetes de niños. Tacho con tapa.",
        "No la persigas para quitárselo (lo traga más rápido): cámbialo por un premio y di “suelta”.",
        "Enséñale “deja”: premia cuando aparta la mirada de un objeto.",
        "Dale cosas permitidas para masticar: juguetes de caucho resistentes, huesos de nylon, mordedores congelados.",
        "Más ejercicio y juegos de olfato: esconde sus croquetas para que las busque.",
        "Si es muy frecuente en la calle, un bozal de canasta en los paseos la protege mientras aprende."
      ],
      vet: ["Vomita varias veces seguidas", "No quiere comer o está decaída", "No hace caca o hace muy poca con esfuerzo", "Tiene dolor al tocarle la barriga", "Sabes que se tragó un objeto grande, una media o un hilo"],
      tip: "Nunca le provoques el vómito en casa si se tragó plástico o algo con punta: puede lastimarse el esófago al salir."
    },
    {
      id: "moscas", sp: "perro", em: "🪰", tema: "Comportamiento",
      q: "¿Por qué mi perra atrapa moscas?",
      v: ["Normal casi siempre", "ok"],
      corto: "Cazar moscas es instinto de cazador y un juego. Solo preocupa si “caza” moscas que no existen, lo hace sin parar o se queda como ausente.",
      porque: [
        "Instinto: un insecto que se mueve despierta su lado cazador.",
        "Aburrimiento: es una forma de entretenerse.",
        "Si muerde el aire sin moscas, puede ser malestar estomacal, problemas de visión, una conducta compulsiva o, a veces, convulsiones leves.",
        "Riesgo real: si atrapa abejas o avispas puede tener una reacción alérgica, y las moscas pueden traer insecticida si fumigaste."
      ],
      hacer: [
        "Si son moscas reales y de vez en cuando: no pasa nada, déjala.",
        "Reduce las moscas en casa: basura cerrada, recoge sus cacas a diario, mallas en ventanas.",
        "No uses insecticidas en spray cerca de ella ni de su comida.",
        "Dale más juego y ejercicio si lo hace por aburrimiento.",
        "Si muerde el aire sin moscas: grábala con el celular y tráenos el video. Ayuda mucho al diagnóstico."
      ],
      vet: ["Muerde moscas que no existen", "Se queda mirando fijo o no responde cuando la llamas", "Lo hace muchas veces al día y no puedes distraerla", "Después de atrapar una abeja se le hincha la cara o le cuesta respirar (emergencia)"],
      tip: "Juegos de buscar, pelotas o cuerdas con plumas canalizan ese instinto cazador de forma segura."
    },
    {
      id: "orina", sp: "perro", em: "💧", tema: "Comportamiento",
      q: "¿Por qué mi perra orina por todos lados?",
      v: ["Tiene solución", "ojo"],
      corto: "Puede ser marcaje, falta de entrenamiento, emoción o miedo, pero también infección urinaria o incontinencia. Lo primero es descartar un problema de salud.",
      porque: [
        "Infección urinaria: orina poquito y muchas veces, a veces con sangre o mal olor, y se lame la zona.",
        "Marcaje: deja pequeñas cantidades en puertas, muebles o lugares nuevos. Más común sin esterilizar o si llegó otro animal.",
        "Entrenamiento incompleto: no tiene claro dónde sí puede hacerlo.",
        "Emoción o sumisión: se orina al saludarte, cuando la regañan o al jugar (común en cachorras).",
        "Incontinencia: gotea dormida o echada. Frecuente en hembras esterilizadas o mayores.",
        "Toma mucha agua: diabetes o problemas de riñón hacen que orine más.",
        "Miedo o estrés: cohetes, visitas, mudanzas."
      ],
      hacer: [
        "Consulta y análisis de orina para descartar infección: es rápido y barato.",
        "Sácala a horarios fijos: al despertar, después de comer, después de jugar y antes de dormir.",
        "Premia en el mismo momento en que orina en el lugar correcto, con premio y voz alegre.",
        "Nunca la castigues ni le restriegues la nariz: aprende a esconderse para orinar.",
        "Limpia con limpiador enzimático o con agua, vinagre y bicarbonato. Evita lejía y amoníaco: huelen a orina y la invitan a volver.",
        "Saludos tranquilos: al llegar, ignórala unos minutos y salúdala agachado de lado.",
        "Si marca, la esterilización reduce mucho la conducta. Mientras tanto, puedes usar una banda o pañal lavable."
      ],
      vet: ["Orina con sangre o con esfuerzo", "Va muchas veces y sale muy poco", "Gotea orina dormida", "Toma mucha más agua de lo normal", "Empezó de repente siendo adulta y antes no lo hacía"],
      tip: "Lleva un registro de 3 días: hora, lugar y qué pasó antes. Así verás si es marcaje, emoción o algo médico."
    },
    {
      id: "caca", sp: "perro", em: "💩", tema: "Comportamiento",
      q: "¿Por qué mi perro come caca?",
      v: ["Común, pero corregible", "ojo"],
      corto: "Se llama coprofagia. Es frecuente en cachorros y perros aburridos, pero también puede indicar hambre, mala digestión o parásitos.",
      porque: [
        "Cachorros que imitan a la madre, que limpia a sus crías.",
        "Aburrimiento o falta de atención.",
        "Miedo al castigo: si lo regañaron por hacer caca adentro, la “esconde” comiéndola.",
        "Hambre, dieta pobre o mala absorción de nutrientes.",
        "Parásitos intestinales.",
        "Las cacas de gato le atraen porque tienen mucha proteína."
      ],
      hacer: [
        "Recoge sus cacas en el momento, antes de que se dé vuelta.",
        "Desparasítalo y revisa que su alimento sea de buena calidad y en la cantidad correcta.",
        "Enséñale “deja” y llámalo para premiarlo apenas termine de hacer.",
        "Pon el arenero del gato donde el perro no llegue.",
        "Más paseos, juego y juguetes rellenables."
      ],
      vet: ["Bajó de peso", "Tiene diarrea o hambre exagerada", "Empezó de adulto de forma repentina"],
      tip: "Echarle picante o limón a la caca no funciona bien y puede irritarle la boca. Es mejor recogerla y redirigirlo."
    },
    {
      id: "pasto", sp: "perro", em: "🌱", tema: "Comportamiento",
      q: "¿Por qué mi perro come pasto?",
      v: ["Normal", "ok"],
      corto: "La mayoría de perros come pasto porque le gusta, por aburrimiento o por fibra. Rara vez está enfermo.",
      porque: ["Le gusta la textura o el sabor.", "Busca fibra.", "Aburrimiento.", "A veces, malestar estomacal (y luego vomita)."],
      hacer: ["Evita parques fumigados o con fertilizantes.", "Revisa que no coma plantas tóxicas (mira nuestra lista de comida prohibida).", "Desparasítalo cada 3 meses: el pasto de parques puede tener huevos de parásitos."],
      vet: ["Come pasto con desesperación y vomita seguido", "Tiene diarrea o no quiere comer su alimento"],
      tip: "Si le encanta, puedes sembrarle una macetita de trigo o avena solo para él."
    },
    {
      id: "patas", sp: "perro", em: "🐾", tema: "Salud",
      q: "¿Por qué mi perro se lame o muerde las patas todo el tiempo?",
      v: ["Revisar", "ojo"],
      corto: "Lamerse un poco es aseo normal. Hacerlo todo el día suele indicar alergia, hongos, una herida, dolor o ansiedad.",
      porque: ["Alergias (alimentarias, a pulgas o al ambiente): la causa más común.", "Hongos o bacterias entre los dedos (huele a “cancha”).", "Una espina, herida o uña rota.", "Dolor en articulaciones.", "Aburrimiento o ansiedad."],
      hacer: ["Revisa entre los dedos y las almohadillas con buena luz.", "Seca bien sus patas después de bañarlo o de pasear con humedad.", "Antipulgas al día.", "No le pongas cremas humanas: muchas son tóxicas si las lame."],
      vet: ["Patas rojas, hinchadas o con mal olor", "Cojea", "Se le cae el pelo entre los dedos", "Se lame tanto que se hace heridas"],
      tip: "El pelo rojizo o marrón entre los dedos de un perro blanco es una señal de que se lame mucho."
    },
    {
      id: "trasero", sp: "perro", em: "🛷", tema: "Salud",
      q: "¿Por qué mi perro arrastra el trasero por el piso?",
      v: ["Revisar", "ojo"],
      corto: "Casi siempre son las glándulas anales llenas o irritadas. También puede ser por parásitos o alergias.",
      porque: ["Glándulas anales que no se vacían bien.", "Parásitos intestinales.", "Alergias que dan picazón.", "Restos de caca pegados en el pelo."],
      hacer: ["Revisa la zona y límpiala con agua tibia.", "Desparasítalo.", "Más fibra en su dieta ayuda a que las glándulas se vacíen solas.", "No intentes vaciarlas tú sin enseñanza: puedes lastimarlo."],
      vet: ["Lo hace varios días seguidos", "Hay hinchazón, sangre o mal olor fuerte cerca del ano", "Le duele al sentarse"],
      tip: "El vaciado de glándulas es rápido en consulta y alivia al instante."
    },
    {
      id: "cola", sp: "perro", em: "🌀", tema: "Comportamiento",
      q: "¿Por qué mi perro persigue su cola?",
      v: ["Depende", "ojo"],
      corto: "En cachorros suele ser juego. En adultos que lo hacen seguido puede ser aburrimiento, pulgas, dolor o una conducta compulsiva.",
      porque: ["Juego y exceso de energía.", "Pulgas o picazón cerca de la cola.", "Glándulas anales molestas.", "Conducta compulsiva por estrés."],
      hacer: ["Revisa si tiene pulgas o heridas en la cola.", "Más ejercicio y estimulación mental.", "No te rías ni lo celebres: lo repetirá para tener tu atención.", "Distráelo con un juego cuando empiece."],
      vet: ["Se muerde la cola hasta hacerse heridas", "No puedes interrumpirlo", "Lo hace muchas veces al día"],
      tip: "Grábalo: un video ayuda a saber si es juego o algo compulsivo."
    },
    {
      id: "rapido", sp: "perro", em: "⚡", tema: "Alimentación",
      q: "Mi perro come demasiado rápido, ¿es malo?",
      v: ["Ojo", "ojo"],
      corto: "Sí puede ser malo: traga aire, vomita, y en perros grandes aumenta el riesgo de torsión gástrica, que es una emergencia.",
      porque: ["Competencia con otros animales de la casa.", "Pasó hambre antes (común en rescatados).", "Comida muy rica o pocas comidas al día."],
      hacer: ["Usa un plato lento (con relieves) o esparce las croquetas en un tapete.", "Divide la ración en 2 o 3 comidas.", "Dale de comer separado de otros animales.", "Evita el ejercicio intenso 1 hora antes y después de comer."],
      vet: ["Abdomen hinchado y duro con arcadas sin vómito (emergencia, sobre todo en perros grandes)", "Vomita después de cada comida"],
      tip: "Un perro adoptado que pasó hambre suele calmarse con el tiempo, cuando entiende que la comida siempre llega."
    },
    {
      id: "solo", sp: "perro", em: "🏠", tema: "Comportamiento",
      q: "¿Por qué llora, ladra o rompe cosas cuando se queda solo?",
      v: ["Ansiedad por separación", "ojo"],
      corto: "Es una de las consultas más comunes en perros adoptados. Sienten angustia al quedarse solos, no es venganza.",
      porque: ["Cambio de hogar o de rutina.", "Pasa mucho tiempo solo.", "Nunca aprendió a estar solo de forma gradual.", "Falta de ejercicio."],
      hacer: ["Paséalo y juega con él antes de salir.", "Practica salidas cortas (2 minutos, luego 5, luego 15) y vuelve antes de que llore.", "Sal y entra sin despedidas ni saludos exagerados.", "Déjale un juguete rellenable congelado solo para cuando te vas.", "Una prenda con tu olor en su cama lo tranquiliza."],
      vet: ["Se lastima intentando escapar", "Orina, babea o tiembla mucho cuando te vas", "No mejora en unas semanas: hay tratamientos que ayudan"],
      tip: "Castigarlo al volver empeora la ansiedad: no entiende por qué lo regañas."
    },
    {
      id: "estornudo", sp: "perro", em: "😮‍💨", tema: "Salud",
      q: "Mi perro hace un ruido como si se ahogara, ¿qué es?",
      v: ["Casi siempre normal", "ok"],
      corto: "Probablemente es un estornudo invertido: aspira aire fuerte y rápido por la nariz. Asusta, pero dura segundos y es inofensivo.",
      porque: ["Irritación en la garganta o la nariz por polvo, perfume o polen.", "Emoción o tirones de la correa.", "Más común en razas pequeñas y de nariz chata."],
      hacer: ["Mantén la calma y acaríciale el cuello con suavidad.", "Tápale la nariz un segundo para que trague: suele cortarlo.", "Usa arnés en lugar de collar si tira mucho."],
      vet: ["Dura más de un minuto o se repite mucho", "Sale secreción con sangre por la nariz", "Tiene las encías moradas o se desmaya (emergencia)"],
      tip: "Grábalo y muéstranoslo: ayuda a diferenciarlo de una tos o un colapso de tráquea."
    },
    {
      id: "agua", sp: "perro", em: "🚰", tema: "Salud",
      q: "Mi perro toma mucha agua, ¿es normal?",
      v: ["Revisar", "vet"],
      corto: "Un perro toma unos 50–60 ml por kilo al día. Si de pronto toma mucho más y orina más, puede ser diabetes, problemas de riñón, infección o hormonas.",
      porque: ["Calor o ejercicio (normal).", "Comida muy salada o seca.", "Diabetes, enfermedad renal, problemas hormonales o infección en el útero (hembras sin esterilizar)."],
      hacer: ["Mide cuánta agua toma en 24 horas.", "Nunca le quites el agua.", "Lleva una muestra de orina a la consulta."],
      vet: ["Toma más del doble de lo habitual", "Orina mucho y empezó a orinarse en casa", "Hembra sin esterilizar con flujo vaginal y decaída (emergencia)"],
      tip: "Una hembra sin esterilizar que toma mucha agua semanas después del celo puede tener piometra: es urgente."
    },

    /* ---------------- GATOS ---------------- */
    {
      id: "arenero", sp: "gato", em: "🧺", tema: "Comportamiento",
      q: "¿Por qué mi gato orina fuera del arenero?",
      v: ["Revisar pronto", "vet"],
      corto: "Los gatos no lo hacen por venganza. Casi siempre hay un problema médico (urinario) o algo que no le gusta del arenero.",
      porque: ["Infección, cristales o inflamación urinaria (muy común).", "Arenero sucio, muy pequeño, con tapa o en un lugar ruidoso.", "Cambio de arena.", "Estrés: mudanza, otro gato, visitas.", "Marcaje en gatos sin castrar."],
      hacer: ["Consulta y análisis de orina.", "Un arenero por gato más uno extra, limpio a diario.", "Lugar tranquilo, lejos de su comida.", "Limpia con limpiador enzimático, no con lejía.", "Castración si marca."],
      vet: ["Macho que va al arenero y no sale orina (emergencia)", "Orina con sangre", "Maúlla al orinar"],
      tip: "Si orina en tu ropa o tu cama, suele ser estrés: busca qué cambió en casa."
    },
    {
      id: "amasa", sp: "gato", em: "🍞", tema: "Comportamiento",
      q: "¿Por qué mi gato “amasa” con las patas?",
      v: ["Normal y tierno", "ok"],
      corto: "Lo aprendieron de bebés al mamar. De adultos lo hacen cuando están relajados y felices, y para marcarte con su olor.",
      porque: ["Recuerdo de cuando mamaba.", "Se siente seguro y contento.", "Marca con las glándulas de sus patas."],
      hacer: ["Disfrútalo.", "Si te clava las uñas, pon una manta gruesa sobre tus piernas.", "Mantén sus uñas cortas."],
      vet: ["Amasa y chupa telas de forma obsesiva y llega a comérselas"],
      tip: "Nunca lo castigues por amasar: es una de sus formas de decir que te quiere."
    },
    {
      id: "noche", sp: "gato", em: "🌙", tema: "Comportamiento",
      q: "¿Por qué mi gato corre como loco de noche?",
      v: ["Normal", "ok"],
      corto: "Son cazadores del amanecer y el anochecer. Si no gastó energía en el día, la libera de noche.",
      porque: ["Instinto de cazador nocturno.", "Energía acumulada.", "Aburrimiento si pasa solo todo el día."],
      hacer: ["Juega con él 10–15 minutos con caña antes de dormir.", "Dale su comida después del juego: caza, come y duerme.", "Rascadores y repisas para trepar."],
      vet: ["Gato mayor que maúlla y deambula de noche desorientado", "Además adelgaza y come mucho (posible tiroides)"],
      tip: "No le des atención cuando te despierta de madrugada: aprenderá que funciona."
    },
    {
      id: "muerde", sp: "gato", em: "😾", tema: "Comportamiento",
      q: "¿Por qué mi gato me muerde de repente cuando lo acaricio?",
      v: ["Normal", "ok"],
      corto: "Se llama sobreestimulación: las caricias que le gustaban se vuelven molestas y te avisa con un mordisco.",
      porque: ["Demasiadas caricias seguidas.", "Zonas sensibles: barriga y base de la cola.", "Te avisó antes y no lo notaste."],
      hacer: ["Observa las señales: cola que se agita, orejas hacia atrás, piel que se mueve.", "Acarícialo en cabeza y mejillas, en sesiones cortas.", "Detente antes de que se moleste."],
      vet: ["Muerde siempre al tocar una zona específica (puede haber dolor)"],
      tip: "Si te muerde y la herida se hincha, consulta a un médico: las mordidas de gato se infectan con facilidad."
    },

    /* ---------------- CONEJOS ---------------- */
    {
      id: "cecotrofos", sp: "conejo", em: "🫐", tema: "Alimentación",
      q: "¿Por qué mi conejo se come sus cacas?",
      v: ["Totalmente normal", "ok"],
      corto: "No come cualquier caca: come los cecotrofos, unas bolitas blandas y brillantes llenas de vitaminas que necesita para estar sano.",
      porque: ["Su sistema digestivo necesita procesar la comida dos veces.", "Los cecotrofos tienen vitaminas B y proteína."],
      hacer: ["No se lo impidas.", "Si ves muchos cecotrofos sin comer pegados en su cola, revisa su dieta: le falta heno y le sobran pellets o fruta."],
      vet: ["Tiene la cola sucia con caca blanda seguido", "Deja de hacer cacas o deja de comer (emergencia)"],
      tip: "Un conejo con sobrepeso no alcanza a comer sus cecotrofos: mantén su peso ideal."
    },
    {
      id: "rechina", sp: "conejo", em: "😬", tema: "Salud",
      q: "¿Por qué mi conejo rechina los dientes?",
      v: ["Depende del sonido", "ojo"],
      corto: "Un ronroneo suave de dientes mientras lo acaricias es felicidad. Un rechinar fuerte con el cuerpo encorvado es dolor.",
      porque: ["Suave y relajado: está contento.", "Fuerte, encorvado y quieto: dolor de barriga o de dientes."],
      hacer: ["Observa su postura y si come y hace cacas normal."],
      vet: ["Rechina fuerte y no se mueve", "No come o no hace cacas en 12 horas (emergencia)"],
      tip: "Los conejos esconden el dolor: cualquier cambio en su forma de comer merece una revisión."
    },

    /* ---------------- HÁMSTERS ---------------- */
    {
      id: "barrotes", sp: "hamster", em: "🔒", tema: "Comportamiento",
      q: "¿Por qué mi hámster muerde los barrotes de la jaula?",
      v: ["Señal de estrés", "ojo"],
      corto: "Morder barrotes casi siempre significa que la jaula es pequeña o aburrida. Quiere salir a explorar.",
      porque: ["Jaula pequeña (menos de 100 × 50 cm).", "Rueda pequeña o sin rueda.", "Poco sustrato para excavar.", "Necesita desgastar los dientes."],
      hacer: ["Jaula más grande o un terrario amplio.", "Rueda de 28 cm o más.", "15–20 cm de sustrato para excavar.", "Ramas y juguetes de madera para roer.", "Esparce la comida para que la busque."],
      vet: ["Tiene la nariz lastimada o dientes torcidos de tanto morder"],
      tip: "Un hámster en una jaula del tamaño correcto casi nunca muerde los barrotes."
    },
    {
      id: "crias", sp: "hamster", em: "🐣", tema: "Comportamiento",
      q: "¿Por qué la hámster se come a sus crías?",
      v: ["Por estrés o peligro", "ojo"],
      corto: "Es duro de ver, pero ocurre cuando la madre siente peligro, estrés, falta de comida, o detecta crías enfermas o con olor extraño.",
      porque: ["Estrés por ruido o manipulación.", "Olor humano en las crías.", "Falta de proteína o comida.", "Madre muy joven o crías enfermas."],
      hacer: ["No toques el nido ni a las crías por 2 semanas.", "Cubre parte de la jaula y ponla en un lugar tranquilo.", "Dale proteína extra (huevo cocido) y agua.", "Separa al macho y esteriliza para evitar más camadas."],
      vet: ["La madre está decaída o sangra"],
      tip: "Los hámsters no deben convivir en pareja: así se evitan camadas no planificadas."
    }
  ];

  var TONE = { ok: "ok", ojo: "ojo", vet: "vet" };
  var root = document.getElementById("casos");
  if (!root) return;
  var state = { sp: "todos", q: "" };
  function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function li(a) { return "<ul>" + a.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>"; }

  function render() {
    var q = norm(state.q);
    var list = C.filter(function (c) {
      return (state.sp === "todos" || c.sp === state.sp) &&
        (!q || norm([c.q, c.corto, c.tema].concat(c.porque, c.hacer).join(" ")).indexOf(q) > -1);
    });
    document.getElementById("casosCount").textContent = list.length;
    root.innerHTML = list.length ? list.map(function (c) {
      return '<article class="caso" id="' + c.id + '">' +
        '<button class="caso-head" aria-expanded="false"><span class="caso-em">' + c.em + '</span>' +
        '<span class="caso-q"><small>' + c.tema + '</small>' + c.q + '</span>' +
        '<span class="verdict ' + TONE[c.v[1]] + '">' + c.v[0] + '</span><span class="plus">+</span></button>' +
        '<div class="acc-panel"><div><div class="caso-body">' +
        '<p class="caso-corto">' + c.corto + '</p>' +
        '<div class="caso-cols">' +
        '<div class="box"><h4>🤔 ¿Por qué pasa?</h4>' + li(c.porque) + '</div>' +
        '<div class="box"><h4>✅ Cómo solucionarlo</h4>' + li(c.hacer) + '</div>' +
        '<div class="box vet"><h4>🚨 Ve al veterinario si…</h4>' + li(c.vet) + '</div>' +
        '</div>' +
        '<p class="caso-tip"><b>💡 Consejo VetLu:</b> ' + c.tip + '</p>' +
        '</div></div></div></article>';
    }).join("") : '<p class="tox-empty">No encontramos ese caso. <a data-wa="Hola VetLu, tengo una duda sobre el comportamiento de mi mascota">Cuéntanoslo por WhatsApp</a> y te orientamos.</p>';
    root.querySelectorAll("[data-wa]").forEach(function (a) { a.href = window.VETLU.wa(a.getAttribute("data-wa")); a.target = "_blank"; });
  }

  root.addEventListener("click", function (e) {
    var b = e.target.closest(".caso-head");
    if (!b) return;
    var open = b.parentElement.classList.toggle("open");
    b.setAttribute("aria-expanded", open);
  });
  document.querySelector("[data-casos]").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-v]");
    if (!b) return;
    state.sp = b.dataset.v;
    this.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
    render();
  });
  document.getElementById("casosSearch").addEventListener("input", function (e) { state.q = e.target.value; render(); });

  // Abrir un caso desde un enlace (#plastico) o filtrar por especie (#perro)
  var h = location.hash.replace("#", "");
  var bySp = document.querySelector('[data-casos] [data-v="' + h + '"]');
  if (bySp) bySp.click(); else render();
  var target = h && document.getElementById(h);
  if (target && target.classList.contains("caso")) {
    target.classList.add("open");
    target.querySelector(".caso-head").setAttribute("aria-expanded", "true");
    setTimeout(function () { target.scrollIntoView({ block: "start" }); }, 200);
  }
})();
