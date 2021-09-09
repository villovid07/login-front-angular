import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplejidadComponent } from './complejidad.component';

describe('ComplejidadComponent', () => {
  let component: ComplejidadComponent;
  let fixture: ComponentFixture<ComplejidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplejidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplejidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
