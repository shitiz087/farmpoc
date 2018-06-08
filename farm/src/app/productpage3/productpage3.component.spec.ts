import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Productpage3Component } from './productpage3.component';

describe('Productpage3Component', () => {
  let component: Productpage3Component;
  let fixture: ComponentFixture<Productpage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Productpage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Productpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
