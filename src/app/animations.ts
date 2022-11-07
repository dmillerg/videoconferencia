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
            [style({ transform: 'translateX(50%)', opacity: 0 }), stagger('100ms', animate('1000ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 })))],
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
        query('.text-white', [
            style({ position: 'absolute', top: '100%', left: 0, opacity: 0 }),
            stagger(-300, [
                animate('500ms cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ opacity: 1, top: '-40px', transform: 'scale(1.2)' }))
            ]),
            animate(500, style({
                top: '-20px', opacity: 1, transform: 'scale(1)'
            }))
        ], { optional: false })

    ]),
    transition(':leave', [
        query('.text-white', [

            style({ position: 'absolute', top: 0, left: 0 }),
            stagger(-300, [
                animate('500ms cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ opacity: 1, top: '-40px', transform: 'scale(1.2)' })),

            ]),
            animate(500, style({ top: '-100%' })),
        ],
            { optional: false }

        ),
    ])
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
            ], { optional: true }),
            query(':enter', [
                style({ left: '-100%' })
            ], { optional: true }),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ left: '100%' }))
                ], { optional: true }),
                query(':enter', [
                    animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ left: '0%' }))
                ], { optional: true })
            ]),
            query(':enter', animateChild(), { optional: true }),
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
            ], { optional: true }),
            query(':enter', [
                style({ left: '-100%' })
            ], { optional: true }),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('200ms ease-out', style({ left: '100%' }))
                ], { optional: true }),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ], { optional: true })
            ]),
            query(':enter', animateChild(), { optional: true }),
        ])
    ]);


export const loginAnimation = trigger(
    'login', [
    transition(':enter', [
        query('p',[
            style({
                opacity: 0,
                transform: 'translateY(100%)'
            }),
        ]),
        query('.bi ,.input-container, .btn', [
            style({ opacity: 0 })
        ]),
        query('.input-container', [
            style({
                opacity: 0,
                transform: 'scale(0) translateX(-100%)'
            }),
            stagger('500ms', animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1) translateX(0)' }))),
            animate('500ms ease-out', style({ opacity: 1 }))
        ]),
        query('.bi', [
            animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ opacity: 1 }))
        ]),
        query('.btn', [
            animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ opacity: 1 , transform: 'rotate(360deg)'}))
        ]),
        query('p', [
            animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ opacity: 1 , transform: 'translateY(-0%)'}))
        ]),
        
    ])
])

export const dvelox = trigger(
    'dvelox', [
    transition(':enter', [

        query('.titulo', [
            style({
                opacity: 0,
                width: '100%',
                margin: 'auto'
            }),
            animate(2000, style({ opacity: 1 , })),
            // animate('2s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({  transform: 'scale(1.5)'})),
          animate(5000, style({ transform: 'translateX(50%)'}))
        ])

    ])
])