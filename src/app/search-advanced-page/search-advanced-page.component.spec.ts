import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdvancedPageComponent } from './search-advanced-page.component';

describe('SearchAdvancedPageComponent', () => {
  let component: SearchAdvancedPageComponent;
  let fixture: ComponentFixture<SearchAdvancedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAdvancedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdvancedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
