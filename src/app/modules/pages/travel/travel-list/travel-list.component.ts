import { Component, OnInit } from '@angular/core';
import { Columns } from '../../../../shared/components/table/models/columns';
import { TravelResponse } from '../dto/travel-response';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
})
export class TravelListComponent implements OnInit {
  cols!: Columns[];
  travels!: TravelResponse[];

  ngOnInit(): void {
    this.createTableColumns();
    this.findAllTravels();
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

  findAllTravels = () => {
  };
}
