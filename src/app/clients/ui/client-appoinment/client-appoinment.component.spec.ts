import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAppoinmentComponent } from './client-appoinment.component';

describe('ClientAppoinmentComponent', () => {
  let component: ClientAppoinmentComponent;
  let fixture: ComponentFixture<ClientAppoinmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClientAppoinmentComponent]
    });
    fixture = TestBed.createComponent(ClientAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
