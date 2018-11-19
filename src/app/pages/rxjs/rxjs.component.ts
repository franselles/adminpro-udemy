import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscripcion: Subscription;

  constructor() {

    this.suscripcion = this.regresaObservable().pipe(
      retry(2)
    )
    .subscribe(
      numero => {
        console.log(numero); },
      error => console.error('Error ', error),
      () => console.log('El observable termino'));

   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((obserser: Subscriber<any>) => {

      let  contador = 0;

      const intervalo = setInterval(
        () => {
          contador += 1;

          const salida = {
            valor: contador
          };

          obserser.next(salida);

/*           if (contador === 3) {
            obserser.complete();

            clearInterval(intervalo);
          } */

/*           if (contador === 3) {
            obserser.error('Auxilio');
          } */

        }, 1000
      );

    }).pipe(
      map(resp => {
        return resp.valor;
      }),
      filter((resp, index) => {

        if ((resp % 2) === 1) {
          return true;
        } else {
          return false;
        }
      }

      )
    );
  }
}
