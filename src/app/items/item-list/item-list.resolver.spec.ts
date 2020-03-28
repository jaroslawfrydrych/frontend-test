import {TestBed} from '@angular/core/testing';
import {ItemListResolver} from './item-list.resolver';

describe('ItemListResolver', () => {
  let service: ItemListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemListResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
