export class Columns {
  header!: string;
  field!: string;
  currency!: boolean;

  constructor(values: Object = []) {
    Object.assign(this, values);
  }
}
