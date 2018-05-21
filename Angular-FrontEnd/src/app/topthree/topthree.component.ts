import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service'
import { Response } from '@angular/http';

@Component({
  selector: 'app-topthree',
  templateUrl: './topthree.component.html',
  styleUrls: ['./topthree.component.css']
})
export class TopthreeComponent implements OnInit {
  //the name of the github organization and repo is diffined here
   ORGANIZATION_NAME:String="Mozilla-Campus-Club-IIT";
   REPO_NAME:String="Hello-World-Collection";

   //stores the leaderboard object returned from the post request
   leaderboardObject:any;

   //to check if the leaderboardObject is loaded or not
   isAvailable:boolean =false;

  //this is the constructor of the TopthreeComponent class
  constructor(private serverService: ServerService) { 

  }

//===========================  HANDLING REQUESTS ======================================

getTheFullLeaderboard(organizationName,repoName){
  //creating repo data JSON object to pass to the post request
  const repoData={
      "organizationName":organizationName,
      "repoName":repoName
  }
  this.serverService.getLeaderBoard(repoData).subscribe(
    (data)=>{
      this.leaderboardObject=data;
      console.log(data.message);
      //setting leader board is available to the status (true) 
      this.isAvailable=true;

    },
    (error)=>console.log(error)
  );
}

//This method will set the values to the top three contributors JSON object data to data recived from get request
updateUiForTopThree(data :any){


}

//=======================================================================================

ngOnInit() {
    //getting the leaderboard object
    this.getTheFullLeaderboard(this.ORGANIZATION_NAME,this.REPO_NAME);
}

}
