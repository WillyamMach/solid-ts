import { ContratoRemuneravel } from "./Funcionario";

export class FolhaDePagamento  {
    private _diasTrabalhados = 20;

    calcularSalarioMensal(funcionario: ContratoRemuneravel): number {
        return funcionario.remuneracao() * this._diasTrabalhados;
    }
}