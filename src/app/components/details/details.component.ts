import { Component, OnInit } from '@angular/core';
import { IMotorcycle } from '../../models/imotorcycle';
import { CommonModule } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { staticmotorservice } from '../../Services/staticmotorservice.service';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule,RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  currentId: number = 0;
  motors: IMotorcycle | null = null;

  constructor(private _activatedRoute: ActivatedRoute,
    private _staticmotorservice: staticmotorservice,
    private _location: Location
  ) {

  }
  getCategoryName(id: number): string {
    return this._staticmotorservice.GetCategoryName(id)
  }
  getBrandName(id: number): string {
    return this._staticmotorservice.GetBrandName(id)
  }
  ngOnInit(): void {

    this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'))
    this.motors = this._staticmotorservice.GetMotorById(this.currentId)
  }
  goBack() {
    this._location.back()
  }
}

