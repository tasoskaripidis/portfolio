import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../comp/navbar/navbar.component';

@Component({
  selector: 'app-car-rental',
  imports: [NavbarComponent],
  templateUrl: './car-rental.component.html',
  styleUrl: './car-rental.component.css',
})
export class CarRentalComponent {
  route = inject(Router);

  goBack() {
    this.route.navigateByUrl('/');
  }
}
