import { Component,OnDestroy,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'student-tpo';
  public onlineEvent: Observable<Event>;
    public offlineEvent: Observable<Event>;
    public subscriptions: Subscription[] = [];
    public connectionStatusMessage: string;
    public connectionStatus: string;
  constructor(private router:Router){
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  ngOnInit(): void {
    this.onlineEvent = fromEvent(window, 'online');
        this.offlineEvent = fromEvent(window, 'offline');
        this.subscriptions.push(this.onlineEvent.subscribe(event => {
            this.connectionStatusMessage = 'Connected to internet! You are online';
            this.connectionStatus = 'online';
            this.router.navigate(['/profile']);
        }));
        this.subscriptions.push(this.offlineEvent.subscribe(e => {
            this.connectionStatusMessage = 'Connection lost! You are offline';
            this.connectionStatus = 'offline';
            this.router.navigate(['/errors']);
        }));
  }



}
