import { Injectable } from '@angular/core';
import { Observable, concatMap, interval, map, scan, take } from 'rxjs';

@Injectable()
export class ProgressiveDisplayService {
  progressiveMessage$(message: string):Observable<string> {
   return  interval(30).pipe(
      concatMap((i) => message[i]),
      take(message.length)
    );
  }
}