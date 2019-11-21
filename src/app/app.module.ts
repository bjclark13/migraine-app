import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MigraineSelectorComponent } from './migraine-selector/migraine-selector.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';
import { DailyEncouragementComponent } from './daily-encouragement/daily-encouragement.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { UserSettingsService } from './user-settings.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MigraineHeaderComponent } from './migraine-header/migraine-header.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    MigraineSelectorComponent,
    DailyEncouragementComponent,
    MigraineHeaderComponent,
    UserSettingsComponent,
    HomePageComponent,
  ],
  imports: [
    MatDividerModule,
    MatIconModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [UserSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
