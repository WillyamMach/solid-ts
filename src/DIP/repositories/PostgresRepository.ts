import Cliente from "../entities/Cliente";
import IClientRepository from "./interfaces/InClienteRepository";

export default class PostgresRepository implements IClientRepository {
    private db: Record<number, Cliente>;

    constructor() {
        this.db = {}
    }
    
    adicionaCliente(cliente: Cliente): void {
        this.add(cliente);
    }

    listaClientes(): Cliente[] {
        return this.list();
    }

    add(cliente: Cliente) {
        this.db[cliente.id] = cliente
    }

    list() {
        const clientes: Cliente[] = [];

        for (const chave in this.db) {
            if (Object.prototype.hasOwnProperty.call(this.db, chave)) {
                clientes.push(this.db[chave]);
            }
        }

        return clientes;
    }
}
