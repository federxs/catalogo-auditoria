import {Component} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {SmartTableService} from '../../../@core/data/smart-table.service';
import {ModalComponent} from '../../ui-features/modals/modal/modal.component';


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
  normasVevo = [];

  settings = {
    actions: false,
    columns: {
      nombre: {
        title: 'Norma',
        type: 'string',
      },
      categoria: {
        title: 'Categoria',
        type: 'string',
      },
      descripcion: {
        title: 'Descripcion',
        type: 'string',
      },
      link: {
        title: 'Link',
        type: 'string',
      },
    },
  };

  normas: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService, private modalService: NgbModal) {
    const data = this.service.getData();
    this.normas.load(data);
    this.normasVevo = data;
  }


  showLargeModal(descripcion) {
    const activeModal = this.modalService.open(ModalComponent, {size: 'lg', container: 'nb-layout'});

    activeModal.componentInstance.modalHeader = 'Large Modal';
    activeModal.componentInstance.modalContent = descripcion;
  }

}
