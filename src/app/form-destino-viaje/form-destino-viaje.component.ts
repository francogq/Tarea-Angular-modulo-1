import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { fromEvent } from 'rxjs';
import {map,filter,debounceTime,distinctUntilChanged,switchMap} from 'rxjs/operators';
import {ajax, AjaxResponse} from 'rxjs/ajax';
@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg: FormGroup;
  minLongitud = 3;
  searchResults: string[];
  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      tarea: ['', Validators.compose([
        Validators.required,
        this.nombreValidatorParametrizable(this.minLongitud)
      ])],
      imagenUrl: [''],
      descripcion: ['']
     });
     this.fg.valueChanges.subscribe((form: any) => {
      console.log('cambio en el formulario',form);
    });
   };

  ngOnInit(): void {
    let elemNombre = <HTMLInputElement>document.getElementById('tarea');
    fromEvent(elemNombre,'input').pipe(map((e:KeyboardEvent)=>(e.target as HTMLInputElement).value),
    filter(text =>text.length > 2),
    debounceTime(200),
    distinctUntilChanged(),
    switchMap(()=>ajax('/assets/datos.json'))
    ).subscribe(ajaxResponse =>{
      this.searchResults = ajaxResponse.response;
    })
  }
  guardar(nombre: string,imagenUrl: string): boolean{
    const t = new DestinoViaje(nombre,imagenUrl);
    this.onItemAdded.emit(t);
    return false;
  }


  nombreValidator(control: FormControl) :{[s: string]: boolean}{
    const longitud = control.value.toString().trim().length;
    if (longitud>0 && longitud<5){
      return { invalidNombre: true};
    }
    return null;
  }
  nombreValidatorParametrizable(minLong: number): ValidatorFn{
    return (control: FormControl):{ [s: string]: boolean} | null =>{
      const l = control.value.toString().trim().length;
      if (l>0 && l<minLong){
        return { minLongNombre: true};
      }
      return null;
    }
  }
}
