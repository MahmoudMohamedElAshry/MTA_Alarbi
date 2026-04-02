import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, NgClass, NgFor],
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {
  applyForm: FormGroup;
  submitted = false;
  showMessage = false;

  personalPhoto: string | ArrayBuffer | null = null;
  cardFrontPreview: string | ArrayBuffer | null = null;
  cardBackPreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
      vehicleType: ['', Validators.required],
      region: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(65)]],
    });
  }

  onFileChange(event: any, type: string) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (type === 'photo') this.personalPhoto = reader.result;
        if (type === 'front') this.cardFrontPreview = reader.result;
        if (type === 'back') this.cardBackPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.applyForm.invalid) return;

    console.log('Form submitted', this.applyForm.value);

    this.applyForm.reset();
    this.personalPhoto = null;
    this.cardFrontPreview = null;
    this.cardBackPreview = null;
    this.submitted = false;

    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }
}