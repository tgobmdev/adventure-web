import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomMessageService } from '../../../../../shared/services/message.service';
import { UserResponse } from '../../dto/response/user-response';
import { AccountDetailService } from '../../service/account-detail.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnInit {
  formDetail!: FormGroup;
  id!: string;
  userResponse!: UserResponse;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly accountDetailService: AccountDetailService,
    private readonly messageService: CustomMessageService,
  ) {
    this.createUserDetailForm();
  }

  ngOnInit(): void {
    this.getRouteId();
    this.getUserById();
  }

  createUserDetailForm = () => {
    this.formDetail = new FormGroup({
      username: new FormControl({ value: '', disabled: true }),
      password: new FormControl({ value: '', disabled: true }),
      name: new FormControl({ value: '', disabled: true }),
      email: new FormControl({ value: '', disabled: true }),
    });
  };

  getRouteId = () => {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  };

  getUserById = () => {
    this.accountDetailService.getUserById(this.id).subscribe({
      next: (response) => {
        this.userResponse = response;
        this.formDetail.patchValue(this.userResponse);
      },
      error: (error) => {
        this.messageService.sendError(error);
      },
    });
  };
}
