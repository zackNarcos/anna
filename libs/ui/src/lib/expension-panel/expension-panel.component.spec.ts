import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpensionPanelComponent } from './expension-panel.component';

describe('ExpensionPanelComponent', () => {
  let component: ExpensionPanelComponent;
  let fixture: ComponentFixture<ExpensionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensionPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
