import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBeneficioComponent } from './login-beneficio.component';

describe('LoginBeneficioComponent', () => {
  let component: LoginBeneficioComponent;
  let fixture: ComponentFixture<LoginBeneficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBeneficioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
