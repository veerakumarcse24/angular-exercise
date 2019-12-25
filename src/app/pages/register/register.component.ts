import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm! : FormGroup;
  fromSubmitted : boolean = false;
  countries : Array<any> = [{id: 1, name: 'American'}, {id: 2, name: 'Indian'}];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.clearRegisterForm();
  }

   clearRegisterForm()
  {
    this.fromSubmitted = false;
    this.registerForm = this.formBuilder.group({
        title_code: [null, Validators.required],
        first_name: [null, Validators.required],
        mobile_number: [null, Validators.required],
        nationality: [null, Validators.required],
        dob: [null, Validators.required],
        address: [null, Validators.required],
        duration: [null],
        marital_status: [null, Validators.required]
    });
  }

  get reg_form() { return this.registerForm.controls; }

  submitRegisterForm()
  {
    this.fromSubmitted = true;
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
    }
  }

}
