import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sd-select-deck',
  templateUrl: 'select-deck.component.html',
  styleUrls: ['select-deck.component.css']
})
export class SelectDeckComponent {

  @Input() decks: any[];
  @Output() deckSelected = new EventEmitter();

  constructor() {
  }

  selectDeck(deck) {
    this.deckSelected.emit(deck);
  }
}
