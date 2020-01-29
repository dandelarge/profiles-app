import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-custom-card-section',
    template: `
    <div class="custom-card--section status-section">
        <div class="custom-card--header">
            <span>{{title}}</span>
            <mat-icon color="primary">launch</mat-icon>
        </div>
        <div class="custom-card--body">
            <ng-content></ng-content>
        </div>
    </div>
    `,
    styleUrls: [
        'profile-detail.component.scss'
    ]
})

export class CustomCardSectionComponent {
    @Input() title: string;

}