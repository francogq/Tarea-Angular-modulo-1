import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino:DestinoViaje;
  @Input('idx') position:number;
  @HostBinding('attr.class') cssClas='col-md-4'; 
  @Output() clicked:EventEmitter<DestinoViaje>; 
  
  constructor() { 
    this.clicked=new EventEmitter(); //de esta manera descargamos un objeto a esa propiedad

  }

  ngOnInit(): void {
  }

  ir(){
    this.clicked.emit(this.destino);
    return false; //para que no nos genere error
  }

}
