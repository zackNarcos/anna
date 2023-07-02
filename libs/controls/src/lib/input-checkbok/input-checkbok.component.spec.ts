import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputCheckbokComponent } from './input-checkbok.component';

describe('InputCheckbokComponent', () => {
  let component: InputCheckbokComponent;
  let fixture: ComponentFixture<InputCheckbokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputCheckbokComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputCheckbokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
