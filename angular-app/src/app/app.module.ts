import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// application modules
import { CommercialModule } from './commercial/commercial.module';
import { SamplesModule } from './samples/samples.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

// application components
import { AppComponent } from './app.component';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    // angular modules
    BrowserModule,
    HttpModule,
    RouterModule,
    BrowserAnimationsModule,

    // application modules
    CommercialModule,
    SamplesModule,
    SharedModule,
    CoreModule

  ],
  providers: [
    {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
