import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'busyness-model',
  templateUrl: './busyness-model.component.html',
  styleUrls: ['./busyness-model.component.css'],
  animations: [  ]
})
export class BusynessModelComponent implements OnInit {

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
