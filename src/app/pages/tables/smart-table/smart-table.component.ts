import {Component} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {SmartTableService} from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {
  let
  normasVevo = [];

  settings = {
    actions: false,
    columns: {
      nombre: {
        title: 'Norma',
        type: 'string'
      },
      categoria: {
        title: 'Categoria',
        type: 'string'
      },
      descripcion: {
        title: 'Descripcion',
        type: 'string'
      },
      link: {
        title: 'Link',
        type: 'string'
      }
    },
  };

  normas: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.normas.load(data);
    this.normasVevo = data;
  }

}
