import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../comp/navbar/navbar.component';

@Component({
  selector: 'app-lol',
  imports: [NavbarComponent],
  templateUrl: './lol.component.html',
  styleUrl: './lol.component.css',
})
export class LolComponent {
  route = inject(Router);

  goBack() {
    this.route.navigateByUrl('/');
  }
}
