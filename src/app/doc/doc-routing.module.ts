import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { GetDataComponent } from './crud-operation/get-data/get-data.component';
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
import { DocComponent } from './doc.component';
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
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { AtInputComponent } from './component-interaction/at-input/at-input.component';
import { ChildInputComponent } from './component-interaction/at-input/child-input/child-input.component';
import { AtOutputComponent } from './component-interaction/at-output/at-output.component';
import { ChildOutputComponent } from './component-interaction/at-output/child-output/child-output.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveDrivenComponent } from './forms/reactive-driven/reactive-driven.component';
import { DashboardComponent } from '../doc/authentication/dashboard/dashboard.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './authentication/service/auth.guard';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksParentComponent } from './hooks/hooks-parent/hooks-parent.component';
import { HooksChildComponent } from './hooks/hooks-parent/hooks-child/hooks-child.component';
import { CreateDataComponent } from './crud-operation/create-data/create-data.component';
import { EditDataComponent } from './crud-operation/edit-data/edit-data.component';
import { AngMaterialComponent } from './ang-material/ang-material.component';
import { AutoCompleateComponent } from './ang-material/auto-compleate/auto-compleate.component';
import { FilterCompleateComponent } from './ang-material/filter-compleate/filter-compleate.component';
import { BadgesComponent } from './ang-material/badges/badges.component';
import { ButtonsComponent } from './ang-material/buttons/buttons.component';
import { ToggleButtonComponent } from './ang-material/toggle-button/toggle-button.component';
import { CardsComponent } from './ang-material/cards/cards.component';
import { CheckBoxComponent } from './ang-material/check-box/check-box.component';
import { RadioButtonComponent } from './ang-material/radio-button/radio-button.component';
import { PaginatorComponent } from './ang-material/paginator/paginator.component';
import { MenuComponent } from './ang-material/menu/menu.component';
const routes: Routes = [{
  path: '', component: DocComponent,
  children: [
    {
      path: 'data-binding', component: DataBindingComponent, children: [
        {
          path: 'interpolation', component: InterpolationComponent
        },
        {
          path: 'property-binding', component: PropertyBindingComponent
        },
        {
          path: 'event-binding', component: EventBindingComponent
        },
        {
          path: 'two-way-binding', component: TwoWayBindingComponent
        },
      ]
    },
    {
      path: 'directives', component: DirectivesComponent, children: [
        { path: 'structural-directives', component: StructuralDirectivesComponent },
        { path: 'attribute-directives', component: AttributeDirectivesComponent },
        { path: 'custom-directives', component: CustomDirectivesComponent }
      ]
    },
    {
      path: 'normal-rout', component: NormalRoutComponent, children: [
        {
          path: 'first', component: FirstComponent, children: [
            { path: 'sub-fir', component: SubFirComponent }
          ]
        },
        {
          path: 'second', component: SecondComponent, children: [
            { path: 'sub-sec', component: SubSecComponent }
          ]
        },
      ]
    },
    {
      path: 'tabs-component', component: TabsComponentComponent, children: [
        {
          path: 'tab-one', component: TabOneComponent, children: [
            { path: 'sub-tab', component: SubTabComponent, outlet: "outlet3" }
          ], outlet: "outlet1"
        },
        { path: 'tab-two', component: TabTwoComponent, outlet: "outlet2" }
      ]
    },
    {
      path: 'parameteraised-rout', component: ParameteraisedRoutComponent, children: [
        { path: 'contacts', component: ContactListComponent },
        { path: 'contact/:id', component: ContactDetailComponent },
      ]
    },
    {
      path: 'named-rout', component: NamedRoutComponent, children: [
        { path: 'name-one', component: NameOneComponent, outlet: "outlet1" },
        { path: 'name-two', component: NameTwoComponent, outlet: "outlet2" },
      ]
    },
    {
      path: 'navigation-routs', component: NavigationRoutsComponent, children: [
        { path: 'navigation-one', component: NavigationOneComponent },
        { path: 'navigation-two', component: NavigationTwoComponent },
      ]
    },
    {
      path: 'crud-operation', component: CrudOperationComponent, children: [
        { path: 'get-data', component: GetDataComponent },
        { path: 'view-data/:postId', component: ViewDataComponent },
        { path: ':postId/edit-data', component: EditDataComponent },
        { path: 'create-data', component:CreateDataComponent }
      ]
    },
    {
      path: 'component-interaction', component: ComponentInteractionComponent, children: [
        {
          path: 'at-input', component: AtInputComponent, children: [
            { path: 'child-input', component: ChildInputComponent }
          ]
        },
        {
          path: 'at-output', component: AtOutputComponent, children: [
            { path: 'child-output', component: ChildOutputComponent }
          ]
        }
      ]
    },
    {
      path: 'forms', component: FormsComponent, children: [
        {
          path: 'template-driven', component: TemplateDrivenComponent
        },
        {
          path: 'reactive-driven', component: ReactiveDrivenComponent
        }
      ]
    },
    {
      path: 'auth', component: AuthenticationComponent, children: [
        { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: '**', redirectTo: '' }
      ]
    },
    {
      path: 'hooks', component: HooksComponent, children: [
        {
          path: 'hooks-parent', component: HooksParentComponent, children: [
            { path: 'hooks-child', component: HooksChildComponent }
          ]
        }
      ]
    },
    {
      path: 'ang-material', component: AngMaterialComponent, children: [
        {
          path: 'auto-complete', component:AutoCompleateComponent
        },
        {
          path: 'filter-complete', component:FilterCompleateComponent
        },
        {
          path: 'badges', component:BadgesComponent
        },
        {
          path: 'buttons', component:ButtonsComponent
        },
        {
          path: 'toggle-buttons', component:ToggleButtonComponent
        },
        {
          path: 'cards', component:CardsComponent
        },
        {
          path: 'check-box', component:CheckBoxComponent
        },
        {
          path: 'radio-button', component:RadioButtonComponent
        },
        {
          path: 'paginator', component:PaginatorComponent
        },
        {
          path: 'menu', component:MenuComponent
        }
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocRoutingModule { }
