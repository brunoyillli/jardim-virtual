import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasPageComponent } from './plantas-page.component';

describe('PlantasPageComponent', () => {
  let component: PlantasPageComponent;
  let fixture: ComponentFixture<PlantasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantasPageComponent]
    });
    fixture = TestBed.createComponent(PlantasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
