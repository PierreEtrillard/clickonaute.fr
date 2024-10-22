import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent {
messageToDisplay=signal("Je conçois des API Rest avec Spring pour lier vos appli à des bases de données sql ou noSql. Je simplifie la connexion des utilisateurs grâce au standart OIDC.");

}
