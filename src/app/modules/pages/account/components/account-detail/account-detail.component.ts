import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomMessageService } from '../../../../../shared/services/message.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
})
export class AccountDetailComponent implements OnInit {
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private readonly messageService: CustomMessageService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    if (!this.id || this.id === 'null') {
      this.messageService.sendError('Erro inesperado!');
    }
  }
}
