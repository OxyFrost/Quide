import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-modification-lieu',
  templateUrl: './modification-lieu.page.html',
  styleUrls: ['./modification-lieu.page.scss'],
})
export class ModificationLieuPage {

    constructor(public actionSheetController: ActionSheetController) {}

    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Options',

        buttons: [{
          text: 'Supprimer la photo',
          role: 'destructive',
          icon: '',
          handler: () => {
            console.log('Delete clicked');
          }

        }, {
          text: 'Modifier la photo',
          icon: '',
          handler: () => {
            console.log('Edit clicked');
          }

        }, {
          text: 'Annuler',
          icon: '',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
    }

}
