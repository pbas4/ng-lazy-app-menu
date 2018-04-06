import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1FooterComponent } from './comp1-footer.component';

describe('Comp1FooterComponent', () => {
  let component: Comp1FooterComponent;
  let fixture: ComponentFixture<Comp1FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
