import { Component, SecurityContext } from '@angular/core';

import {
  DomSanitizationService, // XXX: Becomes DomSanitizer in RC6.
  SafeHtml
} from '@angular/platform-browser';

import { CssChecker } from '../css-checker';
import { CssInjector } from '../css-injector';
import { DeckLoader } from '../deck-loader';

@Component({
  selector: 'sd-sandbox',
  templateUrl: 'sandbox.component.html',
  styleUrls: ['sandbox.component.css']
})
export class SandboxComponent {

  sampleProblemHtml: SafeHtml;
  sampleSolutionHtml: SafeHtml;

  solutionVisible: boolean = false;

  private allDecks: any[] = [];
  currentDeck: any = {};

  private cssInjector: CssInjector;

  constructor(
    private sanitizer: DomSanitizationService,
    private cssChecker: CssChecker,
    private deckLoader: DeckLoader
  ) {

    // XXX: Much of this is now in the previewer / presenter
    // section, but it can't be removed from here just yet,
    // as there are pieces in the sandbox that still need a home,
    // and they depend on this stuff.


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

    this.sampleProblemHtml = sanitizer.bypassSecurityTrustHtml(`
      <img src="sparrow/images/image1.jpeg">
    `);

    this.sampleSolutionHtml = sanitizer.bypassSecurityTrustHtml(`
      <div style="font-family: sans-serif; font-weight: bold; text-align: center;">
        <div style="color: black; font-size: 128pt;">
          Song
        </div>
        <div style="color: lightgray; font-size: 48pt;">
          sparrow
        </div>
      </div>
    `);
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

