import Cliente from "../entities/Cliente";
import InMemoryRepository from "../repositories/InMemoryRepository";
import IClientRepository from "../repositories/interfaces/InClienteRepository";

export default class ClienteController {
    constructor(private repository: IClientRepository) {
    }

    adicionaCliente(cliente: Cliente) {
        this.repository.adicionaCliente(cliente);
    }
    listaClientes() {
        return this.repository.listaClientes();
    }
}