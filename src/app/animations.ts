import { animation, style, animate, trigger, transition, useAnimation, query, stagger, state, animateChild, group } from '@angular/animations';

export const transitionAnimation = animation([
    style({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
]);

// import { animation, style, animate, trigger, transition, useAnimation } from '@angular/animations';
export const triggerAnimation = trigger('openClose', [
    transition('open => closed', [
        useAnimation(transitionAnimation, {
            params: {
                height: 0,
                opacity: 1,
                backgroundColor: 'red',
                time: '1s'
            }
        })
    ])
]);

export const listAnimation = trigger('listAnimation', [
    transition('* <=> *', [
        query(':enter',
            [style({ transform: 'translateY(50%)', opacity: 0 }), stagger('1000ms', animate('1000ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 })))],
            { optional: true }
        ),
        query(':leave',
            animate('200ms', style({ opacity: 0 })),
            { optional: true }
        )
    ])
]);


export const scale = trigger('scaleAnimation', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('500ms', style({ transform: 'scale(0)', opacity: 0 })),
    ]),
])

/**
 * Animacion de abajo hacia arriba
 */
export const slideBottom = trigger('slideb', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20%)' }),
        animate('1000ms', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('1000ms', style({ transform: 'translateY(-20%)', opacity: 0 })),
    ]),
])

/**
 * Animacion de arriba hacia abajo
 */
export const slideTop = trigger('slidet', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20%)' }),
        animate('1000ms', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('1000ms', style({ transform: 'translateY(20%)', opacity: 0 })),
    ]),
]);

/**
 * Animacion de izq hacia der
 */
 export const slideRight = trigger('slider', [
    transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1.5s cubic-bezier(.8, -0.6, 0.2, 1.5)',
        style({ transform: 'scale(1)', opacity: 1 }))
      ]),
    transition(':leave', [
        style({ transform: 'translateX0(0)', opacity: 1, position: 'absolute' }),
        animate('1000ms', style({ transform: 'translateX(20%) translateY(0)', opacity: 0, position: 'absolute', top: '0' })),
    ]),
]);


/**
 * Animacion de arriba hacia abajo
 */
 export const slideLeft = trigger('slidel', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20%)' }),
        animate('1000ms', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(20%)', opacity: 0 })),
    ]),
]);

/**
 * Animacion de arriba hacia abajo
 */
 export const bounce = trigger('slidel', [
    transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1.5s cubic-bezier(.8, -0.6, 0.2, 1.5)',
        style({ transform: 'scale(1)', opacity: 1 }))
      ]),
    transition(':leave', [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(20%)', opacity: 0 })),
    ]),
]);


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> consulta', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
