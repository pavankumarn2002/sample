import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmRoutingModule } from './atm-routing.module';
import { AtmComponent } from './atm.component';
import { AtmDataComponent } from './atm-data/atm-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtmViewComponent } from './atm-view/atm-view.component';
import { AtmTransactionComponent } from './atm-transaction/atm-transaction.component';
@NgModule({
  declarations: [
    AtmComponent,
    AtmDataComponent,
    AtmViewComponent,
    AtmTransactionComponent
  ],
  imports: [
    CommonModule,
    AtmRoutingModule, FormsModule, ReactiveFormsModule
  ],
  // providers: [AtmInnerService]
})
export class AtmModule { }
