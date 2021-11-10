import { HuntableEntities } from './HuntableEntity';

export interface Entity {
    id: string,
    name: string,
    description: string
}

export const Entities: Entity[] = [
    ...HuntableEntities
]; 