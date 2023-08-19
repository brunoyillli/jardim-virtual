import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasInfoComponent } from './plantas-info.component';

describe('PlantasInfoComponent', () => {
  let component: PlantasInfoComponent;
  let fixture: ComponentFixture<PlantasInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantasInfoComponent]
    });
    fixture = TestBed.createComponent(PlantasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
