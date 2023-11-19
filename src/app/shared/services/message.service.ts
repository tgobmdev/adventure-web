import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class CustomMessageService {
  constructor(private readonly messageService: MessageService) {}

  sendSucess = (detail: string) => {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: detail,
    });
  };

  sendError = (error: any) => {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: error,
    });
  };
}
