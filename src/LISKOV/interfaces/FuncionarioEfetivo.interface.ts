import { Funcionario } from "./Funcionario.interface";

export interface FuncionarioEfetivo extends Funcionario {
    salario: number;
    calculaSalarioLiquido(): number;
    calculaParticipacaoDeLucros(lucro: number): number;
}