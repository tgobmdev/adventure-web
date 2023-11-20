export class DestinationResponse {
  nomeDestino!: string;
  estadoDestino!: string;

  constructor(values: Object = []) {
    Object.assign(this, values);
  }
}
