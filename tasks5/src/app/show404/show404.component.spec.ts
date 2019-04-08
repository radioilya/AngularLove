import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Show404Component } from './show404.component';

describe('Show404Component', () => {
  let component: Show404Component;
  let fixture: ComponentFixture<Show404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Show404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Show404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
