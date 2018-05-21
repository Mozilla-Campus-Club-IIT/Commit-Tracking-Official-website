import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service'
import { Response } from '@angular/http';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  //the name of the github organization and repo is diffined here
  ORGANIZATION_NAME:String="Mozilla-Campus-Club-IIT";
  REPO_NAME:String="Hello-World-Collection";
  //this instance variable stores the array of persons/contributors
  contributors :any =[];

  constructor(private serverService:ServerService) {

  }
  

  getTheFullLeaderboard(organizationName,repoName){
    //creating repo data JSON object to pass to the post request
    const repoData={
        "organizationName":organizationName,
        "repoName":repoName
    }
    this.serverService.getLeaderBoard(repoData).subscribe(
      (data)=>{
        this.contributors=data.leaderboard.allContributors;
        console.log(this.contributors);
        //setting leader board is available to the status (true) 
       
      },
      (error)=>console.log(error)
    );
  }
  
  ngOnInit() {
    this.getTheFullLeaderboard(this.ORGANIZATION_NAME,this.REPO_NAME);
  }

}
