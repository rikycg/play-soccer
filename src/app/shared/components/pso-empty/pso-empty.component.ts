import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pso-empty',
  templateUrl: './pso-empty.component.html',
  styleUrls: ['./pso-empty.component.scss'],
})
export class PsoEmptyComponent implements OnInit {

  @Input() message = 'Sorry, there isn\'t information in this section';

  constructor() {}
  ngOnInit() {}

}
