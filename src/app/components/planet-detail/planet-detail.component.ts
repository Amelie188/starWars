import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  id: number;
  planetDetail: Planet; //déclare une variable dans ce component car component hermétique entre eux
  constructor(private route: ActivatedRoute, private planetService: PlanetService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')); //permet de récupérer le paramètre de l'URL
    this.planetDetail = this.planetService.getOnePlanetById(this.id);// stock dans la variable (planet), la planète avec l'id récupéré et stocké dans la variable id (juste au dessus), des planètes présnetes dans le service planète qui a été appelé.
  }

}
