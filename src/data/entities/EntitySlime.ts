import Range from '../../utils/Range';
import { HuntableEntity } from './HuntableEntity';

export default {
    id: 'slime',
    name: 'Slime',
    description: 'A little blob of liquid contained in an easly breakeable membrane.',
    health: new Range(10, 10),
    defense: new Range(0, 0),
    attack: new Range(1, 3),
    rewards: {
        coins: new Range(2, 10),
        xp: new Range(4, 12),
        items: [
            {
                id: 'small-mob-core',
                range: new Range(1, 1)
            },
            {
                id: 'membrane',
                range: new Range(0, 2)
            }
        ]
    }
} as HuntableEntity;