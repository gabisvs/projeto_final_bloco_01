import { Produto } from "./Produto";

export class Manga extends Produto{
    
    private _genero: string;

	constructor(id: number, nome: string, tipo: number, preco: number, genero: string) {
        super(id, nome, tipo, preco);
		this._genero = genero;
	}

	public get generico(): string {
		return this._genero;
	}

	public set generico(value: string) {
		this._genero = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nGênero: ${this._genero}`);
    }
}