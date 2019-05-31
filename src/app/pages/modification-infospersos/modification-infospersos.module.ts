import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModificationInfospersosPage } from './modification-infospersos.page';

const routes: Routes = [
  {
    path: '',
    component: ModificationInfospersosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModificationInfospersosPage]
})
export class ModificationInfospersosPageModule {}
