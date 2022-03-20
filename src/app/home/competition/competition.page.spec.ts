import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Competition } from 'src/app/core/models/competition.model';
import { RequestService } from 'src/app/shared/services/request.service';
import { CompetitionPage } from './competition.page';

const serviceResponse = {
  competition: {
    id: 2001,
    name: 'UEFA Champions League',
    code: 'CL'
  },
  teams: [{
    id: 4,
    name: 'Borussia Dortmund',
    tla: 'BVB',
    crestUrl: 'https://crests.football-data.org/4.png',
    website: 'http://www.bvb.de',
    venue: 'Signal Iduna Park'
  }]
};

describe('CompetitionPage', () => {

  let requestService: RequestService;
  let component: CompetitionPage;
  let fixture: ComponentFixture<CompetitionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CompetitionPage);
    component = fixture.componentInstance;
    requestService = fixture.debugElement.injector.get(RequestService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getTeamsOfCompetition should set the competition info', async () => {
    const spy = spyOn(requestService, 'get').and.callFake(() => serviceResponse);
    await component.getTeamsOfCompetition();
    expect(component.teams).toBeInstanceOf(Array);
    expect(component.competition).toBeInstanceOf(Competition);
    expect(spy).toHaveBeenCalled();
  });

});
