import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DimensionService {
  frameWidths: BehaviorSubject<{main: number, side: number}> = new BehaviorSubject({
    main: 70,
    side: 30,
  });
  widths$ = this.frameWidths.asObservable();
}
