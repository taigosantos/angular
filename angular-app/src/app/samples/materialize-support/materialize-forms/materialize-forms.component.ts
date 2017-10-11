import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

declare var $: any;

@Component({
  selector: 'app-materialize-forms',
  templateUrl: './materialize-forms.component.html',
  styleUrls: ['./materialize-forms.component.scss']
})
export class MaterializeFormsComponent implements OnInit {
  // PROPERTIES

  testForm: FormGroup;
  filteredCountries: Observable<any[]>;

  options = [new User(1, 'Mary'), new User(2, 'Shelley'), new User(3, 'Igor')];
  filteredOptions: Observable<User[]>;
  // CONSTRUCTOR

  constructor(private formBuilder: FormBuilder) {}

  // EVENTS

  ngOnInit() {
    this.configureForm();
    this.configureCountriesField();
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

  configureForm() {
    this.testForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(60)]],
      genre: [null, Validators.required],
      acceptTerms: [null, Validators.requiredTrue],
      status: [null, Validators.required],
      country: [null, Validators.required]
    });
  }

  configureCountriesField() {
    this.filteredOptions = this.testForm.get('country').valueChanges
      .startWith(null)
      .map(user => (user && typeof user === 'object' ? user.name : user))
      .map(name => (name ? this.filter(name) : this.options.slice()));
  }

  filter(name: string): User[] {
    return this.options.filter(option => new RegExp(`^${name}`, 'gi').test(option.name));
  }

  displayFn(user: User): string | User {
    return user ? user.name : user;
  }

  // configureCountriesField() {
  //   const countries = [{ id: 1, name: 'Brazil' }, { id: 2, name: 'United States' }, { id: 3, name: 'France' }];

  //   this.filteredCountries = this.testForm
  //     .get('country')
  //     .valueChanges.startWith(null)
  //     .map(country => country && typeof country === 'object' ? country.name : country)
  //     .map(name => {
  //       if (name) {
  //         return countries.filter(country => new RegExp(`^${name}`, 'gi').test(country.name));
  //       } else {
  //         return countries.slice();
  //       }
  //     });
  // }

  // displayCountry(country: any): string {
  //   console.log(country);
  //   return country ? country.name : country;
  // }

  formIsValid() {
    return this.testForm.valid;
  }

  isFieldInvalid(formControlName: string): boolean {
    const formControl = this.testForm.get(formControlName);
    return formControl.invalid && (formControl.touched || formControl.dirty);
  }

  nextInvalidError(formControlName: string, errorKey: string): boolean {
    if (!this.isFieldInvalid(formControlName)) {
      return false;
    }

    const controlErrors: ValidationErrors = this.testForm.get(formControlName).errors;
    console.log(controlErrors);
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

class User {
  constructor(public id: number, public name: string) {}
}
