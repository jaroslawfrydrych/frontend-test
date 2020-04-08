import {ItemGroup} from './model/item-group';

export class ItemTreeGroup implements ItemGroup {

  constructor(private _id: number,
              private _title: string,
              private _parent_id: number | null,
              private _children?: ItemGroup[]) {
    if (_parent_id < 1 && _parent_id !== null) {
      throw new Error('Invalid parent id');
    }
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  get children(): ItemGroup[] {
    return this._children;
  }
}
