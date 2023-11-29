class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioDeNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioDeNacimiento = anioDeNacimiento;
    }
  
    mostrarGeneracion() {
      const { nombre, anioDeNacimiento } = this;
      let generacion, rasgoCaracteristico;
  
      switch (true) {
        case anioDeNacimiento >= 1930 && anioDeNacimiento <= 1948:
          generacion = "Silent";
          rasgoCaracteristico = "Austeridad";
          break;
        case anioDeNacimiento >= 1949 && anioDeNacimiento <= 1968:
          generacion = "Baby Boom";
          rasgoCaracteristico = "Ambición";
          break;
        case anioDeNacimiento >= 1969 && anioDeNacimiento <= 1980:
          generacion = "X";
          rasgoCaracteristico = "Obseción por el éxito";
          break;
        case anioDeNacimiento >= 1981 && anioDeNacimiento <= 1993:
          generacion = "Y";
          rasgoCaracteristico = "Frustración";
          break;
        case anioDeNacimiento >= 1994 && anioDeNacimiento <= 2010:
          generacion = "Z";
          rasgoCaracteristico = "Irreverencia";
          break;
        default:
          generacion = "Alpha";
          rasgoCaracteristico = "Nativos digitales";
          break;
      }
  
      console.log(
        `${nombre} pertenece a la generación ${generacion}. Rasgo característico: ${rasgoCaracteristico}.`
      );
      document.write(`<p>
        ${nombre} pertenece a la Generación ${generacion}. Rasgo característico: ${rasgoCaracteristico}.
     </p>`);
    }
  
    esMayorDeEdad() {
      const mensaje =
        this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
      console.log(mensaje);
      document.write(mensaje);
    }
  
    mostrarDatos() {
      const { nombre, edad, dni, sexo, peso, altura, anioDeNacimiento } = this;
      console.log(`
      Nombre: ${this.nombre}
      Edad: ${this.edad} años
      DNI: ${this.dni}
      Sexo: ${this.sexo}
      Peso: ${this.peso} kg
      Altura: ${this.altura} m
      Año de Nacimiento: ${this.anioDeNacimiento}
    `);
      document.write(`<ul>
      <li>Nombre: ${this.nombre}</li>
      <li>Edad: ${this.edad} años</li>
      <li> DNI: ${this.dni}</li>
      <li>Sexo: ${this.sexo}</li>
      <li>Peso: ${this.peso} kg</li>
      <li>Altura: ${this.altura} m</li>
      <li>Año de Nacimiento: ${this.anioDeNacimiento}</li>
      </ul>`);
    }
  
    generaDNI() {
      return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    }
  }
  
  const bruceWayne = new Persona(
    `Bruce Wayne`,
    35,
    20444555,
    `M`,
    90,
    1.85,
    1985,
  );
  
  bruceWayne.mostrarGeneracion();
  bruceWayne.esMayorDeEdad();
  bruceWayne.mostrarDatos();
  
  const selinaKyle = new Persona(
    'Selina Kyle', 
    32, 
    40887777, 
    'F', 
    58, 
    1.75,
    1991 
  );
  
  selinaKyle.dni = selinaKyle.generaDNI();
  
  selinaKyle.mostrarGeneracion();
  selinaKyle.esMayorDeEdad();
  selinaKyle.mostrarDatos();
  