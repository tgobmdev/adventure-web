import { Component, OnInit } from '@angular/core';
import { Columns } from '../../../../shared/components/table/models/columns';
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

  constructor(private readonly destinationService: DestinationService) {}

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
    this.destinationService.getAllDestinations().subscribe((destinations) => {
      this.destinations = destinations;
    });
  };
}
