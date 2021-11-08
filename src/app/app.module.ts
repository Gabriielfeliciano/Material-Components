import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './_components/components.module';
import { TreeComponent } from './pages/tree/tree.component';
import { MaterialModules } from './modules/material.modules';
import { ButtonsComponent } from './pages/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    ButtonsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MaterialModules
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
