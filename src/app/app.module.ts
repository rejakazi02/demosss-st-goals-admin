import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AdminComponent } from './admin/admin.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { ParentsComponent } from './parents/parents.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    StudentsComponent,
    TeachersComponent,
    SuperAdminComponent,
    ParentsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
