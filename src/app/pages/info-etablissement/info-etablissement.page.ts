import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NavController, NavParams} from '@ionic/angular';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';
import {HttpClient , HttpParams } from '@angular/common/http';
import {observable} from 'rxjs';

@Component({
  selector: 'app-info-etablissement',
  templateUrl: './info-etablissement.page.html',
  styleUrls: ['./info-etablissement.page.scss'],
})
export class InfoEtablissementPage implements OnInit {

    donnees: Observable<any>;
    myId = null;
    infoEtablissement;
    constructor(private activatedRoute: ActivatedRoute, public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http) { }

    ngOnInit() {

      this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
      // Initialize Params Object
      let params = new HttpParams();

      // Begin assigning parameters
      params = params.append('id', this.myId);


      this.donnees = this.httpClient.get('http://localhost:80/API_QUIDE/api/etablissement/read.php',{ params: params });
      this.donnees.subscribe(data => {
        this.infoEtablissement = data;
        console.log(data);
      });
    }

}
