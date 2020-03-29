import {TestBed} from '@angular/core/testing';
import {ItemsService} from './items.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Item} from './model/item';

describe('ItemsService', () => {
  let itemsService: ItemsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    itemsService = TestBed.inject(ItemsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(itemsService).toBeTruthy();
  });

  it('should return items data from API', () => {
    const mockedItems: Item[] = [
      {
        id: 1,
        title: 'Item 1',
        parent_id: null
      },
      {
        id: 2,
        title: 'Item 2',
        parent_id: 1
      }
    ];

    itemsService.getItemsFromApi()
      .subscribe((items: Item[]) => {
        expect(items.length).toBe(2);
        expect(items).toEqual(mockedItems);
      });

    const req = httpMock.expectOne(`/items`);
    expect(req.request.method).toBe('GET');
    req.flush(mockedItems);
  });
});
