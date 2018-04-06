import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1HomeComponent } from './comp1-home.component';

describe('Comp1HomeComponent', () => {
  let component: Comp1HomeComponent;
  let fixture: ComponentFixture<Comp1HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
