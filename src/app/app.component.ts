import { Component } from '@angular/core';
import { Show } from './Model/Show';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngstyle';

  shows: Show[] = [
    {
      name: 'Stranger Things',
      service: 'Netflix',
    },
    {
      name: 'The Mandalorian',
      service: 'Disneyplus',
    },
    {
      name: 'Game of Thrones',
      service: 'HBOMax',
    },
    {
      name: 'Amazon Prime',
      service: 'Fleabag',
    }
  ];

}
