import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  template: `
    Available Decks:
    <a [routerLink]="[ '/sparrows' ]"> House &amp; Song Sparrows </a>
  `,
  styles: []
})
export class WelcomeComponent { }
