function videoPlay(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Se está reproduciendo desde la url " + urlSecreta);
}
function videoStop(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
  constructor({ name, videoId }) {
    this.name = name;
    this.videoId = videoId;
  }
  reproducir() {
    videoPlay(this.videoId);
  }
  pausarClase() {
    videoStop(this.videoId);
  }
}

class Course {
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    // vamos a esconder el atributo name poniendo un _ antes del nombre
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
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
  isFree: true,
});
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
  lang: "english",
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

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos"
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés"
      );
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const juan2 = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juan@juan.com",
  twitter: "fjuandc",
  // implemento el challenge
  learningPaths: [escuelaWeb],
});

const miguel = new BasicStudent({
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
