import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../comp/navbar/navbar.component';

@Component({
  selector: 'app-market-list',
  imports: [NavbarComponent],
  templateUrl: './market-list.component.html',
  styleUrl: './market-list.component.css',
})
export class MarketListComponent {
  route = inject(Router);

  goBack() {
    this.route.navigateByUrl('/');
  }
}
