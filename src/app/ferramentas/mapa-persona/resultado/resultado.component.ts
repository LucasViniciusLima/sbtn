import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  resultado: string[] = new Array;
  avatar: string;

  constructor(private route: Router) {
    const nav = this.route.getCurrentNavigation();

    if(nav.extras.state != undefined){
      this.resultado = nav.extras.state.resultado;
      this.avatar = nav.extras.state.avatar;
    } else this.route.navigateByUrl("/personamap");
  }

  ngOnInit(): void {
  }

  imprimir(){
    window.print();
  }

}
