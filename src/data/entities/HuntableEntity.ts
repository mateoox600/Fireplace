import Range from '../../utils/Range';
import { Entity } from './Entity';
import EntitySlime from './EntitySlime';
import EntityWolf from './EntityWolf';

export interface HuntableEntity extends Entity {
    health: Range,
    defense: Range,
    attack: Range,
    rewards: {
        coins: Range,
        xp: Range,
        items: { id: string, range: Range }[]
    }
}

export const HuntableEntities: HuntableEntity[] = [
    EntitySlime,
    EntityWolf
];