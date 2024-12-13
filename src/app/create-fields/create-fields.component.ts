import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface Field {
  name: string;
  field_type: string;
}

@Component({
  selector: 'app-create-fields',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './create-fields.component.html',
  styleUrl: './create-fields.component.css',
})
export class CreateFieldsComponent {
  createFieldForm: FormGroup;
  submitted = false;
  listFields: Field[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.createFieldForm = this.formBuilder.group({
      name: ['', Validators.required],
      field_type: ['text', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    this.createFieldForm.markAllAsTouched();
    console.log('submit');
    if (this.createFieldForm.valid) {
      console.log('Formulario válido:', this.createFieldForm.value);
      const { name, field_type } = this.createFieldForm.value;
      this.listFields.push({ name, field_type });
      this.createFieldForm.reset({ field_type: 'text' }); // Reiniciar el formulario
      this.submitted = false;
    } else {
      console.log('Formulario inválido:', this.createFieldForm.value);
    }
  }
}
