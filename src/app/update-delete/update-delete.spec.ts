import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDelete } from './update-delete';

describe('UpdateDelete', () => {
  let component: UpdateDelete;
  let fixture: ComponentFixture<UpdateDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
