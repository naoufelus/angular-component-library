import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { isEmptyView } from '../../utils/utils';

@Component({
    selector: 'pxb-selection-toolbar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-toolbar fxLayout="row" class="pxb-selection-toolbar">
            <div
                #icon
                class="pxb-selection-toolbar-icon-wrapper"
                [class.pxb-selection-toolbar-no-icon]="isIconEmpty(iconEl)"
            >
                <ng-content select="[pxb-icon]"></ng-content>
            </div>
            <div *ngIf="title" class="pxb-selection-toolbar-title-wrapper">
                <div class="pxb-selection-toolbar-title">{{ title }}</div>
                <div
                    *ngIf="subtitle"
                    class="pxb-selection-toolbar-subtitle mat-subheading-2"
                    [matMenuTriggerFor]="selectionToolbarMenu"
                    style="cursor: pointer;"
                >
                    {{ subtitle }}
                    <mat-icon>arrow_drop_down</mat-icon>
                </div>
            </div>
            <pxb-spacer></pxb-spacer>
            <div class="pxb-selection-toolbar-right-content-wrapper">
                <ng-content select="[pxb-right-content]"></ng-content>
            </div>
            <mat-menu #selectionToolbarMenu="matMenu" [overlapTrigger]="false" class="pxb-selection-toolbar-menu">
                <ng-content select="[pxb-menu]"></ng-content>
            </mat-menu>
        </mat-toolbar>
    `,
    styleUrls: ['./selection-toolbar.component.scss'],
})
export class SelectionToolbarComponent {
    @Input() title: string;
    @Input() subtitle: string;
    @ViewChild('icon', { static: true }) iconEl: ElementRef;

    isIconEmpty = (el: ElementRef): boolean => isEmptyView(el);
}
