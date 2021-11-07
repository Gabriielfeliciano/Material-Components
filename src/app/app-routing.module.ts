import { ButtonsComponent } from './pages/buttons/buttons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeComponent } from './pages/tree/tree.component';

const routes: Routes = [
  {
    path:'buttons',
    component: ButtonsComponent
  },
  {
    path:'tree',
    component: TreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
