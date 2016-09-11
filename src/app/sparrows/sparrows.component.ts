import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { trainingSetDirectory } from './training-set-directory';

@Component({
  selector: 'sd-sparrows',
  templateUrl: 'sparrows.component.html',
  styleUrls: ['sparrows.component.css']
})
export class SparrowsComponent {

  private trainingSet = null;

  private indicator: string = '';

  private sub;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let trainingSetName = params['trainingSetName'];

      this.trainingSet = trainingSetDirectory[trainingSetName];

      console.log('Training set is now ', trainingSetName);
    });
  }


  advance() {

    if (1 < this.trainingSet.examples.length) {
      console.log('Advancing slide!');
      this.indicator = ''; 
      this.trainingSet.examples.shift();
    }
    else {
      this.indicator = 'DONE!';
      console.log('Done!');
    }
  }

  handleAnswer(givenAnswer) {
    console.log('User said ' + givenAnswer);
    this.indicator = (this.trainingSet.examples[0].answer === givenAnswer ? 'YES!' : 'NO');
    setTimeout(() => { this.advance() }, 500);
  }

  handleSwipeLeft() {
    this.handleAnswer(this.trainingSet.left);
  }

  handleSwipeRight() {
    this.handleAnswer(this.trainingSet.right);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}


