import {Item} from './item';

export interface ItemGroup extends Item {
  blurred?: boolean;
  children?: ItemGroup[];
}
