import {async, ComponentFixture, fakeAsync, flush, TestBed, tick} from '@angular/core/testing';
import {ButtonComponent} from './button.component';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

const mockButtonContentText = 'Mocked button';

@Component({
  template: `
      <app-button (buttonClick)="onButtonClick();">{{buttonText}}</app-button>
  `
})
class MockButtonComponent {

  public buttonText: string = mockButtonContentText;

  public onButtonClick() {
  }
}

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let mockComponent: MockButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let mockFixture: ComponentFixture<MockButtonComponent>;

  const findButtonElement = (buttonComponentElement: DebugElement) => {
    return buttonComponentElement.children
      .find((children: DebugElement) => children.name === 'button');
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ButtonComponent,
        MockButtonComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    mockFixture = TestBed.createComponent(MockButtonComponent);
    component = fixture.componentInstance;
    mockComponent = mockFixture.componentInstance;
    fixture.detectChanges();
    mockFixture.detectChanges();
  });

  it('should create button component and mock component with button', () => {
    expect(component).toBeTruthy();
    expect(mockComponent).toBeTruthy();
  });

  it('should include button element inside button component', fakeAsync(() => {
    flush();
    fixture.detectChanges();
    const buttonElement: DebugElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement).toBeTruthy();
  }));

  it('should display valid text inside button in mocked component', fakeAsync(() => {
    flush();
    mockFixture.detectChanges();
    const buttonComponentElement: DebugElement = mockFixture.debugElement.query(By.css('app-button'));
    const buttonElement: DebugElement = findButtonElement(buttonComponentElement);

    expect(buttonElement).toBeTruthy();
    expect(buttonElement.nativeElement.innerText).toBe(mockButtonContentText);
  }));

  it('should emmit click when button is clicked', fakeAsync(() => {
    flush();
    mockFixture.detectChanges();
    spyOn(mockComponent, 'onButtonClick');
    const buttonComponentElement: DebugElement = mockFixture.debugElement.query(By.css('app-button'));
    const buttonElement: DebugElement = findButtonElement(buttonComponentElement);
    buttonElement.triggerEventHandler('click', null);
    tick();
    mockFixture.detectChanges();
    expect(mockComponent.onButtonClick).toHaveBeenCalled();
  }));
});
