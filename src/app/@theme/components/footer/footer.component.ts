import {Component} from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
      <span class="created-by">Creado por <b>Federico Prado Macat</b>, <b>Martin Costamagna</b> y <b>Diogenes Carot</b> (2018)</span>
      <div class="socials">
        <a href="mailto:fpradomacat@gmail.com" class="ion ion-social-google"></a>
        <a href="mailto:mecostamagna@gmail.com" class="ion ion-social-google"></a>
        <a href="mailto:diogenescarot7@gmail.com" class="ion ion-social-google"></a>
      </div>
  `,
})
export class FooterComponent {
}
