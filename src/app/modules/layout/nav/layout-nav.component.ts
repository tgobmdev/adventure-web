import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-nav',
  templateUrl: './layout-nav.component.html',
  styleUrls: ['./layout-nav.component.scss'],
})
export class LayoutNavComponent {
  constructor(private readonly router: Router) {}

  navToLoginPage = () => {
    this.router.navigate(['/account/login']);
  };
}
