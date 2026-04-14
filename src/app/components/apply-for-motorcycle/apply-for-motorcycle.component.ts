import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-apply-for-motorcycle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // 👈 مهم جدًا
  templateUrl: './apply-for-motorcycle.component.html',
  styleUrls: ['./apply-for-motorcycle.component.css']
})
export class ApplyForMotorcycleComponent implements OnInit {

  form!: FormGroup;
  isLoading = false;
  showMessage = false;

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
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(21)]],
      phone: ['', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]],
      address: ['', [Validators.required]],

      personalImage: [null, Validators.required],
      idFront: [null, Validators.required],
      idBack: [null, Validators.required],
      guarantorFront: [null, Validators.required],
      guarantorBack: [null, Validators.required],
    });
  }

  // 📸 File Upload Handler
  onFileChange(event: Event, field: string): void {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (!file || !file.type.startsWith('image/')) return;

    // set file in form
    this.form.get(field)?.setValue(file);
    this.form.get(field)?.markAsTouched();

    // preview
    const reader = new FileReader();
    reader.onload = () => {
      this.previews[field] = reader.result;
    };
    reader.readAsDataURL(file);
  }

  // 🚀 Submit Form
  onSubmit(): void {

    // 1. validate form
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // 2. check files exist (extra safety)
    const requiredFiles = [
      'personalImage',
      'idFront',
      'idBack',
      'guarantorFront',
      'guarantorBack'
    ];

    const missingFile = requiredFiles.some(
      field => !this.form.get(field)?.value
    );

    if (missingFile) return;

    this.isLoading = true;

    const formData = new FormData();

    // 3. build formData
    Object.keys(this.form.controls).forEach(key => {
      const value = this.form.get(key)?.value;

      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    // ⛔ هنا هتربط API بعدين
    this.fakeSubmit(formData);
  }

  // 🔥 Fake API (replace later with HttpClient)
  private fakeSubmit(data: FormData): void {
    setTimeout(() => {

      console.log('FORM DATA READY:', data);

      this.isLoading = false;
      this.showMessage = true;

      this.resetForm();

    }, 1200);
  }

  // 🔄 Reset everything
  private resetForm(): void {
    this.form.reset();

    this.previews = {
      personalImage: null,
      idFront: null,
      idBack: null,
      guarantorFront: null,
      guarantorBack: null
    };

    document.querySelectorAll('input[type="file"]')
      .forEach((input: any) => input.value = '');
  }

  // ❌ Close modal
  closeMessage(): void {
    this.showMessage = false;
  }
}