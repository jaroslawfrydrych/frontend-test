import {Item} from './item';

export interface ItemGroup extends Item {
  children: ItemGroup[];
}
