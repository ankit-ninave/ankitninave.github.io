import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilledServicesComponent } from './skilled-services.component';

describe('SkilledServicesComponent', () => {
  let component: SkilledServicesComponent;
  let fixture: ComponentFixture<SkilledServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkilledServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkilledServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
