import { PainelComponent } from './painel/painel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent,
    PainelComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [
    PainelComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }