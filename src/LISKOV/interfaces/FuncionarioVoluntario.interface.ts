import { Funcionario } from "./Funcionario.interface";

export interface FuncionarioVoluntario extends Funcionario {
    nome: string;
    orientador: string;
    cargaHoraria: number;
    escreveRelatorio(): void;
}