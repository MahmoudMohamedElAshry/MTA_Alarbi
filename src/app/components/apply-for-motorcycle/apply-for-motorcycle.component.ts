import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apply-for-motorcycle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './apply-for-motorcycle.component.html',
  styleUrls: ['./apply-for-motorcycle.component.css']
})
export class ApplyForMotorcycleComponent implements OnInit {

  form!: FormGroup;
  isLoading = false;

  previews: any = {
    personalImage: null,
    idFront: null,
    idBack: null,
    guarantorFront: null,
    guarantorBack: null
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(21)]],
      phone: ['', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]],
      address: ['', Validators.required],

      personalImage: [null, Validators.required],
      idFront: [null, Validators.required],
      idBack: [null, Validators.required],
      guarantorFront: [null, Validators.required],
      guarantorBack: [null, Validators.required],
    });
  }

  onFileChange(event: any, field: string) {
    const file = event.target.files[0];

    if (!file || !file.type.startsWith('image/')) return;

    this.form.patchValue({ [field]: file });

    const reader = new FileReader();
    reader.onload = () => {
      this.previews[field] = reader.result;
    };
    reader.readAsDataURL(file);
  }

  showMessage = false;
onSubmit() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  this.isLoading = true;

  const formData = new FormData();

  Object.keys(this.form.controls).forEach(key => {
    formData.append(key, this.form.get(key)?.value);
  });

  setTimeout(() => {
    this.isLoading = false;

    this.showMessage = true;

    // ✅ reset form
    this.form.reset();

    // ✅ reset previews
    this.previews = {
      personalImage: null,
      idFront: null,
      idBack: null,
      guarantorFront: null,
      guarantorBack: null
    };

    // (optional but BEST) reset file inputs visually
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input: any) => input.value = '');

  }, 1500);
}
closeMessage() {
  this.showMessage = false;
}
}