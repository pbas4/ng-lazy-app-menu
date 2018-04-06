import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1HeaderComponent } from './comp1-header.component';

describe('Comp1HeaderComponent', () => {
  let component: Comp1HeaderComponent;
  let fixture: ComponentFixture<Comp1HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
