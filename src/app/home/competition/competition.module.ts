import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompetitionPageRoutingModule } from './competition-routing.module';
import { CompetitionPage } from './competition.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetitionPageRoutingModule,
    SharedModule
  ],
  declarations: [CompetitionPage]
})
export class CompetitionPageModule {}
