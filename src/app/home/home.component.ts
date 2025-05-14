import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/seu-usuario' },
    { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/seu-perfil' },
    { icon: 'fas fa-envelope', url: 'mailto:seu-email@example.com' }
  ];
}
