import {TestBed} from '@angular/core/testing';
import {ItemDetailsResolver} from './item-details.resolver';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('ItemDetailsService', () => {
  let service: ItemDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        ItemDetailsResolver
      ]
    });
    service = TestBed.inject(ItemDetailsResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
