import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocProductComponent } from './bloc-product.component';

describe('ProductComponent', () => {
  let component: BlocProductComponent;
  let fixture: ComponentFixture<BlocProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlocProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlocProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
