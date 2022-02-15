import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  constructor(private http: HttpClient) { }
  checkLike(access_token: any) {

    return this.http.get("https://graph.facebook.com/1636997160002431/likes/113941881202737&access_token=" + access_token)
  }
}
