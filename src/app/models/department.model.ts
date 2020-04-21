import { Team } from './team.model';

export class Department {
    initTeams: Function
    name: string;
    desc: string;
    id: string;
    teams: Team[];
    constructor({name, desc, id, teams}:any) {
      this.name = name;
      this.desc = desc;
      this.id = id;
      this.initTeams = () => {
        this.teams = [];
        if(teams){
          teams.forEach(team => {
            this.teams.push(new Team(team));
          });
        }
      }
      this.initTeams();
    }
  
    fullName() {
      return this.name;
    }
}
