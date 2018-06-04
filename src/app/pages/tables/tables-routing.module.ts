import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TablesComponent} from './tables.component';
import {SmartTableComponent} from './smart-table/smart-table.component';
import {ModalsComponent} from './modals/modals.component';
import {ModalComponent} from '../ui-features/modals/modal/modal.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'smart-table',
    component: SmartTableComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    ModalComponent
  ],
  entryComponents: [
    ModalComponent,
  ],
})
export class TablesRoutingModule {
}

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
];
