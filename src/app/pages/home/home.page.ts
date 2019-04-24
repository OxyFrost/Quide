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
tableauCategories;

/* EXEMPLE D'UN OBJET JSON EN ARRAY
jsonObj = {
    '1' : [ {"nomCat" : "title1" , "idCat" : "desc1" }],
    '2' : [ {"nomCat" : "title2" , "idCat" : "desc2" }],
    '3' : [ {"nomCat" : "title3" , "idCat" : "desc3" }],
    '4' : [ {"nomCat" : "title4" , "idCat" : "desc4" }],
    '5' : [ {"nomCat" : "title5" , "idCat" : "desc5" }]
}*/

idCategorieAPI;
ObjectToArray;
nomCategorieAPI;

constructor(public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http) { }

  ngOnInit() {
      this.donnees = this.httpClient.get('http://localhost:80/RESTful_API/api/categorie/read.php');
      this.donnees.subscribe(data => {
        this.tableauCategories = data;
      })
  }

}
