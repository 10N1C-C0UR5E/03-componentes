import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
// Components
import { HeaderComponent } from './header/header.component';
import { PopoverInfoComponent } from './popover-info/popover-info.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    PopoverInfoComponent
  ]
})
export class ComponentsModule { }
