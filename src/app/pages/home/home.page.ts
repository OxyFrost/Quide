import { Component, OnInit, Pipe } from '@angular/core';
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
tableauCategories: any;


constructor(public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http) { }

  ngOnInit() {
      this.donnees = this.httpClient.get('http://localhost/API_QUIDE/api/categorie/read.php');
      this.donnees.subscribe(data => {
        this.tableauCategories = data;
      });
  }
}
