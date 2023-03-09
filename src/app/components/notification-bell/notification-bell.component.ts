import { Component, OnInit } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-notification-bell',
  templateUrl: './notification-bell.component.html',
  styleUrls: ['./notification-bell.component.scss'],
})
export class NotificationBellComponent  {

  constructor(private vibrationPlugin: Vibration) { }


  multipleVibration(patternArray) {
    this.vibrationPlugin.vibrate(patternArray);
    this.vibrationPlugin.vibrate(0);
  }

}
