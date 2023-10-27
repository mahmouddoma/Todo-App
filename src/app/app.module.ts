import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from './shared.service';

const firebaseConfig = {
  apiKey: "AIzaSyBLjFi_XukLvk39lUe4Z2hLA6WDuUFXvY8",
  authDomain: "todo-app-b725a.firebaseapp.com",
  projectId: "todo-app-b725a",
  storageBucket: "todo-app-b725a.appspot.com",
  messagingSenderId: "961357792411",
  appId: "1:961357792411:web:bbe7e6152346c3df1e323e"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
