import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trainingSetDirectory } from './training-set-directory';

@Component({
    selector: 'sd-sparrows',
    templateUrl: 'sparrows.component.html',
    styleUrls: ['sparrows.component.css']
})
export class SparrowsComponent {

    private trainingSet = null;
    private isCorrect: boolean = true;
    private indicator: string = null;
    private sub;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let trainingSetName = params['trainingSetName'];

            this.trainingSet = trainingSetDirectory[trainingSetName];

            console.log('Training set is now ', trainingSetName);
        });
    }

    vertical(text: string) {
        var result = "";
        for (let c of text.replace(/\./g, ' ')) {
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
        this.indicator = expectedAnswer.replace(/\./g, ' ');
        setTimeout(() => { this.advance() }, 1250);
    }

    @HostListener('window:keydown', ['$event'])
    handleKeyup(event) {
        if (event.key === "ArrowRight") {
            this.handleSwipeRight();
        } else if (event.key === "ArrowLeft") {
            this.handleSwipeLeft();
        }
    }

    getImage(index) {
        index = (index < this.trainingSet.examples.length) ? index : 0;
        return this.trainingSet.baseUrl + this.trainingSet.examples[index].image
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
