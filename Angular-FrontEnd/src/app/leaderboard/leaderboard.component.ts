import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service'
import { Response } from '@angular/http';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  //this instance variable stores the array of persons/contributors
  persons :any=[];

  constructor(private serverService:ServerService) {
    //this will run when the leaderboard component loads
    this.onGetLeaderboard();
  }
  
  //This method will execute the get request to get the leader board from the node backend
  onGetLeaderboard(){
    this.serverService.getLeaderBoard().subscribe(
      (data :any)=>{
        this.updateUiForLeaderBoard(data)
        console.log("Data Recieved");
        console.log(data);
      },
      (error)=>console.log(error)
    );
  }
 
  //This method will update the leaderboard UI
  updateUiForLeaderBoard(data :any){
    this.persons =data.leaderboard
  }

  ngOnInit() {
  }

}
