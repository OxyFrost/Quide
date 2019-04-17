import {Component, OnInit} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import {observable} from 'rxjs';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

    donnees: Observable<any>;
    emailInput;
    emailAPI;
    mdpInput;
    mdpAPI;
  constructor(public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http) { }

    connexion() {
        this.donnees = this.httpClient.get('http://localhost:80/api_rest/');//requete connexion a L'API dans la partie index
        this.donnees.subscribe(data => {
            console.log('my data: ', data['2 ']); //Affiche dans la consonle le deuxieme tableau renvoyé par l'API
            this.mdpAPI = data['2']['mdp']; //récupere le champ mdp du tableau
            this.emailAPI = data['2']['email'];// récupere le champ email du tableau
            //affichage console des info
            console.log(this.emailAPI);
            console.log(this.emailInput);
            console.log(this.mdpAPI);
            console.log(this.mdpInput);
            if ((this.emailInput === this.emailAPI) && (this.mdpInput === this.mdpAPI)){//condition pour se connecter
                this.router.navigateByUrl('/accueil');
            }
        });
    }
  ngOnInit() {
  }

}
