import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorgerMenuComponent } from './borger-menu.component';

describe('BorgerMenuComponent', () => {
  let component: BorgerMenuComponent;
  let fixture: ComponentFixture<BorgerMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorgerMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorgerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
