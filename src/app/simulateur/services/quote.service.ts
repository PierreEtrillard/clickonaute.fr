import { Injectable } from '@angular/core';
import { prestation } from '../quote.model';

@Injectable()
export class QuoteService {
  prestations!: prestation[];
  baseSite: number = 800;
  baseEcom: number = 1150;
  baseAppli: number = 1300;
  hebCost: number = 80;
  maquetteCost: number = 220;
  fontCost: number = 75;
  logoCost: number = 300;
  payFeatureCost: number = 300;
  mapCost: number = 120;
  cookiesCost: number = 320;
  accountCost: number = 520;
  totalCost!:number;
  quoteBuilder(formVal: any): prestation[] {
    this.totalCost = 0;
    this.prestations = [];// remise à zéro du tableau pour eviter une aglomerations des prestations précédemment éditées.
   switch (formVal.scale.type) {
        case 'vitrine':
          this.prestations.push({
            description: `création d'un site internet de ${formVal.scale.pages} pages`,
            price: this.baseSite+(this.baseSite*formVal.scale.pages / 100),          });
          
          break;
        case 'e-commerce':
          this.prestations.push({
            description: `création d'un site internet de e-commerce de ${formVal.scale.pages} pages`,
            price: this.baseEcom+(this.baseEcom*formVal.scale.pages / 100),          });
          break;
        case 'appli':
          this.prestations.push({
            description: `création d'une application web pwa`,
            price: this.baseAppli+(this.baseAppli*formVal.scale.pages / 100),
          });
          break;

        default:
          break;
      }
      
      if (formVal.scale.hebergement) {
        this.prestations.push({
          description:
            "assistance pour le choix et l'administration de l'hebergeur du projet",
          price: this.hebCost,
        });
      }
      if (formVal.graphicalsAspects.maquette) {
        this.prestations.push({
          description:
            "création d'une maquette du projet",
          price: this.maquetteCost+(this.maquetteCost*formVal.scale.pages / 100),
        });
      }
      if (formVal.graphicalsAspects.police) {
        this.prestations.push({
          description:
            "definition de la charte graphique du projet",
          price: this.fontCost,
        });
      }
      if (formVal.graphicalsAspects.pics) {
        this.prestations.push({
          description:
            "creation du logo et des illustrations du projet",
          price: this.logoCost+(this.logoCost*formVal.scale.pages/100),
        });
      }
      if (formVal.features.payOnline) {
        this.prestations.push({
          description:
            "ajout d'une fonctionnalité de paiement en ligne",
          price: this.payFeatureCost,
        });
      }
      if (formVal.features.location) {
        this.prestations.push({
          description:
            "plan d'accés interactif",
          price: this.mapCost,
        });
      }
      if (formVal.features.cookies) {
        this.prestations.push({
          description: 'création et paramétrage de cookies',
          price: this.cookiesCost,
        });
      }
      if (formVal.features.account) {
        this.prestations.push({
          description: "création d'une base de donnée et développement d'une interface de connexion sécurisée aux comptes clients",
          price: this.accountCost,
        });
      }
      this.prestations.forEach(presta=>this.totalCost += presta.price)
      this.prestations.push({
        description: "coût estimé du projet",
        price: this.totalCost
      })
      return this.prestations;
        
  }
}
