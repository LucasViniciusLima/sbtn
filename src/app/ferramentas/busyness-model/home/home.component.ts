import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itens = new Array<any>(9);
  
  constructor() { 
    for(let i=0; i<this.itens.length; i++){
      this.itens[i] = new Array<string>();
    }
  }

  ngOnInit(): void {
  }

  adicionarTexto(input: any, id){
    if(input.value.length == 0 || input.value == ' ') return;
    this.itens[id].push(input.value);
    input.value = '';    
  }

}
