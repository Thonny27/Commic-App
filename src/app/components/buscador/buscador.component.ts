import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroe:any = [];

  constructor(private activatedRoute:ActivatedRoute,private heroesService:HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      // console.log(params['termino']);
      this.heroe=this.heroesService.buscarHeroe(params['termino']);
      console.log(this.heroe);
    })
  }

}
