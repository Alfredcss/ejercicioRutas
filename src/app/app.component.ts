import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicioRutas';

  //Propiedades
  autobus = {
    id: 0,
    nombre: '',
    salida: '',
    destino: '',
    numeroDeEjes: 0,   //osea si es de 2 ejes
    capacidad: 0,   //numero de pasajeros
  }
  //arreglo de autobuses
  autobuses = [
    {id: 1, nombre:'Linea Azul', salida:'La peña',destino:'La central de autobuses',numeroDeEjes:2,capacidad:24},
    {id: 2, nombre:'Linea UTSJR', salida:'Parque de las Garzas',destino:'UTSJR',numeroDeEjes:3,capacidad:30},
    {id: 3, nombre:'Expreso Rojo', salida:'San Juan del Rio',destino:'Queretaro',numeroDeEjes:3,capacidad:35},
    {id: 4, nombre:'Centro Sur', salida:'Centro',destino:'Bosques San Juan',numeroDeEjes:2,capacidad:22},
    {id: 5, nombre:'Centro Noreste', salida:'Centro',destino:'Nuevo Banthi',numeroDeEjes:3,capacidad:28},
  ];
  //metodo para ver si hay autobuses en el arreglo
  hayAutobuses(){
    return this.autobuses.length > 0;
  }

  //funcion para agregar mas autobuses o rutas
  agregarAutobus(){
    if(this.autobus.id == 0){
      alert('El ID del autobus debe ser diferente de CERO');
      return;
    }
    for(let i=0; i<this.autobuses.length; i++){
      if(this.autobus.id== this.autobuses[i].id){
        alert('Ya existe un autobus con ese ID,por favor escriba otro ID');
        return;
      }
    }
    this.autobuses.push({
      id: this.autobus.id,
      nombre: this.autobus.nombre,
      salida: this.autobus.salida,
      destino: this.autobus.destino,
      numeroDeEjes: this.autobus.numeroDeEjes,
      capacidad: this.autobus.capacidad
    });
    this.autobus.id= 0;
    this.autobus.nombre = '';
    this.autobus.salida='';
    this.autobus.destino='';
    this.autobus.numeroDeEjes=0;
    this.autobus.capacidad=0;
  }
  //metodo para selecionar autobuse existente
  seleccionarAutobus(autobusSeleccionado: {id:number; nombre:string; salida:string; destino:string; numeroDeEjes:number; capacidad:number;}){
    this.autobus.id = autobusSeleccionado.id;
    this.autobus.nombre= autobusSeleccionado.nombre;
    this.autobus.salida= autobusSeleccionado.salida;
    this.autobus.destino=autobusSeleccionado.destino;
    this.autobus.numeroDeEjes=autobusSeleccionado.numeroDeEjes;
    this.autobus.capacidad=autobusSeleccionado.capacidad;
  }
  //funcio pa'modificar
  modificarAutobus(){
    for(let i=0; i<this.autobuses.length; i++){
      if(this.autobus.id == this.autobuses[i].id){
        this.autobuses[i].nombre = this.autobus.nombre;
        this.autobuses[i].salida = this.autobus.salida;
        this.autobuses[i].destino = this.autobus.destino;
        this.autobuses[i].numeroDeEjes = this.autobus.numeroDeEjes;
        this.autobuses[i].capacidad = this.autobus.capacidad;

        this.autobus.id= 0;
        this.autobus.nombre = '';
        this.autobus.salida='';
        this.autobus.destino='';
        this.autobus.numeroDeEjes=0;
        this.autobus.capacidad=0;
        return;
      }
    }
    alert('NO EXISTE ID')
  }
  eliminarAutobus(id:number){
    for(let i=0;i<this.autobuses.length;i++){
      if(id == this.autobuses[i].id){
        this.autobuses.splice(i,1);
        return;
      }
    }
  }

}
