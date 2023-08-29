import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientInfoComponent } from '../../ui/client-info/client-info.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule,  RouterModule, ClientInfoComponent],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent {

}
