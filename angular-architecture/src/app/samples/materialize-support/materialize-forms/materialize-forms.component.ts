import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    this.testForm = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit() {

    if (!this.testForm.valid)
      return console.log('Este formulário está inválido');

    console.log(this.testForm.value);
  }

  onCancel() {
    this.testForm.reset();
  }

}
