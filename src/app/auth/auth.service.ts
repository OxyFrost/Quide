import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpParams } from '@angular/common/http';


@Injectable()
export class AuthService {

    email;
    pwd;

    constructor(public http: Http) {
        console.log('Hello AuthService Provider');
    }

    postData(credentials) {
        return new Promise((resolve, reject) => {
             this.email = credentials.email;
             this.pwd = credentials.pwd;
            let params = new HttpParams();
            params = params.append('login', this.email);
            params = params.append('pwd', this.pwd);
            this.http.get('http://localhost:80/API_QUIDE/api/utilisateur/connexion.php?login=' + this.email + '&pwd=' + this.pwd)
                .subscribe(res => {

                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

    }

}
