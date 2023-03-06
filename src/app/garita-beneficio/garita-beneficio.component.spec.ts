import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaritaBeneficioComponent } from './garita-beneficio.component';

describe('GaritaBeneficioComponent', () => {
  let component: GaritaBeneficioComponent;
  let fixture: ComponentFixture<GaritaBeneficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaritaBeneficioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaritaBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
