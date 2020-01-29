import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilesModule } from './profiles/profiles.module';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileDetailComponent } from './profiles/profile-detail/profile-detail.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

const profileRoutes: Routes = [
  {path: 'profiles', component: ProfilesComponent},
  {path: 'profile/:id', component: ProfileDetailComponent},
  {path: '', redirectTo: '/profiles', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(profileRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    ProfilesModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
