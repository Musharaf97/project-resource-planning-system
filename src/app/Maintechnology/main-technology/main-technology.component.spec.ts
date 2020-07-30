import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTechnologyComponent } from './main-technology.component';

describe('MainTechnologyComponent', () => {
  let component: MainTechnologyComponent;
  let fixture: ComponentFixture<MainTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
