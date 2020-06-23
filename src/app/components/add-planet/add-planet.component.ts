import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from 'src/app/services/planet.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {

  planet= new Planet(); //on créer une nouvelle instance, car on veut créer une nouvelle planète

  constructor( private PlanetService: PlanetService, private router: Router, private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

submitPlanet(): void {
  this.PlanetService.addPlanet(this.planet); //appelle le service planète , et lui ajoute la nouvelle planète qui sera stocké dans la variable ligne 15
  this.router.navigate(['/planet']) //redirige l'utilisateur vers le /planet
  this.toastr.success('Good!', 'Have fun!');

}


}
