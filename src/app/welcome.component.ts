import { Component } from '@angular/core';

@Component({
    selector: 'welcome',
    template: `
      <h5>Available Decks: </h5>

      <a [routerLink]="[ '/sparrows' ]"> House &amp; Song Sparrows </a>  <br />
      <a [routerLink]="[ '/complex' ]"> Cynefin: Complex vs Complicated </a>  <br />

      <h6>Code Smells: </h6>
      <a [routerLink]="[ '/clutter' ]"> Code Smells: Clutter </a>  <br />
      <a [routerLink]="[ '/badNames' ]"> Code Smells: Bad Names</a>  <br />
      <a [routerLink]="[ '/duplication' ]"> Code Smells: Duplication</a>  <br />
      <a [routerLink]="[ '/longLines' ]"> Code Smells: Long Lines</a>  <br />
      <a [routerLink]="[ '/longMethods' ]"> Code Smells: Long Methods</a>  <br />
      <a [routerLink]="[ '/inconsistency' ]"> Code Smells: inconsistency</a>  <br />

      <h6>Languages: </h6>
      <a [routerLink]="[ '/goRustAssignments' ]"> Go vs Rust: Assignments</a>  <br />
      <a [routerLink]="[ '/goRust' ]"> Go vs Rust </a>  <br />
      <a [routerLink]="[ '/haskellRustAssignments' ]"> Haskell vs Rust: Assignments</a>  <br />
      <a [routerLink]="[ '/haskellRust' ]"> Haskell vs Rust </a>  <br />

      <br />
      <div><b>Directions: </b>
      Pick one of the available decks, <br />
      then sort (tap, swipe, arrow keys) the images the left or right
      </div>
      <div>
      By: <a href="https://twitter.com/wnodom">Bill Odom</a> &amp;
          <a href="https://twitter.com/llewellynfalco">Llewellyn Falco </a>
      </div>
    `,
    styles: []
})
export class WelcomeComponent { }
