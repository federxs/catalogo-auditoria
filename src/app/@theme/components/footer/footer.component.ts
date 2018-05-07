import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Creado por <b>Federico Prado Macat</b> (2018)</span>
    <div class="socials">
      <a href="https://linkedin.com/in/federico-prado-macat/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
