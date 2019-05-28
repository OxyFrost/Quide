import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { ProfilPage } from './profil.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilPage]
})
export class ProfilPageModule {



  donnees: Observable<any>;
  tableauCategories;
  
  
  constructor(public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http) { }
  
    ngOnInit() {
        this.donnees = this.httpClient.get('http://localhost:8888/API_QUIDE/api/categorie/read.php');
        this.donnees.subscribe(data => {
          this.tableauCategories = data;
        });
    }
  }
  
