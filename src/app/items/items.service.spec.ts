import {TestBed} from '@angular/core/testing';
import {ItemsService} from './items.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Item} from './model/item';
import {EnvironmentService} from '../services/environment.service';

describe('ItemsService', () => {
  let itemsService: ItemsService;
  let environmentService: EnvironmentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    itemsService = TestBed.inject(ItemsService);
    environmentService = TestBed.inject(EnvironmentService);
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

    itemsService.getItemsListFromApi()
      .subscribe((items: Item[]) => {
        expect(items.length).toBe(2);
        expect(items).toEqual(mockedItems);
      });

    const req = httpMock.expectOne(environmentService.apiBasePath + `/items`);
    expect(req.request.method).toBe('GET');
    req.flush(mockedItems);
  });
});
