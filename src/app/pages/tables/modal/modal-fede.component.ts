import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modal-fede',
  templateUrl: './modal-fede.component.html',
})
export class ModalFedeComponent {

  modalHeader: string;
  parrafo: string;
  listaItemsIndice: string;
  certificable: boolean;

  constructor(private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }
}
