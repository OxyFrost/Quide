import {Component, OnInit} from '@angular/core';
import {HttpClientModule, HttpClient, HttpParams} from '@angular/common/http';
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
    mdpInput;
    dataUser;
    msg;

    constructor(public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http) {
    }


    connexion() {

        // Initialize Params Object
        let params = new HttpParams();

        // Begin assigning parameters
        params = params.append('login', this.emailInput);
        params = params.append('pwd', this.mdpInput);


        this.donnees = this.httpClient.get('http://localhost/API_QUIDE/api/utilisateur/connexion.php', { params: params });
        this.donnees.subscribe(data => {
            this.dataUser = data;
            console.log(data);
        });
    }


    ngOnInit() {
    }

}
