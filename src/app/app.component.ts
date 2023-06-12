import { Component } from '@angular/core';
import {faLinkedin,faSquareWhatsapp,faSquareGithub,faSquareInstagram,faTelegram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faBell,faSquarePhone,faLocationDot,faBookOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CARD';

  faLinkedin=faLinkedin;
  faSquareWhatsapp=faSquareWhatsapp;
  faSquareGithub=faSquareGithub;
  faSquareInstagram=faSquareInstagram;
  faTelegram=faTelegram;

  faEnvelope=faEnvelope;
  faBell=faBell;
  faSquarePhone=faSquarePhone;
  faLocationDot=faLocationDot;
  faBookOpen=faBookOpen;

}
