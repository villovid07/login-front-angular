import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdministradorComponent } from './dash-administrador.component';

describe('DashAdministradorComponent', () => {
  let component: DashAdministradorComponent;
  let fixture: ComponentFixture<DashAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
