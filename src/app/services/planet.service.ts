import { Injectable } from '@angular/core';
import {Planet} from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
planets = [
  new Planet(1, 'Alderran', 0, 'Auvergnate', 199),
  new Planet(2, 'Tatooine', 100, 'Savoyarde', 1000)
  ];
  constructor() { }

getAllPlanets(): Planet[] {
  return this.planets; // retourne toutes mes planètes de mon tableau
}
getOnePlanetById(id: number): Planet {
  return this.planets.filter(toutePlanet => toutePlanet.id === id) [0]; //prend toutes les planètes du tableau et fait un filtre sur la planète avec l'id passé en filtre
}
addPlanet(toutePlanet: Planet): void {
  this.planets.push(toutePlanet); // prend une variable en paramètre et va push la planet qu'on a passé en paramètre dans le tableau planets []
}
deletePlanet(toutePlanet: Planet): Planet[] {    //toutePlanet???  et pk on met Planet[]
  this.planets = this.planets.filter(planetToDelete => toutePlanet !== planetToDelete   ); //retourne un tableau de planete avec la planète différente de celle qui est passé en paramètre. ca va donner le tableau sauf celle supprimée.
  return this.planets ; // retourne mon tableau de planète
}
edit(toutePlanet: Planet): Planet[] {
 this.planets.filter(planetToUpdate => toutePlanet === planetToUpdate) [0] = toutePlanet;  //recupère la planète que je veux 
 return this.planets;
}
}

