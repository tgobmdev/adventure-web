export class User {
  id!: string;
  username!: string;
  password!: string;
  name!: string;
  email!: string;

  constructor(values: Object = []) {
    Object.assign(this, values);
  }
}
