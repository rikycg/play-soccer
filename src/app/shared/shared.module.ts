import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PsoLoadingComponent } from './components/pso-loading/pso-loading.component';
import { IonicModule } from '@ionic/angular';
import { PsoItemComponent } from './components/pso-item/pso-item.component';
import { PsoSectionComponent } from './components/pso-section/pso-section.component';
import { RouterModule } from '@angular/router';
import { PsoSectionHeaderComponent } from './components/pso-section-header/pso-section-header.component';
import { PsoSectionSubheaderComponent } from './components/pso-section-subheader/pso-section-subheader.component';
import { PsoPlayerComponent } from './components/pso-player/pso-player.component';
import { PsoEmptyComponent } from './components/pso-empty/pso-empty.component';

@NgModule({
  declarations: [
    PsoItemComponent,
    PsoLoadingComponent,
    PsoSectionComponent,
    PsoSectionHeaderComponent,
    PsoSectionSubheaderComponent,
    PsoPlayerComponent,
    PsoEmptyComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    PsoItemComponent,
    PsoLoadingComponent,
    PsoSectionComponent,
    PsoSectionHeaderComponent,
    PsoSectionSubheaderComponent,
    PsoPlayerComponent,
    PsoEmptyComponent
  ]
})
export class SharedModule { }
