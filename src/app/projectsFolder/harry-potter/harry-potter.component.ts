import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../comp/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-harry-potter',
  imports: [NavbarComponent],
  templateUrl: './harry-potter.component.html',
  styleUrl: './harry-potter.component.css',
})
export class HarryPotterComponent {
  route = inject(Router);

  goBack() {
    this.route.navigateByUrl('/');
  }
}
