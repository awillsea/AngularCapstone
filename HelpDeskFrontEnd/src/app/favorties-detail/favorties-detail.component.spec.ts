import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavortiesDetailComponent } from './favorties-detail.component';

describe('FavortiesDetailComponent', () => {
  let component: FavortiesDetailComponent;
  let fixture: ComponentFixture<FavortiesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavortiesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavortiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
