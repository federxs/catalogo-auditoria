import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {TablesComponent} from './tables.component';
import {SmartTableComponent} from './smart-table/smart-table.component';
import {ModalComponent} from '../ui-features/modals/modal/modal.component';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'smart-table',
    component: SmartTableComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgxPaginationModule],
  exports: [RouterModule,
    NgxPaginationModule],
  declarations: [
    ModalComponent,
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
