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
    HooksChildComponent
  ],
  imports: [
    CommonModule,
    DocRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class DocModule { }
