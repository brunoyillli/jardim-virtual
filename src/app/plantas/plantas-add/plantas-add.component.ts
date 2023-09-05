import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

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
      Validators.pattern('[a-zA-Z ]*') 
    ]),
    especie: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*') 
    ]),
    dataRega: new FormControl('', [
      Validators.required
    ])
  });


  onSubmit() {
    if (this.plantaForm.valid) {
      let plantas = JSON.parse(localStorage.getItem('plantas') || '[]');
      plantas.push(this.plantaForm.value);
      localStorage.setItem('plantas', JSON.stringify(plantas));
      this.plantaAdicionada.emit(this.plantaForm.value);
      this.plantaForm.reset();
    }
  }
}
