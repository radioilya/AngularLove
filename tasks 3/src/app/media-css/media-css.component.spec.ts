import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCssComponent } from './media-css.component';

describe('MediaCssComponent', () => {
  let component: MediaCssComponent;
  let fixture: ComponentFixture<MediaCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
