import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes:string[] = ['Luffy', 'Zoro', 'Nami', 'Nico Robin', 'Sanji', 'Ussop', 'Tony Tony Chopper', 'Franky', 'Brook', 'Jimbe'];

  disabled:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  doReorder( event: any ){
    console.log(event);

    const itemMover = this.personajes.splice( event.detail.from, 1 )[0];
    this.personajes.splice( event.detail.to, 0, itemMover );
    event.detail.complete();
    console.log( this.personajes );
  }

  toggle(){
    this.disabled = !this.disabled;    
  }

}
