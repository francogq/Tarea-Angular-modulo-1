import {DestinoViaje} from '../models/destino-viaje';

export class DestinoApiViaje {
    private lista:Array<DestinoViaje>;
    constructor(){
        this.lista=new Array<DestinoViaje>();
        
        
    }

    add(d:DestinoViaje){
        this.lista.push(d);
    }

    getAll(){
        return this.lista;
    }
}
