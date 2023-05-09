import { Component } from '@angular/core';
import { environment  } from "../../../../environments/environment.development";
@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent {
creusardUrl:string=environment.creusardUrl
}
