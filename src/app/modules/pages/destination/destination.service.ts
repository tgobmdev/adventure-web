import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';
import { DestinationResponse } from './dto/destination-response';

@Injectable({
  providedIn: 'root',
})
export class DestinationService extends ApiService {
  private destinationUrl = 'destinations';

  getAllDestinations(): Observable<DestinationResponse[]> {
    return this.get(this.destinationUrl);
  }
}
