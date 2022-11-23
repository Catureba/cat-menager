import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPostComponent } from './cat-post.component';

describe('CatPostComponent', () => {
  let component: CatPostComponent;
  let fixture: ComponentFixture<CatPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
