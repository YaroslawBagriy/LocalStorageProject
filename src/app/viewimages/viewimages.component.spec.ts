import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimagesComponent } from './viewimages.component';

describe('ViewimagesComponent', () => {
  let component: ViewimagesComponent;
  let fixture: ComponentFixture<ViewimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
