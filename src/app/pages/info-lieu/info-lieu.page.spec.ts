import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLieuPage } from './info-lieu.page';

describe('InfoLieuPage', () => {
  let component: InfoLieuPage;
  let fixture: ComponentFixture<InfoLieuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoLieuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLieuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
