import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  contactBtn(contact: string) {
    const Contact = document.getElementById(contact);
    if (Contact) {
      Contact.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
