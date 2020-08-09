export class DestinoViaje {
   /*
    nombre:string;
    imagenUrl:string;

    constructor(nombre:string,imagenUrl:string){
        this.nombre=nombre;
        this.imagenUrl=imagenUrl;
    }

    */
   private selected:boolean;//marcar como elegido, tener una variable bandera
    public servicios:string[];

    constructor(public nombre:string,imagenUrl:string){
        this.servicios=['pileta','desayuno'];
    }

    isSelected():boolean{  //para ver si esta marcado
        return this.selected;
    }
    setSelected(s:boolean){ //para marcarlo
        this.selected=s;
    }
}
