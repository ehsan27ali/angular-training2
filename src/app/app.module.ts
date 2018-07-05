// Import Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Import Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './components/post/post.component';
// Import Services
import { ConfirmationPopupService } from './services/confirmation-popup/confirmation-popup.service';
import { RestService } from './services/rest-api/rest.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ConfirmationPopupService,
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
