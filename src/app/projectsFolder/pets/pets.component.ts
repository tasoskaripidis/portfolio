import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../comp/navbar/navbar.component';

@Component({
  selector: 'app-pets',
  imports: [NavbarComponent],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
})
export class PetsComponent {
  route = inject(Router);
  goBack() {
    this.route.navigateByUrl('/');
  }
}
