import {animate, state, style, transition, trigger} from "@angular/animations";

export const FADE_ANIMATION = trigger('fade', [

  state('in', style({opacity: 1})),

  transition(':enter', [
    style({opacity: 0}),
    animate(300)
  ]),

  transition(':leave',
    animate(300, style({opacity: 0})))
]);
