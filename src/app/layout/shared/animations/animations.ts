import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
} from '@angular/animations';

export const slideInOut = [
    trigger('slideInOut', [
        transition(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            animate('200ms ease-in', style({ transform: 'translateX(-100%)' }))
        ])
    ])
];



export const fade = [
    trigger("fade", [
        transition("void => *", [
            style({ opacity: 0 }),
            animate(200, style({ opacity: 1 })),
        ]),
    ])
];
