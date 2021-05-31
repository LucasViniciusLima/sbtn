import { Component, OnInit } from '@angular/core';
import { Atividade } from './atividade.model';


@Component({
  selector: 'app-adm-atividades',
  templateUrl: './adm-atividades.component.html',
  styleUrls: ['./adm-atividades.component.css']
})
export class AdmAtividadesComponent implements OnInit {


  atividadesList: any[] = new Array();
  

  constructor() { }

  ngOnInit(): void {
  }

  criarNovaAtividade(titulo: string, descricao: string, urgencia: number, importancia: number){
    var atividade = new Atividade(titulo,descricao,urgencia,importancia);
    this.atividadesList.push(atividade);
    console.log(this.atividadesList);
  }

}
