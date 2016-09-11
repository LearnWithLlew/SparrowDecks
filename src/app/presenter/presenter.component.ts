import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

import { CssChecker } from '../css-checker';
import { CssInjector } from '../css-injector';
import { DeckLoader } from '../deck-loader';

@Component({
  selector: 'sd-presenter',
  templateUrl: 'presenter.component.html',
  styleUrls: ['presenter.component.css']
})
export class PresenterComponent {

  private allDecks: any[] = [];
  currentDeck: any = {};

  private cssInjector: CssInjector;

  constructor(
    private cssChecker: CssChecker,
    private deckLoader: DeckLoader
  ) {

    // XXX: Probably want to do all this a little later,
    // maybe in ngOnInit.

    this.cssInjector = new CssInjector(window.document);

    this.deckLoader.loadDecks('decks.json')
      .then( (allDecks) => {

        this.allDecks = allDecks;

        console.log('this.allDecks:', this.allDecks);

        this.changeDeck(this.allDecks[0]);
      })
    ;
  }

  changeDeck(newDeck) {
    this.currentDeck = newDeck;

    console.log('currentDeck:', this.currentDeck);

    let problems = this.cssChecker.stylesheetProblems(this.currentDeck.stylesheet);

    // If there are no issues with the CSS, add it to the document.
    // Otherwise, complain and don't.
    //
    // XXX: Need to actually tell the user if something's wrong.
    //
    if (problems.length === 0) {
      this.cssInjector.injectCss(this.currentDeck.stylesheet);
    } else {
      console.log('Unable to use "' + this.currentDeck.stylesheetUrl + '":', problems);
    }
  }
}

