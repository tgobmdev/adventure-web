import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginEmitterService {
  loggedUser = new EventEmitter<boolean>();

  constructor() {}

  setData(data: boolean): void {
    this.loggedUser.emit(data);
  }
}
