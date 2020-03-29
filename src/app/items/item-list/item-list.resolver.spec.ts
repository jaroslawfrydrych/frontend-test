import {TestBed} from '@angular/core/testing';
import {ItemListResolver} from './item-list.resolver';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ItemListResolver', () => {
  let service: ItemListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ItemListResolver
      ]
    });
    service = TestBed.inject(ItemListResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
