import { Injectable } from '@angular/core';
import { IBrand } from '../models/ibrand';
import { ICategory } from '../models/icategory';
import { IMotorcycle } from '../models/imotorcycle';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class staticmotorservice {
  motors: IMotorcycle[];
  categories: ICategory[];
  brands: IBrand[];

  constructor() {
    this.motors = [
      {
        Id: 11,
        Name: "دايون 4",
        Model: 2026,
        Description: "موتوسيكل دايون 4 150cc",
        Price: 38000,
        ImgUrls: [
          "unnamed.jpg",
          "https://placehold.co/300x200?text=Mercedes+GLC",
          "https://placehold.co/300x200?text=Mercedes+GLC",
        ],
        CategoryId: 1,
        BrandId: 1,
      },
      {
        Id: 12,
        Name: "هاوجيانغ 3",
        Model: 2026,
        Description: "موتوسيكل هاوجيانغ 3 150cc",
        Price: 38500,
        ImgUrls: [
          "https://placehold.co/300x200?text=Mercedes+GLC",
          "https://placehold.co/300x200?text=Mercedes+GLC",
          "https://placehold.co/300x200?text=Mercedes+GLC",
        ],
        CategoryId: 1,
        BrandId: 1,
      },
      {
        Id: 13,
        Name: "هاوجيانغ 4",
        Model: 2026,
        Description: "موتوسيكل هاوجيانغ 4 150cc",
        Price: 39000,
        ImgUrls: [
          "https://placehold.co/300x200?text=Mercedes+GLC",
          "https://placehold.co/300x200?text=Mercedes+GLC",
          "https://placehold.co/300x200?text=Mercedes+GLC",
        ],
        CategoryId: 1,
        BrandId: 1,
      },
      {
        Id: 14,
        Name: "بوكسر",
        Model: 2026,
        Description: "موتوسيكل بوكسر 150cc",
        Price: 43000,
        ImgUrls: [
          "Boxer.avif",
          "Boxer1.avif",
          "Boxer2.webp",
        ],
        CategoryId: 1,
        BrandId: 3,
      }
    ];
    this.categories = [
      { Id: 1, Name: "دراجلة ناريه" },
    ];
    this.brands = [
      { Id: 1, Name: "هاوجيانغ" },
      { Id: 2, Name: "دايون" },
      { Id: 3, Name: "بوكسر" },
    ];
  }

  // 🔹 Observable version of motor details
  getMotorDetails(id: number): Observable<IMotorcycle | undefined> {
    const motor = this.motors.find(m => m.Id === id);
    return of(motor); // مؤقت قبل ربط الـ API حقيقي
  }

  GetAllMotorcycles(): IMotorcycle[] {
    return this.motors;
  }

  GetMotorByCategoryId(categoryId: number): IMotorcycle[] {
    if (categoryId === 0) return this.motors;
    return this.motors.filter(moto => moto.CategoryId === categoryId);
  }

  GetMotorById(id: number): IMotorcycle | null {
    return this.motors.find(moto => moto.Id === id) || null;
  }

  GetCategoryName(id: number): string {
    return this.categories.find(c => c.Id === id)?.Name ?? 'Unknown';
  }

  GetBrandName(id: number): string {
    return this.brands.find(c => c.Id === id)?.Name ?? 'Unknown';
  }
}