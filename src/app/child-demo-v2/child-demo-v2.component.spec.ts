import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDemoV2Component } from './child-demo-v2.component';

describe('ChildDemoV2Component', () => {
  let component: ChildDemoV2Component;
  let fixture: ComponentFixture<ChildDemoV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDemoV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDemoV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
