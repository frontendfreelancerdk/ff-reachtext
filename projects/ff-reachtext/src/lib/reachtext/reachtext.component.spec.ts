import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachtextComponent } from './reachtext.component';

describe('ReachtextComponent', () => {
  let component: ReachtextComponent;
  let fixture: ComponentFixture<ReachtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
