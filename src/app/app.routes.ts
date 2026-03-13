import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ShowroomComponent } from './components/showroom/showroom.component';
import { ApplyComponent } from './components/apply/apply.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Details/:id', component: DetailsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'Showroom', component: ShowroomComponent },
    { path: 'About-Us', component: AboutUsComponent },
    { path: 'Apply', component: ApplyComponent }
];
