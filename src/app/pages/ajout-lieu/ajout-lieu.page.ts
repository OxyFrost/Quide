import {Component, OnInit} from '@angular/core';
import {HttpClientModule, HttpClient, HttpParams} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NavController, NavParams} from '@ionic/angular';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';

@Component({
  selector: 'app-ajout-lieu',
  templateUrl: './ajout-lieu.page.html',
  styleUrls: ['./ajout-lieu.page.scss'],
})
export class AjoutLieuPage implements OnInit {

  donnees: Observable<any>;
  nomInput;
  categorieInput;
  adresseInput;
  codepostalInput;
  villeInput;
  paysInput;
  telephoneInput;
  descriptionInput;
  dataLieu;

  constructor(public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http) {
  }

  ajoutLieu() {

      // Initialize Params Object
      let params = new HttpParams();

      // Begin assigning parameters
      params = params.append('nom', this.nomInput);
      params = params.append('categorie', this.categorieInput);
      params = params.append('adresse', this.adresseInput);
      params = params.append('codepostal', this.codepostalInput);
      params = params.append('ville', this.villeInput);
      params = params.append('pays', this.paysInput);
      params = params.append('telephone', this.telephoneInput);
      params = params.append('description', this.descriptionInput);
          // Begin assigning parameters



      this.donnees = this.httpClient.get('http://localhost/API_QUIDE/api/lieuinsolite/ajout.php', { params: params });
      this.donnees.subscribe(data => {
          this.dataLieu = data;
          console.log(data);
      });
  }

  ngOnInit() {
  }

}
