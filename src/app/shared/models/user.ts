export class User {
  id!: string;
  username!: string;
  password!: string;

  constructor(values: Object = []) {
    Object.assign(this, values);
  }
}
