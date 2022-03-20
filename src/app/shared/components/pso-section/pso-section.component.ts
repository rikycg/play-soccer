import { Component, Input, OnInit } from '@angular/core';
import { StatusUtil } from '../../utils/status.util';

@Component({
  selector: 'pso-section',
  templateUrl: './pso-section.component.html',
  styleUrls: ['./pso-section.component.scss'],
})
export class PsoSectionComponent implements OnInit {

  @Input() base = '';
  @Input() season: number = null;
  @Input() items: any[] = [];
  @Input() status: StatusUtil;
  @Input() errorMessage = '';

  constructor() { }

  get list() {
    return this.items.map(i => ({
      ...i,
      link: `${this.base}${i.id}${this.season ? '/' + this.season : ''}`
    }));
  }

  ngOnInit() {}


}
