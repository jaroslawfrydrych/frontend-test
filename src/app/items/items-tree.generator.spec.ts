import {ItemsTreeGenerator} from './items-tree.generator';
import {ItemGroup} from './model/item-group';
import {Item} from './model/item';
import Jasmine = jasmine.Jasmine;

describe('ItemsTreeGenerator', () => {
  it('should generate', () => {
    const generator = new ItemsTreeGenerator();
    const data: Item[] = [
      {
        id: 4,
        title: 'title 4',
        parent_id: 2
      },
      {
        id: 1,
        title: 'title 1',
        parent_id: null
      },
      {
        id: 2,
        title: 'title 2',
        parent_id: 3
      },
      {
        id: 3,
        title: 'title 3',
        parent_id: 1
      },
    ];

    const expected: ItemGroup[] = [
      {
        id: 1,
        title: 'title 1',
        parent_id: null,
        children: [
          {
            id: 3,
            title: 'title 3',
            parent_id: 1,
            children: [
              {
                id: 2,
                title: 'title 2',
                parent_id: 3,
                children: [
                  {
                    id: 4,
                    title: 'title 4',
                    parent_id: 2
                  }
                ]
              }
            ]
          }
        ]
      }
    ];

    const actual: ItemGroup[] = generator.generate(data);

    expect(actual[0].children[0].children[0].id).toEqual(4);
  });
});
