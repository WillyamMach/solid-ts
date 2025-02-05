import { Clt } from './Clt';
import { Estagiario } from './Estagiario';
import { FolhaDePagamento } from './FolhaDePagamento';
import { Pj } from './Pj';

const funcionarioEstagiario = new Estagiario();
const funcionarioClt = new Clt();
const funcionarioPj = new Pj();
const folhaDePagamento = new FolhaDePagamento();

console.log(`Sou ${funcionarioEstagiario.titulo} e meu salário líquido mensal é R$ ${folhaDePagamento.calcularSalarioMensal(funcionarioEstagiario)}`)
console.log(`Sou ${funcionarioClt.titulo} e meu salário líquido mensal é R$ ${folhaDePagamento.calcularSalarioMensal(funcionarioClt)}`)
console.log(`Sou ${funcionarioPj.titulo} e meu salário líquido mensal é R$ ${folhaDePagamento.calcularSalarioMensal(funcionarioPj)}`)
