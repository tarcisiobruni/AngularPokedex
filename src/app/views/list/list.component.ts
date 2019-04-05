import { PokeapiService } from './../../services/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const urlSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

interface GitHubRepo{
  incomplete_results: boolean,
  items: any[],
  total_count: number
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  nameFilter = "";
  selectedPkm = null;
  
  get pokemonList(){
    return this.pokeapi.pokemonList.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1
    });
  }

  constructor(private readonly pokeapi: PokeapiService, private http: HttpClient){

  }

  
  ngOnInit() {
    this.pokeapi.listAll();
  }

  get pkmSprite(){
    return urlSrc + this.selectedPkm.number + ".png" ;
  }
    selectPokemon(pkm){
    this.selectedPkm = pkm;
  }

}
