import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStationsComponent } from './base-stations.component';

describe('BaseStationsComponent', () => {
  let component: BaseStationsComponent;
  let fixture: ComponentFixture<BaseStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
