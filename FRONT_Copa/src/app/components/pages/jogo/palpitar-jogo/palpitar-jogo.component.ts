import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Jogo } from "src/app/models/jogo.model";

@Component({
  selector: "app-palpitar-jogo",
  templateUrl: "./palpitar-jogo.component.html",
  styleUrls: ["./palpitar-jogo.component.css"],
})
export class PalpitarJogoComponent implements OnInit {
  jogoId!: number;
  placarA!: number;
  placarB!: number;
  selecaoAId!: number;
  selecaoBId!: number;

  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.http.get<Jogo>("https://localhost:5001/api/selecao/listar")
    //Executar a requisição
    .subscribe({
      next: (jogo) => {
        this.jogoId = jogo.id!;
        this.selecaoAId = jogo.selecaoAId!;
        this.selecaoBId = jogo.selecaoBId!;
      }
    })
  }

  alterar(): void {
    let jogo : Jogo = {
      id: this.jogoId,
      selecaoAId : this.selecaoAId,
      selecaoBId : this.selecaoBId,
      placarA: this.placarA,
      placarB: this.placarB
    }
    this.http.patch<Jogo>("https://localhost:5001/api/jogo/alterar", jogo)
    .subscribe({
      next: (jogo) => {
        console.log(jogo);
        this.router.navigate(["pages/jogo/listar"]);
      },

    });

  }
}
