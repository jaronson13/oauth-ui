import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantDisplayAppsComponent } from './tenant-display-apps.component';

describe('TenantDisplayAppsComponent', () => {
  let component: TenantDisplayAppsComponent;
  let fixture: ComponentFixture<TenantDisplayAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantDisplayAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantDisplayAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
