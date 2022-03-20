import { Component, OnInit, ViewChild } from '@angular/core';
import { PageHelper } from '../shared/helpers/page.helper';
import { RequestService } from '../shared/services/request.service';
import { Competition } from '../core/models/competition.model';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends PageHelper implements OnInit  {

  @ViewChild(IonSlides, {static: true}) ionSlides: IonSlides;

  backgrounds = [
    'url(../../../assets/home/bg1.jpg)',
    'url(../../../assets/home/bg2.jpg)',
    'url(../../../assets/home/bg3.jpg)',
    'url(../../../assets/home/bg4.jpg)'
  ];

  sliderOptions = {
    speed: 800,
    direction: 'vertical',
    autoplay: {
      disableOnInteraction: false
    },
  };

  competitions: Competition[] = [];
  year = 2022;

  constructor(private requestService: RequestService) {
    super();
  }

  ngOnInit() {
    this.ionSlides.startAutoplay();
    if(this.competitions.length === 0) {
      this.setCompetitions();
    }
  }

  async setCompetitions() {
    try {
      this.status.setLoading();
      this.competitions = await this.getCompetitions();
      this.status.setData();
    } catch(err) {
      this.status.setError();
    }
  }

  async getCompetitions(): Promise<Competition[]> {
    const competitions = await this.requestService.get(
      'competitions',
      'competitions',
      (item) => item.plan === 'TIER_ONE'
    );
    return competitions ? competitions.map(c => (new Competition(c))) : [];
  }

}
