import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'editar-item-busyness',
  templateUrl: './editar-item-busyness.component.html',
  styleUrls: ['./editar-item-busyness.component.css']
})
export class EditarItemBusynessComponent implements OnInit {

  bloco: any = {
    estilo: 'success',
    titulo: 'COMO?'
  };
  
  item: any = {
    icone: '../../../assets/parceria.svg',
    titulo: 'TITULO DO ITEM',
    descricao: 'DESCRICAO DO ITEM',
    subitens: ['']
  };

  formValue: string = '';
  id: number;

  constructor(private route: Router) {
    const nav = this.route.getCurrentNavigation();
    this.id = nav.extras.state.id;
    this.bloco = nav.extras.state.bloco;
    this.item = nav.extras.state.item;
   }

  ngOnInit(): void {
  }

  getFont(){
    return 'text-'+this.bloco.estilo;
  }
  getButton(){
    return 'btn btn-lg btn-'+this.bloco.estilo;
  }
  getBorder(){
    return 'card mx-md-5 border-'+this.bloco.estilo;
  }
  getIcon(){
    return this.item.icone;
  }
  addSubItem(){
    this.item.subitens.push(this.formValue);
    this.formValue = '';
  }
  backAndSave(){
    this.route.navigateByUrl('/businessmodel', {
      state: { id: this.id, subItens: this.item.subitens }
    });    
  }

}
