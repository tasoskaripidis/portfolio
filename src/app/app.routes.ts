import { Routes } from '@angular/router';
import { DashboardComponent } from './comp/dashboard/dashboard.component';
import { HarryPotterComponent } from './projectsFolder/harry-potter/harry-potter.component';
import { WalletComponent } from './projectsFolder/wallet/wallet.component';
import { CarRentalComponent } from './projectsFolder/car-rental/car-rental.component';
import { LolComponent } from './projectsFolder/lol/lol.component';
import { MarketListComponent } from './projectsFolder/market-list/market-list.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  { path: 'quiz-game', component: HarryPotterComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'cars-rental', component: CarRentalComponent },
  { path: 'lol', component: LolComponent },
  { path: 'list', component: MarketListComponent },
];
