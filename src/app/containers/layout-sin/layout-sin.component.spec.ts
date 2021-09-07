import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSinComponent } from './layout-sin.component';

describe('LayoutSinComponent', () => {
  let component: LayoutSinComponent;
  let fixture: ComponentFixture<LayoutSinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
