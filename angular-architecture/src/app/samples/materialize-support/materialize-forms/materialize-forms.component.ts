import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-materialize-forms',
  templateUrl: './materialize-forms.component.html',
  styleUrls: ['./materialize-forms.component.scss']
})
export class MaterializeFormsComponent implements OnInit {

  testForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

let teste = Validators.maxLength(10);
console.log(teste);

    this.testForm = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit() {

    if (!this.testForm.valid)
      console.log('Este formulário está inválido');

    console.log(this.testForm);

  }

  onCancel() {
    this.testForm.reset();
  }

  showMessageErrors(formControlName: string) {

    if (!this.verifyInvalidAndTouchedControl(formControlName))
      return '';

    const controlErrors: ValidationErrors = this.testForm.get(formControlName).errors;
    
    if (controlErrors != null && Object.keys(controlErrors).length > 0) {
      let key = Object.keys(controlErrors)[0];

      // Object.keys(controlErrors).forEach(keyError => {
      //   console.log('Key control: ' + formControlName + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
      // });
    }



    return '';

  }

  insertErrorStyle(formControlName: string) {
    return {
      'invalid': this.verifyInvalidAndTouchedControl(formControlName),
      'valid': this.verifyValidAndTouchedControl(formControlName)
    }
  }

  verifyInvalidAndTouchedControl(formControlName: string) {
    return this.testForm.get(formControlName).invalid && this.testForm.get(formControlName).touched;
  }

  verifyValidAndTouchedControl(formControlName: string) {
    return this.testForm.get(formControlName).valid && this.testForm.get(formControlName).touched;
  }

}
