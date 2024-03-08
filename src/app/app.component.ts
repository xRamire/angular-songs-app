import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-songs-app';

  constructor(private translateService: TranslateService) {
    // Configurar el idioma predeterminado
    this.translateService.setDefaultLang('es');
  }


}
