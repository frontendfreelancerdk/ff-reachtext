import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReachtextComponent} from './reachtext.component';
import {SafeHtmlPipe} from '../safe-html.pipe';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

describe('ReachtextComponent', () => {
  let component: ReachtextComponent;
  let fixture: ComponentFixture<ReachtextComponent>;
  const routerStub = {
    navigate: jasmine.createSpy('navigate'),
    events: new BehaviorSubject({})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReachtextComponent, SafeHtmlPipe],
      providers: [{
        provide: Router,
        useValue: routerStub
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachtextComponent);
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
