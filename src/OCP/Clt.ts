import { ContratoRemuneravel } from "./Funcionario";

export class Clt implements ContratoRemuneravel {
    private _ganhoPorHora: number = 24;
    private _horasTrabalhadas: number = 8;
    public  titulo: string = 'CLT';

    remuneracao(): number {
        return (this._ganhoPorHora * this._horasTrabalhadas);
    }
}