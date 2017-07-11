import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-materialize-forms',
  templateUrl: './materialize-forms.component.html',
  styleUrls: ['./materialize-forms.component.scss']
})
export class MaterializeFormsComponent implements OnInit {

  // PROPERTIES

  testForm: FormGroup;

  // CONSTRUCTOR

  constructor(
    private formBuilder: FormBuilder
  ) { }

  // EVENTS

  ngOnInit() {
    this.testForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(60)]],
      genre: [null, Validators.required]
    });
  }

  onSubmit() {

    if (!this.testForm.valid) {
      console.log('Este formulário está inválido');
    }

    console.log(this.testForm);

  }

  onReset() {
    this.testForm.reset();
  }

  // METHODS

  formIsValid() {
    return this.testForm.valid;
  }

  nextInvalidError(formControlName: string, errorKey: string): boolean {
    const controlErrors: ValidationErrors = this.testForm.get(formControlName).errors;

    if (controlErrors == null || Object.keys(controlErrors).length === 0) {
      return false;
    }

    return Object.keys(controlErrors)[0] === errorKey;
  }

  getMinlengthErrorInfo(formControlName: string): any {
    return this.testForm.get(formControlName).errors['minlength'];
  }

  getMaxlengthErrorInfo(formControlName: string): any {
    return this.testForm.get(formControlName).errors['maxlength'];
  }

}
