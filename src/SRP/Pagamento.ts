import { CalcularSalario } from "./CalculaSalario";
import Colaborador from "./Colaborador";

export class Pagamento {
    constructor(private SalarioService: CalcularSalario) { }

    pagar(colaborador: Colaborador) {
        const salarioColaborador = this.SalarioService.calcular(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
}