import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilesModule } from './profiles/profiles.module';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';

const profileRoutes: Routes = [
  {path: 'profiles', component: ProfilesComponent},
  // {path: 'profile/id', component: ProfileDetail},
  {path: '', redirectTo: '/profiles', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(profileRoutes, {enableTracing: true}),
    BrowserModule,
    BrowserAnimationsModule,
    ProfilesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
