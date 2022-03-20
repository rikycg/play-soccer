import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TeamPage } from './team.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RequestService } from 'src/app/shared/services/request.service';
import { Team } from 'src/app/core/models/team.model';

const serviceResponse: Team = {
  id: 5,
  name: 'FC Bayern München',
  image: 'https://crests.football-data.org/5.svg',
  website: 'http://www.fcbayern.de',
  venue: 'Allianz Arena',
  squad: [
      {
          id: 311,
          name: 'Serge Gnabry',
          position: 'Midfielder',
          dateOfBirth: '1995-07-14T00:00:00Z',
          countryOfBirth: 'Germany',
          nationality: 'Germany',
          shirtNumber: null,
          role: 'PLAYER'
      },
      {
          id: 341,
          name: 'Manuel Neuer',
          position: 'Goalkeeper',
          dateOfBirth: '1986-03-27T00:00:00Z',
          countryOfBirth: 'Germany',
          nationality: 'Germany',
          shirtNumber: null,
          role: 'PLAYER'
      }
  ]
};

describe('TeamPage', () => {

  let requestService: RequestService;
  let component: TeamPage;
  let fixture: ComponentFixture<TeamPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamPage);
    component = fixture.componentInstance;
    requestService = fixture.debugElement.injector.get(RequestService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getTeam should set the team entity', async () => {
    const spy = spyOn(requestService, 'get').and.callFake(() => serviceResponse);
    await component.getTeam();
    expect(spy).toHaveBeenCalled();
    expect(component.team).toBeInstanceOf(Team);
  });

});
