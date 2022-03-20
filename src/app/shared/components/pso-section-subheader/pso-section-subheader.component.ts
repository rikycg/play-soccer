import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pso-section-subheader',
  templateUrl: './pso-section-subheader.component.html',
  styleUrls: ['./pso-section-subheader.component.scss'],
})
export class PsoSectionSubheaderComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit() {}

}
