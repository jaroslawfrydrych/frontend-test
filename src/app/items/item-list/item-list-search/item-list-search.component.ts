import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-item-list-search',
  templateUrl: './item-list-search.component.html',
  styleUrls: ['./item-list-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListSearchComponent implements OnInit, OnDestroy {

  public formGroup: FormGroup;
  @Output() public valueChange: EventEmitter<string> = new EventEmitter<string>();
  private destroySubject: Subject<null> = new Subject<null>();
  private searchFormControl: FormControl;

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      search: this.formBuilder.control(null)
    });

    this.searchFormControl = this.formGroup.get('search') as FormControl;

    this.searchFormControl.valueChanges
      .pipe(
        takeUntil(this.destroySubject),
        debounceTime(200)
      )
      .subscribe((value: string) => {
        this.valueChange.emit(value);
      });
  }

  public ngOnDestroy(): void {
    this.destroySubject.next(null);
  }
}
