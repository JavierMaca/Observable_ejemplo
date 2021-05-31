import { Component, OnInit, OnDestroy } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { element } from 'protractor';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnDestroy {

  mensaje = 'Nombre hijo!!!';
  numero: number;
  nombreSubscription: Subscription; // para guardar la subscripcion en una variable para hacer el unsubscribe

  contadorClick = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.nombreSubscription =
    this.dataService.nombre$.subscribe (texto => {
    this.mensaje = texto;
    console.log('hijo: ', texto);
    });

    this.dataService.numero$.subscribe( num => {
      this.numero = num;
    });

  }

  ngOnDestroy() {

      this.nombreSubscription.unsubscribe();
      console.log('unsubscribe, ngOnDestroy hijo');

  }

  cambio() {

    if (this.contadorClick > 0) {
      return;
    }

    this.dataService.nombre$.emit('ANA MUÑOZ!!!');
    this.dataService.numero$.emit(1994);
    console.log('se cambio el nombre y el numero desde el componente hijo!');
    this.contadorClick += 1;
    console.log('numero: ' + this.contadorClick);
    }

} // fin clase


