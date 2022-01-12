import Fur from './Fur';
import MembraneItem from './MembraneItem';
import SmallMobCoreItem from './SmallMobCoreItem';

export interface Item {
    id: string,
    name: string,
    description: string,
    value: number
}

export const Items: Item[] = [
    SmallMobCoreItem,
    MembraneItem,
    Fur
];