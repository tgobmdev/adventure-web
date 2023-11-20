export class UserLoginRequest {
  username!: string;
  password!: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
