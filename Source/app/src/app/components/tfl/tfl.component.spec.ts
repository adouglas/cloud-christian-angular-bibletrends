/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TflComponent } from './tfl.component';

describe('TflComponent', () => {
  let component: TflComponent;
  let fixture: ComponentFixture<TflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
