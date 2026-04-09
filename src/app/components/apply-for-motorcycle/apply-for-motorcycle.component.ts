import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IMotorcycle } from '../../models/imotorcycle';
import { staticmotorservice } from '../../Services/staticmotorservice.service';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-apply-for-motorcycle',
    imports: [CommonModule,ReactiveFormsModule   ],
  templateUrl: './apply-for-motorcycle.component.html',
  styleUrls: ['./apply-for-motorcycle.component.css']
})
export class ApplyForMotorcycleComponent implements OnInit {

  form!: FormGroup;
  motorId!: number;
  motorData!: IMotorcycle | undefined;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private motorService: staticmotorservice
  ) {}

  ngOnInit(): void {
    this.motorId = +this.route.snapshot.params['id']; // تحويل string → number
    this.initForm();
    this.loadMotorDetails();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      notes: ['']
    });
  }

  loadMotorDetails() {
    this.motorService.getMotorDetails(this.motorId).subscribe(motor => {
      if (motor) {
        this.motorData = motor;
      } else {
        console.error('Motor not found!');
      }
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.isLoading = true;

    const request = {
      ...this.form.value,
      motorId: this.motorId
    };

    console.log(request);

    setTimeout(() => {
      this.isLoading = false;
      alert('تم إرسال الطلب بنجاح!');
      this.form.reset();
    }, 1500);
  }

  getBrandName(id: number): string {
    return this.motorService.GetBrandName(id);
  }

  getCategoryName(id: number): string {
    return this.motorService.GetCategoryName(id);
  }
}