import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconNavComponent as IconTrashComponent } from './icon-trash.component';

describe('IconNavComponent', () => {
  let component: IconTrashComponent;
  let fixture: ComponentFixture<IconTrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconTrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
