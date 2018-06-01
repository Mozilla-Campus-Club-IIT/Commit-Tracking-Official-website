import { Injectable } from "@angular/core";
import {Http, Response,Headers} from "@angular/http";
import 'rxjs/Rx'; //this packge is for handling observables

@Injectable() 
export class ServerService{
    constructor(private http: Http){
    }
    //this method will get the full leaderboard from a call to the node backend
    getLeaderBoard(repoData){
        let headers= new Headers();
        headers.append('content-Type' ,'application/json');

        //https://mozilla-comit-tracker.herokuapp.com
        //http://localhost:3000
        return this.http.post("https://mozilla-comit-tracker.herokuapp.com/leaderboard", repoData ,{ headers : headers}).map(res=>res.json());
    }
}


