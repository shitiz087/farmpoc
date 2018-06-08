import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Productpage4Component } from './productpage4.component';

describe('Productpage4Component', () => {
  let component: Productpage4Component;
  let fixture: ComponentFixture<Productpage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Productpage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Productpage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
