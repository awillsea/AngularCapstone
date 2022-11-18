import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavortiesListComponent } from './favorties-list.component';

describe('FavortiesListComponent', () => {
  let component: FavortiesListComponent;
  let fixture: ComponentFixture<FavortiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavortiesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavortiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
