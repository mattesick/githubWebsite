import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PersonComponent } from './person/person.component';
import { GoBackComponent } from './go-back/go-back.component';
import { ProjectComponent } from './project/project.component';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    HomeComponent,
    NavBarComponent,
    PersonComponent,
    GoBackComponent,
    ProjectComponent,
    AllTeamsComponent,
    AllProjectsComponent,
    FooterComponent,
    SearchComponent,
    PageNotFoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPageScrollCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
