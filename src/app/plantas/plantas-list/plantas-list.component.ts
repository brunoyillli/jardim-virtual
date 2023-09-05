import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent {
  @Input() plantas: any[] = [];

  ngOnInit() {
    this.loadPlantasFromLocalStorage();
  }

  loadPlantasFromLocalStorage() {
    const storedPlantas = JSON.parse(localStorage.getItem('plantas') || '[]');

    if (storedPlantas.length !== this.plantas.length) {
      this.plantas = storedPlantas;
    }
  }
}
