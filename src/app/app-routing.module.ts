import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantasAddComponent } from './plantas/plantas-add/plantas-add.component';
import { PlantasListComponent } from './plantas/plantas-list/plantas-list.component';
import { PlantasPageComponent } from './plantas/plantas-page/plantas-page.component';
import { PlantasDetalhesComponent } from './plantas/plantas-detalhes/plantas-detalhes.component';

const routes: Routes = [
  {
    path: '', component: PlantasPageComponent, children: [
      { path: 'add', component: PlantasAddComponent },
      { path: 'list', component: PlantasListComponent }
    ]

  },
  { path: 'plantas/detalhes/:id', component: PlantasDetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
