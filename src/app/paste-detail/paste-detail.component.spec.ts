import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteDetailComponent } from './paste-detail.component';

describe('PasteDetailComponent', () => {
  let component: PasteDetailComponent;
  let fixture: ComponentFixture<PasteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasteDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
