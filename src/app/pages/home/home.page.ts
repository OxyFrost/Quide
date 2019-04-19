import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

donnees: Observable<any>;

constructor(public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http) { }


  affichageAccueil(){
    this.donnees = this.httpClient.get('http://localhost:80/API_QUIDE/api/categorie/read.php');
    this.donnees.subscribe(data => {
      console.log('my data: ', data); //Affiche dans la consonle le deuxieme tableau renvoyé par l'API
    })
  }

  ngOnInit() {
  }

}
