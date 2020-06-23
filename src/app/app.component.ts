import { Component } from '@angular/core';

/* Décorateur qui permet à Angular de comprendre que l'on a affaire à un composant dans ce fichier.
On a 3 éléments:
- 
- templateUrl: sert à définir
- styleUrls: tableau de noms de fichier qui seront destinés à contenir le CSS de ce composant. Ces fichiers ne seront pas pris en compte dans un autre composant.
- AppComponent: c'est le composant principal de notre application, il embarquera tous les composants à afficher.

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'starWars';
}
