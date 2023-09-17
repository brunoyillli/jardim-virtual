import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantasService } from '../plantas.service';

@Component({
  selector: 'app-plantas-detalhes',
  templateUrl: './plantas-detalhes.component.html',
  styleUrls: ['./plantas-detalhes.component.css']
})
export class PlantasDetalhesComponent {
  planta: any;

  constructor(private route: ActivatedRoute, private router: Router, private plantasService: PlantasService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.plantasService.getPlantaById(id!).subscribe(data => {
      this.planta = data;
    });
  }

  voltar() {
    this.router.navigate(['/list']);
  }
}
