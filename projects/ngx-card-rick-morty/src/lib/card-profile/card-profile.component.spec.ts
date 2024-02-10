import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfileComponent } from './card-profile.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CardProfileComponent', () => {
  let component: CardProfileComponent;
  let fixture: ComponentFixture<CardProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [CardProfileComponent]
    });
    fixture = TestBed.createComponent(CardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
