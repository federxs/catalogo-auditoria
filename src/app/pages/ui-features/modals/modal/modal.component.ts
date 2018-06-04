import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modal',
  template: `
    <div class="modal-header">
      <span>{{ modalHeader }}</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>
        {{parrafo}}
      </p>
      <ul>
        <li *ngFor="let itemIndice of listaItemsIndice">
          {{ itemIndice }}
        </li>
      </ul>
    </div>
    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="closeModal()">Save changes</button>
    </div>
  `,
})
export class ModalComponent {

  modalHeader: string;
  parrafo: string;
  listaItemsIndice: string;

  constructor(private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }
}
