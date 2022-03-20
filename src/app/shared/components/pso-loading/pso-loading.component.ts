import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pso-loading',
  templateUrl: './pso-loading.component.html',
  styleUrls: ['./pso-loading.component.scss'],
})
export class PsoLoadingComponent implements OnInit {

  @Input() mode = 'grid';
  @Input() items: any[];

  constructor() { }

  ngOnInit() {}

}
