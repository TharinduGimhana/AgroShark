import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import{AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component'
import {FormComponent} from './form/form.component'
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';




// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDBm099uDYRxP0qfpPZGqLWA_P6-qZDzbw",
  authDomain: "agriapp-4ecdf.firebaseapp.com",
  databaseURL: "https://agriapp-4ecdf.firebaseio.com",
  projectId: "agriapp-4ecdf",
  storageBucket: "agriapp-4ecdf.appspot.com",
  messagingSenderId: "118426368834",
  appId: "1:118426368834:web:3334f8a709b309eb53e6db",
  measurementId: "G-6F6LY33YGS"
};


// export const environment = {
//   production: true,
//   firebase: {
//     apiKey: "AIzaSyDBm099uDYRxP0qfpPZGqLWA_P6-qZDzbw",
//     authDomain: "agriapp-4ecdf.firebaseapp.com",
//     databaseURL: "https://agriapp-4ecdf.firebaseio.com",
//     projectId: "agriapp-4ecdf",
//     storageBucket: "agriapp-4ecdf.appspot.com",
//     messagingSenderId: "118426368834",
//     appId: "1:118426368834:web:3334f8a709b309eb53e6db",
//     measurementId: "G-6F6LY33YGS"
//   }
// };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    AdminComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireModule.initializeApp(environment),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
