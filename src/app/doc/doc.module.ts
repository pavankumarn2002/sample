import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

import { DocRoutingModule } from './doc-routing.module';
import { DocComponent } from './doc.component';

import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { GetDataComponent } from './crud-operation/get-data/get-data.component';
import { CreateDataComponent } from './crud-operation/create-data/create-data.component';
import { EditDataComponent } from './crud-operation/edit-data/edit-data.component';
import { ViewDataComponent } from './crud-operation/view-data/view-data.component';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { InterpolationComponent } from './data-binding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { TwoWayBindingComponent } from './data-binding/two-way-binding/two-way-binding.component';
import { AttributeDirectivesComponent } from './directives/attribute-directives/attribute-directives.component';
import { CustomDirectivesComponent } from './directives/custom-directives/custom-directives.component';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralDirectivesComponent } from './directives/structural-directives/structural-directives.component';
import { NameOneComponent } from './named-rout/name-one/name-one.component';
import { NameTwoComponent } from './named-rout/name-two/name-two.component';
import { NamedRoutComponent } from './named-rout/named-rout.component';
import { NavigationOneComponent } from './navigation-routs/navigation-one/navigation-one.component';
import { NavigationRoutsComponent } from './navigation-routs/navigation-routs.component';
import { NavigationTwoComponent } from './navigation-routs/navigation-two/navigation-two.component';
import { FirstComponent } from './normal-rout/first/first.component';
import { SubFirComponent } from './normal-rout/first/sub-fir/sub-fir.component';
import { NormalRoutComponent } from './normal-rout/normal-rout.component';
import { SecondComponent } from './normal-rout/second/second.component';
import { SubSecComponent } from './normal-rout/second/sub-sec/sub-sec.component';
import { ContactDetailComponent } from './parameteraised-rout/contact-detail/contact-detail.component';
import { ContactListComponent } from './parameteraised-rout/contact-list/contact-list.component';
import { ParameteraisedRoutComponent } from './parameteraised-rout/parameteraised-rout.component';
import { SubTabComponent } from './tabs-component/tab-one/sub-tab/sub-tab.component';
import { TabOneComponent } from './tabs-component/tab-one/tab-one.component';
import { TabTwoComponent } from './tabs-component/tab-two/tab-two.component';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';

import { PowerPipe } from '../power.pipe';
import { HoverColorDirective } from '../hover-color.directive';
import { BgColorDirective } from '../bg-color.directive';
import { DynamicBgDirective } from '../dynamic-bg.directive';
import { NgVarDirective } from '../ng-var.directive';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { AtInputComponent } from './component-interaction/at-input/at-input.component';
import { ChildInputComponent } from './component-interaction/at-input/child-input/child-input.component';
import { AtOutputComponent } from './component-interaction/at-output/at-output.component';
import { ChildOutputComponent } from './component-interaction/at-output/child-output/child-output.component';
import { SubjectComponent } from './component-interaction/subject/subject.component';
import { SubjectOneComponent } from './component-interaction/subject/subject-one/subject-one.component';
import { SubjectTwoComponent } from './component-interaction/subject/subject-two/subject-two.component';
import { SubjectThreeComponent } from './component-interaction/subject/subject-three/subject-three.component';
import { BehaviorSubjectComponent } from './component-interaction/behavior-subject/behavior-subject.component';
import { BehaviourOneComponent } from './component-interaction/behavior-subject/behaviour-one/behaviour-one.component';
import { BehaviourTwoComponent } from './component-interaction/behavior-subject/behaviour-two/behaviour-two.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveDrivenComponent } from './forms/reactive-driven/reactive-driven.component';
import {ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './authentication/dashboard/dashboard.component';
import { ServiceComponent } from './authentication/service/service.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksParentComponent } from './hooks/hooks-parent/hooks-parent.component';
import { HooksChildComponent } from './hooks/hooks-parent/hooks-child/hooks-child.component';
import { AngMaterialComponent } from './ang-material/ang-material.component';
import { AutoCompleateComponent } from './ang-material/auto-compleate/auto-compleate.component';


import { MatFormFieldModule } from '@angular/material/form-field';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { FilterCompleateComponent } from './ang-material/filter-compleate/filter-compleate.component';

@NgModule({
  declarations: [
    NgVarDirective,
    DynamicBgDirective,
    PowerPipe,
    HoverColorDirective,
    BgColorDirective,
    DocComponent,
    DataBindingComponent,
    EventBindingComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    AttributeDirectivesComponent,
    CustomDirectivesComponent,
    DirectivesComponent,
    StructuralDirectivesComponent,
    NameOneComponent,
    NameTwoComponent,
    NamedRoutComponent,
    NavigationRoutsComponent,
    NavigationOneComponent,
    NavigationTwoComponent,
    NormalRoutComponent,
    FirstComponent,
    SubFirComponent,
    SecondComponent,
    SubSecComponent,
    ParameteraisedRoutComponent,
    ContactDetailComponent,
    ContactListComponent,
    SubTabComponent,
    TabsComponentComponent,
    TabOneComponent,
    TabTwoComponent,
    CrudOperationComponent,
    GetDataComponent,
    CreateDataComponent,
    EditDataComponent,
    ViewDataComponent,
    ComponentInteractionComponent,
    AtInputComponent,
    ChildInputComponent,
    AtOutputComponent,
    ChildOutputComponent,
    SubjectComponent,
    SubjectOneComponent,
    SubjectTwoComponent,
    SubjectThreeComponent,
    BehaviorSubjectComponent,
    BehaviourOneComponent,
    BehaviourTwoComponent,
    FormsComponent,
    TemplateDrivenComponent,
    ReactiveDrivenComponent,
    AuthenticationComponent,
    LoginComponent,
    DashboardComponent,
    ServiceComponent,
    RegisterComponent,
    HooksComponent,
    HooksParentComponent,
    HooksChildComponent,
    AngMaterialComponent,
    AutoCompleateComponent,
    FilterCompleateComponent,
  ],
  imports: [
    CommonModule,
    DocRoutingModule,FormsModule,ReactiveFormsModule,

    MatAutocompleteModule,
    MatSliderModule,
    MatFormFieldModule,


    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,

  ]
})
export class DocModule { }
