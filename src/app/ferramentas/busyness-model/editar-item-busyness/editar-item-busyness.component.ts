import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'editar-item-busyness',
  templateUrl: './editar-item-busyness.component.html',
  styleUrls: ['./editar-item-busyness.component.css']
})
export class EditarItemBusynessComponent implements OnInit {

  bloco: any = {
    estilo: '',
    titulo: 'COMO?'
  };
  
  item: any = {
    icone: '../../../assets/parceria.svg',
    titulo: 'TITULO do Item',
    descricao: 'DESCRICAO  do Item',
    subitens: ['item 00','item 01']
  };


  constructor() { }

  ngOnInit(): void {
  }

}
