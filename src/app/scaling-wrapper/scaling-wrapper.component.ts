import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'sd-scaling-wrapper',
  templateUrl: 'scaling-wrapper.component.html',
  styleUrls: ['scaling-wrapper.component.css']
})
export class ScalingWrapperComponent implements AfterViewInit, OnDestroy {

  // Used to dynamically update the content scaling factor
  // and calculate aspect ratio
  @Input() idealWidth: number = 1024;

  // Used with the idealWidth to calculate aspect ratio
  @Input() idealHeight: number = 768;

  // Used to dynamically set the height of the slide container
  private _aspectRatio: number = this.idealWidth / this.idealHeight;

  @ViewChild('scalingWrapperContainer')
  private scalingWrapperContainer: ElementRef;
 
  @ViewChild('scalingWrapperContent')
  private scalingWrapperContent: ElementRef;

  private _resizeListener;

  constructor() {

    // Create a closure around the event handler, so `this`
    // is properly bound, and remember it so it can be removed
    // when this component is destroyed.
    //
    this._resizeListener = () => this._updateHeightAndScale();

    // XXX: Optimize this as recommended by MDN here:
    // https://developer.mozilla.org/en-US/docs/Web/Events/resize
    //
    // XXX: Could make this optional. If the container size is
    // fixed, then nothing needs to change on window resize.
    //
    window.addEventListener('resize', this._resizeListener);

  }

  ngAfterViewInit() {

    this.scalingWrapperContent.nativeElement.style.height =
        this.idealHeight + 'px';
    this.scalingWrapperContent.nativeElement.style.width =
        this.idealWidth  + 'px';

    this._updateHeightAndScale();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this._resizeListener);
  }

  private _updateHeightAndScale() {

    let currentWidthPx =
        this.scalingWrapperContainer.nativeElement.offsetWidth;

    // XXX: I would prefer to do this via a [style]
    // binding in the template, but it only partially
    // works. With currentWidth set in code, I can do this...
    //
    //   [style.height.px]=" currentWidthPx * 0.56 "
    //
    // ...but not this:
    //
    //   [style.height.px]=" sdProblemContainer.nativeElement.offsetWidth * 0.56 "
    //
    // The offsetWidth doesn't seem to exist unless it's accessed
    // in code, not in the template. If that can be fixed, I
    // might be able to move all of this into the template.

    // XXX: Should these use Renderer instead of setting the
    // style directly?
    //
    // http://juristr.com/blog/2016/01/learning-ng2-dynamic-styles/

    // Update the *container* height based on the current
    // *container* width and the desired aspect ratio.
    // Notice that this doesn't use the *content* dimensions
    // at all.
    //
    this.scalingWrapperContainer.nativeElement.style.height =
        (currentWidthPx / this._aspectRatio) + 'px';

    // Update the scale of the *content* based on the ratio of
    // the *container's* current width to the ideal width.
    //
    this.scalingWrapperContent.nativeElement.style.transform =
        'scale(' + (currentWidthPx / this.idealWidth) + ')';
  }

}
