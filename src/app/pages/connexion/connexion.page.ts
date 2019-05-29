import {Component, OnInit} from '@angular/core';
import {HttpClientModule, HttpClient, HttpParams} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NavController, NavParams} from '@ionic/angular';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.page.html',
    styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

   /* donnees: Observable<any>;*/
    responseData: any;
    msg;
    userData = {'idUser': '', 'typeUser': '', 'email': '', 'pwd': ''};

    constructor(public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http, public authService: AuthService) {
    }


    /*connexion() {

        // Initialize Params Object
        let params = new HttpParams();
        // Begin assigning parameters
        params = params.append('login', this.emailInput);
        params = params.append('pwd', this.mdpInput);


        this.donnees = this.httpClient.get('http://localhost:80/API_QUIDE/api/utilisateur/connexion.php', { params: params });
        this.donnees.subscribe(data => {
            this.dataUser = data;
            localStorage.setItem('userData', JSON.stringify(this.dataUser));
            console.log(localStorage);
        });
    }*/

    connexion() {
        this.authService.postData(this.userData).then((result) => {
            this.responseData = result;
            localStorage.setItem('userData', JSON.stringify(this.responseData));
        }, (err) => {
            // Error log
        });
        if (localStorage != null) {
            this.router.navigate(['tabs/home']);
        }
    }


    ngOnInit() {
    }

}
