import {CommonModule} from '@angular/common';
import {Component, inject, ViewChild} from '@angular/core';
import {IonContent, IonicModule, RefresherCustomEvent} from '@ionic/angular';
import {MessageComponent} from '../message/message.component';

import {DataService, Message} from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, MessageComponent],
})
export class HomePage {
  @ViewChild(IonContent, {static: true}) content?: IonContent;
  private data = inject(DataService);

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  onClick() {
    console.log("Clicked at:", Date.now())
  }

  scrollMe() {
    this.content?.scrollToTop(3000);
  }
}
