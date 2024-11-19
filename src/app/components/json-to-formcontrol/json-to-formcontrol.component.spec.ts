import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToFormcontrolComponent } from './json-to-formcontrol.component';

describe('JsonToFormcontrolComponent', () => {
  let component: JsonToFormcontrolComponent;
  let fixture: ComponentFixture<JsonToFormcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonToFormcontrolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonToFormcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
