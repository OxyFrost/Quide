import { Component } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

    userPostData = {'idUser': ''};

    constructor( public authService: AuthService, private router: Router) {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (data != null) {
            this.userPostData.idUser = data[1].idUser;
        }
        console.log(this.userPostData.idUser);
    }

}

