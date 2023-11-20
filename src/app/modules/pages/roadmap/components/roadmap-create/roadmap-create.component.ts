import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../shared/services/auth.service';
import { CustomMessageService } from '../../../../../shared/services/message.service';
import { DestinationResponse } from '../../../destination/dto/response/destination-response';
import { DestinationService } from '../../../destination/services/destination.service';
import { RoadmapRequest } from '../../dto/request/roadmap-request';
import { RoadmapService } from '../../services/roadmap.service';

@Component({
  selector: 'app-roadmap-create',
  templateUrl: './roadmap-create.component.html',
  styleUrls: ['./roadmap-create.component.scss'],
})
export class RoadmapCreateComponent implements OnInit {
  roadmapCreateForm!: FormGroup;
  destinations!: string[];
  roadmapRequest!: RoadmapRequest;

  constructor(
    private readonly messageService: CustomMessageService,
    private readonly destinationService: DestinationService,
    private readonly roadmapService: RoadmapService,
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {
    this.createRoadmapForm();
  }

  ngOnInit(): void {
    this.findAllDestinations();
  }

  createRoadmapForm = () => {
    this.roadmapCreateForm = new FormGroup({
      roadmapName: new FormControl('', [Validators.required]),
      roadmapDestination: new FormControl('', [Validators.required]),
      roadmapAmtPerson: new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
      roadmapPrice: new FormControl({ value: '', disabled: true }, [
        Validators.required,
      ]),
    });
  };

  createRoadmapRequest = async () => {
    let valor;
    await this.calculatePrice().then((price) => {
      valor = price;
    });
    return new RoadmapRequest({
      roadmapName: this.roadmapCreateForm.get('roadmapName')?.value,
      roadmapDestination:
        this.roadmapCreateForm.get('roadmapDestination')?.value,
      roadmapAmtPerson: this.roadmapCreateForm.get('roadmapAmtPerson')?.value,
      roadmapPrice: valor,
      userId: this.authService.getToken(),
    });
  };

  findAllDestinations = () => {
    this.destinationService.getAllDestinations().subscribe({
      next: (destinations) => {
        this.destinations = destinations.map(
          (destination) => destination.nomeDestino,
        );
      },
      error: (error) => {
        this.messageService.sendError(error);
      },
    });
  };

  onSave = async () => {
    if (this.roadmapCreateForm.valid) {
      this.roadmapRequest = await this.createRoadmapRequest();
      console.log(this.roadmapRequest);

      this.roadmapService.createRoadmap(this.roadmapRequest).subscribe({
        next: () => {
          this.messageService.sendSucess('Registro criado com Sucesso!');
          this.redirectToRoadmapTravelPage();
        },
        error: (error) => {
          this.messageService.sendError(error);
        },
      });
    }
  };

  calculatePrice = async (): Promise<number> => {
    const nomeDestino = this.roadmapCreateForm.get('roadmapDestination')?.value;

    return new Promise<number>((resolve) => {
      this.destinationService.getAllDestinations().subscribe({
        next: (destinations: DestinationResponse[]) => {
          const destination = destinations.find(
            (dest) => dest.nomeDestino === nomeDestino,
          );

          if (destination) {
            const roadmapAmtPerson =
              this.roadmapCreateForm.get('roadmapAmtPerson')?.value;
            const calculatedPrice =
              destination.precoDestino * (1 + (roadmapAmtPerson - 1) / 4);
            resolve(calculatedPrice);
          }
        },
      });
    });
  };

  redirectToRoadmapTravelPage = () => {
    this.router.navigate(['roadmaps/travels']);
  };
}
