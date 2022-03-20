import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competition } from 'src/app/core/models/competition.model';
import { Team } from 'src/app/core/models/team.model';
import { PageHelper } from 'src/app/shared/helpers/page.helper';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.page.html',
  styleUrls: ['./competition.page.scss'],
})
export class CompetitionPage extends PageHelper implements OnInit {

  teams: Team[] = [];
  competition: Competition = null;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute) {
      super();
    }

  get name() {
    return this.competition?.name || '';
  }

  get logo() {
    return this.competition?.image || '';
  }

  ngOnInit() {
    this.getTeamsOfCompetition();
  }

  async getTeamsOfCompetition() {
    try {
      this.status.setLoading();
      const competitionId = this.route.snapshot.params.id || null;
      const season = this.route.snapshot.params.season || null;
      const response = await this.requestService.get(`competitions/${competitionId}/teams?season=${season}`);
      this.competition = new Competition(response.competition);
      this.teams = response.teams.map(t => new Team(t));
      this.status.setData();
    } catch(err) {
      this.status.setError();
    }
  }

}
