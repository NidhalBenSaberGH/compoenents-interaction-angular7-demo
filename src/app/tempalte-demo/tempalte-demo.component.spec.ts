import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempalteDemoComponent } from './tempalte-demo.component';

describe('TempalteDemoComponent', () => {
  let component: TempalteDemoComponent;
  let fixture: ComponentFixture<TempalteDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempalteDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempalteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
