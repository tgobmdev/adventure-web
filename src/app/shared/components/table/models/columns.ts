export class Columns {
  header!: string;
  field!: string;

  constructor(values: Object = []) {
    Object.assign(this, values);
  }
}
