import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLieuPage } from './liste-lieu.page';

describe('ListeLieuPage', () => {
  let component: ListeLieuPage;
  let fixture: ComponentFixture<ListeLieuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeLieuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLieuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
