export interface Availableperiode {
    start: string;
    stop: string;
  }
  
 export interface Disponibility {
    available_periodes: Availableperiode[];
    unavailable_periodes: Availableperiode[];
  }