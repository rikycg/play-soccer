import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pso-item',
  templateUrl: './pso-item.component.html',
  styleUrls: ['./pso-item.component.scss'],
})
export class PsoItemComponent implements OnInit {

  @Input() image: string;
  @Input() name: string;

  constructor() {}
  ngOnInit() {}

}
