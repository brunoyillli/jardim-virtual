import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasAddComponent } from './plantas-add.component';

describe('PlantasAddComponent', () => {
  let component: PlantasAddComponent;
  let fixture: ComponentFixture<PlantasAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantasAddComponent]
    });
    fixture = TestBed.createComponent(PlantasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
