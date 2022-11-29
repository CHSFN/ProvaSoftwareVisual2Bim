import { Selecao } from "./selecao.model";

export interface Jogo {
  id?: number;
  selecaoA?: Selecao;
  selecaoB?: Selecao;
  criadoEm?: string;
  placarA?: number;
  placarB?:number;
  selecaoAId: number;
  selecaoBId: number;
}
