import { Injectable } from '@angular/core';
import { Observable, interval, map, scan, take } from 'rxjs';

@Injectable()
export class ProgressiveDisplayService {
  progressiveMessage$(message: string):Observable<string> {
   return  interval(30).pipe(
      map((i) => message[i]),
      take(message.length),
      scan((sentence, letter) => {
        return sentence + letter;
      })
    );
  }
}
