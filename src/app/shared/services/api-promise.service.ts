import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiPromiseService {
  protected apiUrl = 'http://localhost:3000';

  constructor() {}

  protected handleError = (response: Response): Response => {
    if (!response.ok) {
      throw new Error(
        `Erro na requisição. Por favor, tente novamente mais tarde. Status: ${response.status}`,
      );
    }
    return response;
  };

  protected post = async (endpoint: string, data: any): Promise<any> => {
    const url = `${this.apiUrl}/${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      this.handleError(response);
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
}
