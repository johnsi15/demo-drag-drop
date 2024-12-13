import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFieldsComponent } from './create-fields.component';

describe('CreateFieldsComponent', () => {
  let component: CreateFieldsComponent;
  let fixture: ComponentFixture<CreateFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFieldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
