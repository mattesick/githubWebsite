import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { PersonComponent } from './person/person.component'
import { AllTeamsComponent } from './all-teams/all-teams.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'allTeams', component:  AllTeamsComponent},
  { path: 'Team/:id', component:  TeamComponent},
  { path: 'Projects/:id', component: HomeComponent },
  { path: 'MobilityApps', component: HomeComponent },
  { path: 'Person/:id', component: PersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
