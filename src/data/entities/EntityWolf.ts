import Range from '../../utils/Range';
import { HuntableEntity } from './HuntableEntity';

export default {
    id: 'wolf',
    name: 'Wolf',
    description: 'A wolf with long fur and deep eyes.',
    health: new Range(25, 30),
    defense: new Range(0, 2),
    attack: new Range(3, 5),
    rewards: {
        coins: new Range(5, 13),
        xp: new Range(6, 18),
        items: [
            {
                id: 'small-mob-core',
                range: new Range(1, 1)
            },
            {
                id: 'fur',
                range: new Range(1, 5)
            }
        ]
    }
} as HuntableEntity;