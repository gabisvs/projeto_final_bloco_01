import { Produto } from "../src/model/Produto";

export interface ProdutoRepository{

 // Metodos do Crud 


    procurarPorId(id: number): void;
    listarTodas(): void; 
    cadastrar(produto: Produto): void; 
    atualizar(produto: Produto): void; 
    deletar(id: number): void; 



}