import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { FooterComponent } from './footer/footer.component';
import { TopthreeComponent } from './topthree/topthree.component';
import { ServerService } from './server.service'
import {HttpModule} from "@angular/http";
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent} from './login/login.component'
import { LeaderboardPageComponent } from './leaderboard-page/leaderboard-page.component';
import { CommitteeComponent } from './committee/committee.component';
import { ContributePageComponent } from './contribute-page/contribute-page.component';
import { ContactComponent } from './contact/contact.component'


//defining the routes of the app
const applicationRoutes:Routes =[
  {path : '' ,component : HomePageComponent },
  {path : 'committee' ,component : CommitteeComponent },
  {path : 'login' ,component : LoginComponent},
  {path : 'leaderboard' ,component : LeaderboardPageComponent},
  {path : 'contribute' ,component : ContributePageComponent},
  {path : 'contact' ,component : ContactComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    HeaderComponent,
    LeaderboardComponent,
    FooterComponent,
    TopthreeComponent,
    LeaderboardPageComponent,
    LoginComponent,
    CommitteeComponent,
    ContributePageComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
