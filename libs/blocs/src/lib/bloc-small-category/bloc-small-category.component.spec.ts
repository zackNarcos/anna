import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocSmallCategoryComponent } from './bloc-small-category.component';

describe('BlocSmallCategoryComponent', () => {
  let component: BlocSmallCategoryComponent;
  let fixture: ComponentFixture<BlocSmallCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlocSmallCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlocSmallCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
