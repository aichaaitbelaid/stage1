import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosLocalisationsComponent } from './nos-localisations.component';

describe('NosLocalisationsComponent', () => {
  let component: NosLocalisationsComponent;
  let fixture: ComponentFixture<NosLocalisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosLocalisationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosLocalisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
