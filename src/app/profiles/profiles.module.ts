import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ProfilesService } from './profiles.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { RouterModule } from '@angular/router';
import { CustomCardSectionComponent } from './profile-detail/custom-card-section.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [ProfilesComponent, ProfileDetailComponent, CustomCardSectionComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    NgCircleProgressModule.forRoot({
      radius: 20,
      toFixed: 0,
      maxPercent: 100,
      outerStrokeWidth: 4,
      outerStrokeColor: "#2196f3",
      outerStrokeLinecap: "square",
      titleFontSize: "14",
      imageHeight: 46,
      imageWidth: 46,
      showSubtitle: false,
      showInnerStroke: false
    })
  ],
  exports: [
    ProfilesComponent
  ],
  providers: [ProfilesService]
})
export class ProfilesModule { }
