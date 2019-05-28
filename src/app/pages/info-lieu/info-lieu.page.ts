import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NavController, NavParams} from '@ionic/angular';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';
import {HttpClient , HttpParams } from '@angular/common/http';
import {observable} from 'rxjs';

@Component({
  selector: 'app-info-lieu',
  templateUrl: './info-lieu.page.html',
  styleUrls: ['./info-lieu.page.scss'],
})
export class InfoLieuPage implements OnInit {

  donnees: Observable<any>;
  myId = null;
  infoLieu;
  constructor(private activatedRoute: ActivatedRoute, public navCtrl: NavController, public httpClient: HttpClient, private router: Router, private http: Http) { }

  ngOnInit() {

    this.myId = this.activatedRoute.snapshot.paramMap.get('myid');

    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('id', this.myId);

    this.donnees = this.httpClient.get('http://localhost:80/API_QUIDE/api/lieuinsolite/read.php', { params: params });
    this.donnees.subscribe(data => {
      this.infoLieu = data;
      console.log(data);
    });
  }

}
