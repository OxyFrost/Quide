import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationLieuPage } from './modification-lieu.page';

describe('ModificationLieuPage', () => {
  let component: ModificationLieuPage;
  let fixture: ComponentFixture<ModificationLieuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationLieuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationLieuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
