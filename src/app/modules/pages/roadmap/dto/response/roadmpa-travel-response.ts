export class RoadmapTravelResponse {
  id!: number;
  roadmapName!: string;
  roadmapDestination!: string;
  roadmapAmtPerson!: number;
  roadmapPrice!: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
