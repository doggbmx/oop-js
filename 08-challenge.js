// Platzi challenge

class Banda {
  constructor({ nombre, generos = [] }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    // Tu código aquí 👈
    if (
      this.integrantes.some((e) => {
        e.instrumento == "Baterista";
      })
    ) {
      console.warn("Solo puede haber un baterista!");
    } else {
      this.integrantes.push(integranteNuevo);
    }
  }
}

//Crear clase Integrante
class Integrante {
  // Tu código aquí 👈
  constructor({ nombre, instrumento }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
}

export { Banda, Integrante };
