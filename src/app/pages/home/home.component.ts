import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mostrar: boolean;

  public numero$: Observable<number> = this.dataService.numero$;

  constructor(private dataService: DataService) { }

  ngOnInit() {}

  cambiarNombre() {
    console.log('se cambio el nombre...');
    this.dataService.nombre$.emit('Ing. Javier Maca!!!');
    this.mostrar = true;
  }

  segundoCambio() {
    this.dataService.nombre$.emit('Edinson Muñoz');
  }


  cambiarNum() {
    this.dataService.numero$.emit(2000);
    // this.dataService.numero$.subscribe (num => this.numero = num);
  }

  cambiarNumN() {
    this.dataService.numero$.emit(5000);
    // this.dataService.numero$.subscribe (num => this.numero = num);
  }



}
