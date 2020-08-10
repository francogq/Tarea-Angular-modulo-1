import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DestinoViaje} from '../models/destino-viaje';
import {DestinoApiViaje} from '../models/destino-api-viaje'


@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  //destinos:DestinoViaje[];
  destinosApiClient= new DestinoApiViaje(); 
  @Output() onItemAdded:EventEmitter<DestinoViaje>;
  constructor( ) {
      this.onItemAdded=new EventEmitter();     
    //this.destinos=[];
  }

  ngOnInit(): void {
  }
  /*
  guardar(nombre:string,url:string):boolean{
    this.destinos.push(new DestinoViaje(nombre,url));
    console.log(this.destinos);
    return false;
  }
  elegido(d:DestinoViaje){
    this.destinos.forEach(function (x){x.setSelected(false)});//ponemos todos false
    d.setSelected(true); //escogemos un selecionado
 }*/
  
  agregado(d:DestinoViaje){
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  
  }
  elegido(e:DestinoViaje){
    this.destinosApiClient.getAll().forEach(function (x){x.setSelected(false)});//ponemos todos false
    e.setSelected(true); //escogemos un selecionado
  }


}
