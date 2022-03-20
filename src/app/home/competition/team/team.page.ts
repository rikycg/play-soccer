import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/core/models/team.model';
import { PageHelper } from 'src/app/shared/helpers/page.helper';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage extends PageHelper implements OnInit {

  team: Team;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute) {
    super();
  }

  get name() {
    return this.team?.name || '';
  }

  get logo() {
    return this.team?.image || '';
  }

  get website() {
    return this.team?.website || '';
  }

  ngOnInit() {
    this.getTeam();
  }

  async getTeam() {
    try {
      this.status.setLoading();
      const teamId = this.route.snapshot.params.id || null;
      const response = await this.requestService.get(`teams/${teamId}`);
      this.team = new Team(response);
      this.status.setData();
    } catch(err) {
      this.status.setError();
    }
  }

}
