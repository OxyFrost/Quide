import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCeMomentHomePage } from './en-ce-moment-home.page';

describe('EnCeMomentHomePage', () => {
  let component: EnCeMomentHomePage;
  let fixture: ComponentFixture<EnCeMomentHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnCeMomentHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnCeMomentHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
