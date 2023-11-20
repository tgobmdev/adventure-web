import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';
import { RoadmapRequest } from './dto/request/roadmap-request';
import { RoadmapTravelResponse } from './dto/response/roadmpa-travel-response';

@Injectable({
  providedIn: 'root',
})
export class RoadmapService extends ApiService {
  private roadmapUrl = 'roadmaps';

  createRoadmap(roadmapRequest: RoadmapRequest): Observable<RoadmapRequest> {
    return this.post(this.roadmapUrl, roadmapRequest);
  }

  getAllRoadmapTravels(): Observable<RoadmapTravelResponse[]> {
    return this.get(this.roadmapUrl);
  }
}
