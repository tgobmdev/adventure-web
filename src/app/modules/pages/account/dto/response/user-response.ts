export class UserResponse {
  username!: string;
  password!: string;
  name!: string;
  email!: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
