import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient, HttpParams} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NavController, NavParams} from '@ionic/angular';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

    donnees: Observable<any>;
    emailInput;
    mdpInput;
    civilite = 'mr';
    nomInput;
    prenomInput;
    telInput;

    CmdpInput;


    constructor(public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http) {
    }

  ngOnInit() {
  }


  inscription() {

      // Initialize Params Object
      let params = new HttpParams();

      // Begin assigning parameters
      params = params.append('login', this.emailInput);
      params = params.append('pwd', this.mdpInput);
      params = params.append('civilite', this.civilite);
      params = params.append('nom', this.nomInput);
      params = params.append('prenom', this.prenomInput);
      params = params.append('tel', this.telInput);

      this.donnees = this.httpClient.put('http://localhost:80/API_QUIDE/api/utilisateur/inscription.php', { params: params });

  }

}
