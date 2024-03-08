import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDetailsPreloaderComponent } from './song-details-preloader.component';

describe('SongDetailsPreloaderComponent', () => {
  let component: SongDetailsPreloaderComponent;
  let fixture: ComponentFixture<SongDetailsPreloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongDetailsPreloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongDetailsPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
