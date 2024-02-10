import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSummaryComponent } from './card-summary.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Character } from '../interfaces/character';

describe('CardProfileComponent', () => {
  let component: CardSummaryComponent;
  let fixture: ComponentFixture<CardSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [CardSummaryComponent],
    });
    fixture = TestBed.createComponent(CardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method addOrRemoveFavorite ok', () => {
    spyOn(component, "addOrRemoveFavorite").and.returnValue();
    component.addOrRemoveFavorite(1);
    expect(component.addOrRemoveFavorite).toHaveBeenCalled();
  });

  it('method showModal ok', () => {
    spyOn(component, "showModal").and.returnValue();
    component.showModal();
    expect(component.showModal).toHaveBeenCalled();
  });
});
