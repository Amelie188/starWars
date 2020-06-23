import { Injectable } from '@angular/core';
import {Vaisseau} from '../models/vaisseau';

@Injectable({
  providedIn: 'root'
})
export class VaisseauService {
  vehiculs = [
    new Vaisseau(1, 'Faucon millenium', 'Peugeot', true, 10),
    new Vaisseau(2, 'XWing', 'BMW', false, 2)
  ];
  constructor() { }
  getAllVehiculs(): Vaisseau[] {
    return this.vehiculs;
  }

  getOnePlanetById(id: number): Vaisseau {
    return this.vehiculs.filter(vehiculs => vehiculs.id === id) [0];
  }

  addVAisseau(toutVaisseau: Vaisseau): void {
    this.vehiculs.push(toutVaisseau);
  }

  deleteVaisseau(toutVaisseau: Vaisseau): Vaisseau[] {
    this.vehiculs = this.vehiculs.filter(vehiculToDelete => toutVaisseau !== vehiculToDelete );
    return this.vehiculs;
}

  edit(toutVaisseau: Vaisseau): Vaisseau[] {
    this.vehiculs.filter(vaisseauToUpdate => toutVaisseau === vaisseauToUpdate) [0] = toutVaisseau;
    return this.vehiculs;
}
}