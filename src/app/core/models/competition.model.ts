export class Competition {
  id: number;
  code: string;
  name: string;
  image: string;
  constructor(competition: any) {
    this.id = competition.id;
    this.code = competition.code;
    this.name = competition.name;
    this.image = `../../../../assets/competitions/${competition.code}.png`;
  }
}
