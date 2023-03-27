export class QuoteDto {
  charteGraphique!: {
    maquette: boolean,
    police?:string,
    couleurs?:string
 };
 features!:{
    paiement:boolean,

    other?:'string'

 }
}
