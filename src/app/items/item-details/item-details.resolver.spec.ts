import { TestBed } from '@angular/core/testing';
import { ItemDetailsResolver } from './item-details.resolver';

describe('ItemDetailsService', () => {
  let service: ItemDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemDetailsResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
