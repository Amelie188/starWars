import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import {Planet} from '../../models/planet';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  toutePlanet: Planet[]; //il s'agit d'un attribut qui contiendra un tableau de planète. Il n'est à ce moment pas encore initialisé. Cette attribut est vide (undefined) mais ne pourra contenir qu'un tableaude planète.

    
  constructor(private PlanetService: PlanetService, private toastr: ToastrService ) { } //sert à injecter mon service

  ngOnInit(): void {
    this.toutePlanet = this.PlanetService.getAllPlanets(); //stockera dans mon "toutePlanet", toutes les planètes car c'est ce que fais la fonction.
   }
  deletePlanet(planet: Planet) {   //=> correspond à quelle planète, planet:
    // console.log(planet);
    this.toutePlanet = this.PlanetService.deletePlanet(planet); //supprime dans ma variable (toutePlanet) qui est un tableau, la planète passé en paramètre (planet) supprimé dans le service planete??? cmt récupère le paramètre ici (planet)?
    this.toastr.success('Suppression faite!', 'OK');
  }
}
