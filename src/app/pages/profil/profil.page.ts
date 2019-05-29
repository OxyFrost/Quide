import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(public navCtrl: NavController, public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

    backToWelcome(){
      this.router.navigate(['tabs/connexion']);
    }

    logout(){
        localStorage.clear();
        setTimeout(() => this.backToWelcome(), 1000);
    }

}
