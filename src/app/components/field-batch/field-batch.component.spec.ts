import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldBatchComponent } from './field-batch.component';

describe('FieldBatchComponent', () => {
  let component: FieldBatchComponent;
  let fixture: ComponentFixture<FieldBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldBatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
