import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'sd-preview-deck',
  templateUrl: 'preview-deck.component.html',
  styleUrls: ['preview-deck.component.css']
})
export class PreviewDeckComponent implements OnChanges {
  @Input() deck: any = {};

  currentCardIndex = 0;

  nextCard() {
    this.currentCardIndex++;
    if (this.currentCardIndex > (this.deck.cards.length - 1)) {
      this.currentCardIndex = 0;
    }
  }

  prevCard() {
    this.currentCardIndex--;
    if (this.currentCardIndex < 0) {
      this.currentCardIndex = (this.deck.cards.length - 1);
    }
  }

  ngOnChanges() {

    // The deck is the only input property, so any change detected
    // here means that the deck has changed, and the card index is
    // no longer valid. Reset it to 0 to be safe.
    //
    this.currentCardIndex = 0;
  }


}
