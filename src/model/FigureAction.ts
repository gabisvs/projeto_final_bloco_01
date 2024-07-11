import { Produto } from "./Produto";

export class FigureAction extends Produto{
    
    private _anime: string;

	constructor(id: number, nome: string, tipo: number, preco: number, anime: string) {
        super(id, nome, tipo, preco);
		this._anime = anime;
	}

	public get anime(): string {
		return this._anime;
	}

	public set anime(value: string) {
		this._anime = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nAnime: ${this._anime}`);
    }
}