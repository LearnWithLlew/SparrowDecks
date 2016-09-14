import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    DomSanitizationService, // XXX: Becomes DomSanitizer in RC6.
    SafeHtml
} from '@angular/platform-browser';

import { trainingSetDirectory } from './training-set-directory';

@Component({
    selector: 'sd-sparrows',
    templateUrl: 'sparrows.component.html',
    styleUrls: ['sparrows.component.css']
})
export class SparrowsComponent {

    private trainingSet = null;
    private isCorrect: boolean = true;

    private indicator: SafeHtml = null;

    private sub;

    constructor(private route: ActivatedRoute, private sanitizer: DomSanitizationService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let trainingSetName = params['trainingSetName'];

            this.trainingSet = trainingSetDirectory[trainingSetName];

            console.log('Training set is now ', trainingSetName);
        });
    }

    vertical(text: string) {
        var result = "";
        for (let c of text) {
            result += c + ' <br />';
        }
        return result;

    }
    advance() {

        if (1 < this.trainingSet.examples.length) {
            console.log('Advancing slide!');
            this.indicator = null;
            this.trainingSet.examples.shift();
        }
        else {
            this.indicator = 'DONE!';
            console.log('Done!');
        }
    }

    handleAnswer(givenAnswer) {
        console.log('User said ' + givenAnswer);
        let expectedAnswer = this.trainingSet.examples[0].answer;
        this.isCorrect = (expectedAnswer === givenAnswer);
        this.indicator = expectedAnswer;
        setTimeout(() => { this.advance() }, 500);
    }

    @HostListener('window:keydown', ['$event'])
    handleKeyup(event) {
        if (event.key === "ArrowRight") {
            this.handleSwipeRight();
        } else if (event.key === "ArrowLeft") {
            this.handleSwipeLeft();
        }
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
