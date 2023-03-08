import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAgricultorComponent } from './menu-agricultor.component';

describe('MenuAgricultorComponent', () => {
  let component: MenuAgricultorComponent;
  let fixture: ComponentFixture<MenuAgricultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAgricultorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
