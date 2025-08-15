import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../comp/navbar/navbar.component';

@Component({
  selector: 'app-wallet',
  imports: [NavbarComponent],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css',
})
export class WalletComponent {
  route = inject(Router);

  goBack() {
    this.route.navigateByUrl('/');
  }
}
