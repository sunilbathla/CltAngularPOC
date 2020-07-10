import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBatchStatsComponent } from './get-batch-stats.component';

describe('GetBatchStatsComponent', () => {
  let component: GetBatchStatsComponent;
  let fixture: ComponentFixture<GetBatchStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBatchStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBatchStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
