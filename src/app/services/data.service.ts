import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Componente } from '../interfaces/interfaces.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbumes(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOpts():Observable<Componente[]>{
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }  

  getHeroes():Observable<Componente[]>{
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
               .pipe(
                 delay(1500)
               );
  } 

}
