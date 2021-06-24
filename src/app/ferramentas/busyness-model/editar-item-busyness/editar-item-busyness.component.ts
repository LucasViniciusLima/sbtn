import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/store.service';

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
  email: string = '';

  constructor(private route: Router, private store: StoreService) {
    
  }

  ngOnInit(): void {
  }

  getFont() {
    return 'text-' + this.bloco.estilo;
  }
  getButton() {
    return 'btn btn-lg btn-' + this.bloco.estilo;
  }
  getBorder() {
    return 'card mx-md-5 border-' + this.bloco.estilo;
  }
  getIcon() {
    return this.item.icone;
  }
  addSubItem() {
    this.item.subitens.push(this.formValue);
    this.formValue = '';
  }
  removeSubItem(id: number){
    this.item.subitens.splice(id,1);
  }
  backAndSave() {
    //this.store.addSubItemBusinessModel(this.item.subitens, this.email, this.id);
    this.route.navigateByUrl('/businessmodel', { state: { email: this.email} });
  }


}
