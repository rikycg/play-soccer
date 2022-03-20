export class Team {
  id: number;
  name: string;
  image: string;
  squad: any[];
  website: string;
  venue: string;
  constructor(team: any) {
    this.id = team.id;
    this.name = team.name;
    this.image = team.crestUrl || '../../../assets/team/no-logo.jpg';
    this.website = team.website;
    this.venue = team.venue;
    this.squad = team.squad || [];
  }
}
