import { Funcionario } from "./interfaces/Funcionario.interface";
import { FuncionarioEfetivo } from "./interfaces/FuncionarioEfetivo.interface";

export class FuncionarioVoluntario implements FuncionarioVoluntario{
    constructor(
        public nome: string,
        public cargaHorariaExtensao: number,
        public orientador: FuncionarioEfetivo
    ) {
        this.nome = nome;
        this.cargaHorariaExtensao = cargaHorariaExtensao;
        this.orientador = orientador;
    }

    escreveRelatorio(): void {
        console.log(`Me chamo ${this.nome} e eu escrevo relatórios para o meu orientador ${this.orientador.nome}`);
    }

    trabalha(): void {
        console.log(`Me chamo ${this.nome} e eu pesquiso ${this.cargaHorariaExtensao} horas por semana para cumprir na minha graduação`);
    }
}