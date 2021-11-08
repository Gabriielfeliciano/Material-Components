import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { MaterialModules } from '../modules/material.modules';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MaterialModules
  ],
  exports: [
    MenuComponent
  ]
})
export class ComponentsModule { }