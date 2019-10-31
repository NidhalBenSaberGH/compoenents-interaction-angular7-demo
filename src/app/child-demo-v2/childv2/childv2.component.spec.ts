import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childv2Component } from './childv2.component';

describe('Childv2Component', () => {
  let component: Childv2Component;
  let fixture: ComponentFixture<Childv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
