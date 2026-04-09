import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ShowroomComponent } from './components/showroom/showroom.component';
import { ApplyComponent } from './components/apply/apply.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EventsComponent } from './components/events/events.component';
import { ApplyForMotorcycleComponent } from './components/apply-for-motorcycle/apply-for-motorcycle.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'details/:id', component: DetailsComponent },

    { path: 'contact-us', component: ContactUsComponent },
    { path: 'showroom', component: ShowroomComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'events', component: EventsComponent },

    { path: 'apply/job', component: ApplyComponent },
    { path: 'apply/motor/:id', component: ApplyForMotorcycleComponent },

    { path: '**', component: NotFoundComponent }
];
