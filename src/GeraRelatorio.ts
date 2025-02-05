import { CalcularSalario } from "./CalculaSalario";
import Colaborador from "./Colaborador";

export class GeraRelatorio {
    constructor(
        private _coloboradores: Colaborador[],
        private SalarioService: CalcularSalario
    ) {}

    gerarEmJSON() {
        let relatorio = this._coloboradores.map((colaborador) => {
            return ({
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: this.SalarioService.calcular(colaborador.cargo),
            })
        })
        return JSON.stringify(relatorio)
    };
}