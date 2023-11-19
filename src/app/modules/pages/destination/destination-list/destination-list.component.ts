import { Component } from '@angular/core';
import { Columns } from '../../../../shared/components/table/models/columns';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.scss'],
})
export class DestinationListComponent {
  cols!: Columns[];
  values = [
    {
      nomeDestino: 'Blumenau',
      estadoDestino: 'SC',
    },
    {
      nomeDestino: 'Canela',
      estadoDestino: 'RS',
    },
    {
      nomeDestino: 'Chapada dos Veadeiros',
      estadoDestino: 'Goias',
    },
    {
      nomeDestino: 'Diamantina',
      estadoDestino: 'MG',
    },
    {
      nomeDestino: 'Fernando de Noronha',
      estadoDestino: 'PE',
    },
    {
      nomeDestino: 'Florianopolis',
      estadoDestino: 'SC',
    },
    {
      nomeDestino: 'Bonito - Gruta Lago Azul',
      estadoDestino: 'MS',
    },
    {
      nomeDestino: 'Jericoacoara',
      estadoDestino: 'CE',
    },
    {
      nomeDestino: 'Joao Pessoa',
      estadoDestino: 'PB',
    },
    {
      nomeDestino: 'Gramado',
      estadoDestino: 'RS',
    },
    {
      nomeDestino: 'Ouro Preto',
      estadoDestino: 'MG',
    },
    {
      nomeDestino: 'Pantanal',
      estadoDestino: 'MS',
    },
    {
      nomeDestino: 'Peninsula de Marau',
      estadoDestino: 'BA',
    },
    {
      nomeDestino: 'Petropolis',
      estadoDestino: 'RJ',
    },
    {
      nomeDestino: 'Belo Horizonte - Praca da Liberdade',
      estadoDestino: 'MG',
    },
  ];

  ngOnInit(): void {
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
  }
}
