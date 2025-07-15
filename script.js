const cursos = [
  // PRIMER SEMESTRE
  { id: "estrategias", nombre: "Estrategias para el Aprendizaje", depende: [] },
  { id: "bio", nombre: "Fund. Biológicos del Comportamiento", depende: [] },
  { id: "filo", nombre: "Fund. Filosóficos de la Psicología", depende: [] },
  { id: "historia", nombre: "Evolución Histórica de la Psicología", depende: [] },
  { id: "cognitivos", nombre: "Procesos Cognitivos", depende: [] },
  { id: "comunicacion", nombre: "Taller de Comunicación", depende: [] },
  { id: "antropologia", nombre: "Antropología", depende: [] },

  // SEGUNDO SEMESTRE
  { id: "etica", nombre: "Ética", depende: [] },
  { id: "neuro", nombre: "Neuropsicología", depende: ["bio"] },
  { id: "socios", nombre: "Fund. Socioantropológicos", depende: ["antropologia"] },
  { id: "metodointro", nombre: "Intro a la Metodología", depende: [] },
  { id: "afectivos", nombre: "Procesos Afectivos", depende: ["cognitivos"] },
  { id: "tallergrupal", nombre: "Taller de Trabajo Grupal", depende: ["comunicacion"] },

  // TERCER SEMESTRE
  { id: "electivo1", nombre: "Electivo Formación Integral I", depende: ["estrategias"] },
  { id: "social1", nombre: "Psicología Social I", depende: ["socios"] },
  { id: "evolutiva1", nombre: "Psicología Evolutiva I", depende: ["cognitivos"] },
  { id: "metodoaplicada", nombre: "Metodología Aplicada", depende: ["metodointro"] },
  { id: "personalidad", nombre: "Psicología de la Personalidad", depende: [] },
  { id: "entrevista", nombre: "Taller de Entrevista", depende: ["tallergrupal"] },

  // Puedes continuar el resto siguiendo este formato...
];

const malla = document.getElementById("malla");
const template = document.getElementById("curso-template");

function crearCurso(curso) {
  const clone = template.content.cloneNode(true);
  const boton = clone.querySelector(".boton-curso");
  const nombreSpan = clone.querySelector(".nombre");

  boton.dataset.id = curso.id;
  boton.dataset.dependencias = JSON.stringify(curso.depende);
  nombreSpan.textContent = curso.nombre;

  if (curso.depende.length > 0) {
    boton.disabled = true;
  }

  boton.addEventListener("click", () => {
    boton.classList.add("aprobado");
    boton.disabled = true;

    document.querySelectorAll(".boton-curso").forEach(b => {
      if (!b.disabled && !b.classList.contains("aprobado")) return;
      const dependencias = JSON.parse(b.dataset.dependencias || "[]");
      const aprobadas = dependencias.every(id => {
        const depBtn = document.querySelector(.boton-curso[data-id='${id}']);
        return depBtn?.classList.contains("aprobado");
      });

      if (aprobadas) {
        b.disabled = false;
      }
    });
  });

  malla.appendChild(clone);
}

cursos.forEach(crearCurso);
