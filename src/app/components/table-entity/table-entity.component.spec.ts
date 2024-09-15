import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEntityComponent } from './table-entity.component';

describe('TableEntityComponent', () => {
  let component: TableEntityComponent;
  let fixture: ComponentFixture<TableEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableEntityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
