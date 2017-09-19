import { MyDataService } from './my-data.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CategoriesComponent } from './categories/categories.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MyPipesComponent } from './my-pipes/my-pipes.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { BaseConverterSpaComponent } from './base-converter-spa/base-converter-spa.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { MyServiceComponent } from './my-service/my-service.component';
import { MyHttpServiceComponent } from './my-http-service/my-http-service.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { MyNewDirectiveDirective } from './my-new-directive.directive';


const appRoutes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'category',
    component: CategoriesComponent
  },
  {
    path: 'condition',
    component: ConditionsComponent
  },
  {
    path: 'todo',
    component: TodoListComponent
  },
  {
    path: 'pipes',
    component: MyPipesComponent
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'model-driven-form',
    component: ModelDrivenFormComponent
  },
  {
    path: 'base-converter-app',
    component: BaseConverterSpaComponent
  },
  {
    path: 'form-validation',
    component: FormValidationComponent
  },
  {
    path: 'my-service',
    component: MyServiceComponent
  },
  {
    path: 'my-http-service',
    component: MyHttpServiceComponent
  },
  {
    path: 'custom-directive',
    component: CustomDirectivesComponent
  }
] ;

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CategoriesComponent,
    ConditionsComponent,
    TodoListComponent,
    MyPipesComponent,
    CustomPipePipe, // in case to declare b4 consumer component.
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,
    BaseConverterSpaComponent,
    FormValidationComponent,
    MyServiceComponent,
    MyHttpServiceComponent,
    CustomDirectivesComponent,
    MyNewDirectiveDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot( appRoutes , {
      enableTracing: true
    })
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
