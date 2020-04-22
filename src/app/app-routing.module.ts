import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { PersonComponent } from './person/person.component';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { ProjectComponent } from './project/project.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'allTeams', component:  AllTeamsComponent},
  { path: 'Team/:id', component:  TeamComponent},
  { path: 'Project/:id', component: ProjectComponent },
  { path: 'allProjects', component: AllProjectsComponent },
  { path: 'MobilityApps', component: HomeComponent },
  { path: 'Person/:id', component: PersonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
