import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { FooterComponent } from './footer/footer.component';
import { TopthreeComponent } from './topthree/topthree.component';
import { ServerService } from './server.service'
import {HttpModule} from "@angular/http";
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    HeaderComponent,
    LeaderboardComponent,
    FooterComponent,
    TopthreeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
