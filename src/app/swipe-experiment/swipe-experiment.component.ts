import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'sd-swipe-experiment',
  templateUrl: './swipe-experiment.component.html',
  styles: [],
  animations: [
    trigger('swipedLeftAndRight', [
      state('swipedLeft', style({
        backgroundColor: 'lightblue',
        borderColor: 'blue',
        transform: 'translateX(-50%) rotate(-10deg)'
      })),
      state('swipedRight', style({
        backgroundColor: 'lightgreen',
        borderColor: 'green',
        transform: 'translateX(50%) rotate(10deg)'
      })),
      transition('swipedLeft  => swipedRight',  animate('300ms ease-in')),
      transition('swipedRight => swipedLeft',   animate('300ms ease-out'))
    ])
  ]

})
export class SwipeExperimentComponent {

  swipedState = [
    'swipedLeft',
    'swipedLeft',
    'swipedLeft',
    'swipedLeft',
    'swipedLeft',
  ];

  dumpEventDetails(e: any) {
    console.log(e.type + ' event detected:', e);
  }

  handleSwipeLeft(swipeEvent: any, d) {
    this.dumpEventDetails(swipeEvent);
    this.swipedState[d] = 'swipedLeft';
  }

  handleSwipeRight(swipeEvent: any, d) {
    this.dumpEventDetails(swipeEvent);
    this.swipedState[d] = 'swipedRight';
  }

}
