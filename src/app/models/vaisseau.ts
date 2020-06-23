export class Vaisseau {
    id: number;
    nom: string;
    modele: string;
    lightSpeed: boolean;
    nbPassenger: number;
    
    constructor(id: number = null, nom: string = null, modele: string = null, lightSpeed: boolean = null, nbPassenger: number = null) {
      this.id = id;
      this.nom = nom;
      this.modele = modele;
      this.lightSpeed = lightSpeed;
      this.nbPassenger = nbPassenger;
    }
  }
  