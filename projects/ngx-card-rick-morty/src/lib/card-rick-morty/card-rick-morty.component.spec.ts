import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRickMortyComponent } from './card-rick-morty.component';

describe('CardRickMortyComponent', () => {
  let component: CardRickMortyComponent;
  let fixture: ComponentFixture<CardRickMortyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRickMortyComponent]
    });
    fixture = TestBed.createComponent(CardRickMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
