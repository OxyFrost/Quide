import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveautesHomePage } from './nouveautes-home.page';

describe('NouveautesHomePage', () => {
  let component: NouveautesHomePage;
  let fixture: ComponentFixture<NouveautesHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveautesHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveautesHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
