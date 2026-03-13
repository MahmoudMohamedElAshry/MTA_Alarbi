import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IMotorcycle } from '../../models/imotorcycle';
import { Router } from '@angular/router';
import { staticmotorservice } from '../../Services/staticmotorservice.service';


@Component({
  selector: 'app-showroom',
  imports: [NgFor, CommonModule],
  templateUrl: './showroom.component.html',
  styleUrl: './showroom.component.css'
})
export class ShowroomComponent {
  motors: IMotorcycle[];

  constructor(private staticmotorsservice: staticmotorservice,
    private _router: Router) {
    this.motors = this.staticmotorsservice.GetAllMotorcycles();
  }
  getCategoryName(id: number): string {
    return this.staticmotorsservice.GetCategoryName(id)
  }
  getBrandName(id: number): string {
    return this.staticmotorsservice.GetBrandName(id)
  }
  GoToDetails(id: number) {
    this._router.navigate(['/Details', id])
  }


}
