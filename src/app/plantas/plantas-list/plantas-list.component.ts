import { Component, Input } from '@angular/core';
import { PlantasService } from '../plantas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent {
  @Input() plantas: any[] = [];

  isLoading = true;

  constructor(private plantasService: PlantasService,private router: Router) { }


  ngOnInit() {
    this.getPlantas();
  }
  getPlantas() {
    this.plantasService.getPlantas().subscribe(data => {
      this.plantas = data;
      this.isLoading = false;
    });
  }

  loadPlantasFromLocalStorage() {
    const storedPlantas = JSON.parse(localStorage.getItem('plantas') || '[]');

    if (storedPlantas.length !== this.plantas.length) {
      this.plantas = storedPlantas;
    }
  }

  viewDetails(id: number) {
    this.router.navigate(['/plantas/detalhes', id]);
  }
}
