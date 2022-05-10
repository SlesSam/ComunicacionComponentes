import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
//este es para que el componente Hijo envie un mensaje al componente padre
  @Input() mensajeChild: string = '' //aqui esta esperando un propiedad del padre para el hijo 
  @Output() messagesForParent = new EventEmitter<string>(); //de aqui se cambia el nombre al padre



 constructor(private dataS: DataService) { }
 ngOnInit(): void {}
 
//mensaje se envia por output
  messagesSend(){
    this.messagesForParent.emit( 'hijaa envia mensajee por output!!' );

  }


  messagesChildService(){
   this.messagesForParent.emit(this.dataS.mensajeParaPadre())

  }

  messagesChildObservable(){
    this.dataS.mensajedesdeChild()
      .subscribe(messagesChild=>{
        this.messagesForParent.emit(messagesChild)
      } )
    

  }


}
