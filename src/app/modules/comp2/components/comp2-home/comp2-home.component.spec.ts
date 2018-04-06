import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2HomeComponent } from './comp2-home.component';

describe('Comp2HomeComponent', () => {
  let component: Comp2HomeComponent;
  let fixture: ComponentFixture<Comp2HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
