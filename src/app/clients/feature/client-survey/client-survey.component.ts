import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAppoinmentComponent } from '../../ui/client-appoinment/client-appoinment.component';

@Component({
  selector: 'app-client-survey',
  standalone: true,
  imports: [CommonModule, ClientAppoinmentComponent],
  templateUrl: './client-survey.component.html',
  styleUrls: ['./client-survey.component.scss']
})
export class ClientSurveyComponent {

}
