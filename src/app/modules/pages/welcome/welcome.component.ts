import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  email: string = 'generico@generico.com'
  constructor(private readonly router: Router) {}

  navToDestinationPage = () => {
    this.router.navigate(['destinations']);
  };
}
