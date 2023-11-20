import { Component, OnInit } from '@angular/core';
import { Columns } from '../../../../../shared/components/table/models/columns';
import { RoadmapTravelResponse } from '../../dto/response/roadmpa-travel-response';

@Component({
  selector: 'app-roadmap-travel-list',
  templateUrl: './roadmap-travel-list.component.html',
  styleUrls: ['./roadmap-travel-list.component.scss'],
})
export class RoadmapTravelListComponent implements OnInit {
  cols!: Columns[];
  travels!: RoadmapTravelResponse[];

  ngOnInit(): void {
    this.createTableColumns();
    this.findAllRoadmaps();
  }

  createTableColumns = () => {
    this.cols = [
      new Columns({
        header: 'Nome do Roteiro',
        field: 'roadmapName',
      }),
      new Columns({
        header: 'Destino',
        field: 'roadmapDestination',
      }),
      new Columns({
        header: 'Qtd. Pessoas',
        field: 'roadmapAmtPerson',
      }),
      new Columns({
        header: 'Preço',
        field: 'roadmapPrice',
      }),
    ];
  };

  findAllRoadmaps = () => {};
}
