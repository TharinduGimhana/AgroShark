import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { AdminComponent } from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './form/form.component'
import { AlertComponent } from './alert/alert.component';
import { ProfileComponent } from './profile/profile.component';

export const router: Routes = [
    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'form', component: FormComponent },
    { path: 'alert', component: AlertComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '', component: HomeComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);