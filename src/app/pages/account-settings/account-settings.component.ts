import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(private _settings: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiaTema(tema: string, link: any) {

    this.aplicaCheck(link);

    this._settings.aplicarTema(tema);

  }

  aplicaCheck(link: any) {

    const selectores: any = document.getElementsByClassName('selector');

    for (const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {

    const selectores: any = document.getElementsByClassName('selector');

    const tema = this._settings.ajustes.tema;

    for (const ref of selectores) {

      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;

      }


    }

  }

}
