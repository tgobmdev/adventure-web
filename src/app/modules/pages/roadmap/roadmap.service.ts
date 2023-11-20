import { Injectable } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { Observable } from 'rxjs';
import { RoadmapRequest } from './models/roadmap-request';

@Injectable({
  providedIn: 'root',
})
export class RoadmapService extends ApiService {
  private roadmapUrl = 'roadmaps';

  createRoadmap(roadmapRequest: RoadmapRequest): Observable<RoadmapRequest> {
    return this.post(this.roadmapUrl, roadmapRequest);
  }
}
