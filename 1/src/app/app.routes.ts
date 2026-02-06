import { Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ChooseDestinationPage } from './choose-destination.page';
import { PlanTripPage } from './plan-trip.page';
import { TransportPage } from './transport.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'choose-destination', component: ChooseDestinationPage },
  { path: 'plan-trip', component: PlanTripPage },
  { path: 'transport', component: TransportPage },
];
