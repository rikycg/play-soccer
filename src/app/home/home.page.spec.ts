import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Competition } from '../core/models/competition.model';
import { RequestService } from '../shared/services/request.service';
import { HomePage } from './home.page';

const serviceResponse = [
  {
    id: 2029,
    name: 'Campeonato Brasileiro Série B',
    code: 'BSB',
    emblemUrl: null,
    plan: 'TIER_THREE',
    currentSeason: {
      id: 1378,
      startDate: '2022-04-09',
      endDate: '2022-11-05',
      currentMatchday: 1,
      winner: null
    },
    numberOfAvailableSeasons: 5,
    lastUpdated: '2021-05-28T09:35:43Z'
  },
  {
    id: 2013,
    name: 'Campeonato Brasileiro Série A',
    code: 'BSA',
    emblemUrl: 'https://crests.football-data.org/764.svg',
    plan: 'TIER_ONE',
    currentSeason: {
      id: 1377,
      startDate: '2022-04-10',
      endDate: '2022-11-13',
      currentMatchday: 1,
      winner: null
    },
    numberOfAvailableSeasons: 6,
    lastUpdated: '2021-07-20T18:42:17Z'
  }
];

const competitions: Competition[] = [{
  id: 2013,
  name: 'Campeonato Brasileiro Série A',
  code: 'BSA',
  image: 'https://crests.football-data.org/764.svg'
}];

describe('HomePage', () => {

  let requestService: RequestService;
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePage
      ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [
        RequestService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    requestService = fixture.debugElement.injector.get(RequestService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setCompetitions should set the competitions', async () => {
    const spy = spyOn(component, 'getCompetitions').and
      .callFake(() => Promise.resolve(competitions));
    await component.setCompetitions();
    expect(spy).toHaveBeenCalled();
    expect(component.competitions).toBeInstanceOf(Array);
  });

  it('getCompetitions should return an array', async () => {
    const spy = spyOn(requestService, 'get').and.callFake(() => serviceResponse);
    const response = await component.getCompetitions();
    expect(spy).toHaveBeenCalled();
    expect(response).toBeInstanceOf(Array);
  });

});
