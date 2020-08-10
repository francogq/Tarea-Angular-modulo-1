import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded:EventEmitter<DestinoViaje>;
  fg:FormGroup;
  minLongitud=3;
  constructor(fb:FormBuilder) {
    this.onItemAdded=new EventEmitter();
    this.fg=fb.group({
      nombre:['',Validators.compose([ //compose es para poner un array de validadores
        Validators.required, 
        this.nombreValidator,
        this.nombreValidatorParametrizable(this.minLongitud) 
      ])],
      url:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }
  guardar(nombre:string,url:string):boolean{
    let d= new DestinoViaje(nombre,url);
    this.onItemAdded.emit(d);
    return false;
  }

  nombreValidator(control:FormControl):{[s:string]:boolean  }  {//tipo de dato de retorno es un concepto
     const l=control.value.toString().trim().length;
     if (l>0 && l<5){
       return { invalidNombre: true};
     }
     return null;
  }
  nombreValidatorParametrizable(minLong:number):ValidatorFn{
    return (control:FormControl):{[s:string]:boolean} | null =>{
      const l=control.value.toString().trim().length;
      if (l>0 && l<minLong){
        return { minLongNombre: true};
      }
      return null;
    }
  }

}
