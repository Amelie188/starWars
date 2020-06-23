import { Component, OnInit } from '@angular/core';
import {VaisseauService} from '../../services/vaisseau.service';
import {Vaisseau} from '../../models/vaisseau';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-vaisseau',
  templateUrl: './vaisseau.component.html',
  styleUrls: ['./vaisseau.component.css']
})
export class VaisseauComponent implements OnInit {

toutVaisseau: Vaisseau[];

  constructor(private vaisseauService: VaisseauService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.toutVaisseau = this.vaisseauService.getAllVehiculs();
  }

  deleteVaisseau (vaisseau: Vaisseau) {
  this.toutVaisseau = this.vaisseauService.deleteVaisseau(vaisseau);
  this.toastr.success('Suppression faite!', 'OK');
}




}