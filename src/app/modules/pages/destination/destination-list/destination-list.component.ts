import { Component, OnInit } from '@angular/core';
import { Columns } from '../../../../shared/components/table/models/columns';
import { CustomMessageService } from '../../../../shared/services/message.service';
import { DestinationService } from '../destination.service';
import { DestinationResponse } from '../dto/destination-response';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.scss'],
})
export class DestinationListComponent implements OnInit {
  cols!: Columns[];
  destinations!: DestinationResponse[];

  constructor(
    private readonly messageService: CustomMessageService,
    private readonly destinationService: DestinationService,
  ) {}

  ngOnInit(): void {
    this.createTableColumns();
    this.findAllDestinations();
  }

  createTableColumns = () => {
    this.cols = [
      new Columns({
        header: 'Destino',
        field: 'nomeDestino',
      }),
      new Columns({
        header: 'Estado',
        field: 'estadoDestino',
      }),
    ];
  };

  findAllDestinations = () => {
    this.destinationService.getAllDestinations().subscribe({
      next: (destinations) => {
        this.destinations = destinations;
      },
      error: (error) => {
        this.messageService.sendError(error);
      },
    });
  };
}
