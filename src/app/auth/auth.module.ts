import { ShowComponent } from './../inbox/show/show.component';
import { PlaceholderComponent } from './../inbox/placeholder/placeholder.component';
import { Guard } from './../guard';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShareModule } from '../share/share.module';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: 'inbox',
    loadChildren: () =>
      import('./../inbox/inbox.module').then((m) => m.InboxModule),
    canActivate: [Guard],
  },
  { path: 'signout', component: SignoutComponent },
];

@NgModule({
  declarations: [SignInComponent, SignUpComponent, SignoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ShareModule,
  ],
})
export class AuthModule {}
