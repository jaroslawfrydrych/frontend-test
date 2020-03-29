import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ItemListItemComponent} from './item-list-item.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('ItemListItemComponent', () => {
  let component: ItemListItemComponent;
  let fixture: ComponentFixture<ItemListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        ItemListItemComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
