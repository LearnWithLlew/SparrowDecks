import 'hammerjs';

declare var Hammer; // load hammer

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterConfig } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { SparrowsComponent } from './sparrows/sparrows.component';

const routes: RouterConfig = [
    { path: '', component: WelcomeComponent },
    { path: ':trainingSetName', component: SparrowsComponent }
];


@NgModule({
    declarations: [
        AppComponent,
        SparrowsComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
