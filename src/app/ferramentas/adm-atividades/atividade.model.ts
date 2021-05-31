export class Atividade{
    titulo: string;
    descricao: string;
    urgencia: number;
    importancia: number;

    constructor(titulo: string, descricao: string, urgencia: number, importancia: number){
        this.titulo = titulo;
        this.descricao = descricao;
        this.urgencia = urgencia;
        this.importancia = importancia;
    }

    
}