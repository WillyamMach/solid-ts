import { Funcionario } from "./interfaces/Funcionario.interface";
import { FuncionarioEfetivo } from "./FuncionarioEfetivo";
import { FuncionarioVoluntario } from "./FuncionarioVoluntario";

const funcionarioEfetivo = new FuncionarioEfetivo("João", 40, 2400);
const funcionarioVoluntario = new FuncionarioVoluntario("Enzo", 20, funcionarioEfetivo);

//Efetivo
console.log("nome:", funcionarioEfetivo.nome);
console.log("salário bruto:", funcionarioEfetivo.salario);
console.log("salário líquido:", funcionarioEfetivo.calculaSalarioLiquido());
console.log("salário com PL:", funcionarioEfetivo.calculaParticipacaoDeLucros(2.5), "\n");

//Voluntário
console.log("nome:", funcionarioVoluntario.nome);
console.log("Relatorio:", funcionarioVoluntario.escreveRelatorio());