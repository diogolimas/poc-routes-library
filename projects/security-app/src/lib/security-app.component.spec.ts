import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAppComponent } from './security-app.component';

describe('SecurityAppComponent', () => {
  let component: SecurityAppComponent;
  let fixture: ComponentFixture<SecurityAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
