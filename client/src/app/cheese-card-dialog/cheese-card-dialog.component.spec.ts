import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseCardDialogComponent } from './cheese-card-dialog.component';

describe('CheeseCardDialogComponent', () => {
  let component: CheeseCardDialogComponent;
  let fixture: ComponentFixture<CheeseCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheeseCardDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
