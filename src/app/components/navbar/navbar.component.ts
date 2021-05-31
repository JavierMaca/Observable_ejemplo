import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mensaje = 'Navbar!!!';

  constructor(private dataService: DataService) {

  }

  ngOnInit() {

      this.dataService.nombre$.subscribe( texto => {
      this.mensaje = texto;
      console.log('navbar: ', texto);

    });
  }


}
