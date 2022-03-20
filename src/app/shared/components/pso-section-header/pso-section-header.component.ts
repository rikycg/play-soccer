import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pso-section-header',
  templateUrl: './pso-section-header.component.html',
  styleUrls: ['./pso-section-header.component.scss'],
})
export class PsoSectionHeaderComponent implements OnInit {

  @Input() routeBack: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {}

}
