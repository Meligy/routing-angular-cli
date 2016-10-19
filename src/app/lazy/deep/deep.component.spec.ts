/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeepComponent } from './deep.component';

describe('DeepComponent', () => {
  let component: DeepComponent;
  let fixture: ComponentFixture<DeepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
