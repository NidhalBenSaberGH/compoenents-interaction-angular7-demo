import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDemoV3Component } from './child-demo-v3.component';

describe('ChildDemoV3Component', () => {
  let component: ChildDemoV3Component;
  let fixture: ComponentFixture<ChildDemoV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDemoV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDemoV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
