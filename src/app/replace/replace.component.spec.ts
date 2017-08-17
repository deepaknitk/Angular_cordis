import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceComponent } from './replace.component';
import { ReplaceComponent } from './replace.component';

describe('ReplaceComponent', () => {
  let component: ReplaceComponent;
  let fixture: ComponentFixture<ReplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
