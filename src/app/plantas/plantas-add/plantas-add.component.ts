import { Component, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plantas-add',
  templateUrl: './plantas-add.component.html',
  styleUrls: ['./plantas-add.component.css']
})
export class PlantasAddComponent {

  @Output() plantaAdicionada = new EventEmitter<any>();

  plantaForm = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'), noOnlySpacesValidator
    ]),
    especie: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*') , noOnlySpacesValidator
    ]),
    dataRega: new FormControl('', [
      Validators.required
    ])
  });

  async onSubmit() {
    if (this.plantaForm.valid) {
      const novaPlanta = this.plantaForm.value;
      const response = await fetch('http://localhost:3000/plantas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaPlanta)
      });

      const data = await response.json();

      if (response.ok) {
        this.plantaAdicionada.emit(data);
        this.plantaForm.reset();
      } else {
        console.error('Erro ao adicionar planta:', data.message);
      }
    }
  }
  
}
  function noOnlySpacesValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value || '';
    const isValid = value.trim().length > 0;
    return isValid ? null : { 'onlySpaces': true };
  }