import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHomePage } from './map-home.page';

describe('MapHomePage', () => {
  let component: MapHomePage;
  let fixture: ComponentFixture<MapHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
