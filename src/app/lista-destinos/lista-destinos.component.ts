import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DestinoViaje} from '../models/destino-viaje';
import {DestinoApiViaje} from '../models/destino-api-viaje'
import { Store, State } from '@ngrx/store';
import { AppState } from '../app.module';
import { ElegidoFavoritoAction, NuevoDestinoAction } from '../models/destinos-viajes-state';


@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  //destinos:DestinoViaje[];
  //destinosApiClient:DestinoApiViaje; 
  @Output() onItemAdded:EventEmitter<DestinoViaje>;
  updates:string[];
  all;

  constructor(private destinosApiClient:DestinoApiViaje,private store:Store<AppState> ) {
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.store.select(state => state.destinos.favorito).subscribe(d =>{
      if (d != null){
        this.updates.push('se ha elegido a ' + d.nombre);
      }
    });
    this.all =  store.select(state => state.destinos.items).subscribe(items => this.all = items);
  }

  ngOnInit(): void {
  }

  agregado(t: DestinoViaje){
    this.destinosApiClient.add(t);
    this.onItemAdded.emit(t);
  }
  elegido(d: DestinoViaje){
    this.destinosApiClient.elegir(d);
  }
  getAll(){

  }
}
