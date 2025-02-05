import { ContratoRemuneravel } from "./Funcionario";

export class Estagiario implements ContratoRemuneravel {
    private _ganhoPorHora: number = 14;
    private _horasTrabalhadas: number = 4;
    public titulo: string = 'Estagiario';

    remuneracao(): number {
        return (this._ganhoPorHora * this._horasTrabalhadas);
    }
}