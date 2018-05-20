import { Injectable } from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'; //this packge is for handling observables

@Injectable() 
export class ServerService{
    constructor(private http: Http){
    }
 
    //this method will get the top three contributors from a call to the node backend
    getTopThree(){
        return this.http.get("http://localhost:3000/topthree/").map(
            (response:Response) =>{
                const data =response.json();
                for(const userData of data){
                   //use to change the userdata or other use
                }
                return data;
            }
        );
    }
    //this method will get the leaderboard from a call to the node backend
    getLeaderBoard(){
        return this.http.get("http://localhost:3000/leaderboard/").map(
            (response:Response) =>{
                const data =response.json();
                for(const leaderboardData of data){
                   //use to change the userdata or other use
                }
                return data;
            }
        );
    }

    

}


/*
====================================== POST REQUET EXAMPLE=========================================
 
    storeSevers(servers :any){
        return this.http.post("https://ionic3chatapp-f5135.firebaseio.com/data.json" ,servers);
    }
===================================================================================================
*/