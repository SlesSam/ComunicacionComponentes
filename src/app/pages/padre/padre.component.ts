import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class HomeComponent implements OnInit{

  mensageParaHija: string = ''; //messageToChild
  mensajeDesdeHija: string = ''; //messagesFRomChild

  constructor(private dataS: DataService) { }

  ngOnInit(): void {

    
  }

  
//creamos funciones para q sean llamadas en sus botones

  cambiarMessages(){
    this.mensageParaHija = ' Parent Usando Input'
   
  }

  recibiendoMessages(mensaje: string){
    this.mensajeDesdeHija = mensaje;
    
    //this.dataS.nombreUsuario = nuevoNombre;
  }

  messagesService(){
    this.mensageParaHija = this.dataS.mensajeParaChild();
  }

  messagesObservable(){
    this.dataS.mensajedesdePadre()
      .subscribe (messagesDad =>{
        this.mensageParaHija =messagesDad;
      })
    
  }
 
 


  //metodoo
  /**
   * 1. Ordenar los componentes tnato PADRE como HIJO
   * 2. dento de cada componente PADRE hay metodos de 
   *  MsnPadre,serviceParent, recibirMensaje, observablePArent
   * 3. variables enviarMSNhijo, recibir msnHijo
   * 
   */

}
