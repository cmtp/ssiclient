import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContractComponent } from './update-contract.component';

describe('CreateFunctionsComponent', () => {
  let component: CreateContractComponent;
  let fixture: ComponentFixture<CreateContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
