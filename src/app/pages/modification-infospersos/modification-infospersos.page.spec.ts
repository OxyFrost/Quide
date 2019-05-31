import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationInfospersosPage } from './modification-infospersos.page';

describe('ModificationInfospersosPage', () => {
  let component: ModificationInfospersosPage;
  let fixture: ComponentFixture<ModificationInfospersosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationInfospersosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationInfospersosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
