import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ItemListSearchComponent} from './item-list-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';

describe('ItemListSearchComponent', () => {
  let component: ItemListSearchComponent;
  let fixture: ComponentFixture<ItemListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule
      ],
      declarations: [
        ItemListSearchComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
