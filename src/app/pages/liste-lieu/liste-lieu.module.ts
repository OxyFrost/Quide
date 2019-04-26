import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListeLieuPage } from './liste-lieu.page';

const routes: Routes = [
  {
    path: '',
    component: ListeLieuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ListeLieuPage
  ],
  declarations: [ListeLieuPage]
})
export class ListeLieuPageModule {}
