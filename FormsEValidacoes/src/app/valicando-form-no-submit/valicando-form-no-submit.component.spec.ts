import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValicandoFormNoSubmitComponent } from './valicando-form-no-submit.component';

describe('ValicandoFormNoSubmitComponent', () => {
  let component: ValicandoFormNoSubmitComponent;
  let fixture: ComponentFixture<ValicandoFormNoSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValicandoFormNoSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValicandoFormNoSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
