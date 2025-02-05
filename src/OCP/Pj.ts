import { ContratoRemuneravel } from "./Funcionario";

export class Pj implements ContratoRemuneravel {
    private _ganhoPorHora: number = 32;
    private _horasTrabalhadas: number = 8;
    titulo: string = 'PJ';

    remuneracao(): number {
        return (this._ganhoPorHora * this._horasTrabalhadas);
    }
}
