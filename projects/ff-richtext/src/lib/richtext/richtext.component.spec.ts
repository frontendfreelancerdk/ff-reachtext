import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FFRichtextComponent} from './richtext.component';
import {SafeHtmlPipe} from '../safe-html.pipe';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

describe('FFRichtextComponent', () => {
  let component: FFRichtextComponent;
  let fixture: ComponentFixture<FFRichtextComponent>;
  const routerStub = {
    navigate: jasmine.createSpy('navigate'),
    events: new BehaviorSubject({})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FFRichtextComponent, SafeHtmlPipe],
      providers: [{
        provide: Router,
        useValue: routerStub
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFRichtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    console.log(document.location.href);
    routerStub.navigate.calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('external', async(() => {
    component.data = '<a href="https://medium.com" id="link">external link</a>';
    fixture.detectChanges();
    const link = fixture.debugElement.nativeElement.querySelector('#link');
    link.click();

    fixture.whenStable().then(() => {
      expect(routerStub.navigate).toHaveBeenCalledTimes(0);
    });
  }));

  it('inner', async(() => {
    component.data = '<a href="test" id="link">inner link</a>';
    fixture.detectChanges();
    const link = fixture.debugElement.nativeElement.querySelector('#link');
    link.click();

    fixture.whenStable().then(() => {
      expect(routerStub.navigate).toHaveBeenCalledWith(['/test']);
    });
  }));

  it('anchor', async(() => {
    component.data = '<a href="#test" id="link">anchor link</a>';
    fixture.detectChanges();
    const link = fixture.debugElement.nativeElement.querySelector('#link');
    link.click();

    fixture.whenStable().then(() => {
      expect(routerStub.navigate).toHaveBeenCalledWith(['', 'context.html'], {fragment: 'test'});
    });
  }));

  it('should scroll Into View', async(() => {
  }));
});
