import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})


export class ProfilPage implements OnInit {

  donnees: Observable<any>;
  tableauCategories: any;
  
  
  constructor(public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http) { }
  
    ngOnInit() {
        this.donnees = this.httpClient.get('http://localhost:8888/API_QUIDE/api/categorie/read.php');
        this.donnees.subscribe(data => {
          this.tableauCategories = data;
        });
    }
  }
