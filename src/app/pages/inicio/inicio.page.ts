import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces.interface';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:Observable<Componente[]>;

  constructor(
    private menuCtrl: MenuController,
    private dateService:DataService
  ) { }

  ngOnInit() {
    this.componentes = this.dateService.getMenuOpts();
  }

  mostrarMenu(){
    this.menuCtrl.open('first');
  }
}
