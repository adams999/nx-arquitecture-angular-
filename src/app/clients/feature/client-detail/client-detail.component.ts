import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientInfoComponent } from '../../ui/client-info/client-info.component';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [CommonModule, ClientInfoComponent],
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent {

}
