import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-apply',
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.css'
})
export class ApplyComponent {
applyForm!: FormGroup

  submitted = false
  showMessage = false

  cardFrontPreview: any
  cardBackPreview: any
  personalPhoto: any

  constructor(private fb: FormBuilder) {

    this.applyForm = this.fb.group({

      fullName: ['', Validators.required],

      phone: ['', [
        Validators.required,
        Validators.pattern("^[0-9]{10,15}$")
      ]],

      vehicleType: ['', Validators.required],

      region: ['', Validators.required],

      age: ['', [
        Validators.required,
        Validators.min(18),
        Validators.max(65)
      ]],

      cardFront: ['', Validators.required],
      cardBack: ['', Validators.required],
      personalPhoto: ['', Validators.required]


    })

  }

  onSubmit() {

    this.submitted = true

    if (this.applyForm.invalid) {
      return
    }

    console.log(this.applyForm.value)

    this.showMessage = true

    this.applyForm.reset()
    this.submitted = false

  }

  onFileChange(event: any, type: string) {

    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = () => {

      if (type === "front") {
        this.cardFrontPreview = reader.result
        this.applyForm.patchValue({ cardFront: file })
      }

      if (type === "back") {
        this.cardBackPreview = reader.result
        this.applyForm.patchValue({ cardBack: file })
      }

      if (type === "photo") {
        this.personalPhoto = reader.result
        this.applyForm.patchValue({ personalPhoto: file })
      }

    }

    reader.readAsDataURL(file)

  }
}