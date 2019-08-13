import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { projectService } from './services/projectservice';
// import { DisplayProjectsComponent } from './display-projects/display-projects.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
   // DisplayProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [projectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
