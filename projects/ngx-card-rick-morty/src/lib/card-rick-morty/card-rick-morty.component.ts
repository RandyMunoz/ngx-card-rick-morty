import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/character';

@Component({
  selector: 'card-rick-morty',
  templateUrl: './card-rick-morty.component.html',
  styleUrls: ['./card-rick-morty.component.css'],
})
export class CardRickMortyComponent {
  @Input() bgProfile: string = '';

  @Input() character!: Character;

  @Input() colorStatus: string = '';

  @Output() idFav: EventEmitter<number> = new EventEmitter<number>();

  isVisible: boolean = false;

  addOrRemoveFavorite(id: number) {
    this.idFav.emit(id);
  }

  showModal() {
    return (this.isVisible = !this.isVisible);
  }
}
