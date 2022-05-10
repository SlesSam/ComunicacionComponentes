import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})

//aqui vamos a colocar tanto SERVICE como OBSERVABLE

export class DataService {
  nombreUsuario: string='Lele'
  
  constructor() { }


  
//son los variables que usan los SERVICE
  menssageDadServi: string = 'El padre envia msn por un SERVICE'
  messageChildServi: string = 'La hija envia msn por un SERVICE'

  //son variables para que usen los OBSERVABLE
  messagesObserDad$: string = 'El padre envia msn por un OBSERVABLE'
  messagesObserChild$: string = 'La hija envia msn por un OBSERVABLE'

//con subject enviara los mensaje con e observable
  SubjeParent: BehaviorSubject<string> = new BehaviorSubject(this.messagesObserDad$);
  SubjeChild: BehaviorSubject<string> = new BehaviorSubject(this.messagesObserChild$);

//aqui se envia los mensaje desde servicio
  mensajeParaChild(){
    return this.menssageDadServi
  }

  mensajeParaPadre(){
    return this.messageChildServi
  }



  //se enviara mensaje desde los observables.
  mensajedesdePadre(){
    return this.SubjeParent.asObservable();
  }

  mensajedesdeChild(){
    return this.SubjeChild.asObservable();
  }








}
