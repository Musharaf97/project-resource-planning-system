import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaintechnologyComponent } from './add-maintechnology.component';

describe('AddMaintechnologyComponent', () => {
  let component: AddMaintechnologyComponent;
  let fixture: ComponentFixture<AddMaintechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMaintechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaintechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
