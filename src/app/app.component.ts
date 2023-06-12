import { Component } from '@angular/core';
import { faEnvelope,faBell,faSquarePhone,faLocationDot,faBookOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CARD';

  faEnvelope=faEnvelope;
  faBell=faBell;
  faSquarePhone=faSquarePhone;
  faLocationDot=faLocationDot;
  faBookOpen=faBookOpen;

}
