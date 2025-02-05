import { Cargos } from "./enum/cargos";

export class CalcularSalario {
    protected salarioBase: number;
    
    constructor(salarioBase: number = 1000) {
        this.salarioBase = salarioBase;
    }

    calcular(cargo: Cargos) {
        if (cargo === Cargos.Estagiario) {
            return this.salarioBase * 1.2;
        }

        if (cargo === Cargos.Junior) {
            return this.salarioBase * 3;
        }

        if (cargo === Cargos.Pleno) {
            return this.salarioBase * 5;
        }

        if (cargo === Cargos.Senior) {
            return this.salarioBase * 7;
        }

        return 0;
    }
}