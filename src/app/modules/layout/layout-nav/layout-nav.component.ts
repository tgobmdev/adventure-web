import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginEmitterService } from '../../pages/account/service/login-emitter.service';

@Component({
  selector: 'app-layout-nav',
  templateUrl: './layout-nav.component.html',
  styleUrls: ['./layout-nav.component.scss'],
})
export class LayoutNavComponent {
  loggedUser: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly loginEmitterService: LoginEmitterService,
  ) {
    this.loginEmitterService.loggedUser.subscribe((data: boolean) => {
      this.loggedUser = data;
    });
  }

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

  redirectToRoadmapTravelPage = () => {
    this.redirectToPage('roadmaps/travels');
  };

  redirectToRoadmapPage = () => {
    this.redirectToPage('roadmaps');
  };
}
