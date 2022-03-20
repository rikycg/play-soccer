import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TeamPageRoutingModule } from './team-routing.module';
import { TeamPage } from './team.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamPageRoutingModule,
    SharedModule
  ],
  declarations: [TeamPage]
})
export class TeamPageModule {}
