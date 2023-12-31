import { Component, OnInit } from '@angular/core';
import { Columns } from '../../../../../shared/components/table/models/columns';
import { AuthService } from '../../../../../shared/services/auth.service';
import { CustomMessageService } from '../../../../../shared/services/message.service';
import { RoadmapTravelResponse } from '../../dto/response/roadmpa-travel-response';
import { RoadmapService } from '../../services/roadmap.service';

@Component({
  selector: 'app-roadmap-travel-list',
  templateUrl: './roadmap-travel-list.component.html',
  styleUrls: ['./roadmap-travel-list.component.scss'],
})
export class RoadmapTravelListComponent implements OnInit {
  cols!: Columns[];
  roadmapTravels!: RoadmapTravelResponse[];

  constructor(
    private readonly messageService: CustomMessageService,
    private readonly roadmapService: RoadmapService,
    private readonly authService: AuthService,
  ) {
    this.createTableColumns();
  }

  ngOnInit(): void {
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
        currency: true,
      }),
    ];
  };

  findAllRoadmaps = () => {
    this.roadmapService.getAllRoadmapTravels().subscribe({
      next: (roadmapTravels) => {
        this.roadmapTravels = roadmapTravels.filter(
          (roadmap) => roadmap.userId == this.authService.getToken(),
        );
      },
      error: (error) => {
        this.messageService.sendError(error);
      },
    });
  };
}
