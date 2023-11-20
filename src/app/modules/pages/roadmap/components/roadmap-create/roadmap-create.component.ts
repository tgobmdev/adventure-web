import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../shared/services/auth.service';
import { CustomMessageService } from '../../../../../shared/services/message.service';
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
      roadmapAmtPerson: new FormControl('', [Validators.required]),
      roadmapPrice: new FormControl('', [Validators.required]),
    });
  };

  createRoadmapRequest = () => {
    return new RoadmapRequest({
      roadmapName: this.roadmapCreateForm.get('roadmapName')?.value,
      roadmapDestination:
        this.roadmapCreateForm.get('roadmapDestination')?.value,
      roadmapAmtPerson: this.roadmapCreateForm.get('roadmapAmtPerson')?.value,
      roadmapPrice: this.roadmapCreateForm.get('roadmapPrice')?.value,
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

  onSave = () => {
    if (this.roadmapCreateForm.valid) {
      this.roadmapRequest = this.createRoadmapRequest();
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

  redirectToRoadmapTravelPage = () => {
    this.router.navigate(['roadmaps/travels']);
  };
}
