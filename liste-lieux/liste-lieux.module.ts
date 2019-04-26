import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListeLieuxPage } from './liste-lieux.page';

const routes: Routes = [
  {
    path: '',
    component: ListeLieuxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListeLieuxPage]
})
export class ListeLieuxPageModule {}
