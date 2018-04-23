import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthReturnComponent } from './oauth-return.component';

describe('OauthReturnComponent', () => {
  let component: OauthReturnComponent;
  let fixture: ComponentFixture<OauthReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OauthReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
