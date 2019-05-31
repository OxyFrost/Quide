import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';
import {HttpClientModule, HttpClient, HttpParams} from '@angular/common/http';

@Component({
    selector: 'app-profil',
    templateUrl: './profil.page.html',
    styleUrls: ['./profil.page.scss'],
})


export class ProfilPage implements OnInit {

    donnees: Observable<any>;
    tableauLieuInsolite: any;
    idUser;

    constructor(public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http) {
    }

    ngOnInit() {

        const data = JSON.parse(localStorage.getItem('userData'));
        if (data != null) {
            this.idUser = data[1].idUser;
        }
        let params = new HttpParams();
        // Begin assigning parameters
        params = params.append('id', this.idUser);
        this.donnees = this.httpClient.get('http://localhost:80/API_QUIDE/api/lieuinsolite/mesLieuxInsolite.php', { params: params });
        this.donnees.subscribe(data => {
            this.tableauLieuInsolite = data;
        });
    }

    backToWelcome() {
        this.router.navigate(['tabs/connexion']);
    }

    logout() {
        localStorage.clear();
        setTimeout(() => this.backToWelcome(), 1000);
    }
}
