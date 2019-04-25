import { Component, OnInit, Pipe } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  myId = null;
  donnees: Observable<any>;
  tableauEtablissement;

  constructor(public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
        this.donnees = this.httpClient.get('http://localhost:80/API_QUIDE/api/etablissement/read.php');
        this.donnees.subscribe(data => {
          this.tableauEtablissement = data;
        })
        console.log(this.tableauEtablissement);
    }

}
