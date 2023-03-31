export class QuoteDto {
  scale!: {
    type: string,
    hebergement: boolean,
    pages: number
 };
   graphicalsAspects!: {
    maquette: boolean,
    police?: boolean,
    colors?: boolean
 };
 features!:{
    payOnline?:boolean,
    location?:boolean,
    cookies?:boolean,
    account?:boolean,
    other?:boolean

 }
}
export class Quote {
   type!: {description:string,price:number};
   hebergement?:{description:string,price:number};
   pages!:number;
   maquette?:{description:string,price:number};
   police?:{description:string,price:number};
   colors?:{description:string,price:number};
   payOnline?:{description:string,price:number};
   location?:{description:string,price:number};
   cookies?:{description:string,price:number};
   account?:{description:string,price:number};
   other?:{description:string,price:number};
}
