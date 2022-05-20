import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneAvisComponent } from './zone-avis.component';

describe('ZoneAvisComponent', () => {
  let component: ZoneAvisComponent;
  let fixture: ComponentFixture<ZoneAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneAvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
