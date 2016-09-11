import 'hammerjs';
import 'web-animations-js';

declare var Hammer;

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterConfig } from '@angular/router';

import { AppComponent } from './app.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { PresenterComponent } from './presenter/presenter.component';
import { ScalingWrapperComponent } from './scaling-wrapper/scaling-wrapper.component';
import { SwipeExperimentComponent } from './swipe-experiment/swipe-experiment.component';
import { AnimationExperimentComponent } from './animation-experiment/animation-experiment.component';
import { SelectDeckComponent } from './select-deck/select-deck.component';
import { PreviewDeckComponent } from './preview-deck/preview-deck.component';
import { ProblemWithSolutionComponent } from './problem-with-solution/problem-with-solution.component';

import { CssChecker } from './css-checker';
import { DeckLoader } from './deck-loader';
import { SparrowsComponent } from './sparrows/sparrows.component';

const routes: RouterConfig = [
  { path: ':trainingSetName', component: SparrowsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SwipeExperimentComponent,
    AnimationExperimentComponent,
    ScalingWrapperComponent,
    ProblemWithSolutionComponent,
    SandboxComponent,
    PresenterComponent,
    SelectDeckComponent,
    PreviewDeckComponent,
    SparrowsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    CssChecker,
    DeckLoader
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
