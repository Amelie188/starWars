import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent implements OnInit {

  planet: Planet; 

  constructor(private ActivatedRoute: ActivatedRoute, private PlanetService : PlanetService, private router: Router) { }

  ngOnInit(): void {
    const id = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id'));   //permet de récupérer l'élément ID de l'URL; 
    this.planet = this.PlanetService.getOnePlanetById(id); //récupère les infos de la planète via le service planète, de la planète passé en ID, et on stock dans la variable
    // console.log(this.planet);
  }
  editPlanet() {
  this.PlanetService.edit(this.planet); //on envoi au service planete,les infos a mettre a jour
  this.router.navigate(['/planet']) //redirige l'utilisateur vers le /planet
  }
}
