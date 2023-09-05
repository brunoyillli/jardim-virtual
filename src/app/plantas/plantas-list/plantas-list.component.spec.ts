import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasListComponent } from './plantas-list.component';

describe('PlantasListComponent', () => {
  let component: PlantasListComponent;
  let fixture: ComponentFixture<PlantasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantasListComponent]
    });
    fixture = TestBed.createComponent(PlantasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
