import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-nav',
  templateUrl: './layout-nav.component.html',
  styleUrls: ['./layout-nav.component.scss'],
})
export class LayoutNavComponent {
  loggedUser: boolean = false;

  constructor(private readonly router: Router) {}

  redirectToPage = (route: string) => {
    this.router.navigate([route]);
  };

  redirectToWelcomePage = () => {
    this.redirectToPage('welcome');
  };

  redirectToLoginPage = () => {
    this.redirectToPage('account/login');
  };

  redirectToUserPage = () => {
    this.redirectToPage('account/:id');
  };

  redirectToDestinationPage = () => {
    this.redirectToPage('destinations');
  };

  redirectToTravelPage = () => {
    this.redirectToPage('travels');
  };

  redirectToRoadmapPage = () => {
    this.redirectToPage('roadmaps');
  };
}
