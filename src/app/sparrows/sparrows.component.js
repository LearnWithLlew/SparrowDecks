"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var training_set_directory_1 = require('./training-set-directory');
var SparrowsComponent = (function () {
    function SparrowsComponent(route) {
        this.route = route;
        this.trainingSet = null;
        this.indicator = '';
    }
    SparrowsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var trainingSetName = params['trainingSetName'];
            _this.trainingSet = training_set_directory_1.trainingSetDirectory[trainingSetName];
            console.log('Training set is now ', trainingSetName);
        });
    };
    SparrowsComponent.prototype.vertical = function (text) {
        var result = "";
        for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
            var c = text_1[_i];
            result += c + ' <br />';
        }
        return result;
    };
    SparrowsComponent.prototype.advance = function () {
        if (1 < this.trainingSet.examples.length) {
            console.log('Advancing slide!');
            this.indicator = '';
            this.trainingSet.examples.shift();
        }
        else {
            this.indicator = 'DONE!';
            console.log('Done!');
        }
    };
    SparrowsComponent.prototype.handleAnswer = function (givenAnswer) {
        var _this = this;
        console.log('User said ' + givenAnswer);
        this.indicator = (this.trainingSet.examples[0].answer === givenAnswer ? '\u2713 yes!' : 'no');
        setTimeout(function () { _this.advance(); }, 500);
    };
    SparrowsComponent.prototype.handleKeyup = function (event) {
        if (event.key === "ArrowRight") {
            this.handleSwipeRight();
        }
        else if (event.key === "ArrowRight") {
            this.handleSwipeRight();
        }
    };
    SparrowsComponent.prototype.handleSwipeLeft = function () {
        this.handleAnswer(this.trainingSet.left);
    };
    SparrowsComponent.prototype.handleSwipeRight = function () {
        this.handleAnswer(this.trainingSet.right);
    };
    SparrowsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        core_1.HostListener('window:keydown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], SparrowsComponent.prototype, "handleKeyup", null);
    SparrowsComponent = __decorate([
        core_1.Component({
            selector: 'sd-sparrows',
            templateUrl: 'sparrows.component.html',
            styleUrls: ['sparrows.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], SparrowsComponent);
    return SparrowsComponent;
}());
exports.SparrowsComponent = SparrowsComponent;
