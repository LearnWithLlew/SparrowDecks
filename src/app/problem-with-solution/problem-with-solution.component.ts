import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  SecurityContext
} from '@angular/core';

import {
  DomSanitizationService, // XXX: Becomes DomSanitizer in RC6.
  SafeHtml
} from '@angular/platform-browser';

import { processTemplate } from '../stupid-template-processor';


@Component({
  selector: 'sd-problem-with-solution',
  templateUrl: 'problem-with-solution.component.html',
  styleUrls: ['problem-with-solution.component.css']
})
export class ProblemWithSolutionComponent implements OnInit, AfterViewInit {

  @Input() problemTemplate  = '';
  @Input() solutionTemplate = '';

  @Input() showSolution = false;

  @ViewChild('problemDiv') problemDiv: ElementRef;
  @ViewChild('solutionDiv') solutionDiv: ElementRef;

  private problemHtml: string;
  private solutionHtml: string;

  constructor (private sanitizer: DomSanitizationService) { }

  ngOnInit() {

    // XXX: DRY this up

    this.problemHtml = this.sanitizer.sanitize(
      SecurityContext.HTML,
      this.problemTemplate
    );

    this.solutionHtml = this.sanitizer.sanitize(
      SecurityContext.HTML,
      this.solutionTemplate
    );
  }

  ngOnChanges() {

    // XXX: Only do this when it's actually necessary.
    // Probably want to move everything from ngOnInit()
    // to some other method, and call it from here and
    // ngOnInit().

    this.ngOnInit();

    this.showSolution = this.solutionTemplate !== '';
  }

  ngAfterViewInit() {

    // Make sure the solutionDiv's width exactly
    // matches the width of problemDiv.
    //
    this.solutionDiv.nativeElement.style.width =
      this.problemDiv.nativeElement.offsetWidth + 'px';

    // XXX: Trying to do this directly on solutionDiv...
    //
    //  [style.width.px]="problemDiv.offsetWidth"
    //
    // ...runs afoul of the change detection exception described
    // here:
    //
    //    https://github.com/angular/angular/issues/6005
    //
    // ...the root cause of which is probably the problemDiv's
    // offsetWidth changing as the view is first rendered.
    //
    // I was able to work around the exception by using
    //
    //     setTimeout(this._resizeListener)
    //
    // within ScalingWrapperComponent's ngAfterViewInit method,
    // so it triggered a change detection after the initial
    // size/scale update, but that was hackish and visibly ugly
    // in the browser. (The detectChanges suggestion didn't work,
    // but even if it had, it suffers from the same
    // hackishness/ugliness issues.)

  }
}
