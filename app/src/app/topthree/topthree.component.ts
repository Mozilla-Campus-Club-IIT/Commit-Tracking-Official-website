import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service'
import { Response } from '@angular/http';

@Component({
  selector: 'app-topthree',
  templateUrl: './topthree.component.html',
  styleUrls: ['./topthree.component.css']
})
export class TopthreeComponent implements OnInit {

  constructor(private serverService: ServerService) { 
    //This method  call will call the serverService.getTopThree() and get the top three when page loads
    this.onGetTopThree();
  }

//================This JS Object will save top contributors data =====================
topthree = 
{
  first: {
      name:"-",
      numcommits:0,
      profilepicurl:"-"
  },
  second: {
      name:"-",
      numcommits:0,
      profilepicurl:"-"
  },
  third: {
      name:"-",
      numcommits:0,
      profilepicurl:"-"
  }
}
//=============================================
//===========================  HANDLING REQUESTS ======================================
//This method will call the serverService.getTopThree() and get the top three
onGetTopThree(){
  this.serverService.getTopThree().subscribe(
    (data :any)=>{
      //Setting the values to the top three contributors JSON object data to data recived from get request with the below method
      this.updateUiForTopThree(data)
      console.log("Data Recieved");
      console.log(data);
    },
    (error)=>console.log(error)
  );
}

//This method will set the values to the top three contributors JSON object data to data recived from get request
updateUiForTopThree(data :any){
  //1ST PLACE PERSON
  this.topthree.first.name = data.topthree.first.name;
  this.topthree.first.numcommits=data.topthree.first.numcommits;
  this.topthree.first.profilepicurl=data.topthree.first.profilepicurl;
  //2ND PLACE PERSON
  this.topthree.second.name=data.topthree.second.name;
  this.topthree.second.numcommits=data.topthree.second.numcommits;
  this.topthree.second.profilepicurl=data.topthree.second.profilepicurl;
  //3RD PLACE PERSON
  this.topthree.third.name =data.topthree.third.name;
  this.topthree.third.numcommits=data.topthree.third.numcommits;
  this.topthree.third.profilepicurl=data.topthree.third.profilepicurl;
}
//=======================================================================================

ngOnInit() {
}

}
