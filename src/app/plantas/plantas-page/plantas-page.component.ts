import { Component } from '@angular/core';

@Component({
  selector: 'app-plantas-page',
  templateUrl: './plantas-page.component.html',
  styleUrls: ['./plantas-page.component.css']
})
export class PlantasPageComponent {
  plantas: any[] = [];

  onPlantaAdicionada(novaPlanta: any) {
    this.plantas = [...this.plantas, novaPlanta];

  }
}
