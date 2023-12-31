// Creamos un objeto LITERAL
// los objetos literales no son instancia de un objeto en si, pero si del objeto Object
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  // Creamos un método dentro del objeto
  // hay 2 formas
  //   aprobarCurso: () => {}
  // estaforma es mas cheta
  aprobarCurso(nuevoCurso) {
    // hacemos referencia al atributo del objeto con this
    this.cursosAprobados.push(nuevoCurso);
  },
};

// Hacer q natalia apruebe otro curso
// natalia.cursosAprobados.push("Curso de Responsive Design");

// hacemos nuestro prototipo ahora
// creamos una funcion constructora
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // ahora te muestro una forma de crear un metodo
  // this.aprobarCurso = (nuevoCurso) => {
  //     this.cursosAprobados.push(nuevoCurso);
  // }
}
// pero hay otra forma mas interesante
Student.prototype.aprobarCurso = function (nuevoCurso) {
  // esto es mas cheto la verdad
  this.cursosAprobados.push(nuevoCurso);
};
// los prototipos se crean con la palabra reservada new
const juanita = new Student("juanita", 20, ["curso1", "curso2"]);
// todos los metodos que agregamos con prototype se agregan al prototipo de la funcion constructora
// es decir aparece en el atributo __proto__

// Prototipos con la sintaxis de clases
class Student2 {
  contructor(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  // creamos metodos
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const miguelito = new Student2("miguelito", 28, ["curso1", "curso2"]);

// patron RORO [Recieve Object Return Object]
// es un patron de diseño de funciones que reciben un objeto y retornan otro objeto con las modificaciones
// que se le hicieron al objeto recibido
class Student3 {
  contructor({ name, age, email, twitter, cursosAprobados = [] }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.twitter = twitter;
    this.cursosAprobados = cursosAprobados;
  }
  // creamos metodos
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const manu = Student3({
  email: "coso@test.com",
  age: 29,
  name: "Manu",
  twitter: "manu",
});
