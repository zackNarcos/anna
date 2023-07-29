import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdSideBarComponent } from './ad-side-bar.component';

describe('AdSideBarComponent', () => {
  let component: AdSideBarComponent;
  let fixture: ComponentFixture<AdSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdSideBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
