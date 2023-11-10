import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss'],
})
export class WelcomeCardComponent {
  constructor(private readonly router: Router) {}

  navToDestinationPage = () => {
    this.router.navigate(['destinations']);
  };
}
