import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './services/data.service';
import { Componente } from './interfaces/interfaces.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes:Observable<Componente[]>;

  constructor(
    private dateService:DataService
  ) {}

  ngOnInit() {
    this.componentes = this.dateService.getMenuOpts();
  }
}
