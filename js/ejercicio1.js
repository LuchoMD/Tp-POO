
/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender();
objeto.apadar()
*/
const auto = {
    color: 'Gris',
    marca: 'Ford',
    modelo: 'Maverick',
    encender: false,
}

datosCompletos: function datos() {
    console.log(this)
    document.writeln(`<p>Mi auto es una ${this.marca}, ${this.modelo}</p>`)
}
  // Para encender el auto
  encender:()=>{
    if (this.encender) {  
      console.log("El auto esta encendido");
    } else {
      this.encender = true;
      console.log("Se encendio el auto");
    }
  }
  // Para apagar el auto
  apagar:()=>{
    if (!this.encender) {
      console.log("El auto esta apagado");
    } else {
      this.encender = false;
      console.log("Se apago el auto");
    }
  }
  
  auto.encender();
  auto.apagar();