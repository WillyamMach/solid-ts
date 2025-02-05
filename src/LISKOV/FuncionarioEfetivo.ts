import { Funcionario } from "./interfaces/Funcionario.interface";

export class FuncionarioEfetivo implements FuncionarioEfetivo { 
    constructor(
        public nome: string,
        public cargaHoraria: number,
        public salario: number
    ) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.salario = salario;
    }
    
    trabalha(): void {
        console.log(`Me chamo ${this.nome} e eu trabalho ${this.cargaHoraria} horas por semana`);
    }

    calculaSalarioLiquido(): number {
        const TAXA_DESCONTO = 0.2;
        const desconto = this.salario * TAXA_DESCONTO;
        return this.salario - desconto;
    }
    
    calculaParticipacaoDeLucros(lucro: number): number {
        return lucro * this.salario;
    }
}