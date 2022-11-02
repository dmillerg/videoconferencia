import { animation, style, animate, trigger, transition, useAnimation, query, stagger, state } from '@angular/animations';

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
            [style({ transform: 'translateY(50%)', opacity: 0 }), stagger('100ms', animate('1000ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 })))],
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

export const photoShape = trigger('photo', [
    transition('*<=>*', [
        query(':enter',
            [style({ transform: 'translateY(50%)', opacity: 0 }), stagger('100ms', animate('1000ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 })))],
            { optional: true }
        ),
    ]),
    // transition(':leave', [
    //     style({ transform: 'scale(1)', opacity: 1 }),
    //     stagger('1000ms', animate('500ms', style({ transform: 'scale(0)', opacity: 0 }))),
    // ]),
])