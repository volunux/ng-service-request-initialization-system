import {
  trigger, animateChild, group,
  transition, animate, style, query , stagger
} from '@angular/animations';

// Routable animations
export const slideInAnimation =
  
  trigger('routeAnimation', [
  
    transition('dashboard <=> create' , [
  
      style({ 'position': 'relative' }),
  
      query(':enter, :leave', [
  
        style({
          'position': 'absolute',
          'top': 0,
          'left': 0,
          'width': '100%'
        })
      ]),
  
      query(':enter', [
        style({ left: '-100%'})  ]),
  
      query(':leave', animateChild()),
  
      group([
  
        query(':leave', [
          animate('300ms ease-out', style({ 'left': '100%'}))]),
  
        query(':enter', [  
          animate('300ms ease-out', style({ left: '0%'}))])  ]),
  
      query(':enter', animateChild()),  ])
  
  ]);

  export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ 'opacity': 0 }), animate('800ms', style({ 'opacity': 1 }))]
  ),
  transition(':leave',
    [style({ 'opacity': 1 }), animate('800ms', style({ 'opacity': 0 }))]
  )
]);


  export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ 'opacity': 0 }), stagger('400ms', animate('600ms ease-out', style({ 'opacity': 1 })))],
      { 'optional': true }
    ),
    query(':leave',
      animate('200ms', style({ 'opacity': 0 })),
      { 'optional': true }
    )
  ])
]);