export class DestinationResponse {
  nomeDestino!: string;
  estadoDestino!: string;
  precoDestino!: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
