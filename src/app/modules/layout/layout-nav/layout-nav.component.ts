import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { CustomMessageService } from '../../../shared/services/message.service';

@Component({
  selector: 'app-layout-nav',
  templateUrl: './layout-nav.component.html',
  styleUrls: ['./layout-nav.component.scss'],
})
export class LayoutNavComponent {
  loggedUser: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {}

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
    this.router.navigate(['account', this.authService.getToken()]);
  };

  redirectToDestinationPage = () => {
    this.redirectToPage('destinations');
  };

  redirectToRoadmapTravelPage = () => {
    this.redirectToPage('roadmaps/travels');
  };

  redirectToRoadmapPage = () => {
    this.redirectToPage('roadmaps');
  };

  isUserAuthenticated = () => {
    return this.authService.isAuthenticated();
  };

  logoutUser = () => {
    this.authService.isLogout();
    this.redirectToWelcomePage();
  };
}
