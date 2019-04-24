import {Component, OnInit} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NavController, NavParams} from '@ionic/angular';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';

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

    constructor(public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http) {
    }


    connexion() {
        this.donnees = this.httpClient.get('http://localhost:80/API_QUIDE/api/utilisateur/read.php');
        this.donnees.subscribe(data => {
            console.log('my data: ', data); //Affiche dans la consonle le deuxieme tableau renvoyé par l'API
        });
    }


    ngOnInit() {
    }

}
