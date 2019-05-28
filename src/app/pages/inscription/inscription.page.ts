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
    civilite = 'Mr';
    nomInput;
    prenomInput;
    dateInput;
    telInput;
    msg;
    CmdpInput;


    constructor(public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http) {
    }

  ngOnInit() {
  }

    inscription() {
      // tslint:disable-next-line:max-line-length
      if (this.emailInput && this.mdpInput && this.civilite && this.nomInput && this.prenomInput && this.dateInput && this.telInput && this.CmdpInput) {
          if (this.mdpInput === this.CmdpInput) {
              // Initialize Params Object
              let params = new HttpParams();
              // Begin assigning parameters
              params = params.append('email', this.emailInput);
              params = params.append('pwd', this.mdpInput);
              params = params.append('civilite', this.civilite);
              params = params.append('nom', this.nomInput);
              params = params.append('prenom', this.prenomInput);
              params = params.append('tel', this.telInput);
              params = params.append('date', this.dateInput);

<<<<<<< HEAD
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

      this.donnees = this.httpClient.put('http://localhost:8888/API_QUIDE/api/utilisateur/inscription.php', { params: params });

=======
              this.donnees = this.httpClient.put('http://localhost:80/API_QUIDE/api/utilisateur/inscription.php', {params: params});
              this.donnees.subscribe();
              this.msg = 'Inscription réussi !';
              if (this.msg === 'Inscription réussi !') {
                  setTimeout(() => {
                      this.router.navigate(['tabs/connexion']);
                  }, 3000);
              }
          } else {
              this.msg = 'Erreur Mot de passe';
          }
      } else {
          this.msg = 'Champs manquant';
      }
>>>>>>> 83bc02fb0fec2dbcce0f26bbbc125d11a71b5794
  }

}
