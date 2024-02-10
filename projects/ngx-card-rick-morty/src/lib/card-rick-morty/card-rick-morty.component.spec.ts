import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRickMortyComponent } from './card-rick-morty.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Character } from '../interfaces/character';

describe('CardRickMortyComponent', () => {
  let component: CardRickMortyComponent;
  let fixture: ComponentFixture<CardRickMortyComponent>;

  let character: Character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      {
        id: 1,
        name: 'Pilot',
        air_date: 'December 2, 2013',
        episode: 'S01E01',
        created: '2017-11-10T12:56:33.798Z',
      }
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
    favorite: false,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [CardRickMortyComponent],
    });
    fixture = TestBed.createComponent(CardRickMortyComponent);
    component = fixture.componentInstance;
    component.character = character;
    fixture.detectChanges();
  });

  it('test create component ok', () => {
    expect(component).toBeTruthy();
  });

  it('method addOrRemoveFavorite ok', () => {
    spyOn(component, "addOrRemoveFavorite").and.returnValue();
    component.addOrRemoveFavorite(1);
    expect(component.addOrRemoveFavorite).toHaveBeenCalled();
  });

  it('method showModal ok', () => {
    component.showModal();
    expect(component.isVisible).toBeTrue();
  });
});
