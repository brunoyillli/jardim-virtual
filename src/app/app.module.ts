import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantasInfoComponent } from './plantas-info/plantas-info.component';
import { PlantasAddComponent } from './plantas-add/plantas-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantasInfoComponent,
    PlantasAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
