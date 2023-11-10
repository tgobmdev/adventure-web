import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-header',
  templateUrl: './welcome-header.component.html',
})
export class WelcomeHeaderComponent {
  constructor(private readonly router: Router) {}

  navToDestinationPage = () => {
    this.router.navigate(['destinations']);
  };
}
