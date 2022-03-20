import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pso-player',
  templateUrl: './pso-player.component.html',
  styleUrls: ['./pso-player.component.scss'],
})
export class PsoPlayerComponent implements OnInit {

  @Input() name: string;
  @Input() position: string;
  @Input() nationality: string;
  @Input() dateOfBirth: string;

  constructor() { }

  ngOnInit() {}

}
