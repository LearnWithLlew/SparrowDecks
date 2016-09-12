import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  template: `
    Available Decks: </br>
    <a [routerLink]="[ '/sparrows' ]"> House &amp; Song Sparrows </a>
    <a [routerLink]="[ '/clutter' ]"> Code Smells: Clutter </a>
  `,
  styles: []
})
export class WelcomeComponent { }
