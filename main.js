class Course {
  constructor({ name, classes = [] }) {
    // vamos a esconder el atributo name poniendo un _ antes del nombre
    this._name = name;
    this.classes = classes;
  }
  // vamos a crear un getter para acceder al atributo name
  get name() {
    return this._name;
  }
  // si queremos cambiar el nombre debemos crear un setter
  set name(newName) {
    if (newName === "Curso Malito de Programación Básica") {
      console.error("Web... no");
    } else {
      this._name = newName;
    }
  }
}
const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});

// challenge
class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
} // EZ PZ
const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Practico de HTML y CSS",
    "Curso de Responsive Design",
  ],
});

// utilizaremos clases
class Student {
  constructor({
    name,
    username,
    email,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.socialMedia = { twitter, instagram, facebook };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juan@juan.com",
  twitter: "fjuandc",
  // implemento el challenge
  learningPaths: [escuelaWeb],
});

const miguel = new Student({
  name: "Miguel",
  username: "miguel",
  email: "mi@guel.com",
  instagram: "miguel",
  facebook: "miguel",
  approvedCourses: ["Curso de Responsive Design"],
});

// crear un objeto literal fue exageradamente mucho trabajo.
// const juan1 = {
//   name: "juan",
//   username: "juan1",
//   points: 100,
//   socialMedia: {
//     twitter: "fjuandc",
//     instagram: "fjuandc",
//     facebook: undefined,
//   },
//   approvedCourses: [
//     "Curso Definitivo de HTML y CSS",
//     "Curso Práctico de HTML y CSS",
//   ],
//   learningPaths: [
//     {
//       name: "Escuela de desarrollo Web",
//       courses: [
//         "Curso Definitivo de HTML y CSS",
//         "Curso Práctico de HTML y CSS",
//         "Curso de Responsive Design",
//       ],
//     },
//     {
//       name: "Escuela de Videojuegos",
//       courses: [
//         "Curso de Introducción a la Producción de Videojuegos",
//         "Curso de Unreal Engine",
//         "Curso de Unity 3D",
//       ],
//     },
//   ],
// };
