import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  template: `
    Available Decks: <br />
    <a [routerLink]="[ '/sparrows' ]"> House &amp; Song Sparrows </a>  <br />
    <a [routerLink]="[ '/clutter' ]"> Code Smells: Clutter </a>  <br />
    <a [routerLink]="[ '/complex' ]"> Cynefin: Complex vs Complicated </a>  <br />
  `,
  styles: []
})
export class WelcomeComponent { }
