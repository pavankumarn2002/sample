import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmDataComponent } from './atm-data/atm-data.component';
import { AtmTransactionComponent } from './atm-transaction/atm-transaction.component';
import { AtmViewComponent } from './atm-view/atm-view.component';
import { AtmComponent } from './atm.component';

const routes: Routes = [{ path: '', component: AtmComponent ,children:[
  {path:'atm-data',component:AtmDataComponent},
  {path:'atm-view/:id',component:AtmViewComponent},
  {path:'atm-transaction/:id',component:AtmTransactionComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtmRoutingModule { }
