import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { NumberDirective } from '../../directives/numbers-only.directive';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        NumberDirective,
        RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function setFormValues(fromData) {
    component.registerForm.controls['title_code'].setValue(fromData.title_code);
    component.registerForm.controls['first_name'].setValue(fromData.first_name);
    component.registerForm.controls['mobile_number'].setValue(fromData.mobile_number);
    component.registerForm.controls['nationality'].setValue(fromData.nationality);
    component.registerForm.controls['dob'].setValue(fromData.dob);
    component.registerForm.controls['address'].setValue(fromData.address);
    component.registerForm.controls['duration'].setValue(fromData.duration);
    component.registerForm.controls['marital_status'].setValue(fromData.marital_status);
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have register form valid', () => {
    component.clearRegisterForm();
    const data = {
      title_code: 1,
      first_name: 'Veerakumar',
      mobile_number: '9095283825',
      nationality: 1,
      dob: '24-03-1995',
      address: 'Madurai',
      duration: 1,
      marital_status: 1
    };
    setFormValues(data);
    expect(component.registerForm.valid).toBeTruthy();
   });

   it('should have register form invalid', () => {
    component.clearRegisterForm();
    const data = {
      title_code: 1,
      first_name: 'Veerakumar',
      mobile_number: '9095283825'
    };
    setFormValues(data);
    expect(component.registerForm.valid).toBeFalsy();
   });

   it('should retrun true submitRegisterForm', () => {
    component.clearRegisterForm();
    const data = {
      title_code: 1,
      first_name: 'Veerakumar',
      mobile_number: '9095283825',
      nationality: 1,
      dob: '24-03-1995',
      address: 'Madurai',
      duration: 1,
      marital_status: 1
    };
    setFormValues(data);
    expect(component.submitRegisterForm()).toBeTruthy();
   });

   it('should retrun false submitRegisterForm', () => {
    component.clearRegisterForm();
    const data = {};
    setFormValues(data);
    expect(component.submitRegisterForm()).toBeFalsy();
   });

   it('should retrun form controls', () => {
    component.clearRegisterForm();
    const data = {};
    setFormValues(data);
    expect(component.reg_form).toEqual(component.registerForm.controls);
   });
});
