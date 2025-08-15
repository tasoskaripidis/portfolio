import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  route = inject(Router);

  transform = 'skew(1)';
  projectImg(event: MouseEvent) {
    const image = event.currentTarget as HTMLElement;
    const rect = image.getBoundingClientRect();
    const x = event.clientX - rect.left;

    const width = rect.width;

    if (x < width / 2) {
      this.transform = 'skewX(-10deg) ';
    } else {
      this.transform = 'skewX(10deg) ';
    }
  }

  harryPoter() {
    this.route.navigateByUrl('quiz-game');
  }

  wallet() {
    this.route.navigateByUrl('wallet');
  }

  rentCars() {
    this.route.navigateByUrl('cars-rental');
  }

  lolGame() {
    this.route.navigateByUrl('lol');
  }
  list() {
    this.route.navigateByUrl('list');
  }
}
