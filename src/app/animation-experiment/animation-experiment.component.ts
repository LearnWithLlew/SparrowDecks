import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'sd-animation-experiment',
  templateUrl: 'animation-experiment.component.html',
  styles: [],
  animations: [
    trigger('myState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1) rotate(-10deg)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1) rotate(20deg)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class AnimationExperimentComponent {

  currentState = 'inactive';

  changeAnimationState() {
    this.currentState = (this.currentState === 'inactive' ? 'active' : 'inactive');
  }

}

