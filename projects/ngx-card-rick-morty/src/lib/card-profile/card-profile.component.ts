import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css'],
})
export class CardProfileComponent {
  @Input() icon: boolean = false;

  @Input() title: string = '';

  @Input() value: string = '';

  @Input() date: string = '';

}