// API del blog: devuelve las entradas en formato JSON.
// Para agregar una entrada, copia un bloque { ... } y cambia los datos.
// "contenido" es una lista de párrafos.
// "imagen" es opcional: si pones "img/post1.jpg" y subes esa foto, aparece como portada.
// Si lo dejas vacío (""), la entrada se muestra sin foto.

const posts = [
  {
    id: 1,
    titulo: "Mi pasantía en la Universidad Complutense de Madrid",
    fecha: "2026-11-18",
    categoria: "Pasantía",
    imagen: "img/avion.jpg",
    destacado: true,
    lectura: "5 min",
    resumen:
      "Nunca imaginé estudiar en Madrid. Te cuento cómo fue llevar cursos de mi carrera en una de las universidades más grandes de España y qué me traje de vuelta.",
    contenido: [
      "9 524 kilómetros separan Lima de Madrid. Todavía recuerdo la pantalla del avión marcando el destino y la mezcla de nervios y emoción que sentía.",
      "Cuando vi la convocatoria pensé que no tenía oportunidad, pero postulé igual. Preparé mi carta de motivación, mi CV, mi récord de notas y los documentos que pedían. Mi primer consejo: empieza con tiempo, porque algunos trámites demoran semanas.",
      "En la Facultad de Informática de la Complutense llevé cursos relacionados con Ingeniería de Sistemas e Informática. La forma de enseñar es distinta: se espera que investigues por tu cuenta y llegues a clase con preguntas.",
      "Las clases son muy participativas: exposiciones en grupo, debate y trabajo práctico. Compartir aulas con estudiantes de otros países me enseñó a comunicarme mejor y a trabajar con personas que piensan diferente. Además, vivir en otra ciudad me obligó a organizarme y a manejar mi propio presupuesto.",
      "Si estás dudando en postular a una movilidad o pasantía: hazlo. El 'no' ya lo tienes, y la experiencia vale muchísimo."
    ]
  },
  {
    id: 2,
    titulo: "El museo de informática escondido en la facultad",
    fecha: "2026-11-14",
    categoria: "Pasantía",
    imagen: "img/pdp11.jpg",
    destacado: true,
    inverso: true,
    posicion: "50% 60%",
    lectura: "3 min",
    resumen:
      "En los pasillos de la Facultad de Informática de la UCM hay vitrinas con computadoras, servidores y celulares que cuentan la historia de nuestra carrera.",
    contenido: [
      "Una de las cosas que más me sorprendió de la facultad fue encontrar, en plenos pasillos, vitrinas llenas de equipos históricos. Para alguien que estudia Sistemas, es como caminar por un libro de historia.",
      "Ahí está una DEC PDP-11/23 Plus de 1981, de la familia de computadoras sobre la que corrió UNIX por primera vez, junto a sus terminales con pantalla y teclado. También hay servidores SGI Origin 2000, una estación SGI Octane de 1997 y racks de almacenamiento con su cableado a la vista.",
      "Mis vitrinas favoritas fueron las de celulares y agendas electrónicas: desde un teléfono portátil Panasonic del tamaño de una maleta hasta el Nokia 3310, PDAs de Palm y los primeros smartphones.",
      "Ver todo eso me hizo pensar en lo rápido que cambia nuestra profesión, y en que lo que hoy estudiamos también será historia algún día."
    ],
    galeria: [
      { src: "img/servidores.jpg", pie: "Servidores SGI Origin 2000" },
      { src: "img/racks.jpg", pie: "Racks y almacenamiento" },
      { src: "img/celulares.jpg", pie: "La evolución del celular" },
      { src: "img/pdas.jpg", pie: "PDAs y agendas electrónicas" }
    ]
  },
  {
    id: 3,
    titulo: "Cómo sobreviví a Arquitectura de Software",
    fecha: "2026-11-10",
    categoria: "Vida universitaria",
    imagen: "",
    lectura: "4 min",
    resumen:
      "Fue el curso que más me costó en toda la carrera. Estas son las cosas que me ayudaron a pasarlo y que te pueden servir a ti.",
    contenido: [
      "Arquitectura de Software no se trata solo de programar, sino de pensar cómo se organiza un sistema completo: capas, componentes, patrones y cómo se comunican entre sí. Al principio me sentía perdida.",
      "Lo que me funcionó: dibujar. Hacer diagramas a mano antes de pasarlos a la computadora me ayudó a entender cómo encajaban las piezas.",
      "Estudiar los patrones con ejemplos reales (por ejemplo, cómo funciona una app que usas a diario) es mucho más fácil que memorizar definiciones.",
      "Y lo más importante: trabajar en equipo de verdad. Repartir el proyecto sin conversar entre todos es la receta para el desastre."
    ]
  },
  {
    id: 4,
    titulo: "Mis prácticas en la DIREPRO Chimbote: aprendiendo desde la administración",
    fecha: "2026-11-02",
    categoria: "Prácticas",
    imagen: "",
    lectura: "4 min",
    resumen:
      "No todo en sistemas es programar. Hice mis prácticas en un área administrativa y fue una experiencia que me abrió los ojos.",
    contenido: [
      "Realicé mis prácticas preprofesionales en la DIREPRO de Chimbote, enfocada en temas de administración. Al inicio pensé que no tendría mucho que ver con mi carrera, pero me equivoqué.",
      "Conocer de cerca cómo funcionan los procesos y trámites de una institución pública me ayudó a entender para qué sirven realmente los sistemas de información: para que el trabajo de las personas sea más ordenado y eficiente.",
      "También aprendí cosas que no se enseñan en clase: ser puntual, comunicarme con distintas áreas, organizar documentos y cumplir plazos.",
      "Mi consejo: no descartes unas prácticas porque no son 'de programación'. Un ingeniero de sistemas que entiende los procesos de una organización vale mucho."
    ]
  },
  {
    id: 5,
    titulo: "Guía para sobrevivir a los primeros ciclos de Sistemas",
    fecha: "2026-10-25",
    categoria: "Vida universitaria",
    imagen: "",
    lectura: "3 min",
    resumen:
      "Matemática, física, programación y cero idea de qué hacer. Si estás empezando la carrera, esto es lo que te recomiendo.",
    contenido: [
      "No te compares con quien ya programaba desde el colegio: cada uno tiene su ritmo.",
      "Arma un grupo de estudio desde el primer ciclo. Explicarle a otro es la mejor forma de aprender.",
      "Aprovecha las asesorías de los profesores: casi nadie va y son de gran ayuda.",
      "Y si un curso te cuesta, no es el fin del mundo. Con constancia se sale adelante."
    ]
  }
];

// En Vercel: funciona como API (/api/posts).
// Abierto desde tu PC: la página lee las entradas directamente de este archivo.
if (typeof module !== "undefined" && module.exports) {
  module.exports = (req, res) => {
    res.setHeader("Cache-Control", "s-maxage=60");
    res.status(200).json(posts);
  };
} else {
  window.POSTS = posts;
}
