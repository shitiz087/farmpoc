import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenbidComponent } from './openbid.component';

describe('OpenbidComponent', () => {
  let component: OpenbidComponent;
  let fixture: ComponentFixture<OpenbidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenbidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenbidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
