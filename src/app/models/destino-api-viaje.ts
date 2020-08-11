import {DestinoViaje} from '../models/destino-viaje';
import { Subject, BehaviorSubject } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { NuevoDestinoAction, ElegidoFavoritoAction } from './destinos-viajes-state';
import { Injectable } from '@angular/core';

@Injectable()
export class DestinoApiViaje {
  
    constructor(private store: Store<AppState>) {
	}
	add(d:DestinoViaje){
      this.store.dispatch(new NuevoDestinoAction(d));
	}
    elegir(d: DestinoViaje){
        this.store.dispatch(new ElegidoFavoritoAction(d));
    }
}
