import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-valicando-form-no-submit',
  templateUrl: './valicando-form-no-submit.component.html',
  styleUrls: ['./valicando-form-no-submit.component.css']
})
export class ValicandoFormNoSubmitComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name : [null, Validators.required],
      email : [null, Validators.required],
      address : this.formBuilder.group({
        street: [null, Validators.required],
        zipCode: [null, Validators.required],
        city : [null, Validators.required],
        state : [null, Validators.required],
        country : [null, Validators.required]
      })
    });

  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }
  
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.form);
    }
  }
  

  reset(){
    this.form.reset();
  }  

}
