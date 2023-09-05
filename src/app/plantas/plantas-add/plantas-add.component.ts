import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plantas-add',
  templateUrl: './plantas-add.component.html',
  styleUrls: ['./plantas-add.component.css']
})
export class PlantasAddComponent {

  @Output() plantaAdicionada = new EventEmitter<any>();

  plantaForm = new FormGroup({
    nome: new FormControl(''),
    especie: new FormControl(''),
    dataRega: new FormControl('')
  });


  onSubmit() {
    console.log('Planta adicionada:', this.plantaForm.value);
    this.plantaAdicionada.emit(this.plantaForm.value);
    this.plantaForm.reset();
  }
}
