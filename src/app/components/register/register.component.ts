import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import {NewuserService} from './../../services/newuser.service';
import {Newuser} from './../../services/newuser';
/**
 *
 * @param form
 */

function passwordsMatchValidator(form) {
  const password = form.get('password')
  const confirmpassword = form.get('confirmpassword')

  if(password.value !== confirmpassword.value) {
    confirmpassword.setErrors({ passwordsMatch: true })
  } else {
    confirmpassword.setErrors(null)
  }

  return null
}

function symbolValidator(control) { 
  if(control.hasError('required')) return null;
  if(control.hasError('minlength')) return null;

  if(control.value.indexOf('@') > -1) {
    return null
  } else {
    return { symbol: true }
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,private _newuserService:NewuserService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
           
          name: ['', Validators.required],
              number: ['', Validators.required],
              address: ['', Validators.required],
              email: ['', [Validators.required, Validators.email]],
               username: ['', Validators.required],
             password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
             confirmpassword: ''
          
        }, {
          validators: passwordsMatchValidator
        });
    }
   get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        
       this._newuserService.saveData(this.registerForm.value).subscribe(data =>
        {
      console.log(this.registerForm.value);
    });

       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}