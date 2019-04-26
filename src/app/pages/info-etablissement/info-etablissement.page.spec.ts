import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEtablissementPage } from './info-etablissement.page';

describe('InfoEtablissementPage', () => {
  let component: InfoEtablissementPage;
  let fixture: ComponentFixture<InfoEtablissementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEtablissementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEtablissementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
