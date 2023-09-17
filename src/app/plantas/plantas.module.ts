import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasAddComponent } from './plantas-add/plantas-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PlantasListComponent } from './plantas-list/plantas-list.component';
import { MatTableModule } from '@angular/material/table';
import { PlantasPageComponent } from './plantas-page/plantas-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PlantasDetalhesComponent } from './plantas-detalhes/plantas-detalhes.component';
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    PlantasAddComponent,
    PlantasListComponent,
    PlantasPageComponent,
    PlantasDetalhesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
    RouterModule,
    MatCardModule
  ],
  exports: [PlantasAddComponent]
})
export class PlantasModule { }
