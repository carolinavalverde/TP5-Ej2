class Persona {
  constructor(nombreApellido, edad, dni, sexo, peso, altura, anioDeNacimiento) {
    this.nombreApellido = nombreApellido;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioDeNacimiento = anioDeNacimiento;
  }

  mostrarDatos() {
    const { nombreApellido, edad, dni, sexo, peso, altura, anioDeNacimiento } =
      this;
    return `<ul>
        <li>Nombre: ${this.nombreApellido}</li>
        <li>Edad: ${this.edad} años</li>
        <li> DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso} kg</li>
        <li>Altura: ${this.altura} m</li>
        <li>Año de Nacimiento: ${this.anioDeNacimiento}</li>
        </ul>`;
  }

  mostrarGeneracion() {
    let generacion, rasgoCaracteristico;

    switch (true) {
      case this.anioDeNacimiento >= 1930 && this.anioDeNacimiento <= 1948:
        generacion = "Silent";
        rasgoCaracteristico = "Austeridad";
        break;
      case this.anioDeNacimiento >= 1949 && this.anioDeNacimiento <= 1968:
        generacion = "Baby Boom";
        rasgoCaracteristico = "Ambición";
        break;
      case this.anioDeNacimiento >= 1969 && this.anioDeNacimiento <= 1980:
        generacion = "X";
        rasgoCaracteristico = "Obsesión por el éxito";
        break;
      case this.anioDeNacimiento >= 1981 && this.anioDeNacimiento <= 1993:
        generacion = "Y";
        rasgoCaracteristico = "Frustración";
        break;
      case this.anioDeNacimiento >= 1994 && this.anioDeNacimiento <= 2010:
        generacion = "Z";
        rasgoCaracteristico = "Irreverencia";
        break;
      default:
        generacion = "Alpha";
        rasgoCaracteristico = "Nativos digitales";
        break;
    }
    return `<p>
          ${this.nombreApellido} pertenece a la Generación ${generacion}. Rasgo característico: ${rasgoCaracteristico}.
       </p>`;
  }

  esMayorDeEdad() {
    const mensaje =
      this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
    return mensaje;
  }
}

const personas = [];

function crearPersona() {
  const nombreApellido = document.getElementById("nombreApellido").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const anioDeNacimiento = parseInt(
    document.getElementById("anioDeNacimiento").value
  );

  const nuevaPersona = new Persona(
    nombreApellido,
    edad,
    dni,
    sexo,
    peso,
    altura,
    anioDeNacimiento
  );
  personas.push(nuevaPersona);
  alert("La persona fue guardada correctamente");
}

function mostrarDatosPersona() {
  const nombreBuscado = prompt("Ingrese el Nombre y Apellido de la persona:");
  const personaEncontrada = personas.find(
    (persona) => persona.nombreApellido === nombreBuscado
  );

  if (personaEncontrada) {
    document.getElementById("mostrarDatosId").innerHTML +=
      personaEncontrada.mostrarDatos();
    document.getElementById("mostrarDatosId").className =
      "text-dark display-6 my-3 mx-4 text-center";
  } else {
    alert("Persona no encontrada.");
  }
}

function mostrarGeneracionPorBoton() {
  const nombreBuscado = prompt("Ingrese el Nombre y Apellido de la persona:");
  const personaEncontrada = personas.find(
    (persona) => persona.nombreApellido === nombreBuscado
  );

  if (personaEncontrada) {
    document.getElementById("mostrarGeneracionId").innerHTML +=
      personaEncontrada.mostrarGeneracion();
    document.getElementById("mostrarGeneracionId").className =
      "text-dark display-6 my-3 mx-4 text-center";
  } else {
    alert("Persona no encontrada.");
  }
}

function mostrarEsMayorDeEdadPorBoton() {
  const nombreBuscado = prompt("Ingrese el Nombre y Apellido de la persona:");
  const personaEncontrada = personas.find(
    (persona) => persona.nombreApellido === nombreBuscado
  );

  if (personaEncontrada) {
    document.getElementById("mostrarEsMayorDeEdadId").innerHTML +=
      personaEncontrada.esMayorDeEdad();
    document.getElementById("mostrarEsMayorDeEdadId").className =
      "text-dark display-6 my-3 mx-4 text-center";
  } else {
    alert("Persona no encontrada.");
  }
}
