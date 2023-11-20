import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
})
export class AccountDetailComponent implements OnInit {
  id!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
}
