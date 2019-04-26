import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLieuxPage } from './liste-lieux.page';

describe('ListeLieuxPage', () => {
  let component: ListeLieuxPage;
  let fixture: ComponentFixture<ListeLieuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeLieuxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLieuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
