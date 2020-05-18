import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { PersonComponent } from './person/person.component';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { ProjectComponent } from './project/project.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'allTeams', component: AllTeamsComponent },
  { path: 'Team/:id', component: TeamComponent },
  { path: 'Project/:id', component: ProjectComponent },
  { path: 'allProjects', component: AllProjectsComponent },
  { path: 'MobilityApps', component: HomeComponent },
  { path: 'Person/:id', component: PersonComponent },
  { path: 'Search/:query', component: SearchComponent },
  { path: 'Search', component: SearchComponent },
  { path: '**', component: PageNotFoundComponent }
  

];
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};
// then just import your RouterModule with these options

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
