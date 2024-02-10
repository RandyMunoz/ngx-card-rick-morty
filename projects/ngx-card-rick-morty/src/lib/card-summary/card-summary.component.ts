import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.css'],
})
export class CardSummaryComponent {
  @Input() image: string = '';
  @Input() id!: number;
  @Input() status: string = '';
  @Input() species: string = '';
  @Input() name: string = '';
  @Input() locationName: string = '';
  @Input() episode: string = '';
  @Input() colorStatus: string = '';
  @Input() isFavorite: boolean = false;

  @Output() idFav: EventEmitter<number> = new EventEmitter<number>();
  @Output() showModalProfile: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  addOrRemoveFavorite(id: number) {
    this.idFav.emit(id);
  }

  showModal() {
    this.showModalProfile.emit(true);
  }
}
