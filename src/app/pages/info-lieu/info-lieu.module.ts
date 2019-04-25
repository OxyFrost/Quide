import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoLieuPage } from './info-lieu.page';

const routes: Routes = [
  {
    path: '',
    component: InfoLieuPage
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
    InfoLieuPage
  ],
  declarations: [InfoLieuPage]
})
export class InfoLieuPageModule {}
