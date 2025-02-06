import Cliente from "../entities/Cliente";
import IClientRepository from "./interfaces/InClienteRepository";

export default class InMemoryRepository implements IClientRepository {
    private db: Cliente[];

    constructor() {
        this.db = [];
    }

    adicionaCliente(cliente: Cliente) {
        this.db.push(cliente);
    }
    listaClientes() {
        return this.db;
    }
}
