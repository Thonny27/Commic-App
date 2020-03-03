import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    this.router.navigate(['/buscador',termino]);
  }

  // buscarHeroe2(termino:string){
  //   this.heroesService.buscarHeroe(termino);
  // }

}
