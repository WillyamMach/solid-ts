import { PagamentoCheque } from "./PagamentoCheque";
import { PagamentoDinheiro } from "./PagamentoDinheiro";
import { PagamentoPorPix } from "./PagamentoTransferencia";

const pagamentoCheque = new PagamentoCheque(100);
pagamentoCheque.pagar();

const pagamentoDinheiro = new PagamentoDinheiro(200);
pagamentoDinheiro.pagar();

const pagamentoPix = new PagamentoPorPix(300);
pagamentoPix.pagar();