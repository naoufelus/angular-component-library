import { Component } from '@angular/core';
import { TEXT } from './examples/text.component';
import { PROGRESS } from './examples/progress.component';
import { BASIC } from './examples/basic.component';
import { DOTS } from './examples/dots.component';
import { MobileStepperPlaygroundKnobs } from './examples/playground.component';

@Component({
    selector: 'app-mobile-stepper-doc',
    template: `
        <app-component-doc-scaffold mdFileName="MobileStepper.md" [knobGroups]="knobGroups">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Basic Mobile Stepper</div>
                    <div class="example-description">
                        A <code>&lt;blui-mobile-stepper&gt;</code> shows a user their progress while completing a
                        workflow. Back and Next buttons can be projected to navigate through the steps.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-basic-mobile-stepper-demo style="padding: 0.5rem"></app-basic-mobile-stepper-demo>
                    </div>
                    <app-example-code [snippet]="BASIC"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>
            </div>

            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Progress as Dots</div>
                    <div class="example-description">
                        The Mobile Stepper, by default, indicates progress using a dots.  The active step is denoted with an alternative color.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-dots-mobile-stepper-demo></app-dots-mobile-stepper-demo>
                    </div>
                    <app-example-code [snippet]="DOTS"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="mobile-stepper/examples/dots"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="DOTS"></app-copy-code-button>
                    </div>
                </div>
            </div>

            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Progress as Text</div>
                    <div class="example-description">
                        A Mobile Stepper can indicate progress as raw text.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-text-mobile-stepper-demo></app-text-mobile-stepper-demo>
                    </div>
                    <app-example-code [snippet]="TEXT" dataLine="1"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="mobile-stepper/examples/text"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="TEXT"></app-copy-code-button>
                    </div>
                </div>
            </div>

            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Progress as a Bar</div>
                    <div class="example-description">
                        A Mobile Stepper can indicate progress using an <a href="https://material.angular.io/components/progress-bar/overview" target="_blank">Angular Material Progress Bar</a>.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-progress-mobile-stepper-demo></app-progress-mobile-stepper-demo>
                    </div>
                    <app-example-code [snippet]="PROGRESS" dataLine="4"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="mobile-stepper/examples/progress"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="PROGRESS"></app-copy-code-button>
                    </div>
                </div>
            </div>
            <app-mobile-stepper-playground
                playground
                [inputs]="allProps"
                (codeChange)="generatedCode = $event"
            ></app-mobile-stepper-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./mobile-stepper-doc.component.scss'],
})
export class MobileStepperDocComponent {
    BASIC = BASIC;
    DOTS = DOTS;
    TEXT = TEXT;
    PROGRESS = PROGRESS;

    generatedCode: string;

    /* Default playground knobs */
    requiredProps: Partial<MobileStepperPlaygroundKnobs> = {
        activeStep: {
            value: 0,
            componentDefault: undefined,
            type: 'number',
            hint: 'The index of the active step',
            range: { min: 0, max: 3, tickInterval: 1, step: 1 },
        },
        steps: {
            value: 4,
            componentDefault: undefined,
            type: 'number',
            hint: 'Total number of steps to display',
            range: { min: 2, max: 8, tickInterval: 1, step: 1 },
        },
    };

    optionalProps: Partial<MobileStepperPlaygroundKnobs> = {
        variant: {
            value: 'dots',
            type: 'select',
            options: ['dots', 'progress', 'text'],
            hint: 'Which type of indicator to use',
        },
    };

    otherProps: Partial<MobileStepperPlaygroundKnobs> = {
        showNext: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            label: 'Show Next Button',
            hint: '',
        },
        showBack: {
            value: false,
            componentDefault: false,
            type: 'boolean',
            label: 'Show Back Button',
            hint: '',
        },
    };
    allProps = Object.assign({}, this.requiredProps, this.optionalProps, this.otherProps);
    knobGroups = [
        {
            title: 'Required Properties',
            knobs: this.requiredProps,
            defaultExpanded: true,
        },
        {
            title: 'Optional Properties',
            knobs: this.optionalProps,
            defaultExpanded: true,
        },
        {
            title: 'Other Properties',
            knobs: this.otherProps,
            defaultExpanded: false,
        },
    ];
}
