import { Component, OnInit } from '@angular/core';
import { Vaisseau } from 'src/app/models/vaisseau';
import { ActivatedRoute, Router } from '@angular/router';
import { VaisseauService } from 'src/app/services/vaisseau.service';

@Component({
  selector: 'app-edit-vaisseau',
  templateUrl: './edit-vaisseau.component.html',
  styleUrls: ['./edit-vaisseau.component.css']
})
export class EditVaisseauComponent implements OnInit {

  vaisseau: Vaisseau;

  constructor(private ActivatedRoute : ActivatedRoute, private VaisseauService : VaisseauService, private router : Router) { }

  ngOnInit(): void {
    const id = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id')); 
    this.vaisseau = this.VaisseauService.getOnePlanetById(id);
  }

  editVaisseau () { 
    this.VaisseauService.edit(this.vaisseau);
    this.router.navigate(['/vaisseau'])
  }
}
